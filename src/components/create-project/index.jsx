import styled from 'styled-components';

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
  border-radius: 6px;
  background-color: lightblue;
`;
const LeftWindow = styled.section`
  background-color: #fff;
`;
const RightWindow = styled.section`
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
        <Image src="https://source.unsplash.com/random/600x800" alt="project image" />
      </LeftWindow>
      <RightWindow>
        <Form>
          <input type="text" name="name" placeholder='name' required />
          <input type="email" name="emal" placeholder='email' required />
          <button type="submit">submit</button>
        </Form>
      </RightWindow>
    </Wrapper>
  );
}
