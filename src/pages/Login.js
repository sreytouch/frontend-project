import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const handleSubmit = async () => {
  }

  return (
    <div className="Auth-form-container">
      {/* <h3 className="name-project">Alumni Management Portal</h3> */}
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <Link to='/signup'>
              <span className="link-primary">
                Sign Up
              </span>
            </Link>
          </div>
          <div className="form-group mt-3 text-left">
            {/* <label>Email address</label> */}
            <input
              type="email"
              required
              className="form-control mt-1"
              placeholder="please input your email address"
            />
            <div className="icon-person">
              <i className="bi bi-envelope-fill"></i>
            </div>
          </div>
          <div className="form-group mt-3 text-left">
            {/* <label>Password</label> */}
            <input
              type="password"
              className="form-control mt-1"
              placeholder="please input your password"
            />
            <div className="icon-person">
              <i className="bi bi-key-fill"></i>
            </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary text-center">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <Link to="/forgot-password">password?</Link>
          </p>
        </div>
      </form>
    </div>
  )
}


export default Login