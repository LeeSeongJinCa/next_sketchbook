import Document, { Html, Head, Main, NextScript } from "next/document";

const baseUrl = "https://leeseongjinca.github.io/next_sketchbook";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="shortcut icon" href={`${baseUrl}/favicon.ico`} />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="twitter:card" content="summary" />
          <meta name="description" content="쓰레기는 쓰레기통에, TTT" />
          <meta property="og:title" content="Trash To Trash can" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={baseUrl} />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:description" content="쓰레기는 쓰레기통에, TTT" />
          <meta
            property="og:image"
            content={`${baseUrl}/images/Trash-Men.png`}
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="TTT logo on a laptop" />
          <meta name="theme-color" content="#fafafa" />
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
