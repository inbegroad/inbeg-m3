import { Corners, ShapeSize } from "../types";
import { getCornersPoints } from "./get-corners";

export type BorderProps = {
  corners?: Corners;
  size?: ShapeSize;
  borderColor?: string;
  height: number;
  width: number;
};

type Padding = { top: string; right: string; bottom: string; left: string };

type GetFromShapeSize = { shapeSize: ShapeSize; height: number; width: number };
const nR = 0.1428571428571429;
const getFromShapeSize = ({ shapeSize, height }: GetFromShapeSize): number =>
  height < 31 ? ((height * nR) / 2) * shapeSize : (shapeSize * 7.54) / 2;

const getPadding = (padding?: string): Padding => {
  const gutter = padding || "0px";
  const pad = gutter.split(" ");
  switch (pad.length) {
    case 1:
      return {
        bottom: gutter,
        left: gutter,
        right: gutter,
        top: gutter,
      };
    case 2:
      return {
        bottom: pad[0],
        left: pad[1],
        right: pad[1],
        top: pad[0],
      };
    case 4:
      return {
        bottom: pad[2],
        left: pad[3],
        right: pad[1],
        top: pad[0],
      };
    default: {
      console.error(`Invalid gutter: ${gutter}, falling back to 0`);
      return {
        bottom: "0rem",
        left: "0rem",
        right: "0rem",
        top: "0rem",
      };
    }
  }
};
export const notchBorderElement = ({
  height: calcHeight,
  width: calcWidth,
  corners: cs,
  borderColor,
  size: shapeSi,
}: BorderProps) => {
  const notSize = shapeSi || 3;
  const corners = cs || "all";
  const borderSize = 1;
  const shapeSize = getFromShapeSize({
    height: calcHeight,
    shapeSize: notSize,
    width: calcWidth,
  });
  const nS = `${shapeSize / 16}rem`;
  const bS = `${borderSize / 16}rem`;
  const { bottom, left, right, top } = getPadding();
  const padding = {
    paddingTop: `calc(${bS} + ${top})`,
    paddingRight: `calc(${bS} + ${nS} + ${right})`,
    paddingBottom: `calc(${bS} + ${bottom})`,
    paddingLeft: `calc(${bS} + ${nS} + ${left})`,
  };

  const {
    p_1,
    p_10,
    p_11,
    p_12,
    p_13,
    p_14,
    p_15,
    p_16,
    p_17,
    p_18,
    p_2,
    p_3,
    p_4,
    p_5,
    p_6,
    p_7,
    p_8,
    p_9,
  } = getCornersPoints({ bS, corners, nS });

  const parent = `${p_1}, ${p_2}, ${p_3}, ${p_4}, ${p_5}, ${p_6}, ${p_7}, ${p_18}`;
  const child = `${p_8}, ${p_9}, ${p_10}, ${p_11}, ${p_12}, ${p_13}, ${p_14}, ${p_15}, ${p_16}, ${p_17}, ${p_18}`;
  const polygonParent = `polygon(${parent})`;
  const polygonChild = `polygon(${parent} ,${child})`;
  return {
    position: "relative",
    padding,
    isolation: "isolate",
    clipPath: polygonParent,
    psudo: {
      position: "absolute",
      inset: 0,
      backgroundColor: borderColor || "black",
      clipPath: polygonChild,
      zIndex: -1,
    },
  };
};
