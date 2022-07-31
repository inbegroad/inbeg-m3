import { ColorConst } from "@inbeg-m3/color";

export type TypographyKeys = "label" | "body" | "hedline" | "display" | "title";
export type SizeKeysType = "small" | "medium" | "large";
type TBCorners = "top" | "bottom";
type LRCorners = "left" | "right";
type CompCorners = `${TBCorners}-${LRCorners}`;
export type Corners = "all" | TBCorners | LRCorners | CompCorners;
export type ElevationInt = 1 | 2 | 3 | 4 | 5;
export type ShapeInt = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type ElevationType = Record<
  ElevationInt,
  Record<"light" | "dark", string>
>;

export type TypographyValuesType = {
  fontFamily: string;
  fontStyle: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
};
export type TypographyType = Record<
  TypographyKeys,
  Record<SizeKeysType, TypographyValuesType>
>;
export type BordersValuesType = {
  cut: { [K in Corners]: { [K in ShapeInt]?: string } };
  rounded: { [K in ShapeInt]: string };
};
//  Record<
//   BorderShapeType,
//   Record<Corners, Record<ShapeInt, string>>
// >;
export type BorderShapeType = "rounded" | "cut";
export type BorderType = {
  defaultShape: BorderShapeType;
  borders: DeepPartial<BordersValuesType>;
};

export type ThemeConst = {
  colors?: ColorConst;
  elevation?: DeepPartial<ElevationType>;
  border?: DeepPartial<BorderType>;
  typography?: DeepPartial<TypographyType>;
};

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
export type DeepRequired<T> = {
  [P in keyof T]-?: DeepRequired<NonNullable<T[P]>>;
};
