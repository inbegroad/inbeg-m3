import "./assets/css/style.css";
import { Theme } from "@inbeg-m3/theme";

const app = document.querySelector<HTMLDivElement>("#app")!;

const theme = new Theme({
  // colors: { darkMode: "manual" },
});

// theme.isDark = true;
console.log({
  dark: theme.getColor("background", "color", true),
  light: theme.getColor("background", "color", false),
});

app.innerHTML = `
  <h1 id="typo">Hello Vite!</h1>
  <button
  id="btn"
    type="button"
  >alskdalksdasd </button>
  <button
  id="btn2"
    type="button"
  >alskdalksdasd </button>
  `;
const btn = document.getElementById("btn");
const typo = document.getElementById("typo");

const {
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  color,
  letterSpacing,
} = theme.getTypographyVeriant("hedline", "large");

const body = document.querySelector("body");

body?.setAttribute(
  "style",
  `background-color: ${theme.getColor("background").color};`
);

typo?.setAttribute(
  "style",
  `;color: ${color.color};font-family: ${fontFamily};font-size: ${fontSize};font-style: ${fontStyle};font-weight: ${fontWeight};line-height: ${lineHeight};letter-spacing: ${letterSpacing};`
);
btn?.setAttribute(
  "style",
  `border: none;padding: 1rem 1.5rem;background-color: ${
    theme.getColor("primary", "color").color
  };color: ${theme.getColor("neutral", "onColor").color};font-size: ${
    theme.theme.typography.label.large.fontSize
  };clip-path: ${theme.theme.border.cut["bottom"][7]};
}`
);
const btn2 = document.getElementById("btn2");
btn2?.setAttribute(
  "style",
  `border: none;padding: 1rem 1.5rem;background-color: ${
    theme.getColor("tertiary", "color").color
  };color: ${theme.getColor("neutral", "onColor").color};font-size: ${
    theme.theme.typography.label.large.fontSize
  };clip-path: ${theme.theme.border.cut["bottom"][7]};
}`
);
