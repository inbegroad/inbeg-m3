import { TonalPalette } from "@material/material-color-utilities";
import * as schemas from "./schemas";

export type LoosenString<T extends string> = T | Omit<string, T>;
export type GetterType = "custom" | "orig" | "surf";
export type ColorsNamesEnumType = typeof schemas.colorsNamesEnum[number];
export type ColorsurfacesEnumType = typeof schemas.surfacesColorsEnum[number];
export type ColorsVNameType = typeof schemas.colorsVNamesEnum[number];
export type ThemeModeType = typeof schemas.themeModeEnum[number];
export type OrigColTypes = ColorsNamesEnumType | ColorsurfacesEnumType;
export type ColorsNamesType = LoosenString<OrigColTypes>;
export type GetColorsReturnType = {
  argb: number;
  color: string;
  palette: TonalPalette;
  tone: (tone: number, argb?: boolean) => string | number;
};
export type GetColorResType = "argb" | "palette" | "string";
export type ReturnedArgbSurfaceType = Record<ThemeModeType, number>;
export type ReturnedArgbNormType = Record<
  ColorsVNameType,
  Record<ThemeModeType, number>
>;
export type ProcessedColor = {
  palette: TonalPalette;
  argb: ReturnedArgbNormType;
} & Record<ColorsVNameType, Record<ThemeModeType, string>>;

export type ProcessedSurfeceColor = {
  palette: TonalPalette;
  argb: ReturnedArgbSurfaceType;
} & Record<ThemeModeType, string>;
export type ColorsObject = {
  customColors: Record<string, ProcessedColor>;
  surfaces: Record<ColorsurfacesEnumType, ProcessedSurfeceColor>;
} & Record<ColorsNamesEnumType, ProcessedColor>;

export type ColorValueType = {
  tone: TonalPalette["tone"];
  source: TonalPalette;
  argb: number;
} & Record<ColorsVNameType, Record<ThemeModeType, string>>;
export type ColorObjectType = Record<ColorsNamesEnumType, ColorValueType>;
export type CustColorObjectType = {
  tone: TonalPalette["tone"];
  source: TonalPalette;
  argb: number;
} & Partial<Record<string, ColorValueType>>;

export type CustomColor = {
  name: string;
  value: string | number;
  blend: boolean;
};

export type ColorConst =
  | {
      colorSource?: string | number;
      customColors?: CustomColor[];
      darkMode?: DarkModeType;
    }
  | {
      isSourceImage: true;
      colorSource: HTMLImageElement;
      customColors?: CustomColor[];
      darkMode?: DarkModeType;
    };

export type DarkModeType = "manual" | "system-prefered";
