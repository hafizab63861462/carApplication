"use client";

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  router.push('/login')

  return null

  // return (
  //   <button type="button" onClick={() => router.push('/login')}>
  //     Login
  //   </button>
  // )

}