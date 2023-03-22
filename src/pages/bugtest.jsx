import styled from 'styled-components';

const Wrapper = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: fill-available;
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
  return (
    <Wrapper>
      <Inner>
        <br />
        <br />
        <input type="text" inputMode="numeric" />
        <br />
        <br />
        <button>fill-available</button>
        <br />
        <br />
        <br />
      </Inner>
    </Wrapper>
  );
}
