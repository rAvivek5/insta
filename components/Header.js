import React from 'react'
import Image from 'next/image'
import { Link } from 'react-router-dom'

import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { modalState } from '../atoms/modalAtoms'
import { useRecoilState } from 'recoil'
import { aaaFourZeroFourState } from '../atoms/aaaFourZeroFourAtoms'

function Header() {
  const router = useRouter()
  const [open, setOpen] = useRecoilState(modalState)
  //const [OPEN, setOPEN] = useRecoilState(aaaFourZeroFourState)
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div
        onClick={() => router.push('/')}
        className='flex justify-between max-w-6xl mx-5 lg:mx=auto'
      >
        {/*GRAM Left header with logo */}
        <div className='relative hidden lg:inline-grid w-24  cursor-pointer'>
          <Image
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
          />
        </div>
        {/*GRAM Left header with name*/}
        <div className='relative  w-10 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image
            src='https://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* SEARCH */}
        <div className='relative mt-1 p-3 rounded-md '>
          <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
            <SearchIcon className='h-5 w-5 text-gray-500' />
          </div>
          <input
            className='bg-gray-50 block w-full pl-10'
            type='text sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
            placeholder='Search'
          />
        </div>

        <div className='flex items-center justify-end space-x-4'>
          {/*POST FUNCTIONABLE work */}
          <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />

          <HomeIcon className='navBtn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />
          <div className='navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div className='absolute-top-0-right-0 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse'>
              50
            </div>
          </div>
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />

          <a href='https://signinlogout-418f6.web.app/'>
            <img
              //onClick={() => setOPEN(true)}
              src='https://www.tennisworldusa.org/imgb/91149/maria-sharapova-is-impressed-by-her-own-popularity-after-viral-tweet.jpg'
              alt='SugarPova'
              className='h-10 w-10 rounded-full cursor-pointer'
            />
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default Header
