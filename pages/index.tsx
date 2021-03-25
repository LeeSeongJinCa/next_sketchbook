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
        <ul>
          <li>
            <Link href="/main">
              <a>Main</a>
            </Link>
          </li>
          <li>
            <Link href="/statistics">
              <a>Statistics</a>
            </Link>
          </li>
          <li>
            <Link href="/rank">
              <a>Rank</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default HomePage;
