import {
  ColorConst,
  ColorsNamesType,
  ColorsVNameType,
  GetColorsReturnType,
  ToneFuncs,
} from "@inbeg-m3/color";
import { BuildBorder } from "./border/border-css";
import { Padding } from "./border/get-padding";

export type ButtonVarients =
  | "elevated"
  | "filled"
  | "filled-tonal"
  | "outlined"
  | "text";
export type TypographyKeys = "label" | "body" | "hedline" | "display" | "title";
export type SizeKeysType = "small" | "medium" | "large";
type TBCorners = "top" | "bottom";
type LRCorners = "left" | "right";
type CompCorners = `${TBCorners}-${LRCorners}`;
export type Corners = "all" | TBCorners | LRCorners | CompCorners;
export type ElevationInt = 0 | 1 | 2 | 3 | 4 | 5;
export type ShapeSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type ElevationType = Record<
  ShapeType,
  Record<ElevationInt, Record<"light" | "dark", string | undefined>>
>;
export type ButtonSurfaceVariantType = {
  constentColor: Omit<GetColorsReturnType, keyof ToneFuncs>;
  borderColor?: Omit<GetColorsReturnType, keyof ToneFuncs>;
  backgroundColor?: Omit<GetColorsReturnType, keyof ToneFuncs>;
};
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

export type BorderContainerType = "default" | "outline";
export type BordersValuesType = { [K in ShapeSize]: string | undefined };

// cut: { [K in Corners]: { [K in ShapeInt]?: string } };
// rounded: { [K in ShapeInt]: string };
//  Record<
//   BorderShapeType,
//   Record<Corners, Record<ShapeInt, string>>
// >;
export type ShapeType = "rounded" | "cut";
export type BorderType = {
  defaultShape: ShapeType;
  borders: DeepPartial<BordersValuesType>;
};

export type ThemeConst = {
  colors?: ColorConst;
  elevation?: DeepPartial<ElevationType>;
  border?: DeepPartial<BorderType>;
  typography?: DeepPartial<TypographyType>;
  rootFontSize?: number;
};

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
export type DeepRequired<T> = {
  [P in keyof T]?: DeepRequired<NonNullable<T[P]>>;
};

export type GetBorderProps = {
  corners: Corners;
  edge: ShapeSize;
  borderColor: string;
  height: number;
  width: number;
  edgeType: ShapeType;
  isOutline: boolean;
  padding?: string;
};
export type GetElevation =
  | {
      boxShadow?: string;
      filter?: string;
    }
  | undefined;

export type BorderNoDimentions = Omit<GetBorderProps, "width" | "height">;
export type BorderDimentions = Pick<GetBorderProps, "width" | "height">;
export type ButtonElementProps = {
  variant: ButtonVarients;
  elevation?: ElevationInt;
  size: SizeKeysType;
  surface: ColorsVNameType;
  color: ColorsNamesType;
  dark?: boolean;
} & Pick<GetBorderProps, "corners" | "edge" | "edgeType">;
export type GetButtonProps = (
  props: Partial<
    ButtonElementProps &
      Omit<
        GetBorderProps,
        "borderColor" | "isOutline" | keyof ButtonElementProps
      >
  >
) => ReturnType<BuildBorder> &
  GetElevation &
  TypographyValuesType & {
    appearance: "none";
    all: "unset";
    cursor: "pointer";
    backgroundColor: string;
    color: string;
  };

export type StyledButtonProps = Partial<ButtonElementProps> & BorderDimentions;

export type GetTypographyVarientProps = {
  variant: TypographyKeys;
  size: SizeKeysType;
};
export type GetElevationProps = { elevation?: ElevationInt; shape: ShapeType };
export type ButtonDetailsFromVariantProps = {
  variant: ButtonVarients;
  surface: ColorsVNameType;
  color: ColorsNamesType;
  dark?: boolean;
};
