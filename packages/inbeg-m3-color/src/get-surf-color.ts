import { hexFromArgb, TonalPalette } from "@material/material-color-utilities";
import { ColorsurfacesEnumType, ProcessedSurfeceColor } from "./types";

export const getSurfaceColors = (
  colors: Record<string, TonalPalette>
): Record<ColorsurfacesEnumType, ProcessedSurfeceColor> => {
  return {
    background: {
      dark: hexFromArgb(colors.background.tone(10)),
      light: hexFromArgb(colors.background.tone(99)),
      palette: colors.background,
      argb: {
        dark: colors.background.tone(10),
        light: colors.background.tone(99),
      },
    },
    onBackground: {
      dark: hexFromArgb(colors.onBackground.tone(90)),
      light: hexFromArgb(colors.onBackground.tone(10)),
      palette: colors.onBackground,
      argb: {
        dark: colors.onBackground.tone(90),
        light: colors.onBackground.tone(10),
      },
    },
    surface: {
      dark: hexFromArgb(colors.surface.tone(10)),
      light: hexFromArgb(colors.surface.tone(99)),
      palette: colors.surface,
      argb: {
        dark: colors.surface.tone(10),
        light: colors.surface.tone(99),
      },
    },
    onSurface: {
      dark: hexFromArgb(colors.onSurface.tone(90)),
      light: hexFromArgb(colors.onSurface.tone(10)),
      palette: colors.onSurface,
      argb: {
        dark: colors.onSurface.tone(90),
        light: colors.onSurface.tone(10),
      },
    },
    surfaceVariant: {
      dark: hexFromArgb(colors.surfaceVariant.tone(30)),
      light: hexFromArgb(colors.surfaceVariant.tone(90)),
      palette: colors.surfaceVariant,
      argb: {
        dark: colors.surfaceVariant.tone(30),
        light: colors.surfaceVariant.tone(90),
      },
    },
    onSurfaceVariant: {
      dark: hexFromArgb(colors.onSurfaceVariant.tone(80)),
      light: hexFromArgb(colors.onSurfaceVariant.tone(30)),
      palette: colors.onSurfaceVariant,
      argb: {
        dark: colors.onSurfaceVariant.tone(80),
        light: colors.onSurfaceVariant.tone(30),
      },
    },
    outline: {
      dark: hexFromArgb(colors.outline.tone(60)),
      light: hexFromArgb(colors.outline.tone(50)),
      palette: colors.outline,
      argb: {
        dark: colors.outline.tone(60),
        light: colors.outline.tone(50),
      },
    },
    shadow: {
      dark: hexFromArgb(colors.shadow.tone(0)),
      light: hexFromArgb(colors.shadow.tone(0)),
      palette: colors.shadow,
      argb: {
        dark: colors.shadow.tone(0),
        light: colors.shadow.tone(0),
      },
    },
    inverseSurface: {
      dark: hexFromArgb(colors.inverseSurface.tone(90)),
      light: hexFromArgb(colors.inverseSurface.tone(20)),
      palette: colors.inverseSurface,
      argb: {
        dark: colors.inverseSurface.tone(90),
        light: colors.inverseSurface.tone(20),
      },
    },
    inverseOnSurface: {
      dark: hexFromArgb(colors.inverseOnSurface.tone(20)),
      light: hexFromArgb(colors.inverseOnSurface.tone(95)),
      palette: colors.inverseOnSurface,
      argb: {
        dark: colors.inverseOnSurface.tone(20),
        light: colors.inverseOnSurface.tone(95),
      },
    },
    inversePrimary: {
      dark: hexFromArgb(colors.inversePrimary.tone(40)),
      light: hexFromArgb(colors.inversePrimary.tone(80)),
      palette: colors.inversePrimary,
      argb: {
        dark: colors.inversePrimary.tone(40),
        light: colors.inversePrimary.tone(80),
      },
    },
  };
};
