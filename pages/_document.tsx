import Document, { Html, Head, Main, NextScript } from "next/document";

const prefix = process.env.BASE_URL || "";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
          />
          <title>Google Map Search</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
