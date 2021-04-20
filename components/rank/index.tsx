import { useMemo } from "react";
import { NextPage } from "next";

import * as S from "./style";
import { useMainState } from "@utils/contextAPI/main";

interface Props {}

const Rank: NextPage<Props> = ({}) => {
  const { trashes, trashCans } = useMainState();

  const displayTrashRank = useMemo(() => {
    return trashes.map(({ address }, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{address}</td>
        <td>{1}</td>
      </tr>
    ));
  }, [trashes]);

  const displayTrashCanRank = useMemo(() => {
    return trashCans.map(({ address }, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{address}</td>
        <td>{1}</td>
      </tr>
    ));
  }, [trashCans]);

  return (
    <S.RankWrap>
      <h1>쓰레기 순위</h1>
      <S.RankList>
        <thead>
          <tr>
            <th className="rank">순위</th>
            <th className="name">지역 이름</th>
            <th className="amount">쓰레기 개수</th>
          </tr>
        </thead>
        <tbody>{displayTrashRank}</tbody>
      </S.RankList>
      <h1>쓰레기통 순위</h1>
      <S.RankList>
        <thead>
          <tr>
            <th className="rank">순위</th>
            <th className="name">지역 이름</th>
            <th className="amount">쓰레기통 개수</th>
          </tr>
        </thead>
        <tbody>{displayTrashCanRank}</tbody>
      </S.RankList>
    </S.RankWrap>
  );
};

export default Rank;
