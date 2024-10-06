import { Meta, Outlet, Links, Scripts } from "@remix-run/react";
import stylesheet from "./tailwind.css?url";
import Layout from "./components/Layout";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function Root() {
  return (
    <html className="font-default">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}
