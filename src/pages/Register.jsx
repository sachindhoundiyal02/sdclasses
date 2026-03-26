import { Link } from "react-router-dom";



export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
          📝 Register
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition">
            Register
          </button>
        </div>

        <p className="text-center text-gray-400 mt-4 text-sm">
          Pehle se account hai?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login karo
          </Link>
        </p>

      </div>
    </div>
  );
}