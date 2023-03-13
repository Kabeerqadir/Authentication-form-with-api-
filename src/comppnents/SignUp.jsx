import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import useAuth from '../hooks/authHook';
import { Link } from 'react-router-dom'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'

function SignUp() {
    let [loading, setLoading] = useState(false);
    
    const [phone, setPhone] = useState(0);
    const [password, setPassword] = useState('');
    const [statusMsg, setStatusMsg] = useState('');
    
    const {setIsLoggedIn, API_URL } = useAuth() 
    
    const navigate = useNavigate();
    
    const submitfunc = (e) => {
        setLoading(true)
        console.log(phone, password)
        e.preventDefault();
        let obj = {
            phone,
            password
        }
        let url = API_URL + '/signup';
        axios.post(url, obj).then((res) => {
            setIsLoggedIn(true)
            setLoading(false)
            console.log(res);
            setStatusMsg('You Have Signed in')
            bake_cookie('isLoggedIn',true)
            navigate('/nav/main')
        }).catch((err) => {
            setLoading(false)
            console.log(err);
            setStatusMsg('Not Signed in')
            setIsLoggedIn(false)
            navigate('/signup')
        })
    }
    return (
        <>

            <div className='container text-center mt-5'>
                
                <Link className='btn btn-light' to={'/login'}>Login</Link>
                <Link className='btn btn-dark' to={'/signup'}>Signup</Link>
                <br />
                <Link to={'/'}> login or signup</Link>
            
            

  <div class="mt-5 form-outline mb-4">
    <input type="num" id="form2Example1" class="form-control"
    onChange={(e) => {
        setPhone(e.target.value);
    }} placeholder='Phone number'  />
    <label class=" form-label" for="form2Example1">Number</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control"  onChange={(e) => {
                    setPassword(e.target.value);
                }} placeholder='Password' />
    <label class="form-label" for="form2Example2">Password</label>
  </div>


  <div class="row mb-4">
    <div class="col d-flex justify-content-center">

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">

      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="button" class="btn btn-primary btn-block mb-4" onClick={submitfunc}>{loading ? (<BeatLoader style={{ color: "black", position: "realative", top: "5px" }} size="12px" />) : ('Submit')}</button>

  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
  </div>
        </>
    )
}

export default SignUp