import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { signIn } from 'next-auth/react'

export default function Home() {
  return (
    <div className=''>
      <Modal />
      <Head>
        <title>Instagram Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Feed />

      {/* <button onClick={() => signIn()} className='h-140 w-140 bg-blue-900 m-20'>
        fuck it
      </button> */}
    </div>
  )
}
