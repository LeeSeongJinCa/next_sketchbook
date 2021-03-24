import type { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";

import NProgress from "nprogress";

import { css, Global } from "@emotion/react";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html {
            color: #212529;
            cursor: default;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-size: 16px;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }
          html,
          body {
            margin: 0;
            padding: 0;
          }
          a {
            color: #212529;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
