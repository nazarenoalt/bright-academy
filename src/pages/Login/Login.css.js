import styled from "styled-components";
export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  color: var(--black);

  .title {
    text-align: center;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .login-input {
      margin-top: 20px;
      margin-bottom: 5px;
      padding: 10px 15px;
      font-size: 1.2rem;
      width: 330px;
    }
  }

  .remember-user__container {
    margin-top: 20px;
    .remember-user__input {
      margin-right: 10px;
    }

    .label {
      font-size: 1.2rem;
    }
  }
`;
