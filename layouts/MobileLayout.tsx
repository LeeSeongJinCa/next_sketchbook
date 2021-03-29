import React, { FC } from "react";

import styled from "@emotion/styled";
import NavigationBar from "@components/navigationBar";

interface Props {}

const MobileLayout: FC<Props> = ({ children }) => {
  return (
    <MobileLayoutWrap>
      {children}
      <NavigationBar />
    </MobileLayoutWrap>
  );
};

const MobileLayoutWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default MobileLayout;
