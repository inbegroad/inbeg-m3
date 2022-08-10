import { Hct } from "@material/material-color-utilities";

export class TonalPalette {
  hue: number;
  chroma: number;
  constructor(hue: number, chroma: number) {
    this.hue = hue;
    this.chroma = chroma;
  }

  static fromInt(argb: number) {
    const hct = Hct.fromInt(argb);
    return TonalPalette.fromHueAndChroma(hct.hue, hct.chroma);
  }
  static fromHueAndChroma(hue: number, chroma: number) {
    return new TonalPalette(hue, chroma);
  }
  tone(tone: number) {
    return Hct.from(this.hue, this.chroma, tone).toInt();
  }
}
