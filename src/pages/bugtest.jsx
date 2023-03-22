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
  height: fill-available;
  background-color: lightblue;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Inner>
        <br />
        <br />
        <input type="text" inputMode="numeric" />
        <br />
        <br />
        <button>i am button</button>
      </Inner>
    </Wrapper>
  );
}
