'use client'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`

export default function TitleStyled({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Title>{ children }</Title>
  )
}