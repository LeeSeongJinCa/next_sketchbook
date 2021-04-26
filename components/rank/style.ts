import styled from "@emotion/styled";

export const RankWrap = styled.div`
  margin: auto;
  > .wrap {
    display: flex;
    justify-content: center;
    padding: 60px 0;
    > aside {
      position: sticky;
      width: 320px;
      height: fit-content;
      margin-right: 50px;
      > * {
        margin: 10px 0;
        padding: 10px;
        border: 1px solid var(--border-color);
        box-shadow: 0 3px 5px var(--box-shadow);
        border-radius: 8px;
      }
      > h1 {
        text-align: center;
      }
      > nav {
        padding: 0;
        > button {
          display: block;
          width: 100%;
          padding: 10px;
          border: 0;
          background-color: transparent;
          text-align: left;
          &:first-of-type {
            border-radius: 8px 8px 0 0;
          }
          &:last-of-type {
            border-radius: 0 0 8px 8px;
          }
          &:hover,
          &.active {
            background-color: var(--hight-background-color);
          }
        }
      }
      > ul {
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
    > main {
      width: 600px;
      padding: 10px;
      border: 1px solid var(--border-color);
      box-shadow: 0 3px 5px var(--box-shadow);
      border-radius: 8px;
      ul {
        li {
          display: flex;
          padding: 8px 4px;
          border-bottom: 1px solid var(--border-color);
          text-align: center;
          &:first-of-type {
            font-weight: bold;
          }
          span {
            flex: 1;
          }
        }
      }
    }
  }
  @media screen and (max-width: 840px) {
    border: 1px solid blue;
    > .wrap {
      display: block;
      > aside {
        width: auto;
        margin: auto;
      }
      > main {
        width: auto;
      }
    }
  }
`;
