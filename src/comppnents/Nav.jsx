import React from 'react'
import '../App.css';
import { Link, Outlet } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav className="navbar navbar-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="td navbar-brand" to="/nav/main">Kabeer Doc</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/nav/main">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/nav/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/nav/services">Services</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/products">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/products">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/products">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <center>
                            <Link className="btn btn-outline-light fw-bold" to="/logout">Logout</Link>
                            </center>
                        </form>

                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Nav