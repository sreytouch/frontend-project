import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ResetPassword = () => {

    const handleSubmit = () => {
    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Reset Password</h3>
            <div className="text-center">
              <p className="login-box-msg">Enter Your Email to search for your account</p>
            </div>
            <div className="form-group mt-3 text-left">
              {/* <label>Email address</label> */}
              <input
                type="email"
                required
                className="form-control mt-1"
                placeholder="Email Address"
              />
              <div className="icon-person">
                  <i className="bi bi-envelope-fill"></i>
              </div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary text-center">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}

export default ResetPassword