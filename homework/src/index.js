import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//App.js 받아오고
import { BrowserRouter } from "react-router-dom";
// BrowserRouter 사용 위해 임포트!

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* BrowserRouter로 App.js 감싸주기 */}
    <App />
  </BrowserRouter>
);
