import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  min-height: 219px;
  width: 100%;
  z-index: -1;
  background-color: var(--red);

  .grid-container {
    padding: 5%;
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

  ul li {
    color: var(--white);
  }

  @media screen and (min-width: 768px) {
    display: block;

    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .list1 {
      margin-bottom: 0;
    }
  }
`;
