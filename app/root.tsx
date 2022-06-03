import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./tailwind.css";

export const meta: MetaFunction = ({ location: { pathname }}) => {
  const title = pathname === "/" ? '' : ` | ${pathname.slice(1)}`;
  return {
    charset: "utf-8",
    title: `Bamed${title}`,
    viewport: "width=device-width,initial-scale=1",
  }
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]};


export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}
