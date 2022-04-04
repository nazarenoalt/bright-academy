import styled from "styled-components";

export const Wrapper = styled.div`
  ul {
    display: flex;
    width: 100%;

    li a {
      display: block;
      padding: 0px 20px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      transition: all 0.13s;
    }

    /*  li:hover {
      
    } */

    a.active {
      color: var(--dark-blue);
      border-bottom: 3px solid var(--dark-blue);
    }

    a:hover {
      color: var(--white);
      border-bottom: 3px solid var(--white);
      background-color: var(--shaded-red);
    }
  }

  ul.mobile {
    display: none;
    position: fixed;
    flex-direction: column;
    top: 150px;
    left: 0;
    right: 0;
    width: 300px;
    margin: auto;
    height: auto;
    z-index: 10;

    li {
      background: var(--transparent-dark-blue);
    }

    a:hover,
    a.active {
      border-right: 4px solid var(--white);
      border-bottom: none;
      color: var(--white);
      background: var(--shaded-blue);
    }
  }

  ul.mobile.menuIsOpen {
    display: block;
  }
`;

export const Background = styled.div`
  display: ${(props) => props.display};
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;
