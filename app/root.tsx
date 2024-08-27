import {
    Meta,
    Outlet,
    Links,
    Scripts,
} from "@remix-run/react";
import stylesheet from "./tailwind.css?url";
import Header from './components/Header';

// https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op scroll to section of page

// set up darkmode -> https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually

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
            <body className="bg-slate-50">
                <Header/>
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}