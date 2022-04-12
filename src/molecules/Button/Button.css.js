import styled from "styled-components";

export const ButtonContainer = styled.button`
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
