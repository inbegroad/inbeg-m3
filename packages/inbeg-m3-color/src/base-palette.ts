import { Hct } from "@material/material-color-utilities";
import { TonalPalette } from "./tonal-palette";

export class BasePalette {
  a1: TonalPalette;
  a2: TonalPalette;
  a3: TonalPalette;
  n1: TonalPalette;
  n2: TonalPalette;
  error: TonalPalette;
  private constructor(argb: number) {
    const hct = Hct.fromInt(argb);
    const hue = hct.hue;
    this.a1 = TonalPalette.fromHueAndChroma(hue, Math.max(48, hct.chroma));
    this.a2 = TonalPalette.fromHueAndChroma(hue, 16);
    this.a3 = TonalPalette.fromHueAndChroma(hue + 60, 24);
    this.n1 = TonalPalette.fromHueAndChroma(hue, 4);
    this.n2 = TonalPalette.fromHueAndChroma(hue, 8);
    this.error = TonalPalette.fromHueAndChroma(25, 84);
  }
  static of(argb: number) {
    return new BasePalette(argb);
  }
}
