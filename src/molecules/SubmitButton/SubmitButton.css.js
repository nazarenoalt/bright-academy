import styled from "styled-components";

export const Submit = styled.input`
  border: none;
  padding: 10px 15px;
  background: var(--dark-blue);
  border-radius: 5px;
  color: var(--white);
  transition: all 0.2s;
  margin: 10px;

  .small {
    font-size: initial;
  }

  .medium {
    font-size: 1rem;
  }

  .large {
    font-size: 1.2rem;
  }

  :hover {
    filter: brightness(1.2);
  }

  :active {
    transform: scale(0.95);
  }
`;
