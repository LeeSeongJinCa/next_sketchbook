import { NextPage } from "next";
import { useEffect } from "react";
import bb, { bar } from "billboard.js";
import "billboard.js/dist/theme/insight.css";

import Statistics from "@components/statistics";

interface Props {}

const StatisticsPage: NextPage<Props> = ({}) => {
  const setTrashStatistics = () => {
    bb.generate({
      title: {
        text: "지역별 쓰레기 통계",
      },
      data: {
        columns: [
          ["서울특별시", 30],
          ["부산광역시", 60],
          ["대구광역시", 90],
          ["광주광역시", 120],
          ["대전광역시", 150],
        ],
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
        columns: [
          ["서울특별시", 150],
          ["부산광역시", 120],
          ["대구광역시", 90],
          ["광주광역시", 60],
          ["대전광역시", 30],
        ],
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
    setTrashCanStatistics();
  }, []);

  return <Statistics />;
};

export default StatisticsPage;
