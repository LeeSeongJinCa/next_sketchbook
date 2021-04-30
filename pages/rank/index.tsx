import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Rank from "@components/rank";
import useMain from "@utils/hook/useMain";

interface Props {
  id: string;
  password: string;
}

const RankPage: NextPage<Props> = ({ id, password }) => {
  const [trashes, trashCans] = useMain({ id, password });

  return (
    <>
      <Head>
        <title>TTT | Rank</title>
      </Head>
      <Rank trashes={trashes} trashCans={trashCans} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    GOOGLE_MAP_API_KEY: apiKey,
    ID: id,
    PASSWORD: password,
  } = process.env;

  return {
    props: {
      apiKey,
      id,
      password,
    },
  };
};

export default RankPage;
