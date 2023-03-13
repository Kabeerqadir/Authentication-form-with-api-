import React from 'react'
import { Link } from 'react-router-dom'
// import ChatGPTScientificCalculator from '../comppnents/ChatGPTScientificCalculator'
function Start() {
    return (
        <>
            <div className='container text-center'>
                <h1 className='text-info bg-dark'>Login In OR Signup</h1>
                <Link type="button" to={'login'} class="btn btn-light">Login</Link>
                <Link type="button" to={'signup'} class="btn btn-dark">Sign up</Link>
            </div>
            {/* <ChatGPTScientificCalculator/> */}


        </>
    )
}

export default Start