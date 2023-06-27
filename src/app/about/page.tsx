import Link from 'next/link'
import Image from '@/components/Image'

export default function AboutPage() {
  return (
    <>
      <h1>About page</h1>
      <Image src="next.svg" alt="test image from root dir" width={100} height={25} />
      <br />
      <br />
      <div>
        <Link href={{pathname: '/'}}>to main</Link>
      </div>
    </>
  )
}
