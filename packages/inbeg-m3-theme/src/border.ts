import {
  BorderConst,
  BorderShapeType,
  BordersValuesType,
  DeepPartial,
  ShapeInt,
} from "./types";

export class Border {
  private defaultShape: BorderShapeType;
  private customorders?: DeepPartial<BordersValuesType>;
  private internalBorders: BordersValuesType;

  constructor(constt?: BorderConst) {
    this.defaultShape = constt?.defaultShape || "rounded";
    this.customorders = constt?.borders;
    this.internalBorders = {
      cut: {
        1: "polygon(6% 0%, 94% 0%, 100% 10%, 100% 90%, 94% 100%, 6% 100%, 0% 90%, 0% 10%)",
        2: "polygon(8% 0%, 92% 0%, 100% 15%, 100% 85%, 92% 100%, 8% 100%, 0% 85%, 0% 15%)",
        3: "polygon(10% 0%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 20%)",
        4: "polygon(14% 0%, 86% 0%, 100% 30%, 100% 70%, 86% 100%, 14% 100%, 0% 70%, 0% 30%)",
        5: "polygon(16% 0%, 84% 0%, 100% 35%, 100% 65%, 84% 100%, 16% 100%, 0% 65%, 0% 35%)",
        6: "polygon(18% 0%, 82% 0%, 100% 40%, 100% 60%, 82% 100%, 18% 100%, 0% 60%, 0% 40%)",
        7: "polygon(20% 0%, 80% 0%, 100% 50%, 100% 50%, 80% 100%, 20% 100%, 0% 50%, 0% 50%)",
        ...this.customorders?.cut,
      },
      rounded: {
        1: "0.125rem",
        2: "0.25rem",
        3: "0.5rem",
        4: "0.75rem",
        5: "1rem",
        6: "1.3rem",
        7: "7rem",
        ...this.customorders?.rounded,
      },
    };
  }

  get borders(): BordersValuesType {
    return this.internalBorders;
  }
  getBorder(border: ShapeInt | null, shape?: BorderShapeType) {
    if (border) return this.internalBorders[shape || this.defaultShape][border];
    else return undefined;
  }
}
