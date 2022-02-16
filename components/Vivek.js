// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useStateValue } from './StateProvider'
// import { auth } from '../firebase'
// import Checkout from '../components/Checkout'

// function vivek() {
//   const [{ user }, dispatch] = useStateValue()
//   const handleAuthentication = () => {
//     if (user) {
//       auth.signOut()
//     }
//   }
//   return (
//     <div className='header'>
//       <Link to={!user && '/login'}>
//         <img
//           onClick={handleAuthentication}
//           className='header__logo'
//           src='https://i.pinimg.com/originals/e0/a8/2a/e0a82a76d0315c7b2858fdd9187fd597.png'
//         />
//         {/* {' '}
//         {user ? 'Sign Out' : 'Sign In'} */}
//       </Link>

//       <div className='main'>
//         <span> {!user ? 'Hello Guest' : `In as ${user.email}`}</span>
//       </div>

//       {/* <div>{!user ? '' :  <Checkout />}</div> */}

//       {/* <div className='header__nav'>
//         <Link to={!user && '/login'}>
//         <div onClick={handleAuthentication} className='header__option'>
//         <span className='header__optionLineTwo'>
//         {' '}
//         {user ? 'Sign Out' : 'Sign In'}
//         </span>
//         </div>
//         </Link>
//     </div> */}
//     </div>
//   )
// }

// export default vivek
