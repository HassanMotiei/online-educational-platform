import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      About
      <Link href={"/about/setting"}>Setting</Link>
    </div>
  )
}

export default page
