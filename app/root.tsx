import {
    Meta,
    Outlet,
    Links,
    Scripts,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";

import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function Root() {
    return (
        <html>
            <head>
                <link
                    rel="icon"
                    href="data:image/x-icon;base64,AA"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}