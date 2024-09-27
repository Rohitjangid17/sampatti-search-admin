import { useEffect } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    useEffect(() => {
        document.title = "Sampatti Search | Forgot Password - Reset Your Account Password";
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
                        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Forgot Password</h1>
                        <h2 className="text-xl md:text-2xl text-center text-gray-600 mb-4">Reset Your Password</h2>
                        <p className="text-sm md:text-base text-center text-gray-500 mb-6">Enter your email address to receive password reset instructions.</p>

                        <form className="grid grid-cols-1 gap-6">
                            <div className="mb-4">
                                <label className="block text-gray-700" htmlFor="email">Email</label>
                                <input className="mt-1 block w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
                            </div>

                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                                Send Reset Link
                            </button>
                        </form>

                        <p className="mt-4 text-center text-gray-600">
                            Remembered your password? <Link to="/sign-in" className="text-blue-500 hover:underline">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;