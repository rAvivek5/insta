// import React, {useState} from 'react'
// import './Login.css'
// import { Link, useHistory } from "react-router-dom";
// import { auth } from "./firebase";
// import Checkout from './Checkout'

// function Login() {
//     const history = useHistory();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] =useState('');
//     const signIn =e => {
//         e.preventDefault()

//         auth
//         .signInWithEmailAndPassword(email, password)
//         .then(auth => {
//             history.push('/checkout')
//         })
//         .catch(error => alert(error.message))
//     }
//     const register = e => {
//         e.preventDefault();
//         auth
//             .createUserWithEmailAndPassword(email, password)
//             .then((auth) => {
//                 // it successfully create a new user with email and password
//                 console.log(auth);
//                 if(auth){
//                     history.push('/')
//                 }
//             })
//             .catch(error => alert(error.message))
//     }
//     return (
//         <div className='login'>
//             <Link to= '/'>
//             <img
//                 className="login__logo" 
//                 src='https://i.pinimg.com/originals/e0/a8/2a/e0a82a76d0315c7b2858fdd9187fd597.png'
//             />
//             </Link>

//             <div className='login__container'>
//                 <h1>Sign-in</h1>
//                 <form>
//                     <h5>E-mail</h5>
//                     <input type='text' value={email} onChange=
//                     {e => setEmail(e.target.value)}
//                     />

//                     <h5>Password</h5>
//                     <input type='password' value={password} onChange=
//                     {e => setPassword(e.target.value)}
//                     />  

//                     <button type='submit' onClick={signIn}
//                     className='login__signInButton'>Sign In</button>
//                 </form>
//                 <p>
//                     By signing-in you agree to the Insta CLONE Condition of Use. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads.
//                     blah blah blah blah blah .... 
//                 </p>
//                 <button onClick={register}
//                 className='login__registerButton'> Create your Amazon Account</button>
//             </div>
//         </div>
//     )
// }

// export default Login
