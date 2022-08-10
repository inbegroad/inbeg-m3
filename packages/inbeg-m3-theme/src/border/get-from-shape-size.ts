import { ShapeSize } from "../types";

type GetFromShapeSize = { shapeSize: ShapeSize; height: number };
export const getFromShapeSize = ({
  height,
  shapeSize,
}: GetFromShapeSize): number =>
  (height / 2 / 7) * shapeSize >= height / 2
    ? height * 0.5
    : (height / 2 / 7) * shapeSize;
