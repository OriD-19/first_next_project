"use client"
import { useRouter } from 'next/router'
import React, { use } from 'react'

const PostDetailsPage = ({ params }) => {

  const { id } = use(params);
  return (
    <div>PostDetailsPage - {id}</div>
  )
}

export default PostDetailsPage