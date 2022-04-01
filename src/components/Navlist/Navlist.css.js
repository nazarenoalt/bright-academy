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

  ul.mobile {
    position: fixed;
    flex-direction: column;
    top: 150px;
    left: 0;
    right: 0;
    width: 300px;
    margin: auto;
    height: auto;
    z-index: 3;

    li {
      background: var(--transparent-dark-blue);
    }

    li:hover {
      color: var(--white);
      filter: brightness(0.8);
      border: none;
    }

    li.active {
      border-right: 2px solid var(--white);
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
