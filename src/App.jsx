import React from 'react'
import Nav from './comppnents/Nav';
import Main from './comppnents/Main';
import Products from './comppnents/Products';
import Services from './comppnents/Services';
import Login from './comppnents/Login';
import SignUp from './comppnents/SignUp';
import { Routes, Route } from 'react-router-dom';
import Start from './comppnents/Start';
import useAuth from './hooks/authHook';
import PermissionDenied from './comppnents/PermissionDenied';
import LogOut from './comppnents/LogOut';
function App() {
  const { isLoggedIn } = useAuth()
  console.log(isLoggedIn);
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Start />} />
        <Route path={'signup'} element={<SignUp />} />
        <Route path={'logout'} element={<LogOut/>} />
        <Route path={'login'} element={<Login />} />
        <Route path={'nav'} element={isLoggedIn ? <Nav /> : <PermissionDenied/>}>
          <Route path={'main'} element={<Main />} />
          <Route path={'products'} element={<Products />} />
          <Route path={'services'} element={<Services />} />
        </Route>

        <Route path="*" element={<div className='text-center mt-5'><h1>Invalid URL </h1><h3>404 Page not found</h3></div>} />
      </Routes>

    </div >
  );
}

export default App;
