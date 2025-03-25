import React  from 'react'

async function getPostDetails(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json();
  return data;
}

const PostDetailsPage = async ({ params }) => {

  const { id } = await params;
  const postDetails = await getPostDetails(id);

  return (
    <>
      <h1 className="text-4xl text-center text-gray-800 mb-8">
        {postDetails.title}
      </h1>

      <p className="text-gray-700 text-base">{postDetails.body}</p>
    </>
  )
}

export default PostDetailsPage