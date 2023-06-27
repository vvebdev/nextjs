import Link from 'next/link'
import Image from '@/components/Image'
import TitleStyled from '@/components/TitleStyled'

export default function HomePage() {
  return (
    <>
      <TitleStyled>Main Page</TitleStyled>
      <Image src="next.svg" alt="test image from root dir" width={100} height={25} />
      <br />
      <br />
      <div>
        <Link href="/about">to about</Link>
      </div>
    </>
  )
}
