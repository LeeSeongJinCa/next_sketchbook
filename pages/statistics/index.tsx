import { GetStaticProps, NextPage } from "next";

import Statistics from "@components/statistics";

interface Props {}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const StatisticsPage: NextPage<Props> = ({}) => {
  return <Statistics />;
};

export default StatisticsPage;
