import { Theme } from "@inbeg-m3/theme";
import { ThemeProvider } from "styled-components";
import "./assets/css/App.css";
import Button from "./Button";
function App() {
  const theme = new Theme();
  return (
    <ThemeProvider theme={theme}>
      <div className="cont">
        <Button size="large" edgeType="cut" edge={6}>
          sadlasdkmlaskdmnd <br />
          {/* sadlasdkmlaskdmnd <br />
            sadlasdkmlaskdmnd <br />
            sadlasdkmlaskdmnd <br />
            sadlasdkmlaskdmnd <br />
            sadlasdkmlaskdmnd <br />
            sadlasdkmlaskdmnd <br />
            sadlasdkmlaskdmnd <br /> */}
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
