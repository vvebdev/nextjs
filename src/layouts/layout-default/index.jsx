import Head from 'next/head';
import styled from 'styled-components';

const Main = styled.main`
  padding: 16px;
`;

export default function LayoutDefault({
  title,
  description,
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/nextjs/favicon.ico" />
      </Head>
      <Main>{children}</Main>
    </>
  );
}
