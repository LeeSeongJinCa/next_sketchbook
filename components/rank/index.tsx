import { MouseEvent, useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import Switch from "react-switch";

import * as S from "./style";

import { ResTrash } from "@utils/payloads/response";
import { setTheme, useThemeDispatch } from "@utils/contextAPI/theme";
import { DARK, LIGHT, Theme, themes } from "@utils/constants/theme";
import useDidMountEffect from "@utils/hook/useDidMountEffect";

interface Props {
  trashes: ResTrash[];
  trashCans: ResTrash[];
}

const TRASH = "trash" as const;
const TRASH_CAN = "trash-can" as const;

type RankTypes = typeof TRASH | typeof TRASH_CAN;

const Rank: NextPage<Props> = ({ trashes, trashCans }) => {
  const dispatch = useThemeDispatch();
  const [rankType, setRankType] = useState<RankTypes>(TRASH);
  const [toggle, setToggle] = useState<boolean>(false);
  const [styles, setStyles] = useState<Theme>(themes.light);

  const onClickRank = (e: MouseEvent<HTMLButtonElement>) => {
    setRankType(e.currentTarget.dataset.type as RankTypes);
  };

  const onChangeSwitch = useCallback((check: boolean) => {
    setToggle(check);
  }, []);

  const displayRank = useCallback((list: ResTrash[]) => {
    return list.map(({ area }, i) => (
      <li key={i}>
        <span>{i + 1}</span>
        <span>{area}</span>
        <span>{1}</span>
      </li>
    ));
  }, []);

  useDidMountEffect(() => {
    const newTheme = toggle ? DARK : LIGHT;

    localStorage.setItem("theme", newTheme);
    dispatch(setTheme({ theme: newTheme }));
    setStyles(toggle ? themes.dark : themes.light);
  }, [toggle]);
  useEffect(() => {
    const storageTheme = localStorage.getItem("theme");

    if (storageTheme === DARK) {
      setToggle(true);
      dispatch(setTheme({ theme: DARK }));
      setStyles(themes.dark);
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --color: ${styles.color};
          --border-color: ${styles.borderColor};
          --background-color: ${styles.backgroundColor};
          --hight-background-color: ${styles.hightBackgroundColor};
          --box-shadow: ${styles.boxShadow};
        }
      `}</style>
      <S.RankWrap>
        <div className="wrap">
          <aside>
            <h1>지역별 쓰레기 및 쓰레기통 갯수 순위</h1>
            <nav>
              <button
                className={rankType === TRASH ? "active" : ""}
                onClick={onClickRank}
                data-type={TRASH}
              >
                쓰레기 순위
              </button>
              <button
                className={rankType === TRASH_CAN ? "active" : ""}
                onClick={onClickRank}
                data-type={TRASH_CAN}
              >
                쓰레기통 순위
              </button>
            </nav>
            <ul>
              <li>
                <span>다크모드</span>
                <Switch checked={toggle} onChange={onChangeSwitch} />
              </li>
            </ul>
          </aside>
          <main>
            <ul>
              <li>
                <span>순위</span>
                <span>지역 이름</span>
                <span>쓰레기 갯수</span>
              </li>
              {rankType === TRASH
                ? displayRank(trashes)
                : displayRank(trashCans)}
            </ul>
          </main>
        </div>
      </S.RankWrap>
    </>
  );
};

export default Rank;
