import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            event.target.reset();
            navigate("/");
        })
        .catch(error => {
            console.log("ERROR", error.message);
        })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            navigate("/");
        })
        .catch(error => {
            console.log("ERROR", error.message);

        })
    }

    return (
      <div className="bg-base-100 w-full max-w-xl mx-auto">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold my-2">Login Now</h2>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='ml-4 mb-4 font-medium'>
                New to this website? Please <Link className="underline font-medium" to={"/signup"}>Sign Up.</Link>
            </p>

            <p>
                <button onClick={handleGoogleSignIn} className='btn btn-info w-full'>Sign up with Google</button>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;