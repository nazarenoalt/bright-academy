import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  min-height: 120px;
  width: 100%;
  bottom: 0;
  z-index: -1;
  .grid-container {
    padding: 5%;
    background-color: var(--red);
    color: var(--white);
  }

  .list1 {
    margin-bottom: 20px;
  }

  .list {
    text-align: center;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list-container {
    display: grid;
    place-content: center;
  }
  @media screen and (min-width: 768px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .list1 {
      margin-bottom: 0;
    }
  }
`;
