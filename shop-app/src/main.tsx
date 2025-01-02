import React from "react";
import { Store } from "./redux/Store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ReactQueryProvider } from "./provider/ReactQueryProvider";

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = createRoot(rootElem);
  root.render(
    <ReactQueryProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </ReactQueryProvider>
  );
}
