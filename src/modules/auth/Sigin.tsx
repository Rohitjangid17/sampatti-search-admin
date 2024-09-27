import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sigin = () => {
  useEffect(() => {
    document.title = "Sampatti Search | Sign In - Access Your Real Estate Dashboard";
  }, []);

  return (
    <>
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 sm:w-4/5 mx-auto border border-solid border-gray-200 bg-white rounded-xl shadow">

          {/* Image Section - Hidden on Small Screens */}
          <div className="hidden md:flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjc4NzM5NzMz&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Real Estate"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>

          {/* Form Section */}
          <div className="p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Sampatti Search</h1>
            <h2 className="text-xl md:text-2xl text-center text-gray-600 mb-4">User Sign In</h2>
            <p className="text-sm md:text-base text-center text-gray-500 mb-6">Sign in to access your account and manage your properties.</p>

            <form className="grid grid-cols-1 gap-6">
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">Password</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" type="password" id="password" name="password" required />
              </div>

              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
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

export default Sigin;
