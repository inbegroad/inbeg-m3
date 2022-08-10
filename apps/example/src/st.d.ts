import { Theme } from "@inbeg-m3/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
