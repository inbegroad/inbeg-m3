import { hexFromArgb, TonalPalette } from "@material/material-color-utilities";
import { objectKeys } from "./colors-palette";
import { ProcessedColor } from "./types";

export const getNormalColors = <T extends string = string>(
  colors: Record<T, TonalPalette>
): Record<string, ProcessedColor> => {
  const keys = objectKeys(colors);
  //@ts-ignore
  const colorsObj: Record<T, ProcessedColor> = {};
  for (const color of keys) {
    const currentCol = colors[color];

    const temp = {
      color: { dark: currentCol.tone(80), light: currentCol.tone(40) },
      onColor: { dark: currentCol.tone(20), light: currentCol.tone(100) },
      colorContainer: {
        dark: currentCol.tone(30),
        light: currentCol.tone(90),
      },
      onColorContainer: {
        dark: currentCol.tone(90),
        light: currentCol.tone(10),
      },
    };

    colorsObj[color] = {
      palette: currentCol,
      argb: temp,
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
    };
  }
  return colorsObj;
};
