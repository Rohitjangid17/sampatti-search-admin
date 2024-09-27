import { useEffect } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  useEffect(() => {
    document.title = "Sampatti Search | Admin Sign Up - Create Your Account";
  }, []);

  return (
    <>
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 sm:w-4/5 mx-auto border border-solid border-gray-200 bg-white rounded-xl shadow">
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

            <form className="grid grid-cols-1 gap-6">
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">Admin Name</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Admin Email</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="mobileNumber">Contact Number</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" type="text" id="mobileNumber" name="mobileNumber" required />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">Password</label>
                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" type="password" id="password" name="password" required />
              </div>

              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
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
  );
}

export default Signup;