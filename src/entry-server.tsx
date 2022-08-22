import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import  Router from "@routes/router";
import { IRenderProps } from "./types";


export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <Router />
    </StaticRouter>
  );
};
