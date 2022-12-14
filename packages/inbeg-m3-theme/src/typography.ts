import { TypographyType, DeepPartial } from "./types";
export const typographyConst = (
  custom?: DeepPartial<TypographyType>
): TypographyType => ({
  body: {
    large: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.03125rem",
      ...custom?.body?.large,
    },
    medium: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.015625rem",
      ...custom?.body?.medium,
    },
    small: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      letterSpacing: "0.025rem",
      ...custom?.body?.small,
    },
  },
  display: {
    large: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "3.5625rem",
      lineHeight: "4rem",
      letterSpacing: "-0.015625rem",
      ...custom?.display?.large,
    },
    medium: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "2.8125rem",
      lineHeight: "3.25rem",
      letterSpacing: undefined,
      ...custom?.display?.medium,
    },
    small: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "2.25rem",
      lineHeight: "2.75rem",
      letterSpacing: undefined,
      ...custom?.display?.small,
    },
  },
  hedline: {
    large: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "2rem",
      lineHeight: "2.5rem",
      letterSpacing: undefined,
      ...custom?.hedline?.large,
    },
    medium: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
      letterSpacing: undefined,
      ...custom?.hedline?.medium,
    },
    small: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: "2rem",
      letterSpacing: undefined,
      ...custom?.hedline?.small,
    },
  },
  label: {
    large: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.00625rem",
      ...custom?.label?.large,
    },
    medium: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      letterSpacing: "0.03125rem",
      ...custom?.label?.medium,
    },
    small: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "0.6875rem",
      lineHeight: "1rem",
      letterSpacing: "0.03125rem",
      ...custom?.label?.small,
    },
  },
  title: {
    large: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1.375rem",
      lineHeight: "1.75rem",
      letterSpacing: undefined,
      ...custom?.label?.large,
    },
    medium: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.009375rem",
      ...custom?.label?.medium,
    },
    small: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.00625rem",
      ...custom?.label?.small,
    },
  },
});
