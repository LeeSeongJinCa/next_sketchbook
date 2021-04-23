import { GetStaticProps } from "next";

import Main from "@components/main";

interface Props {
  apiKey: string;
  id: string;
  password: string;
}

function HomePage({ apiKey, id, password }: Props) {
  return <Main apiKey={apiKey} id={id} password={password} />;
}

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

export default HomePage;
