'use client'
import Link from 'next/link'
import Image from '@/components/Image'
import TitleStyled from '@/components/TitleStyled'
import { useCounter } from '@/store/counter'

export default function HomePage() {
  const count = useCounter(state => state.count)
  const countIncrement = useCounter(state => state.increment)
  const setCount = useCounter(state => state.setCount)

  function handleIncrementButtonClick() {
    countIncrement()
  }
  function handleResetButtonClick() {
    setCount(0)
  }
  
  return (
    <>
      <TitleStyled>Main Page</TitleStyled>
      <Image src="next.svg" alt="test image from root dir" width={100} height={25} />
      <br />
      <br />
      <div>
        <Link href="/about">to about</Link>
      </div>
      <div>
        count = {count}
      </div>
      <button onClick={handleIncrementButtonClick}>
        increment
      </button>
      <button onClick={handleResetButtonClick}>
        reset
      </button>
    </>
  )
}
