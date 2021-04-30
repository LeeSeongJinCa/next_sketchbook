import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import bb, { bar } from "billboard.js";
import "billboard.js/dist/theme/insight.css";

import Statistics from "@components/statistics";
import useMainAreaState from "@utils/hook/useMainAreaState";
import useMain from "@utils/hook/useMain";

interface Props {
  id: string;
  password: string;
}

const StatisticsPage: NextPage<Props> = ({ id, password }) => {
  const [trashes, trashCans] = useMain({ id, password });
  const [trashArea, trashCanArea] = useMainAreaState(trashes, trashCans);

  const setTrashStatistics = () => {
    bb.generate({
      title: {
        text: "지역별 쓰레기 통계",
      },
      data: {
        columns: trashArea,
        type: bar(),
      },
      bar: {
        width: {
          ratio: 0.2,
        },
        padding: 20,
      },
      bindto: "#chartTrash",
    });
  };

  const setTrashCanStatistics = () => {
    bb.generate({
      title: {
        text: "지역별 쓰레기통 통계",
      },
      data: {
        columns: trashCanArea,
        type: bar(),
      },
      bar: {
        width: {
          ratio: 0.2,
        },
        padding: 20,
      },
      bindto: "#chartTrashCan",
    });
  };

  useEffect(() => {
    setTrashStatistics();
  }, [trashArea]);
  useEffect(() => {
    setTrashCanStatistics();
  }, [trashCanArea]);

  return (
    <>
      <Head>
        <title>TTT | Statistics</title>
      </Head>
      <Statistics />
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

export default StatisticsPage;
