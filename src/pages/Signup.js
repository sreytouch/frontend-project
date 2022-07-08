import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Signup = () => {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <Link to="/">
                            <span className="link-primary">
                                Sign In
                            </span>
                        </Link>
                    </div>
                    <div className="form-group mt-3 text-left">
                        {/* <Alert variant="warning">This is a warning alert</Alert>
                        <Alert variant="success">This is a success alert</Alert> */}
                        {/* <i className="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i> */}

                        {/* <label>First Name</label> */}
                        <input
                            type="text"
                            required
                            className="form-control mt-1"
                            placeholder="please input your first name"
                        />
                        <div className="icon-person">
                            <i className="bi bi-person-fill"></i>
                        </div>
                    </div>
                    <div className="form-group mt-3 text-left">
                        {/* <label>Last Name</label> */}
                        <input
                            type="text"
                            required
                            className="form-control mt-1"
                            placeholder="please input your last name"
                        />
                        <div className="icon-person">
                            <i className="bi bi-person-fill"></i>
                        </div>
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
                        {/* <label>Role</label> */}
                        <select className="form-select" aria-label="Default select example">
                            <option value="default">please select role</option>
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                        </select>
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
                    <div className="form-group mt-3 text-left">
                        {/* <label>Retype Password</label> */}
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="please input your retype password"
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

export default Signup