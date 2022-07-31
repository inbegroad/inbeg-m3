import {
  customColor,
  CustomColor,
  Hct,
} from "@material/material-color-utilities";
import { BasePalette } from "./base-palette";
import { getColors } from "./get-colors";
import { colorsNamesEnum, surfacesColorsEnum } from "./schemas";
import { TonalPalette } from "./tonal-palette";
import { ColorsNamesEnumType, ColorSurfacesEnumType } from "./types";

export class CorePalette {
  hct: Hct;
  hue: number;
  private source: number;
  private internalCore: BasePalette;

  private customColors: {
    name: string;
    value: number;
  }[];
  constructor(argb: number, customColors?: CustomColor[]) {
    this.internalCore = BasePalette.of(argb);
    this.source = argb;
    this.hct = Hct.fromInt(argb);
    this.hue = this.hct.hue;
    // this.hctObj = hct;

    this.customColors =
      customColors
        ?.map((col) => customColor(this.source, col))
        .map(({ color: { name, value } }) => ({ name, value })) || [];
  }
  static isCustom(color: string) {
    return (
      !colorsNamesEnum.includes(color as ColorsNamesEnumType) &&
      !surfacesColorsEnum.includes(color as ColorSurfacesEnumType)
    );
  }
  private primary() {
    return this.internalCore.a1;
  }
  private secondary() {
    return this.internalCore.a2;
  }
  private tertiary() {
    return this.internalCore.a3;
  }
  private neutral() {
    return this.internalCore.n1;
  }
  private neutralVariant() {
    return this.internalCore.n2;
  }
  private error() {
    return this.internalCore.error;
  }

  private background() {
    return this.internalCore.n1;
  }
  private onBackground() {
    return this.internalCore.n1;
  }
  private surface() {
    return this.internalCore.n1;
  }
  private onSurface() {
    return this.internalCore.n1;
  }
  private surfaceVariant() {
    return this.internalCore.n2;
  }
  private onSurfaceVariant() {
    return this.internalCore.n2;
  }
  private outline() {
    return this.internalCore.n2;
  }
  private shadow() {
    return this.internalCore.n1;
  }
  private inverseSurface() {
    return this.internalCore.n1;
  }
  private inverseOnSurface() {
    return this.internalCore.n1;
  }
  private inversePrimary() {
    return this.internalCore.a1;
  }
  private getCustoms() {
    const rec: Record<string, TonalPalette> = {};
    for (const { name, value } of this.customColors) {
      try {
        const color = TonalPalette.fromInt(value);
        rec[name] = color;
      } catch (_error) {
        throw new Error(`Cant find custom color named ${name}`);
      }
    }
    return rec;
  }
  private getOriginals(): Record<string, TonalPalette> {
    return {
      primary: this.primary(),
      secondary: this.secondary(),
      tertiary: this.tertiary(),
      neutral: this.neutral(),
      neutralVariant: this.neutralVariant(),
      error: this.error(),
    };
  }
  private getSurfaces(): Record<string, TonalPalette> {
    return {
      background: this.background(),
      onBackground: this.onBackground(),
      surface: this.surface(),
      onSurface: this.onSurface(),
      surfaceVariant: this.surfaceVariant(),
      onSurfaceVariant: this.onSurfaceVariant(),
      outline: this.outline(),
      shadow: this.shadow(),
      inverseSurface: this.inverseSurface(),
      inverseOnSurface: this.inverseOnSurface(),
      inversePrimary: this.inversePrimary(),
    };
  }
  get colors() {
    const colors = {
      customs: this.getCustoms(),
      originals: this.getOriginals(),
      surfaces: this.getSurfaces(),
    };

    const colorRet = getColors(colors);

    return colorRet;
  }
}
