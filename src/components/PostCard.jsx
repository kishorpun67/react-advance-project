import React from 'react'
import appwriteService  from '../appwrite/conf'
import { Link, useNavigate } from 'react-router-dom'



function PostCard({ $id, title, feature_img}) {
  return (
    <>
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4 ">
                <div className="w-full justify-center mb-4">
                    <img src={appwriteService .getFilePreview(feature_img)} alt={title} className='rounded-xl' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    </>
  )
}

export default PostCard