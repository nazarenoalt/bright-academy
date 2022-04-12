import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: var(--dark-blue);
  background-image: url(${(props) => props.image});
  background-size: 100%;
  min-width: 300px;
  height: 300px;
  border-radius: 15px;
  transition: all 0.2s;
  cursor: pointer;

  /* Before represent gradient */
  ::before {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: 15px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.92) 0%,
      rgba(0, 0, 0, 0) 60%
    );
  }

  :hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
  h3 {
    position: absolute;
    color: var(--white);
    text-decoration: none;
    bottom: 10px;
    padding-left: 20px;
    font-size: 1.5rem;
  }
`;
