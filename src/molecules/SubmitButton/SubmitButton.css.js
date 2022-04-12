import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-block;
  padding: 10px;

  .small {
    font-size: initial;
  }

  .medium {
    font-size: 1rem;
  }

  .large {
    font-size: 1.2rem;
  }
`;

export const Submit = styled.input`
  margin: 0 auto;
  display: block;
  border: none;
  padding: 10px 15px;
  background: var(--dark-blue);
  border-radius: 5px;
  color: var(--white);
  transition: all 0.2s;
  :hover {
    filter: brightness(1.2);
  }

  :active {
    transform: scale(0.95);
  }
`;
