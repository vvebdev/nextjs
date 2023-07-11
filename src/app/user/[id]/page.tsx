'use client'
export default function UserPage({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>User page</h1>
      <p>user id = {params.id}</p>
    </>
  )
}
