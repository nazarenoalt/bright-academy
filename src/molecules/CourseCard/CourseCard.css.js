import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-betwxeen;
  width: 100%;
  height: auto;
  padding: 15px;
  margin-bottom: 15px;
  transition: 0.125s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  :active {
    transform: scale(0.95);
  }

  .header-image {
    width: 80px;
    border-right: 1px solid var(--dark-blue);
    padding-right: 15px;
  }

  .data-container {
    padding-left: 15px;
    .post-title {
      font-size: 1rem;
      line-height: 1.2;
    }

    .date {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 1024px) {
    :hover {
      transform: scale(1.05);
    }
    :active {
      transform: scale(1);
    }

    .data-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
