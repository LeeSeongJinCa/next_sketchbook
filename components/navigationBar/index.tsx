import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

import {
  homeBlack,
  homeWhite,
  insightsBlack,
  insightsWhite,
  starBlack,
  starWhite,
} from "@assets/index";

import * as S from "./style";
import { isDarkMode } from "@utils/contextAPI/theme";

interface Props {}

const navigationData = [
  {
    href: "/",
    name: "Home",
    white: homeBlack,
    dark: homeWhite,
  },
  {
    href: "/statistics",
    name: "Statistics",
    white: insightsBlack,
    dark: insightsWhite,
  },
  {
    href: "/rank",
    name: "Rank",
    white: starBlack,
    dark: starWhite,
  },
];

const NavigationBar: NextPage<Props> = ({}) => {
  const { pathname } = useRouter();
  const darkMode = isDarkMode();

  const navigation = useMemo(() => {
    return (
      <S.NavigationBarWrap>
        {navigationData.map(({ href, name, white, dark }) => {
          return (
            <Link href={href} key={name}>
              <a href={href}>
                <img src={darkMode ? dark : white} alt={name} title={name} />
                <span>{name}</span>
              </a>
            </Link>
          );
        })}
      </S.NavigationBarWrap>
    );
  }, [pathname, darkMode]);

  return navigation;
};

export default NavigationBar;
