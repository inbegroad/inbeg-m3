import { ColorsPalette } from "@inbeg-m3/color";
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

export class Theme {
  private colors: ColorsPalette;
  private elevation: ElevationType;
  private defaultShape: BorderShapeType;
  private borders: BordersValuesType;
  private typography: TypographyType;
  constructor({ colors, elevation, border, typography }: ThemeConst = {}) {
    this.colors = new ColorsPalette(colors);
    this.typography = typographyConst(typography);
    this.defaultShape = border?.defaultShape || "rounded";
    this.borders = bordersConst(border?.borders);
    this.elevation = elevationConst(elevation);
  }
  getTypographyVeriant(variant: TypographyKeys, size: SizeKeysType) {
    return this.typography[variant][size];
  }
  getBorder(
    intencity: ShapeInt | null,
    shape: BorderShapeType = this.defaultShape,
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
