import { hexFromArgb } from "@material/material-color-utilities";
import { TonalPalette } from "./tonal-palette";
import { ColorsVNameType, ProcessedColor, ThemeModeType } from "./types";

export const normalColorsTones: Record<
  ColorsVNameType,
  Record<ThemeModeType, number>
> = {
  color: {
    dark: 80,
    light: 40,
  },
  onColor: {
    dark: 20,
    light: 100,
  },
  colorContainer: {
    dark: 30,
    light: 90,
  },
  onColorContainer: {
    dark: 90,
    light: 10,
  },
};

export const getNormalColors = (
  colors: Record<string, TonalPalette>
): Record<string, ProcessedColor> => {
  const keys = Object.keys(colors);
  const colorsObj: Record<string, ProcessedColor> = {};
  for (const color of keys) {
    const currentCol = colors[color];

    const temp = {
      color: {
        dark: currentCol.tone(
          color === "text" ? 15 : normalColorsTones.color.dark
        ),
        light: currentCol.tone(
          color === "text" ? 95 : normalColorsTones.color.light
        ),
      },
      onColor: {
        dark: currentCol.tone(
          color === "text" ? 100 : normalColorsTones.onColor.dark
        ),
        light: currentCol.tone(
          color === "text" ? 5 : normalColorsTones.onColor.light
        ),
      },
      colorContainer: {
        dark: currentCol.tone(
          color === "text" ? 97 : normalColorsTones.colorContainer.dark
        ),
        light: currentCol.tone(
          color === "text" ? 15 : normalColorsTones.colorContainer.light
        ),
      },
      onColorContainer: {
        dark: currentCol.tone(
          color === "text" ? 0 : normalColorsTones.onColorContainer.dark
        ),
        light: currentCol.tone(
          color === "text" ? 100 : normalColorsTones.onColorContainer.light
        ),
      },
    };

    colorsObj[color] = {
      palette: currentCol,
      argb: temp,
      hex: {
        color: {
          dark: hexFromArgb(temp.color.dark),
          light: hexFromArgb(temp.color.light),
        },
        colorContainer: {
          dark: hexFromArgb(temp.colorContainer.dark),
          light: hexFromArgb(temp.colorContainer.light),
        },
        onColor: {
          dark: hexFromArgb(temp.onColor.dark),
          light: hexFromArgb(temp.onColor.light),
        },
        onColorContainer: {
          dark: hexFromArgb(temp.onColorContainer.dark),
          light: hexFromArgb(temp.onColorContainer.light),
        },
      },
    };
  }
  return colorsObj;
};
