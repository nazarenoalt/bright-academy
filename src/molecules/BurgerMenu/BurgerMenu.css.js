import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;

  right: 10%;
  z-index: 10;
  width: 70px;
  height: 70px;
  transition: all 0.125s;
  padding: 10px;
  cursor: pointer;

  img {
    transition: all 0.125s;
  }
  .open {
    transform: rotate(0.125turn);
  }
`;
