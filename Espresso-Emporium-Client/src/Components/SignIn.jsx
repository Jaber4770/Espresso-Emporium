import React from 'react';

const SignIn = () => {
    return (
        <div className="card bg-base-100 mx-auto my-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <fieldset className="fieldset">
                    <h1 className='text-5xl font-bold text-center'>Sign up Now!</h1>
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
        </div>
    );
};

export default SignIn;