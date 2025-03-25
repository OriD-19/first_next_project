import React from 'react'

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data;
}

const PostsPage = async () => {

    const posts = await loadPosts();

  return (
    <>
        <h1 className="text-4xl text-center text-gray-800 mb-8">
            Lista de publicaciones
        </h1>

        {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 mb-6 rounded-lg">
                <h3 className="text-2xl text-gray-800 font-bold mb-4">{post.title}</h3>
                <p className="text-gray-700 text-base">{post.body}</p>
            </div>
        ))}

    </>
  )
}

export default PostsPage