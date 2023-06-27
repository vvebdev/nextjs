'use client'

import Link from 'next/link'
import Image from '@/components/Image'

import styled from 'styled-components'

const Container = styled.main`
  padding: 20px;
`;

export default function AboutPage() {
  return (
    <Container>
      <h1>About page</h1>
      <Image src="next.svg" alt="test image from root dir" width={100} height={25} />
      <br />
      <br />
      <div>
        <Link href={{pathname: '/'}}>to main</Link>
      </div>
    </Container>
  )
}
