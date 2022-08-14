import { DeepPartial, ElevationType } from "./types";

export const elevationConst = (
  custom?: DeepPartial<ElevationType>
): ElevationType => ({
  cut: {
    0: {
      dark: undefined,
      light: undefined,
      ...custom?.rounded?.[0],
    },
    1: {
      dark: "drop-shadow(3px 7px 8px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3))",
      light:
        "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3)) drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.15))",
      ...custom?.cut?.[1],
    },
    2: {
      dark: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3))",
      light:
        "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.3)) drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.15))",
      ...custom?.cut?.[1],
    },
    3: {
      dark: "drop-shadow(3px 7px 8px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3))",
      light:
        "drop-shadow(3px 7px 8px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3))",
      ...custom?.cut?.[1],
    },
    4: {
      dark: "drop-shadow(3px 7px 8px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3))",
      light:
        "drop-shadow(3px 7px 8px rgba(0, 0, 0, 0.15)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.3))",
      ...custom?.cut?.[1],
    },
    5: {
      dark: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3))",
      light:
        "drop-shadow(6px 14px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3))",
      ...custom?.cut?.[1],
    },
  },
  rounded: {
    0: {
      dark: undefined,
      light: undefined,
      ...custom?.rounded?.[0],
    },
    1: {
      dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
      light:
        "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
      ...custom?.rounded?.[1],
    },
    2: {
      dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
      light:
        "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
      ...custom?.rounded?.[2],
    },
    3: {
      dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
      light:
        "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
      ...custom?.rounded?.[3],
    },
    4: {
      dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
      light:
        "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
      ...custom?.rounded?.[4],
    },
    5: {
      dark: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.3)",
      light:
        "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
      ...custom?.rounded?.[5],
    },
  },
});
