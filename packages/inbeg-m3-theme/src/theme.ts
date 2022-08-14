import {
  ColorsNamesType,
  ColorsPalette,
  ColorsVNameType,
} from "@inbeg-m3/color";
import {
  ShapeType,
  ButtonSurfaceVariantType,
  ElevationType,
  GetButtonProps,
  ThemeConst,
  TypographyType,
  GetTypographyVarientProps,
  GetElevationProps,
  GetBorderProps,
  ButtonDetailsFromVariantProps,
  GetElevation,
  SizeKeysType,
} from "./types";
import { typographyConst } from "./typography";
import { elevationConst } from "./elevation";
import { BuildBorder, buildBorder } from "./border/border-css";
import { getPadding, Padding } from "./border/get-padding";

export class Theme {
  private colors: ColorsPalette;
  private elevation: ElevationType;
  defaultShape: ShapeType;
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
  private variantColor = (surface: ColorsVNameType): ColorsVNameType => {
    switch (surface) {
      case "color":
        return "onColor";
      case "onColor":
        return "color";
      case "colorContainer":
        return "onColorContainer";
      case "onColorContainer":
        return "colorContainer";
    }
  };

  getTypographyVeriant = ({ size, variant }: GetTypographyVarientProps) =>
    this.typography[variant][size];
  private buttonDetailsFromVariant = ({
    color,
    surface,
    variant,
    dark,
  }: ButtonDetailsFromVariantProps): ButtonSurfaceVariantType => {
    switch (variant) {
      case "outlined":
        return {
          constentColor: this.colors.getColor(color, "color", dark),
          borderColor: this.colors.getColor(color, "color", dark),
          backgroundColor: undefined,
        };
      case "text":
      case "elevated":
        return {
          constentColor: this.colors.getColor(color, "color", dark),
        };
      case "filled":
        return {
          backgroundColor: this.colors.getColor(color, surface, dark),
          constentColor: this.colors.getColor(
            color,
            this.variantColor(surface),
            dark
          ),
        };
      case "filled-tonal": {
        const backgroundColor = dark
          ? this.colors.getColor(color, surface, dark).darken(2)
          : this.colors.getColor(color, surface, dark).lighten(2);
        return {
          backgroundColor,
          constentColor: this.colors.getColor(
            color,
            this.variantColor(surface),
            dark
          ),
        };
      }
    }
  };
  private getButtonPadding(size: SizeKeysType) {
    if (size === "large") return "0.9rem 1.2rem";
    else if (size === "medium") return "0.45rem 0.7rem";
    else return "0.2rem 0.37rem";
  }
  getButtonProps: GetButtonProps = ({
    variant: vrnt,
    size: siz,
    surface: sur,
    color: cl,
    dark,
    elevation: el,
    edgeType,
    corners: cr,
    height,
    edge: edgeSize,
    width,
  }) => {
    const color = cl || "primary";
    const surface = sur || "color";
    const variant = vrnt || "filled";
    const size = siz || "medium";
    const elevation = variant === "elevated" ? el || 1 : undefined;
    const corners = cr || "all";
    const btnObj = this.buttonDetailsFromVariant({
      color,
      surface,
      variant,
      dark,
    });

    return {
      color: btnObj.constentColor.color,
      ...this.getTypographyVeriant({ size, variant: "label" }),
      ...this.getElevation({
        shape: edgeType || this.defaultShape,
        elevation,
      }),
      ...this.getBorder({
        borderColor: btnObj.constentColor.color,
        height: height || 0,
        width: width || 0,
        isOutline: variant === "outlined",
        edge: edgeSize || 7,
        edgeType: edgeType || this.defaultShape,
        corners: corners || "all",
        padding: this.getButtonPadding(size),
      }),
      all: "unset",
      cursor: "pointer",
      appearance: "none",
      backgroundColor: btnObj.backgroundColor?.color || "transparent",
    };
  };
  getBorder = ({
    edgeType: bt,
    height,
    width,
    borderColor,
    corners: cors,
    edge: intencity,
    isOutline: borderOutline,
    padding,
  }: GetBorderProps): ReturnType<BuildBorder> => {
    const size = intencity || 3;
    const corners = cors || "all";
    const borderType = bt || "default";

    return buildBorder({
      height,
      width,
      borderColor,
      // borderColor: borderOutline ? borderColor : undefined,
      corners,
      edge: size,
      isOutline: borderOutline,
      edgeType: borderType,
      padding,
    });
  };
  getPadding = (padding?: string): Padding => getPadding(padding);
  getElevation = ({ shape, elevation }: GetElevationProps): GetElevation =>
    elevation !== undefined
      ? shape === "rounded"
        ? {
            boxShadow:
              this.elevation.rounded[elevation][
                this.colors.isDark ? "dark" : "light"
              ],
          }
        : {
            filter:
              this.elevation.cut[elevation][
                this.colors.isDark ? "dark" : "light"
              ],
          }
      : undefined;
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
