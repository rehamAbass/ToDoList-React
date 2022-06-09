import './signOut.css'
import React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
const ButtonSignOut = () => {

    //------------------------------------------------------
    const signMeIn = () => {
        console.log('success to sign in');
    }
    //------------------------------------------------------
    return (
        <div>
            <p style={{ marginTop: "10px" }}>
                Copy Rights &copy; to Reham Abass 2022
                <Link to="./about" style={{ color: 'blue', fontSize: "larger", marginLeft: '35px' }}>About Developer</Link>

                <button className='signOutButton'
                    onClick={signMeIn()}>
                    Sign Out
                </button>
            </p>
        </div>
    )
    //------------------------------------------------------
}

export default ButtonSignOut;