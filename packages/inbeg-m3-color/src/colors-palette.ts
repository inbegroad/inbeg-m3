import {
  argbFromHex,
  CustomColor,
  Hct,
  themeFromSourceColor,
  hexFromArgb,
  TonalPalette,
  Theme,
  applyTheme,
  argbFromRgb,
  sourceColorFromImage,
} from "@material/material-color-utilities";
import convColor from "string-color-converter";
import { CorePalette } from "./core-pallete";
import { isDark } from "./is-dark";
import { colorsNamesEnum, surfacesColorsEnum } from "./schemas";
import {
  ColorConst,
  ColorsVNameType,
  ColorsNamesEnumType,
  ColorsNamesType,
  ColorsurfacesEnumType,
  GetColorsReturnType,
  GetterType,
  ProcessedSurfeceColor,
  ProcessedColor,
  DarkModeType,
} from "./types";

export const objectKeys = <T extends object>(object: T): (keyof T)[] => {
  const key = Object.keys(object);
  return key as unknown as (keyof T)[];
};
export class ColorsPalette {
  private colorSource: number;
  private theme: Theme;
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
    this.theme = themeFromSourceColor(this.colorSource, this.customColorsProps);
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

  applyTheme(options?: { dark?: boolean; target?: HTMLElement }) {
    return applyTheme(this.theme, options);
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

  private colorTypeGetter(name: ColorsNamesType): GetterType {
    if (ColorsPalette.isOrig(name)) return "orig";
    else if (ColorsPalette.isSurface(name)) return "surf";
    else return "custom";
  }
  get colors() {
    return this.colorsObject.colors;
  }

  static isOrig(color: ColorsNamesType) {
    return colorsNamesEnum.includes(color as ColorsNamesEnumType);
  }
  static isSurface(color: ColorsNamesType) {
    return surfacesColorsEnum.includes(color as ColorsurfacesEnumType);
  }

  private getCustom(name: ColorsNamesType) {
    return this.colorsObject.colors.customColors[name as string];
  }
  private getOrig(name: ColorsNamesType) {
    return this.colorsObject.colors[name as ColorsNamesEnumType];
  }
  private getSurf(name: ColorsNamesType) {
    return this.colorsObject.colors.surfaces[name as ColorsurfacesEnumType];
  }

  private getObjectFromName(name: ColorsNamesType, type: GetterType) {
    switch (type) {
      case "custom": {
        return this.getCustom(name);
      }
      case "orig": {
        return this.getOrig(name);
      }
      case "surf": {
        return this.getSurf(name);
      }
    }
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

  private isColorObjSurf(
    color: ProcessedColor | ProcessedSurfeceColor
  ): color is ProcessedSurfeceColor {
    if (Object.hasOwn(color, "dark")) {
      return (color as ProcessedSurfeceColor) !== undefined;
    } else return false;
  }

  getColor(
    name: ColorsNamesType,
    surface: ColorsVNameType = "color"
  ): GetColorsReturnType {
    const colorType = this.colorTypeGetter(name as string);
    const color = this.getObjectFromName(name, colorType);
    if (this.isColorObjSurf(color)) {
      const cuColor = color[this.isDark ? "dark" : "light"];
      const tone = (amount: number, argb = false) =>
        ColorsPalette.tone(cuColor, amount, argb);
      return {
        argb: argbFromHex(cuColor),
        color: cuColor,
        palette: color.palette,
        tone,
      };
    } else {
      const cuColor = color[surface][this.isDark ? "dark" : "light"];
      const tone = (amount: number, argb = false) =>
        ColorsPalette.tone(cuColor, amount, argb);
      return {
        argb: argbFromHex(cuColor),
        color: cuColor,
        palette: color.palette,
        tone,
      };
    }
  }
}
