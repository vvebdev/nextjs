import Link from 'next/link'
import Image from '@/components/Image'

export default function HomePage() {
  return (
    <>
      <h1>Main Page</h1>
      <Image src="next.svg" alt="test image from root dir" width={100} height={25} />
      <br />
      <br />
      <div>
        <Link href="/about">to about</Link>
      </div>
    </>
  )
}
