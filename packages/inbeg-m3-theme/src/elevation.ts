import { DeepPartial, ElevationInt, ElevationType } from "./types";

export class Elevation {
  private customElevation?: DeepPartial<ElevationType>;
  private internalElevation: ElevationType;
  constructor(custom?: DeepPartial<ElevationType>) {
    this.customElevation = custom;
    this.internalElevation = {
      1: {
        dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        light:
          "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        ...this.customElevation?.[1],
      },
      2: {
        dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        light:
          "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
        ...this.customElevation?.[2],
      },
      3: {
        dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        light:
          "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        ...this.customElevation?.[3],
      },
      4: {
        dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
        light:
          "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
        ...this.customElevation?.[4],
      },
      5: {
        dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
        light:
          "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
        ...this.customElevation?.[5],
      },
    };
  }

  get elevation(): ElevationType {
    return this.internalElevation;
  }
  getElevation(elevation: ElevationInt, isDark: boolean): string {
    return this.internalElevation[elevation][isDark ? "dark" : "light"];
  }
}
