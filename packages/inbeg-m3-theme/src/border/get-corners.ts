import { Corners } from "../types";

type GetCornersType = {
  corners: Corners;
  nS: string;
  bS: string;
};

export const getCornersPoints = ({ bS, corners, nS }: GetCornersType) => {
  const fullMinsNs = `calc(100% - ${nS})`;
  const fullMinsBs = `calc(100% - ${bS})`;
  switch (corners) {
    case "all":
      return {
        p_1: `${nS} 0%`,
        p_2: `0% ${nS}`,
        p_3: `0% ${fullMinsNs}`,
        p_4: `${nS} 100%`,
        p_5: `${fullMinsNs} 100%`,
        p_6: `100% ${fullMinsNs}`,
        p_7: `100% ${nS}`,
        p_8: `${fullMinsBs} calc(${nS} * 1.03)`,
        p_9: `${fullMinsBs} calc(100% - ${nS} * 1.02)`,
        p_10: `calc(${fullMinsNs} * 0.9999) calc(${fullMinsBs} * 1.0008)`,
        p_11: `calc(${nS} * 1.02) calc(${fullMinsBs} * 1.0008)`,
        p_12: `${bS} calc(100% - ${nS} * 1.02)`,
        p_13: `${bS} calc(${nS} * 1.03)`,
        p_14: `calc(${nS} * 1.02) ${bS}`,
        p_15: `${fullMinsNs} ${bS}`,
        p_16: `${fullMinsBs} calc(${nS} * 1.03)`,
        p_17: `100% ${nS}`,
        p_18: `${fullMinsNs} 0%`,
      };
    case "bottom":
      return {
        p_1: "0% 0%",
        p_2: "0% 0%",
        p_3: `0% ${fullMinsNs}`,
        p_4: `${nS} 100%`,
        p_5: `${fullMinsNs} 100%`,
        p_6: `100% ${fullMinsNs}`,
        p_7: "100% 0%",
        p_8: `${fullMinsBs} 0%`,
        p_9: `${fullMinsBs} calc(100% - ${nS} * 1.02)`,
        p_10: `calc(${fullMinsNs} * 0.9999) calc(${fullMinsBs} * 1.0008)`,
        p_11: `calc(${nS} * 1.02) calc(${fullMinsBs} * 1.0008)`,
        p_12: `${bS} calc(100% - ${nS} * 1.02)`,
        p_13: `${bS} ${bS}`,
        p_14: `${bS} ${bS}`,
        p_15: `${fullMinsBs} ${bS}`,
        p_16: `${fullMinsBs} ${bS}`,
        p_17: "100% 0%",
        p_18: "100% 0%",
      };
    case "top":
      return {
        p_1: `${nS} 0%`,
        p_2: `0% ${nS}`,
        p_3: "0% 100%",
        p_4: "0% 100%",
        p_5: "100% 100%",
        p_6: "100% 100%",
        p_7: `100% ${nS}`,
        p_8: `${fullMinsBs} calc(${nS} * 1.03)`,
        p_9: `${fullMinsBs} ${fullMinsBs}`,
        p_10: `${fullMinsBs} ${fullMinsBs}`,
        p_11: `${bS} ${fullMinsBs}`,
        p_12: `${bS} calc(100% - ${nS} * 1.02)`,
        p_13: `${bS} calc(${nS} * 1.03)`,
        p_14: `calc(${nS} * 1.02) ${bS}`,
        p_15: `${fullMinsNs} ${bS}`,
        p_16: `${fullMinsBs} calc(${nS} * 1.03)`,
        p_17: `100% ${nS}`,
        p_18: `${fullMinsNs} 0%`,
      };
    case "left":
      return {
        p_1: `${nS} 0%`,
        p_2: `0% ${nS}`,
        p_3: `0% ${fullMinsNs}`,
        p_4: `${nS} 100%`,
        p_5: "100% 100%",
        p_6: "100% 0%",
        p_7: "100% 0%",
        p_8: `${fullMinsBs} ${bS}`,
        p_9: `${fullMinsBs} ${fullMinsBs}`,
        p_10: `${fullMinsBs} ${fullMinsBs}`,
        p_11: `calc(${nS} * 1.02) calc(${fullMinsBs} * 1.0008)`,
        p_12: `${bS} calc(100% - ${nS} * 1.02)`,
        p_13: `${bS} calc(${nS} * 1.03)`,
        p_14: `calc(${nS} * 1.02) ${bS}`,
        p_15: `${fullMinsBs} ${bS}`,
        p_16: `${fullMinsBs} ${bS}`,
        p_17: "100% 0%",
        p_18: "100% 0%",
      };
    case "right":
      return {
        p_1: "0% 0%",
        p_2: "0% 0%",
        p_3: "0% 100%",
        p_4: "0% 100%",
        p_5: `${fullMinsNs} 100%`,
        p_6: `100% ${fullMinsNs}`,
        p_7: `100% ${nS}`,
        p_8: `${fullMinsBs} calc(${nS} * 1.03)`,
        p_9: `${fullMinsBs} calc(100% - ${nS} * 1.02)`,
        p_10: `calc(${fullMinsNs} * 0.9999) calc(${fullMinsBs} * 1.0008)`,
        p_11: `${bS} ${fullMinsBs}`,
        p_12: `${bS} ${fullMinsBs}`,
        p_13: `${bS} ${bS}`,
        p_14: `${bS} ${bS}`,
        p_15: `${fullMinsNs} ${bS}`,
        p_16: `${fullMinsBs} calc(${nS} * 1.03)`,
        p_17: `100% ${nS}`,
        p_18: `${fullMinsNs} 0%`,
      };
    case "bottom-left":
      return {
        p_1: "0% 0%",
        p_2: "0% 0%",
        p_3: `0% ${fullMinsNs}`,
        p_4: `${nS} 100%`,
        p_5: "100% 100%",
        p_6: "100% 100%",
        p_7: "100% 0%",
        p_8: `${fullMinsBs} ${bS}`,
        p_9: `${fullMinsBs} ${fullMinsBs}`,
        p_10: `${fullMinsBs} ${fullMinsBs}`,
        p_11: `calc(${nS} * 1.02) calc(${fullMinsBs} * 1.0008)`,
        p_12: `${bS} calc(100% - ${nS} * 1.02)`,
        p_13: `${bS} ${bS}`,
        p_14: `${bS} ${bS}`,
        p_15: `${fullMinsBs} ${bS}`,
        p_16: `${fullMinsBs} ${bS}`,
        p_17: "100% 0%",
        p_18: "100% 0%",
      };
    case "bottom-right":
      return {
        p_1: "0% 0%",
        p_2: "0% 0%",
        p_3: "0% 100%",
        p_4: "0% 100%",
        p_5: `${fullMinsNs} 100%`,
        p_6: `100% ${fullMinsNs}`,
        p_7: "100% 0%",
        p_8: `${fullMinsBs} ${bS}`,
        p_9: `${fullMinsBs} calc(100% - ${nS} * 1.02)`,
        p_10: `calc(${fullMinsNs} * 0.9999) calc(${fullMinsBs} * 1.0008)`,
        p_11: `${bS} ${fullMinsBs}`,
        p_12: `${bS} ${fullMinsBs}`,
        p_13: `${bS} ${bS}`,
        p_14: `${bS} ${bS}`,
        p_15: `${fullMinsBs} ${bS}`,
        p_16: `${fullMinsBs} ${bS}`,
        p_17: `100% ${bS}`,
        p_18: `${fullMinsBs} 0%`,
      };
    case "top-right":
      return {
        p_1: "0% 0%",
        p_2: "0% 0%",
        p_3: "0% 100%",
        p_4: "0% 100%",
        p_5: "100% 100%",
        p_6: "100% 100%",
        p_7: `100% ${nS}`,
        p_8: `${fullMinsBs} calc(${nS} * 1.03)`,
        p_9: `${fullMinsBs} ${fullMinsBs}`,
        p_10: `${fullMinsBs} ${fullMinsBs}`,
        p_11: `${bS} ${fullMinsBs}`,
        p_12: `${bS} ${fullMinsBs}`,
        p_13: `${bS} ${bS}`,
        p_14: `calc(${nS} * 1.02) ${bS}`,
        p_15: `${fullMinsNs} ${bS}`,
        p_16: `${fullMinsBs} calc(${nS} * 1.03)`,
        p_17: `100% ${nS}`,
        p_18: `${fullMinsNs} 0%`,
      };
    case "top-left":
      return {
        p_1: `${nS} 0%`,
        p_2: `0% ${nS}`,
        p_3: "0% 100%",
        p_4: "0% 100%",
        p_5: "100% 100%",
        p_6: "100% 100%",
        p_7: "100% 0%",
        p_8: `${fullMinsBs} ${bS}`,
        p_9: `${fullMinsBs} ${fullMinsBs}`,
        p_10: `${fullMinsBs} ${fullMinsBs}`,
        p_11: `${bS} ${fullMinsBs}`,
        p_12: `${bS} ${fullMinsBs}`,
        p_13: `${bS} calc(${nS} * 1.03)`,
        p_14: `calc(${nS} * 1.02) ${bS}`,
        p_15: `${fullMinsBs} ${bS}`,
        p_16: `${fullMinsBs} ${bS}`,
        p_17: "100% 0%",
        p_18: "100% 0%",
      };
    default:
      return {
        p_1: `${nS} 0%`,
        p_2: `0% ${nS}`,
        p_3: `0% ${fullMinsNs}`,
        p_4: `${nS} 100%`,
        p_5: `${fullMinsNs} 100%`,
        p_6: `100% ${fullMinsNs}`,
        p_7: `100% ${nS}`,
        p_8: `${fullMinsBs} calc(${nS} * 1.03)`,
        p_9: `${fullMinsBs} calc(100% - ${nS} * 1.02)`,
        p_10: `calc(${fullMinsNs} * 0.9999) calc(${fullMinsBs} * 1.0008)`,
        p_11: `calc(${nS} * 1.02) calc(${fullMinsBs} * 1.0008)`,
        p_12: `${bS} calc(100% - ${nS} * 1.02)`,
        p_13: `${bS} calc(${nS} * 1.03)`,
        p_14: `calc(${nS} * 1.02) ${bS}`,
        p_15: `${fullMinsNs} ${bS}`,
        p_16: `${fullMinsBs} calc(${nS} * 1.03)`,
        p_17: `100% ${nS}`,
        p_18: `${fullMinsNs} 0%`,
      };
  }
};
