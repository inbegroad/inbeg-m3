import { TonalPalette } from "@material/material-color-utilities";
import { getNormalColors } from "./get-normal-color";
import { getSurfaceColors } from "./get-surf-color";
import { ColorsNamesEnumType, ColorsObject } from "./types";

export type GetColorsProps = {
  customs: Record<string, TonalPalette>;
  originals: Record<string, TonalPalette>;
  surfaces: Record<string, TonalPalette>;
};
export const getColors = ({
  customs,
  originals,
  surfaces,
}: //@ts-ignore
GetColorsProps): ColorsObject => ({
  customColors: getNormalColors(customs),
  surfaces: getSurfaceColors(surfaces),
  ...getNormalColors<ColorsNamesEnumType>(originals),
});
