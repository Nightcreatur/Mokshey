/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState('Login');
    return (
        <div className='login-popup'>
            <form className='login-container' >
                <div className="login-title">
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="" />
                </div>
                <div className="login-inputs">
                    {currentState === 'Login' ? <></> : <input type="text" placeholder='Your email' required name="" id="" />}
                    <input type="text" name="" id="" placeholder='Your name' required />
                    <input type="text" name="" placeholder='Password' required id="" />
                </div>
                <button >{currentState === 'Sign Up' ? 'Create account' : 'Login'}</button>
                <div className="login-conditions">
                    <input type="checkbox" required name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>

                </div>
                {currentState === "Login" ? <p >Create a new account ? <span onClick={() => setCurrentState('Sign Up')}>Sign Up</span></p> :
                    <p>Already have an account? <span onClick={() => setCurrentState('Login')}>Login </span></p>}


            </form>
        </div>
    )
}

export default LoginPopup