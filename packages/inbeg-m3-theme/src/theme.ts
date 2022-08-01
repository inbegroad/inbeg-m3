import {
  applyTheme as apply,
  ColorsNamesType,
  ColorsPalette,
  ColorsVNameType,
} from "@inbeg-m3/color";
import { bordersConst } from "./border";
import { elevationConst } from "./elevation";
import {
  BorderShapeType,
  BordersValuesType,
  Corners,
  ElevationInt,
  ElevationType,
  ShapeInt,
  SizeKeysType,
  ThemeConst,
  TypographyKeys,
  TypographyType,
} from "./types";
import { typographyConst } from "./typography";

export const applyTheme = apply;
export class Theme {
  private colors: ColorsPalette;
  private elevation: ElevationType;
  defaultShape: BorderShapeType;
  private borders: BordersValuesType;
  private typography: TypographyType;
  constructor({ colors, elevation, border, typography }: ThemeConst = {}) {
    this.colors = new ColorsPalette(colors);
    this.typography = typographyConst(typography);
    this.defaultShape = border?.defaultShape || "rounded";
    this.borders = bordersConst(border?.borders);
    this.elevation = elevationConst(elevation);
  }
  private variantColor(surface: ColorsVNameType): ColorsVNameType {
    if (surface === "color") return "onColor";
    else if (surface === "colorContainer") return "onColorContainer";
    else if (surface === "onColor") return "color";
    else return "colorContainer";
  }

  getTypographyVeriant(
    variant: TypographyKeys,
    size: SizeKeysType,
    surface: ColorsVNameType = "color",
    color: ColorsNamesType = "text",
    dark?: boolean
  ) {
    return {
      ...this.typography[variant][size],
      color: this.colors.getColor(color, this.variantColor(surface), dark),
    };
  }
  getBorder(
    intencity: ShapeInt | null,
    shape: BorderShapeType,
    corner: Corners
  ) {
    if (intencity)
      return shape === "rounded"
        ? this.borders.rounded[intencity]
        : this.borders.cut[corner][intencity];
    else return undefined;
  }
  getElevation(variant: ElevationInt) {
    return this.elevation[variant][this.colors.isDark ? "dark" : "light"];
  }
  getColor(name: ColorsNamesType, surface?: ColorsVNameType, dark?: boolean) {
    return this.colors.getColor(name, surface, dark);
  }
  get colorsMeta() {
    return this.colors;
  }
  get theme() {
    return {
      colors: this.colors.colors,
      elevation: this.elevation,
      border: this.borders,
      typography: this.typography,
    };
  }
}
