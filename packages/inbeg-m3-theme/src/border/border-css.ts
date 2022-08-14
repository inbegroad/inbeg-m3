import { ShapeSize, GetBorderProps } from "../types";

import { roundedBorderRadius } from "./border";
import {
  getCutCornersPoints,
  getRoundedCorners,
  RoundedBorder,
} from "./get-corners";
import { Padding } from "./get-padding";

type GetFromShapeSize = { shapeSize: ShapeSize; height: number; width: number };
const nR = 0.1428571428571429;
const shapeSizeValidate = (shapeSize: ShapeSize) =>
  shapeSize > 0 && shapeSize <= 7 ? shapeSize : 1;
const getFromShapeSize = ({ shapeSize, height }: GetFromShapeSize): number =>
  height < 31
    ? ((height * nR) / 2) * shapeSizeValidate(shapeSize)
    : (shapeSizeValidate(shapeSize) * 6.5) / 2;

const getPadding = (padding?: string): Padding => {
  const gutter = padding || "0px";
  const pad = gutter.split(" ");
  switch (pad.length) {
    case 1:
      return {
        paddingBottom: gutter,
        paddingLeft: gutter,
        paddingRight: gutter,
        paddingTop: gutter,
      };
    case 2:
      return {
        paddingBottom: pad[0],
        paddingLeft: pad[1],
        paddingRight: pad[1],
        paddingTop: pad[0],
      };
    case 4:
      return {
        paddingBottom: pad[2],
        paddingLeft: pad[3],
        paddingRight: pad[1],
        paddingTop: pad[0],
      };
    default: {
      console.error(`Invalid gutter: ${gutter}, falling back to 0`);
      return {
        paddingBottom: "0rem",
        paddingLeft: "0rem",
        paddingRight: "0rem",
        paddingTop: "0rem",
      };
    }
  }
};
type WithPadding<T extends object> = Padding & T;
export type CutBorder = {
  position: string;
  isolation: string;
  clipPath: string;
  psuedo?: {
    position: string;
    inset: number;
    backgroundColor?: string;
    clipPath: string;
    zIndex: number;
  };
};
export type BuildBorder = (
  props: GetBorderProps
) => WithPadding<Partial<CutBorder & RoundedBorder>>;
export const buildBorder: BuildBorder = ({
  edgeType,
  height: calcHeight,
  width: calcWidth,
  corners,
  borderColor,
  edge: size,
  isOutline: borderOutline,
  padding,
}) => {
  const pad = getPadding(padding);
  const borderThickNess = 1;
  if (edgeType === "cut") {
    const shapeSize = getFromShapeSize({
      height: calcHeight,
      shapeSize: size,
      width: calcWidth,
    });
    const sizeRem = `${shapeSize / 16}rem`;
    const thickRem = borderOutline ? `${borderThickNess / 16}rem` : "0rem";
    const padding = {
      paddingTop: `calc(${thickRem} + ${pad.paddingTop})`,
      paddingRight: `calc(${thickRem} + ${sizeRem} + ${pad.paddingRight})`,
      paddingBottom: `calc(${thickRem} + ${pad.paddingBottom})`,
      paddingLeft: `calc(${thickRem} + ${sizeRem} + ${pad.paddingLeft})`,
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
    } = getCutCornersPoints({ bS: thickRem, corners, nS: sizeRem });

    const parent = `${p_1}, ${p_2}, ${p_3}, ${p_4}, ${p_5}, ${p_6}, ${p_7}, ${p_18}`;
    const child = `${p_8}, ${p_9}, ${p_10}, ${p_11}, ${p_12}, ${p_13}, ${p_14}, ${p_15}, ${p_16}, ${p_17}, ${p_18}`;
    const polygonParent = `polygon(${parent})`;
    const polygonChild = `polygon(${parent} ,${child})`;
    return {
      ...padding,
      position: "relative",
      isolation: "isolate",
      clipPath: polygonParent,
      psuedo: {
        position: "absolute",
        inset: 0,
        backgroundColor: borderOutline ? borderColor : undefined,
        clipPath: polygonChild,
        zIndex: -1,
      },
    };
  } else {
    const radius = roundedBorderRadius[size];
    console.log(
      getRoundedCorners({
        color: borderOutline ? borderColor : undefined,
        corners,
        radius,
        isOutlined: borderOutline,
      })
    );

    return {
      ...pad,
      ...getRoundedCorners({
        color: borderOutline ? borderColor : undefined,
        corners,
        radius,
        isOutlined: borderOutline,
      }),
    };
  }
};
