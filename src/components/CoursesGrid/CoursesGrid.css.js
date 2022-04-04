import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  padding: 30px 5%;

  h3 {
    padding-bottom: 20px;
    font-size: 1.5rem;
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    margin: 15px;
  }

  @media screen and (min-width: 768px) {
    ul {
      flex-direction: row;
    }
  }
`;
