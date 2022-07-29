import {
  TypographyConst,
  TypographyKeys,
  SizeKeysType,
  TypographyType,
} from "./types";

export class Typography {
  private custom: TypographyConst;
  private internalTypography: TypographyType;
  constructor(custom?: TypographyConst) {
    this.custom = custom || {};
    this.internalTypography = {
      body: {
        large: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: "1.5rem",
          letterSpacing: "0.03125rem",
          ...this.custom.body?.large,
        },
        medium: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          letterSpacing: "0.015625rem",
          ...this.custom.body?.medium,
        },
        small: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "0.75rem",
          lineHeight: "1rem",
          letterSpacing: "0.025rem",
          ...this.custom.body?.small,
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
          ...this.custom.display?.large,
        },
        medium: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "2.8125rem",
          lineHeight: "3.25rem",
          letterSpacing: undefined,
          ...this.custom.display?.medium,
        },
        small: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "2.25rem",
          lineHeight: "2.75rem",
          letterSpacing: undefined,
          ...this.custom.display?.small,
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
          ...this.custom.hedline?.large,
        },
        medium: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "1.75rem",
          lineHeight: "2.25rem",
          letterSpacing: undefined,
          ...this.custom.hedline?.medium,
        },
        small: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "1.5rem",
          lineHeight: "2rem",
          letterSpacing: undefined,
          ...this.custom.hedline?.small,
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
          ...this.custom.label?.large,
        },
        medium: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "0.75rem",
          lineHeight: "1rem",
          letterSpacing: "0.03125rem",
          ...this.custom.label?.medium,
        },
        small: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "0.6875rem",
          lineHeight: "1rem",
          letterSpacing: "0.03125rem",
          ...this.custom.label?.small,
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
          ...this.custom.label?.large,
        },
        medium: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: "1.5rem",
          letterSpacing: "0.009375rem",
          ...this.custom.label?.medium,
        },
        small: {
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          letterSpacing: "0.00625rem",
          ...this.custom.label?.small,
        },
      },
    };
  }
  get typography(): TypographyType {
    return this.internalTypography;
  }
  getTypographyVeriant(variant: TypographyKeys, size: SizeKeysType) {
    return this.internalTypography[variant][size];
  }
}
