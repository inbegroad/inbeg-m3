import {
  ColorsNamesType,
  ColorsPalette,
  ColorsVNameType,
} from "@inbeg-m3/color";
import { roundedBorderRadius } from "./border/border";
import {
  BorderShapeType,
  ButtonSurfaceVariantType,
  ButtonVarients,
  ElevationInt,
  ElevationType,
  GetBorderProps,
  GetButtonProps,
  SizeKeysType,
  ThemeConst,
  TypographyKeys,
  TypographyType,
} from "./types";
import { typographyConst } from "./typography";
import { getBorderRadiusFromCorner } from "./border/get-point-from-corner";
import { elevationConst } from "./elevation";
import { notchBorderElement } from "./border/border-css";

export class Theme {
  private colors: ColorsPalette;
  private elevation: ElevationType;
  defaultShape: BorderShapeType;
  rootFontSize: number;
  private typography: TypographyType;
  constructor({
    colors,
    elevation,
    border,
    typography,
    rootFontSize,
  }: ThemeConst = {}) {
    this.colors = new ColorsPalette(colors);
    this.rootFontSize = rootFontSize || 16;
    this.typography = typographyConst(typography);
    this.defaultShape = border?.defaultShape || "rounded";
    this.elevation = elevationConst(elevation);
  }
  private variantColor = (surface: ColorsVNameType): ColorsVNameType =>
    surface === "color"
      ? "onColor"
      : surface === "onColor"
      ? "color"
      : surface === "colorContainer"
      ? "onColorContainer"
      : "colorContainer";

  getTypographyVeriant = (
    variant: TypographyKeys,
    size: SizeKeysType,
    surface: ColorsVNameType,
    color: ColorsNamesType,
    dark?: boolean
  ) => ({
    ...this.typography[variant][size],
    color: this.colors.getColor(color, surface, dark),
  });
  private buttonSurfaceFromVariant = (
    variant: ButtonVarients,
    surface: ColorsVNameType,
    color: ColorsNamesType,
    dark?: boolean
  ): ButtonSurfaceVariantType => {
    switch (variant) {
      case "outlined":
        return {
          color: this.colors.getColor(color, "color", dark),
          borderType: "outline",
          borderColor: this.colors.getColor(color, "color", dark),
        };
      case "text":
      case "elevated":
        return {
          color: this.colors.getColor(color, "color", dark),
        };
      case "filled":
        return {
          backgroundColor: this.colors.getColor(color, surface, dark),
          borderColor: this.colors.getColor(color, surface, dark),
          color: this.colors.getColor(color, this.variantColor(surface), dark),
        };
      case "filled-tonal": {
        const backgroundColor = dark
          ? this.colors.getColor(color, surface, dark).darken(9)
          : this.colors.getColor(color, surface, dark).lighten(20);
        return {
          backgroundColor,
          color: this.colors.getColor(color, this.variantColor(surface), dark),
        };
      }
    }
  };
  getButtonProps = ({
    variant,
    size,
    surface,
    color,
    elevationIntencity,
    dark,
    shape,
    height,
    width,
    borderSize,
    borderType,
    corners,
  }: GetButtonProps) => {
    const btnObj = this.buttonSurfaceFromVariant(variant, surface, color, dark);
    return {
      fontFamily: this.typography.label[size].fontFamily,
      fontSize: this.typography.label[size].fontSize,
      fontStyle: this.typography.label[size].fontStyle,
      fontWeight: this.typography.label[size].fontWeight,
      lineHeight: this.typography.label[size].lineHeight,
      backgroundColor: btnObj.backgroundColor,
      letterSpacing: this.typography.label[size].letterSpacing,
      color: btnObj.color,
      borderType: btnObj.borderType,
      elevation: this.getElevation(elevationIntencity, shape || "rounded"),
      border: this.getBorder({
        borderColor: btnObj.color.color,
        height,
        width,
        borderSize,
        borderType,
        corners,
        shape,
      }),
    };
  };
  getBorder = ({
    borderType: bt,
    height,
    shape,
    width,
    borderColor,
    corners: cors,
    borderSize: intencity,
  }: GetBorderProps) => {
    const shapeSize = intencity || 3;
    const corners = cors || "all";
    const borderType = bt || "default";
    if (shape === "rounded") {
      return getBorderRadiusFromCorner(corners, {
        radius: roundedBorderRadius[shapeSize],
        color: borderColor,
      });
    } else {
      return notchBorderElement({
        height,
        width,
        borderColor: borderType === "outline" ? borderColor : undefined,
        corners,
        size: shapeSize,
      });
    }
  };
  getElevation = (variant: ElevationInt, shape: BorderShapeType) =>
    this.elevation[shape][variant][this.colors.isDark ? "dark" : "light"];
  getColor = (
    name: ColorsNamesType,
    surface: ColorsVNameType,
    dark?: boolean
  ) => this.colors.getColor(name, surface, dark);
  get colorsMeta() {
    return this.colors;
  }
  get theme() {
    return {
      colors: this.colors.colors,
      elevation: this.elevation,
      typography: this.typography,
    };
  }
}
