import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  .Header {
    width: 80%;
    text-align: center;
    border-bottom: 1px solid var(--dark-blue);
    h1 {
      margin-bottom: 30px;
    }
    .page-name {
      display: block;
    }
  }
`;
