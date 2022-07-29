import React, { useState } from "react";
import "./assets/css/App.css";
import { Theme } from "@inbeg-m3/theme";

const useDark = (theme: Theme) => {
  const [isDark, setIsDark] = useState(theme.meta.colors.isDark);
  const scheme = theme.meta.colors.darkMode;

  const isDarkButtonOnClick: React.MouseEventHandler<HTMLButtonElement> = (
    _e
  ) => {
    if (scheme === "manual") {
      theme.meta.colors.isDark = !isDark;
      setIsDark((d) => !d);
    }
  };

  return { isDark, isDarkButtonOnClick, theme };
};

function App() {
  const [count, setCount] = useState(0);

  const { isDark, isDarkButtonOnClick, theme } = useDark(
    new Theme({
      colors: {
        darkMode: "manual",
        colorSource: "#97c9a5",
      },
    })
  );
  React.useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.backgroundColor = theme.meta.colors.getColor(
        "background",
        "onColor",
        isDark
      ).color;
    }
  }, [isDark, theme.meta.colors]);

  React.useEffect(() => {
    console.log(isDark);
  }, [isDark]);

  return (
    <div className="App">
      <header className="App-header">
        <button
          type="button"
          title={isDark ? "Dark" : "Light"}
          onClick={isDarkButtonOnClick}
          style={{
            border: "none",
            padding: "1rem 1.5rem",
            backgroundColor: theme.meta.colors.getColor(
              "primary",
              "color",
              isDark
            ).color,
            color: theme.meta.colors.getColor("neutral", "onColor", isDark)
              .color,
            fontSize: theme.theme.typography.label.large.fontSize,
            clipPath: theme.theme.border.cut[1],
          }}
        >
          {isDark ? "Dark" : "Light"}
        </button>
        <button
          type="button"
          className="btn"
          style={{
            border: "none",
            padding: "1rem 1.5rem",
            backgroundColor: theme.meta.colors.getColor(
              "primary",
              "color",
              isDark
            ).color,
            color: theme.meta.colors.getColor("neutral", "onColor", isDark)
              .color,
            fontSize: theme.theme.typography.label.large.fontSize,
            clipPath: theme.theme.border.cut[1],
          }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
        <button
          type="button"
          className="btn"
          style={{
            border: "none",
            padding: "1rem 1.5rem",
            backgroundColor: theme.meta.colors.getColor(
              "primary",
              "color",
              isDark
            ).color,
            color: theme.meta.colors.getColor("neutral", "onColor", isDark)
              .color,
            fontSize: theme.theme.typography.label.large.fontSize,
            clipPath: theme.theme.border.cut[2],
          }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
        <button
          type="button"
          className="btn"
          style={{
            border: "none",
            padding: "1rem 1.5rem",
            backgroundColor: theme.meta.colors.getColor(
              "primary",
              "color",
              isDark
            ).color,
            color: theme.meta.colors.getColor("neutral", "onColor", isDark)
              .color,
            fontSize: theme.theme.typography.label.large.fontSize,
            clipPath: theme.theme.border.cut[3],
          }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
        <button
          type="button"
          className="btn"
          style={{
            border: "none",
            padding: "1rem 1.5rem",
            backgroundColor: theme.meta.colors.getColor(
              "primary",
              "color",
              isDark
            ).color,
            color: theme.meta.colors.getColor("neutral", "onColor", isDark)
              .color,
            fontSize: theme.theme.typography.label.large.fontSize,
            clipPath: theme.theme.border.cut[4],
          }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
        <button
          type="button"
          className="btn"
          style={{
            border: "none",
            padding: "1rem 1.5rem",
            backgroundColor: theme.meta.colors.getColor(
              "primary",
              "color",
              isDark
            ).color,
            color: theme.meta.colors.getColor("neutral", "onColor", isDark)
              .color,
            fontSize: theme.theme.typography.label.large.fontSize,
            clipPath: theme.theme.border.cut[5],
          }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
        <button
          type="button"
          className="btn"
          style={{
            border: "none",
            padding: "1rem 1.5rem",
            backgroundColor: theme.meta.colors.getColor(
              "primary",
              "color",
              isDark
            ).color,
            color: theme.meta.colors.getColor("neutral", "onColor", isDark)
              .color,
            fontSize: theme.theme.typography.label.large.fontSize,
            clipPath: theme.theme.border.cut[6],
          }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
        <button
          type="button"
          className="btn"
          style={{
            border: "none",
            padding: "1rem 1.5rem",
            backgroundColor: theme.meta.colors.getColor(
              "primary",
              "color",
              isDark
            ).color,
            color: theme.meta.colors.getColor("neutral", "onColor", isDark)
              .color,
            fontSize: theme.theme.typography.label.large.fontSize,
            clipPath: theme.theme.border.cut[7],
          }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
      </header>
    </div>
  );
}

export default App;
