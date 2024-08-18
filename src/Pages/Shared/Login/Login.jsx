import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
     const {loginUser,googleLogin,githubLogin,user} = useContext(AuthContext)
     const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    console.log(user);
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (e) =>{
     e.preventDefault()
     const email = e.target.email.value;
     const password = e.target.password.value;
     loginUser(email,password)
     .then(() =>{
          alert('login done ')
          navigate(from, { replace: true });
     })
     .catch(error =>{
          console.log(error);
     })
    }
    const handleGoogle = () =>{
     navigate(from, { replace: true });
     googleLogin();
   
}
const handleGithub = () =>{
     navigate(from, { replace: true });
     githubLogin();
    
}
    return (
        <div className=" container mx-auto ">
            <div className=" w-1/3 mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
                <h1 className="text-4xl font-medium">Login</h1>
                <p className="text-slate-500">Hi, Welcome back 👋</p>

                <div className="my-5">
                    {/* Google Login */}
                    <button onClick={handleGoogle} className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="Google" />
                        <span>Login with Google</span>
                    </button>

                    {/* GitHub Login */}
                    <button onClick={handleGithub} className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src="https://www.svgrepo.com/show/341847/github.svg" className="w-6 h-6" alt="GitHub" />
                        <span>Login with GitHub</span>
                    </button>
                </div>

                <form onSubmit={handleLogin} className="my-10">
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="email">
                            <p className="font-medium text-slate-700 pb-2">Email address</p>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="Enter email address"
                            />
                        </label>
                        <label htmlFor="password">
                            <p className="font-medium text-slate-700 pb-2">Password</p>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="Enter your password"
                            />
                        </label>
                        
                       
                        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                           
                            <span>Login</span>
                        </button>
                        <p className="text-center">Not registered yet? 
                            <Link to={'/SingUp'} className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                                <span>Register now </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
