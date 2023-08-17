import React from 'react'
import { Link } from "react-router-dom";

function LoginSuccess() {
    return (
        <div>
            <h1>You have successfully logged in!</h1>
            <Link to="home"> Click here for the home page</Link>
        <Link to="contact">Click here to view our contact page</Link>
        </div>
    )
}

export default LoginSuccess