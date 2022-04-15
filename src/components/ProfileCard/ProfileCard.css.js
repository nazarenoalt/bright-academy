import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 30px;
  max-width: 700px;
  min-height: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  .name {
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid var(--dark-blue);
  }

  .list-line {
    font-weight: normal;
  }

  .list-key {
    display: block;
    font-weight: bold;
  }

  .button-container {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }

  @media screen and (min-width: 450px) {
    .list-key {
      display: inline-block;
      width: 100px;
      margin-right: 15px;
    }
  }

  @media screen and (min-width: 768px) {
    min-width: 600px;
    
  }
`;
