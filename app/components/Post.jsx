import React from 'react'

const Post = ({ post }) => {
    return (
        <div className="bg-white p-6 mb-6 rounded-lg">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">{post.title}</h3>
            <p className="text-gray-700 text-base">{post.body}</p>
        </div>
    )
};

export default Post