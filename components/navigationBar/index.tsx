import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

import {
  homeSvg,
  RankSvg,
  StatisticsSvg,
  homeBlueSvg,
  RankBlueSvg,
  StatisticsBlueSvg,
} from "@assets/index";

import * as S from "./style";

interface Props {}

const pages = [
  {
    url: "/",
    name: "Home",
    img: homeSvg,
    selectedImg: homeBlueSvg,
  },
  {
    url: "/statistics",
    name: "Statistics",
    img: RankSvg,
    selectedImg: RankBlueSvg,
  },
  {
    url: "/rank",
    name: "Rank",
    img: StatisticsSvg,
    selectedImg: StatisticsBlueSvg,
  },
];

const NavigationBar: NextPage<Props> = ({}) => {
  const { pathname } = useRouter();

  const navigation = useMemo(() => {
    return (
      <S.NavigationBarWrap>
        {pages.map(({ url, name, img, selectedImg }) => {
          const firstPath = pathname.split("/")[1];
          const isCurrent = `/${firstPath}` === url;

          return (
            <Link href={url} key={name}>
              <a href={url} className={isCurrent ? "current" : ""}>
                <img
                  src={isCurrent ? selectedImg : img}
                  alt={name}
                  title={name}
                />
              </a>
            </Link>
          );
        })}
      </S.NavigationBarWrap>
    );
  }, [pathname]);

  return navigation;
};

export default NavigationBar;
