import React, { useEffect, useState } from 'react'
import faker from 'faker'
import Story from './Story'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(6)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])
  return (
    <div>
      <div className='m-6 flex items-center justify-between'>
        <h3 className='text-gray-500 text-sm'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold '>See all</button>
      </div>

      {suggestions.map((profile) => (
        <div key={profile.id} className='m-6 flex items-center justify-between'>
          <img
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpu4GFhL6EgIGNEfh2duzuxzw0jJWisOKgT-Lr83XpS1SSqKIukQu0EHaFAmcHZnlK24&usqp=CAU'
            }
            //{profile.avatar}
            alt=''
            className='h-10 w-10 rounded-full border p-[2px]'
          />
          <div className='flex-1 ml-4 text-sm'>
            <h2>{profile.name}</h2>
            <h3 className='text-xs text-gray-500'>
              Works at {profile.company.name}
            </h3>
          </div>

          <button className='text-blue-500 ml-10'>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
