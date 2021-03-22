import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import S from "../styles/index.module.scss";
import indexStyles from "../styles/index.module.css";
import utilStyles from "../styles/utils.module.css";
import { Date, Layout } from "../components";
import { getSortedPostsData, AllPostsData } from "../lib/posts";

export async function getStaticProps() {
  // const { FIRST_NAME, LAST_NAME } = process.env;
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

// export const getServerSideProps = (context) => {
//   return {
//     props: {},
//   };
// };

interface Props {
  allPostsData: AllPostsData[];
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  const router = useRouter();

  return (
    <div className={`${indexStyles.container} container ${S.container}`}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${indexStyles.main} ${S.main}`}>
        <h1 className={`${indexStyles.title} ${S.h1}`}>
          Don't Read{" "}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1>

        <div>
          <h2>useRouter example</h2>
          {allPostsData.map(({ id }) => {
            return (
              <h3
                key={id}
                onClick={() => router.push(`/posts/${id}`)}
                className={S.pointer}
              >
                Go '/posts/{id}' Page
              </h3>
            );
          })}
        </div>

        <Image src="/images/timetable.png" width={100} height={100} />

        <p className={indexStyles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Layout home>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
