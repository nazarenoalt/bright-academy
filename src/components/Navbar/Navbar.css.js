import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  width: 100%;
  height: 80px;
  background-color: var(--red);
  color: var(--white);

  .logo {
    img {
      max-height: 80px;
    }
  }
`;
