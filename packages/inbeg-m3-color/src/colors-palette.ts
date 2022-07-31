import {
  argbFromHex,
  CustomColor,
  Hct,
  hexFromArgb,
  argbFromRgb,
  sourceColorFromImage,
  applyTheme as apply,
} from "@material/material-color-utilities";
import convColor from "string-color-converter";
import { CorePalette } from "./core-pallete";
import { isDark } from "./is-dark";
import { colorsNamesEnum, surfacesColorsEnum } from "./schemas";
import { TonalPalette } from "./tonal-palette";
import {
  ColorConst,
  ColorsVNameType,
  ColorsNamesEnumType,
  ColorsNamesType,
  ColorSurfacesEnumType,
  GetColorsReturnType,
  ColorsCategory,
  DarkModeType,
} from "./types";

export const applyTheme = apply;

export const objectKeys = <T extends object>(object: T): (keyof T)[] => {
  const key = Object.keys(object);
  return key as unknown as (keyof T)[];
};
export class ColorsPalette {
  private colorSource: number;
  private colorsObject: CorePalette;
  private customColorsProps: CustomColor[];
  darkMode: DarkModeType;
  private internalDark: boolean;

  constructor(args: ColorConst = {}) {
    const colorSourceStr = args.colorSource || "#45322E";

    this.darkMode = args.darkMode || "system-prefered";

    this.customColorsProps =
      args.customColors?.map(({ name, blend, value }) => ({
        name,
        blend,
        value: ColorsPalette.getArgb(value),
      })) || [];
    this.colorSource = ColorsPalette.getArgb("#45322E");
    if (
      typeof colorSourceStr === "string" ||
      typeof colorSourceStr === "number"
    ) {
      this.colorSource = ColorsPalette.getArgb(colorSourceStr);
    } else {
      sourceColorFromImage(colorSourceStr)
        .then((col) => (this.colorSource = col))
        .catch((err) => {
          throw err;
        });
    }
    this.colorsObject = new CorePalette(
      this.colorSource,
      this.customColorsProps
    );
    this.internalDark = this.getIsDark();
  }

  private getIsDark() {
    return this.darkMode === "system-prefered" ? isDark() : this.internalDark;
  }

  get isDark() {
    return this.getIsDark();
  }

  set isDark(dark: boolean) {
    if (this.darkMode === "manual") {
      this.internalDark = dark;
    } else
      throw new Error(
        "Dark mode is set to system-prefered, you cant set it manually"
      );
  }

  static getArgb(colorSource: string | number) {
    return typeof colorSource === "number"
      ? colorSource
      : ColorsPalette.getColorFromString(colorSource);
  }

  static getColorFromString(color: string) {
    const { b, g, r } = convColor(color);
    return argbFromRgb(r, g, b);
  }

  private colorTypeGetter(name: ColorsNamesType): ColorsCategory {
    if (this.isOrig(name)) return "originals";
    else if (this.isSurface(name)) return "surfaces";
    else if (this.customColorsProps.map((c) => c.name).includes(name as string))
      return "customs";
    else throw new Error(`${name} is not a valid color name`);
  }
  private getColorObjectFromName(name: ColorsNamesType) {
    const type = this.colorTypeGetter(name);
    if (type === "originals") {
      return {
        type,
        color: this.colorsObject.colors.originals[name as ColorsNamesEnumType],
      };
    } else if (type === "surfaces") {
      return {
        type,
        color: this.colorsObject.colors.surfaces[name as ColorSurfacesEnumType],
      };
    }
    return { type, color: this.colorsObject.colors.customs[name as string] };
  }
  get colors() {
    return this.colorsObject.colors;
  }

  private isOrig(color: ColorsNamesType) {
    return colorsNamesEnum.includes(color as ColorsNamesEnumType);
  }
  private isSurface(color: ColorsNamesType) {
    return surfacesColorsEnum.includes(color as ColorSurfacesEnumType);
  }

  static tone(color: string | number, amount = 10, isArgb = false) {
    let argb = 0;
    const newArgb =
      typeof color === "string" ? argbFromHex(convColor(color).hex) : color;
    const hct = Hct.fromInt(newArgb);
    const tonal = TonalPalette.fromHueAndChroma(hct.hue, hct.chroma);
    argb = tonal.tone(hct.tone + amount);

    return isArgb ? argb : hexFromArgb(argb);
  }

  getColor(
    name: ColorsNamesType,
    surface: ColorsVNameType = "color",
    dark?: boolean
  ): GetColorsReturnType {
    const color = this.getColorObjectFromName(name);
    const dk = dark !== undefined ? dark : this.isDark;
    if (color.type === "originals" || color.type === "customs") {
      const cuColor = {
        hex: color.color.hex[surface][dk ? "dark" : "light"],
        argb: color.color.argb[surface][dk ? "dark" : "light"],
      };
      const tone = (amount: number, argb = false) =>
        ColorsPalette.tone(cuColor.argb, amount, argb);
      return {
        argb: cuColor.argb,
        color: cuColor.hex,
        palette: color.color.palette,
        tone,
      };
    }
    {
      const cuColor = {
        hex: color.color.hex[this.isDark ? "dark" : "light"],
        argb: color.color.argb[this.isDark ? "dark" : "light"],
      };
      const tone = (amount: number, argb = false) =>
        ColorsPalette.tone(cuColor.argb, amount, argb);
      return {
        argb: cuColor.argb,
        color: cuColor.hex,
        palette: color.color.palette,
        tone,
      };
    }
  }
}
