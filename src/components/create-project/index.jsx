import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
  border-radius: 6px;
  background-color: lightblue;
`;
const LeftWindow = styled.main`
  background-color: #fff;
`;
const RightWindow = styled.main`
  background-color: #fff;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 16px;
`;

export default function CreateProject () {
  return (
    <Wrapper>
      <LeftWindow>
        <Image src="https://source.unsplash.com/random/600x800" alt="" />
      </LeftWindow>
      <RightWindow>
        <header>
          header
        </header>
        <hr />
        <br />
        <br />
        <Form>
          <input type="text" name="" id="" required placeholder='name' />
          <input type="email" name="" id="" required placeholder='email' />
          <button type="submit">submit</button>
        </Form>
        <br />
        <br />
        <hr />
        <footer>
          footer
        </footer>
      </RightWindow>
    </Wrapper>
  );
}
