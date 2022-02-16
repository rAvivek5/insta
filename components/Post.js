import React, { useState,useEffect } from 'react'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import {} from '@heroicons/react/solid'
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase'

function Post({ id, username, userImg, img, caption }) {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'post', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db]
  )

  const sendComment = async (e) => {
    e.preventDefault()

    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: 'vivek',
      userImg: '',
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* Post Header */}
      <div className='flex items-center p-5'>
        <img
          src={userImg}
          alt=''
          className='h-10 w-10 rounded-full cursor-pointer border p-1 mr-3'
        />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
      </div>

      {/*Post Image */}
      <img src={img} alt='' className='object-cover w-full' />

      {/*Post Button */}
      <div className='flex justify-between max-w-6xl mx-5 lg:mx=auto'>
        <div className=' flex '>
          <HeartIcon className='btn' />
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='btn rotate-45' />
        </div>
        <BookmarkIcon className='btn' />
      </div>

      {/*Post Caption */}
      <div>
        <p className='p-4 '>
          <span className='font-bold mr-2'>{username}</span>
          {caption}
        </p>
      </div>
      {/*Post Comment */}

      {comments.length > 0 && (
        <div className='ml-10 h-20 overflow-y-scroll scrollbar-track-black scrollbar-thin'>
          {comments.map((comment) => (
            <div key={comment.id} className='flex items-center space-x-2 mb-3'>
              <img className='h-7 rounded-full' src='https://www.tennisworldusa.org/imgb/91149/maria-sharapova-is-impressed-by-her-own-popularity-after-viral-tweet.jpg' alt='' />
              <p className='text-sm flex-1'>
                <span className='font-bold'>{comment.data().username}</span>
                {comment.data().comment}
              </p>
            </div>
          ))}
        </div>
      )}
      {/*Post Inputbox */}
      <div className='flex items-center p-4'>
        <EmojiHappyIcon className='btn' />
        <input
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Add a comment...'
          className='border-none flex-1 focus:ring-0 outline-none'
        />
        <button
          type='submit'
          disabled={!comment.trim()}
          className='font-semibold text-blue-400'
          onClick={sendComment}
        >
          Post
        </button>
      </div>
    </div>
  )
}

export default Post
