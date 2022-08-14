import {
  ButtonVarients,
  ColorsNamesType,
  ColorsVNameType,
  ShapeType,
  Corners,
  ElevationInt,
  ShapeSize,
  SizeKeysType,
  ButtonElementProps,
  BorderDimentions,
} from "@inbeg-m3/theme";
import React, {
  ButtonHTMLAttributes,
  CSSProperties,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactNode,
} from "react";
import styled, { css, CSSObject } from "styled-components";

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
  Partial<ButtonElementProps>
>;
export const StyledButton = styled.button<ButtonProps & BorderDimentions>(
  ({
    color,
    elevation: el,
    surface,
    variant,
    size,
    height,
    corners,
    edge,
    edgeType,
    theme,
    width,
    disabled,
  }) => {
    const elevation = variant === "elevated" ? el : undefined;
    const props = theme.getButtonProps({
      variant,
      color,
      size,
      surface,
      elevation,
      height,
      width,
      corners,
      edge,
      edgeType,
    });

    const {
      all,
      appearance,
      backgroundColor,
      borderColor,
      color: col,
      cursor,
      fontFamily,
      fontSize,
      fontStyle,
      fontWeight,
      lineHeight,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderWidth,
      boxShadow,
      clipPath,
      filter,
      isolation,
      letterSpacing,
      borderStyle,
      position,
      psuedo: psudo,
    } = props;
    const {
      backgroundColor: psudobackgroundColor,
      clipPath: psudoclipPath,
      inset: psudoinset,
      position: psudoposition,
      zIndex: psudozIndex,
    } = psudo || {};

    return css`
      all: ${all};
      appearance: ${appearance};
      cursor: ${!disabled && cursor};
      background-color: ${backgroundColor};
      border-color: ${borderColor};
      color: ${col};
      font-family: ${fontFamily};
      font-size: ${fontSize};
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};
      padding-right: ${paddingRight};
      padding-top: ${paddingTop};
      border-bottom-left-radius: ${borderBottomLeftRadius};
      border-bottom-right-radius: ${borderBottomRightRadius};
      border-top-left-radius: ${borderTopLeftRadius};
      border-top-right-radius: ${borderTopRightRadius};
      border-width: ${borderWidth};
      box-shadow: ${boxShadow};
      clip-path: ${clipPath};
      isolation: ${isolation};
      letter-spacing: ${letterSpacing};
      position: ${position};
      border-style: ${borderStyle};
      ${psudo !== undefined
        ? css`
            &::before {
              content: "";
              background-color: ${psudobackgroundColor};
              clip-path: ${psudoclipPath};
              inset: ${psudoinset};
              position: ${psudoposition};
              z-index: ${psudozIndex};
              filter: ${filter};
            }
          `
        : null}
    `;
  }
);
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, forwardedRef) => {
    const { calcHeight, calcWidth, ref } = useCalcDimentions(forwardedRef);
    return (
      <StyledButton
        type={props.type || "button"}
        width={calcWidth}
        height={calcHeight}
        {...props}
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  }
);

function useCalcDimentions<T extends HTMLElement>(ref: React.ForwardedRef<T>) {
  const [calcHeight, calcHeightSet] = React.useState(0);
  const [calcWidth, calcWidthSet] = React.useState(0);
  const returnRef = (node: T | null) => {
    if (node) {
      calcHeightSet(node.offsetHeight);
      calcWidthSet(node.offsetWidth);
    }
    return ref;
  };
  return { calcHeight, calcWidth, ref: returnRef };
}

export default Button;
