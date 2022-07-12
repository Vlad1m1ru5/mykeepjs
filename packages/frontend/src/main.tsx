import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { createStore } from "./app/store";
import "./index.less";
import NoMatch from "./routes/404";
import Home from "./routes/index";
import NewUploads from "./routes/uploads/new";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
const store = createStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="uploads">
              <Route path="new" element={<NewUploads />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
