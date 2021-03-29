import type { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { css, Global } from "@emotion/react";

import MobileLayout from "layouts/MobileLayout";

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
        <title>Google Map Search</title>
      </Head>
      <Global styles={globalStyle} />
      <MobileLayout>
        <Component {...pageProps} />
      </MobileLayout>
    </>
  );
};

const globalStyle = css`
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    border: 0;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
  html {
    color: #212529;
    cursor: default;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: #212529;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default App;
