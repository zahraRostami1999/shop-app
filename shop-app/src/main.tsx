import React from "react";
import { Store } from "./redux/Store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = createRoot(rootElem);
  root.render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
}
