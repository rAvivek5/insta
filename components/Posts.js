import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { db } from '../firebase'
import Post from './Post'
// const postdata = [
//   {
//     id: '123',
//     username: 'benjamintesla',
//     userImg:
//       'https://www.tennisworldusa.org/imgb/91149/maria-sharapova-is-impressed-by-her-own-popularity-after-viral-tweet.jpg',
//     img: 'https://www.tennisworldusa.org/imgb/91149/maria-sharapova-is-impressed-by-her-own-popularity-after-viral-tweet.jpg',
//     caption: 'SUGARPOVA 💥💥',
//   },
//   {
//     id: '123',
//     username: 'sugarpova',
//     userImg:
//       'https://www.tennisworldusa.org/imgb/91149/maria-sharapova-is-impressed-by-her-own-popularity-after-viral-tweet.jpg',
//     img: 'https://www.tennisworldusa.org/imgb/91149/maria-sharapova-is-impressed-by-her-own-popularity-after-viral-tweet.jpg',
//     caption: 'SUGARPOVA 🤍🤍',
//   },
// ]
function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs)
      }
    )

    return unsubscribe
  }, [db])
console.log(posts)
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={'https://www.tennisworldusa.org/imgb/91149/maria-sharapova-is-impressed-by-her-own-popularity-after-viral-tweet.jpg'}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
