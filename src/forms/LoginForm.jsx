import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col">
        <input
          type="text"
          placeholder="Email"
          className="bg-gray-100 px-2 py-3 text-sm border border-gray-400 w-full rounded-sm outline-0"
        />
        <input
          type="text"
          placeholder="Password"
          className="bg-gray-100 px-2 py-3 text-sm border border-gray-400 w-full rounded-sm outline-0"
        />
      </div>

      <button className="w-full bg-blue-600 text-white text-sm font-semibold rounded-3xl py-3">
        Sign In
      </button>

      <div className="flex flex-col gap-2">
        <button className="w-full flex justify-center items-center gap-2 border border-gray-300 text-sm py-2 rounded-sm">
          <FaFacebook />
          <p>Sign up with facebook</p>
        </button>
        <button className="w-full flex justify-center items-center gap-2 border border-gray-300 text-sm py-2 rounded-sm">
          <FaGoogle />
          <p>Sign up with Google</p>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
