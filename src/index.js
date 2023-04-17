import { StrictMode } from "react";
import {createRoot} from 'react-dom/client';
import "./index.css";
import App from "./App";
import { NextUIProvider, createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <NextUIProvider theme={darkTheme}>
      <App />
    </NextUIProvider>
  </StrictMode>
);
