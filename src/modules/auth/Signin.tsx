import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../shared/interfaces/common.type";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    document.title = "Sampatti Search | Sign In - Access Your Real Estate Dashboard";
  }, []);

  // check form valid or not set form button disable or enable
  const isFormValid = () => {
    return (email.trim() !== "" && password.length >= 6);
  }

  // Login user with token
  const loginUserWithToken = (event: any) => {
    event.preventDefault();

    const user: User = { email, password }

    axios.post("https://sampatti-search-api.vercel.app/api/users/signin", user)
      .then((user) => {
        console.log(user.data);
        localStorage.setItem("userToken", user.data.token);
        localStorage.setItem("user", JSON.stringify(user.data.user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.data.token}`;
        console.log(axios.defaults.headers.common['Authorization']);        
        if (user.data.token) {
          login(user.data.token, user.data.user);
          navigate("/dashboard")
        }
      }).catch((error) => {
        console.error(error.message);
      });
  }

  return (
    <>
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 sm:w-4/5 mx-auto border border-solid border-gray-200 bg-white rounded-xl shadow">
          <div className="hidden md:flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjc4NzM5NzMz&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Real Estate"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>

          <div className="p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Sampatti Search</h1>
            <h2 className="text-xl md:text-2xl text-center text-gray-600 mb-4">User Sign In</h2>
            <p className="text-sm md:text-base text-center text-gray-500 mb-6">Sign in to access your account and manage your properties.</p>

            <form className="grid grid-cols-1" onSubmit={loginUserWithToken}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" value={email} onInput={(event: any) => setEmail(event.target.value)} type="email" id="email" name="email" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">Password</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" minLength={6} value={password} onInput={(event: any) => setPassword(event.target.value)} type="password" id="password" name="password" />
              </div>

              <button type="submit" disabled={!isFormValid()} className={`w-full ${isFormValid() ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-400"} text-white font-bold py-2 rounded`}>
                Sign In
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
              </p>
              <p className="mt-2 text-gray-600">
                Don't have an account? <Link to="/sign-up" className="text-blue-500 hover:underline">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;