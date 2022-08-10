import { Corners } from "../types";

export const getBorderRadiusFromCorner = (
  corner: Corners,
  props: { radius: string; color: string }
) => {
  switch (corner) {
    case "top-left":
      return {
        width: "2px",
        topLeft: props,
      };
    case "top-right":
      return {
        width: "2px",
        topRight: props,
      };
    case "bottom-right":
      return {
        width: "2px",
        bottomRight: props,
      };
    case "bottom-left":
      return {
        width: "2px",
        bottomLeft: props,
      };
    case "top":
      return {
        width: "2px",
        top: props,
      };
    case "bottom":
      return {
        width: "2px",
        bottom: props,
      };
    case "left":
      return {
        width: "2px",
        left: props,
      };
    case "right":
      return {
        width: "2px",
        right: props,
      };

    default:
      return {
        width: "2px",
        all: props,
      };
  }
};
