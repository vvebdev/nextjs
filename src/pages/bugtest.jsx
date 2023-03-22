
import { useRef } from 'react';
import styled from 'styled-components';


const Wrapper = styled.main`
  position: fixed;
  inset: 0;
  background: tomato;
  padding: 16px;
`;

const Inner = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: lightblue;
`;

export default function HomePage() {

  const inputRef = useRef();

  setTimeout(() => {
    inputRef.current?.focus();
    inputRef.current?.click();
  }, 1000)

  return (
    <Wrapper>
      <Inner>
        <br />
        <br />
        <input type="text" ref={inputRef} inputMode="numeric" />
        <br />
        <br />
        <button>i am button</button>
      </Inner>
    </Wrapper>
  );
}