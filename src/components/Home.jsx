import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <h1> USER LOGIN PAGE: </h1>
        <Link to="loginerror"> Click here for the about page</Link>
        <Link to="loginsuccess">Click here to view our contact page</Link>

        <form className='wrapper'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">User Name - please enter email address:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        
</>
    )
}

export default Home;