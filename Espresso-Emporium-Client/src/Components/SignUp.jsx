import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContexts';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = use(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...userProfile } = Object.fromEntries(formData.entries());

        console.log(userProfile);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // send user info to db
                fetch('http://localhost:3000/user', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "Account Created Successfully!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            console.log(data);
                        }
                    })
            })
            .catch(error => {
                console.log(error);
            })

    }




    return (
        <div className="card bg-base-100 mx-auto my-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className='text-5xl font-bold text-center'>Register Now!</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Phone</label>
                    <input type="text" name='phone' className="input" placeholder="Phone" />
                    <label className="label">Photo url</label>
                    <input type="text" name='photo' className="input" placeholder="Photo url" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;