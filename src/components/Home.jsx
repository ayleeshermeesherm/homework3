
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Button from './Button';


function Home() {
    const navigate = useNavigate();
    return (
        <>
        <h1> USER LOGIN PAGE </h1>
        
       

        <form className='wrapper'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">User Name - please enter email address:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <Link to="loginerror">
  <Button color="blue" text="Sign In"/>
  </Link>
</form>

    
</>
    )
}

export default Home;