import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import  Router from "@routes/router";

ReactDOM.hydrateRoot(
  document.getElementById("app") as HTMLElement,
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
