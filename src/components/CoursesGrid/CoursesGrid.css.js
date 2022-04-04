import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 1000px;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 30px;
  }
`;
