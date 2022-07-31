import { getNormalColors } from "./get-normal-color";
import { getSurfaceColors } from "./get-surf-color";
import { TonalPalette } from "./tonal-palette";
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
}: GetColorsProps): ColorsObject => ({
  customs: getNormalColors(customs),
  surfaces: getSurfaceColors(surfaces),
  originals: getNormalColors<ColorsNamesEnumType>(originals),
});
