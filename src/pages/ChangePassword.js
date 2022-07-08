import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ChangePassword = () => {

    const handleSubmit = () => {
    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Change Password</h3>
            <div className="text-center">
              <p className="login-box-msg">Enter your password</p>
            </div>
            <div className="form-group mt-3 text-left">
              <input
                type="password"
                required
                className="form-control mt-1"
                placeholder="please input new password"
              />
              <div className="icon-person">
                  <i className="bi bi-key-fill"></i>
              </div>
            </div>
            <div className="form-group mt-3 text-left">
              <input
                type="password"
                required
                className="form-control mt-1"
                placeholder="please input confirme password"
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
          </div>
        </form>
      </div>
    )
}

export default ChangePassword