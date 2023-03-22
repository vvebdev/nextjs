import NextImage from '@/components/base/next-image';
import LayoutDefault from '@/layouts/layout-default';
import Link from 'next/link'
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

export default function HomePage() {
  return (
    <LayoutDefault title={'Home Page'} description={'Generated by create next app'}>
      <Link href="/create-project">to Create project page</Link>
      <br />
      <br />
      <Input />
      <br />
      <br />
      <Button>i am button</Button>
      <br />
      <br />
      <NextImage src={"vercel.svg"} alt={"Vercel Logo"} />
    </LayoutDefault>
  );
}