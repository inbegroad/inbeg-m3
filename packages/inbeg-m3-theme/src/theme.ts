import { ColorsPalette } from "@inbeg-m3/color";
import { Border } from "./border";
import { Elevation } from "./elevation";
import { ThemeConst } from "./types";
import { Typography } from "./typography";

export class Theme {
  private colors: ColorsPalette;
  private elevation: Elevation;
  private border: Border;
  private typography: Typography;
  constructor({ colors, elevation, border, typography }: ThemeConst = {}) {
    this.colors = new ColorsPalette(colors);
    this.elevation = new Elevation(elevation);
    this.border = new Border(border);
    this.typography = new Typography(typography);
  }
  get meta() {
    return {
      colors: this.colors,
      elevation: this.elevation,
      border: this.border,
      typography: this.typography,
    };
  }
  get theme() {
    return {
      colors: this.colors.colors,
      elevation: this.elevation.elevation,
      border: this.border.borders,
      typography: this.typography.typography,
    };
  }
}
