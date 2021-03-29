import { useMemo } from "react";
import { NextPage } from "next";

import * as S from "./style";

interface Props {}

const rankData = [
  {
    region: "서울특별시",
    amount: 100,
  },
  {
    region: "대전광역시",
    amount: 50,
  },
];

const Rank: NextPage<Props> = ({}) => {
  const displayRankData = useMemo(() => {
    return rankData
      .sort((a, b) => (a.amount < b.amount ? 1 : -1))
      .map(({ region, amount }, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{region}</td>
          <td>{amount}</td>
        </tr>
      ));
  }, [rankData]);

  return (
    <S.RankWrap>
      <h1>Rank</h1>
      <S.RankList>
        <thead>
          <tr>
            <th>순위</th>
            <th>지역 이름</th>
            <th>쓰레기 개수</th>
          </tr>
        </thead>
        <tbody>{displayRankData}</tbody>
      </S.RankList>
    </S.RankWrap>
  );
};

export default Rank;
