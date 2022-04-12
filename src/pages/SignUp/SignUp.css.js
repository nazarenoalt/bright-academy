import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  width: 80%;
  height: 1px;
  min-height: 100%;
  margin: 0 auto;

  .subtitle {
    text-align: center;
  }

  .Formulary {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;

    .signup-input {
      margin-top: 20px;
      margin-bottom: 5px;
      padding: 10px 15px;
      font-size: 1.2rem;
      width: 330px;
    }
  }
`;
