import fs from "fs";
import path from "path";

import express from "express";
import { createServer as createViteServer } from "vite";

const DEV_ENV = "development";

const bootstrap = async () => {
  console.log("Starting server...");
  const app = express();
  let vite;

  if (process.env.NODE_ENV === DEV_ENV) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);
  } else {
    app.use(express.static("build/client", {
        gzip: true,
      })
    );
  }

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    let template, render;

    try {
      if (process.env.NODE_ENV === DEV_ENV) {
        template = fs.readFileSync(path.resolve("./index.html"), "utf-8");

        template = await vite.transformIndexHtml(url, template);

        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        template = fs.readFileSync(
          path.resolve("build/client/index.html"),
          "utf-8"
        );
        render = (await import("./build/server/entry-server.js")).render;
      }

      const appHtml = await render({ path: url });

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html").end(html);
    } catch (error) {
      // vite.ssrFixStacktrace(error);
      next(error);
    }
  });

  console.log("Server started");

  app.listen(3333, () => {
    console.log("Server listening on port 3333");
    }).on("error", (error) => {
      console.error(error);
    }
  );
};

bootstrap();