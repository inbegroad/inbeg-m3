import { hexFromArgb } from "@material/material-color-utilities";
import { TonalPalette } from "./tonal-palette";
import {
  ColorSurfacesEnumType,
  ProcessedSurfeceColor,
  ThemeModeType,
} from "./types";

export const surfaceColorsTones: Record<
  ColorSurfacesEnumType,
  Record<ThemeModeType, number>
> = {
  background: {
    dark: 10,
    light: 99,
  },
  onBackground: {
    dark: 90,
    light: 10,
  },
  surface: {
    dark: 10,
    light: 99,
  },
  onSurface: {
    dark: 90,
    light: 10,
  },
  surfaceVariant: {
    dark: 30,
    light: 90,
  },
  onSurfaceVariant: {
    dark: 80,
    light: 30,
  },
  outline: {
    dark: 60,
    light: 50,
  },
  shadow: {
    dark: 0,
    light: 0,
  },
  inverseSurface: {
    dark: 90,
    light: 20,
  },
  inverseOnSurface: {
    dark: 20,
    light: 95,
  },
  inversePrimary: {
    dark: 40,
    light: 80,
  },
};

export const getSurfaceColors = (
  colors: Record<ColorSurfacesEnumType, TonalPalette>
): Record<ColorSurfacesEnumType, ProcessedSurfeceColor> => {
  //@ts-ignore
  const ret: Record<ColorSurfacesEnumType, ProcessedSurfeceColor> = {};
  for (const name of Object.keys(colors)) {
    const { dark, light } = surfaceColorsTones[name as ColorSurfacesEnumType];
    ret[name as ColorSurfacesEnumType] = {
      palette: colors[name as ColorSurfacesEnumType],

      argb: {
        dark: colors[name as ColorSurfacesEnumType].tone(dark),
        light: colors[name as ColorSurfacesEnumType].tone(light),
      },
      hex: {
        dark: hexFromArgb(colors[name as ColorSurfacesEnumType].tone(dark)),
        light: hexFromArgb(colors[name as ColorSurfacesEnumType].tone(light)),
      },
    };
  }
  return ret;
};
