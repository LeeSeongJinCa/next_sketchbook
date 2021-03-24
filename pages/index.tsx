import Head from "next/head";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Google Map Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          쓰레기<sub>는</sub> 쓰레기통<sub>에</sub>
        </h1>
        <Link href="/main">
          <a>Main</a>
        </Link>
      </main>
    </div>
  );
}

export default HomePage;
