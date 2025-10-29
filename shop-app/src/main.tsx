import { Store } from "./redux/Store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import {App} from "./pages";
import "./styles/index.css";
import { ReactQueryProvider } from "./providers/ReactQueryProvider";

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = createRoot(rootElem);
  root.render(
    <ReactQueryProvider>
      <Provider store={Store} >
        <App />
      </Provider>
    </ReactQueryProvider>
  );
}
