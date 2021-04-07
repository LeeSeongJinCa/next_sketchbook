import { NextPage } from "next";
import { useEffect } from "react";
import bb, { bar } from "billboard.js";
import "billboard.js/dist/theme/insight.css";

import Statistics from "@components/statistics";
import { useMainState } from "@utils/contextAPI/main";
import useMainAreaState from "@utils/hook/useMainAreaState";

interface Props {}

const StatisticsPage: NextPage<Props> = ({}) => {
  const { trashes, trashCans } = useMainState();
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

  return <Statistics />;
};

export default StatisticsPage;
