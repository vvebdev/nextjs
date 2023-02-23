import Head from 'next/head';

export default function LayoutDefault({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/vvebdev-nextjs/favicon.ico" />
      </Head>
      <main className='layout-default'>
        {children}
      </main>
    </>
  );
}
