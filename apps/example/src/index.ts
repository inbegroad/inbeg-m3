import "./assets/css/style.css";
import { Theme } from "@inbeg-m3/theme";

const app = document.querySelector<HTMLDivElement>("#app")!;

const dark = true;
const theme = new Theme({
  // colors: { darkMode: "manual" },
});

// theme.colorsMeta.isDark = true;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <button
  id="btn"
    type="button"
  >alskdalksdasd </button>
  `;
const btn = document.getElementById("btn");
btn?.setAttribute(
  "style",
  `border: none;padding: 1rem 1.5rem;background-color: ${
    theme.colorsMeta.getColor("primary", "color").color
  };color: ${
    theme.colorsMeta.getColor("neutral", "onColor").color
  };font-size: ${theme.theme.typography.label.large.fontSize};clip-path: ${
    theme.theme.border.cut["bottom"][7]
  };
}`
);
