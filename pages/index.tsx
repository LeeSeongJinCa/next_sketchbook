import { GetStaticProps } from "next";

import Main from "@components/main";

export const getStaticProps: GetStaticProps = async () => {
  const { GOOGLE_MAP_API_KEY: apiKey } = process.env;

  return {
    props: {
      apiKey,
    },
  };
};

interface Props {
  apiKey: string;
}

function HomePage({ apiKey }: Props) {
  return <Main apiKey={apiKey} />;
}

export default HomePage;
