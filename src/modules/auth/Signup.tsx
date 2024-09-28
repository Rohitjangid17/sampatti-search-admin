import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { User } from "../../shared/interfaces/common.type";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sampatti Search | Admin Sign Up - Create Your Account";
  }, []);

  // check form valid or not set form button disable or enable
  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      mobileNumber.length === 10 &&
      password.length >= 6
    )
  }

  const createUser = (event: any) => {
    event.preventDefault();

    const user: User = {
      name,
      email,
      mobileNumber,
      password,
      profilePicture: "",
      isVerified: false,
      isBlocked: false,
    }

    console.log("user created", user);

    axios.post("http://localhost:5000/api/users/signup", user)
      .then(user => {
        console.log(user.data);
        navigate("/dashboard");
      }).catch((error) => {
        console.log(error.message);
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
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Sampatti Search Admin Panel</h1>
            <h2 className="text-xl md:text-2xl text-center text-gray-600 mb-4">Admin Sign Up</h2>
            <p className="text-sm md:text-base text-center text-gray-500 mb-6">Create an account to manage property listings, inquiries, and user accounts.</p>

            <form className="grid grid-cols-1" onSubmit={createUser}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">Name</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" value={name} onInput={(event: any) => setName(event.target.value)} type="text" id="name" name="name" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" value={email} onInput={(event: any) => setEmail(event.target.value)} type="email" id="email" name="email" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="mobileNumber">Contact Number</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" minLength={10} maxLength={10} value={mobileNumber} onInput={(event: any) => setMobileNumber(event.target.value)} type="text" id="mobileNumber" name="mobileNumber" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">Password</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" minLength={6} value={password} onInput={(event: any) => setPassword(event.target.value)} type="password" id="password" name="password" />
              </div>

              <button type="submit" disabled={!isFormValid()} className={`w-full ${isFormValid() ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-400"} text-white font-bold py-2 rounded`}>
                Sign Up
              </button>
            </form>

            <p className="mt-4 text-center text-gray-600">
              Already have an account? <Link to="/sign-in" className="text-blue-500 hover:underline">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;