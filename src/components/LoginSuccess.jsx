import React from 'react'
import { Link } from "react-router-dom";
import Button from './Button';

function LoginSuccess() {
    return (
        <div>
            <h1>You have successfully logged in!</h1>
            <Link to="/">
            <Button color="pink" text="Log Out" />
            </Link>
        </div>
    )
}

export default LoginSuccess