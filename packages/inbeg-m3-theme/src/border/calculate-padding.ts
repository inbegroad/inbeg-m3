import { getPadding } from "./get-padding";

type CalculatePadding = {
  borderSize: number;
  shapeSize: number;
  padding: ReturnType<typeof getPadding>;
  fontSize: number;
};

export const calculatePadding = ({
  borderSize,
  shapeSize,
  padding,
  fontSize,
}: CalculatePadding) => ({
  paddingTop: `calc(${borderSize / fontSize}rem + ${padding.top})`,
  paddingRight: `calc(${borderSize / fontSize}rem + ${shapeSize} + ${
    padding.right
  })`,
  paddingBottom: `calc(${borderSize / fontSize}rem + ${padding.bottom})`,
  paddingLeft: `calc(${borderSize / fontSize}rem + ${shapeSize} + ${
    padding.left
  })`,
});
