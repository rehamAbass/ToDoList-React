import './signIn.css'
import React from 'react';
const ButtonSignIn = () => {

    //------------------------------------------------------
    const signMeIn = () => {
        console.log('success to sign in');
    }
    //------------------------------------------------------
    return (
        <div>
            <button className='signInButton'
                onClick={signMeIn()}>
                Sign In
            </button>
        </div>
    )
    //------------------------------------------------------
}

export default ButtonSignIn;