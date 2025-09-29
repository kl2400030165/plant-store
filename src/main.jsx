import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";   // ✅ Make sure path is correct

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>   {/* ✅ Wrap App inside Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
