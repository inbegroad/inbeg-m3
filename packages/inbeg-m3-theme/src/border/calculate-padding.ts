import { Padding } from "./get-padding";

type CalculatePaddingProps = {
  borderSize: number;
  shapeSize: number;
  padding: Padding;
  fontSize: number;
};
type CalculatePadding = (props: CalculatePaddingProps) => Padding;

export const calculatePadding: CalculatePadding = ({
  borderSize,
  shapeSize,
  padding: { paddingBottom, paddingLeft, paddingRight, paddingTop },
  fontSize,
}) => ({
  paddingTop: `calc(${borderSize / fontSize}rem + ${paddingTop})`,
  paddingRight: `calc(${
    borderSize / fontSize
  }rem + ${shapeSize} + ${paddingRight})`,
  paddingBottom: `calc(${borderSize / fontSize}rem + ${paddingBottom})`,
  paddingLeft: `calc(${
    borderSize / fontSize
  }rem + ${shapeSize} + ${paddingLeft})`,
});
