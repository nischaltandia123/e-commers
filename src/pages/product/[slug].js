import { useRouter } from 'next/router'
import React from 'react'

const post = () => {
    const router =useRouter()
    const {slug}=router.query
  return (

    <p>the slug is :{slug}</p>
  )
}

export default post