import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  min-height: 120px;
  width: 100%;
  bottom: 0;
  z-index: -1;
  .container {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    text-align: center;
    padding: 5%;
    background-color: var(--red);
    color: var(--white);
  }

  .list1 {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
