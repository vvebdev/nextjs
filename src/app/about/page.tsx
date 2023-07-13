'use client'
import Link from 'next/link'
import Image from '@/components/Image'
import { useCounter } from '@/store/counter'

export default function AboutPage() {
  const count = useCounter(state => state.count)
  const countIncrement = useCounter(state => state.increment)
  
  return (
    <>
      <h1>About page</h1>
      <Image src="next.svg" alt="test image from root dir" width={100} height={25} />
      <br />
      <br />
      <div>
        <Link href={{pathname: '/'}}>to main</Link>
      </div>
      <div>
        count = {count}
      </div>
      <button onClick={countIncrement}>increment</button>
    </>
  )
}
