import React, { memo } from "react";
import { NextPage } from "next";

interface Props {}

const Statistics: NextPage<Props> = ({}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <div id="chartTrash" />
      <div id="chartTrashCan" />
    </div>
  );
};

export default memo(Statistics);
