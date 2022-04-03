import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  .Header {
    text-align: center;
    h1 {
      margin-bottom: 30px;
    }
    .page-name {
      display: block;
    }
  }
`;
