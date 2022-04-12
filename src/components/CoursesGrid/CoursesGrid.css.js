import styled from "styled-components";

export const Wrapper = styled.ul`
  display: grid;
  width: 90%;
  margin: 0 auto;

  .section-title {
    margin-bottom: 15px;
  }
  // Setting for desktop
  @media screen and (min-width: 1024px) {
    width: 60%;

    .section-title {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;
