import styled from "@emotion/styled";

export const NavigationBarWrap = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 320px;
  height: 40px;
  background-color: white;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    -moz-flex-direction: column;
    flex-direction: column;
    height: 100%;
    flex: 1 0 33%;
    text-align: center;
    font-size: 12px;
    &.current {
      background-color: rgba(55, 53, 47, 0.08);
      color: #2e6dff;
    }
    &:hover {
      background-color: rgba(55, 53, 47, 0.08);
    }
    > img {
      width: 20px;
      height: 20px;
    }
  }
`;
