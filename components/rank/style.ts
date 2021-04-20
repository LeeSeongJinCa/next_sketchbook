import styled from "@emotion/styled";

export const RankWrap = styled.div`
  width: 50%;
  margin: auto;
  > h1 {
    margin-top: 50px;
  }
`;

export const RankList = styled.table`
  display: black;
  width: 100%;
  margin: 10px 0;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    text-align: center;
  }
  .rank {
    width: 30%;
  }
  .name {
    width: 30%;
  }
  .amount {
    width: 40%;
  }
`;
