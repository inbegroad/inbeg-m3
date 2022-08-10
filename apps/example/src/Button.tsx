import {
  ButtonVarients,
  ColorsNamesType,
  ColorsVNameType,
  BorderShapeType,
  Corners,
  ElevationInt,
  ShapeSize,
  SizeKeysType,
} from "@inbeg-m3/theme";
import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
} from "react";
import styled, { css } from "styled-components";

type TypeWithGeneric<T> = T extends any[] ? T[] : never;
type ExtractGeneric<Type> = Type extends TypeWithGeneric<infer X> ? X : never;
type EliminateRef<T> = {
  ref?: ForwardedRef<ExtractGeneric<T>>;
  css?: Record<string, CSSProperties> | CSSProperties;
} & Omit<T, "ref">;
type InferedToFarwardRef<
  TEl extends HTMLAttributes<HTMLElement>,
  TExtra extends object = {}
> = EliminateRef<TEl> & TExtra;

type ButtonProps = InferedToFarwardRef<
  ButtonHTMLAttributes<HTMLButtonElement>,
  {
    shapeSize?: ShapeSize;
    elevation?: ElevationInt;
    shape?: BorderShapeType;
    shapeCorners?: Corners;
    variant?: ButtonVarients;
    size?: SizeKeysType;
    color?: ColorsNamesType;
    surface?: ColorsVNameType;
  }
>;

const StyledButton = styled.button<{
  variant?: ButtonVarients;
  color?: ColorsNamesType;
  surface?: ColorsVNameType;
  shape?: BorderShapeType;
}>(({ theme, color, surface, variant, shape }) => {
  const {
    color: cl,
    backgroundColor,
    elevation,
    border,
    ...rest
  } = theme.getButtonProps({
    borderIntencity: 5,
    color: color || "primary",
    elevationIntencity: 5,
    size: "large",
    surface: surface || "color",
    variant: variant || "elevated",
    shape: shape || "rounded",
  });
  return {
    all: "unset",
    position: "relative",
    isolation: "isolate",
    padding: "0.2rem 0.5rem",
    margin: "0.2rem 0.5rem",
    color: cl.color,
    "& > .in-r-b": {
      position: "absolute",
      inset: "0",
      backgroundColor: backgroundColor?.color,
      clipPath:
        "polygon(25% 0%, 0% 25.25%, 0% 75%, 25% 100%, 24.5% 33.67%, 37.44% 25%, 63.25% 25.25%, 75% 36.94%, 75.75% 67%, 63.16% 75.19%, 37.44% 75%, 25% 62.31%, 25% 100%, 75.75% 100%, 100% 75%, 100% 24.25%, 74.75% 0%)",
    },
    ...rest,
  };
});

const Button: React.FC<ButtonProps> = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton {...props} ref={ref}>
        {children}
        <span className="in-r-b"></span>
      </StyledButton>
    );
  }
);

export default Button;
