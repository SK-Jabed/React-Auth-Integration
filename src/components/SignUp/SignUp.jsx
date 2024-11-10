import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {
    const { createUser } =useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const fullName = e.target.name.value;
        const userName = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        console.log(fullName, userName, email, password);

        // Create user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log("ERROR", error.message);
        })
    }


    return (
      <div className="bg-base-100 w-full max-w-xl mx-auto">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold my-1">Sign Up</h2>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="ml-4 mb-4 font-medium">
              Already have an account? Please <Link className="underline font-medium" to={"/login"}>
                Login.
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;