import { Link,useHistory} from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'
import {auth} from "../../firebase"

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    

    const login = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch((e)=>alert(e.message));
    }

    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch((e)=>alert(e.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                className='login__logo'
                src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
                alt="" />   
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                     type="email" />
                    <h5>Password</h5>
                    <input
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                     type="password" />
                    <button onClick={login} type="submit" className='login__signinButton'>Sign In</button>
                </form>
                <p>By signing in you agree to Amazons conditions
                    of use and sale.Please see our privacy notice our cookies noties and our interest-based
                    Ads notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
