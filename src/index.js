// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <>
//     <BrowserRouter>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </BrowserRouter>
//   </>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import "./todos/todo.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);