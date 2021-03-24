import { GetStaticProps, NextPage } from "next";

import Main from "@components/main";

interface Props {
  apiKey: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const { GOOGLE_MAP_API_KEY: apiKey } = process.env;

  return {
    props: {
      apiKey,
    },
  };
};

const MainPage: NextPage<Props> = ({ apiKey }) => {
  return <Main apiKey={apiKey} />;
};

export default MainPage;
