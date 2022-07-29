import { z } from "zod";

export const themeModeEnum = ["dark", "light"] as const;
export const colorsVNamesEnum = [
  "color",
  "onColor",
  "colorContainer",
  "onColorContainer",
] as const;
export const surfacesColorsEnum = [
  "background",
  "onBackground",
  "surface",
  "onSurface",
  "surfaceVariant",
  "onSurfaceVariant",
  "outline",
  "shadow",
  "inverseSurface",
  "inverseOnSurface",
  "inversePrimary",
] as const;
export const colorsNamesEnum = [
  "primary",
  "secondary",
  "tertiary",
  "error",
  "neutral",
  "neutralVariant",
] as const;
export const themeModeSchema = z.enum(themeModeEnum);
export const colorsVNamesSchema = z.enum(colorsVNamesEnum);
export const surfacesColorsSchema = z.enum(surfacesColorsEnum);
export const colorsNamesSchema = z.enum(colorsNamesEnum);
