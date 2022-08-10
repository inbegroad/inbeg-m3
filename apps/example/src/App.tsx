import { Theme } from "@inbeg-m3/theme";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./assets/css/App.css";
import Button from "./Button";
function App() {
  const [count, setCount] = useState(0);
  const body = document.querySelector("body");

  useEffect(() => {
    body?.setAttribute(
      "style",
      `background-color: ${theme.getColor("background", "color").color}`
    );
  }, []);

  const theme = new Theme({
    colors: {
      // colorSource: "green",
      // customColors: [{ name: "azmi", value: "yellow", blend: true }],
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button>def</Button>
      <Button variant="filled">filled</Button>
      <Button variant="filled-tonal">filled-tonal</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="text">outlined</Button>
    </ThemeProvider>
  );
}

export default App;
