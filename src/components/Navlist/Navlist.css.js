import styled from "styled-components";

export const Wrapper = styled.div`
  ul {
    display: flex;
    width: 100%;

    li {
      padding: 0px 20px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      transition: all 0.13s;
    }

    li:hover {
      color: var(--dark-blue);
      border-bottom: 2px solid var(--dark-blue);
    }
  }
`;
