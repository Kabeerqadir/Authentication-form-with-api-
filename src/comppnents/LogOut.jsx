import React,{useEffect} from 'react'
import { delete_cookie } from 'sfcookies'
import useAuth from '../hooks/authHook';
import { useNavigate } from 'react-router-dom';
function LogOut() {
    const {setIsLoggedIn } = useAuth()
    const navigate = useNavigate();
    useEffect(()=>{
        delete_cookie('isLoggedIn')
        setIsLoggedIn(false);
        setTimeout(()=>{
           navigate('/');
        },3000)

    },[])
  return (
    <div>You have been Logged Out!</div>
  )
}

export default LogOut