import React from 'react'
import { Link } from "react-router-dom";
import Button from './Button';

function LoginError() {
    return (
        <div>
            <h1>Login Unsuccessful</h1>
            <p> Please try again</p>
            <Link to="/">
            <Button color="green" text="Sign In" />
            </Link>

            
            
        </div>
    )
}

export default LoginError