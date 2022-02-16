import { useRouter } from 'next/router'
import React from 'react'
const username = 'vivek'

function MiniProfile() {
  const router = useRouter();

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        src='https://www.tennisworldusa.org/imgb/91149/maria-sharapova-is-impressed-by-her-own-popularity-after-viral-tweet.jpg'
        alt=''
        className='h-14 w-14 p-[2px] rounded-full border '
      />

      <div>
        <h2 className='font-bold ml-6'>raaul</h2>
        <h3 className='text-sm text-green-400 ml-6'>Welcome to Instagram</h3>
      </div>

      <button onClick={() => router.push('/')} className='text-sm text-blue-400 ml-6'>Sign Out</button>
    </div>
  )
}

export default MiniProfile
