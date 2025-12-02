import { createRequestHandler } from "@react-router/express";
import "dotenv/config";
import express from "express";
import { env } from "./app/.server/env.ts";

const viteDevServer =
  env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
      vite.createServer({
        server: { middlewareMode: true },
      }),
    );

const app = express();

// handle asset requests
if (viteDevServer) {
  app.use(viteDevServer.middlewares);
} else {
  app.use(
    viteDevServer ? viteDevServer.middlewares : express.static("build/client"),
  );
}

const build = viteDevServer
  ? () => viteDevServer.ssrLoadModule("virtual:react-router/server-build")
  : await import("./build/server/index.js");

app.all("*", createRequestHandler({ build }));

app.listen(env.PORT, () => {
  console.log(`App listening on http://localhost:${env.PORT}`);
});
