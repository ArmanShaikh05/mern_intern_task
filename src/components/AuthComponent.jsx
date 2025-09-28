import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import AuthBg from "../assets/authBg.png";
import LoginForm from "../forms/LoginForm";
import SignUpForm from "../forms/SignUpForm";

const AuthComponent = ({ onClose }) => {
  const [authMode, setAuthMode] = useState("login");

  return (
    <div className="bg-white w-2xl lg:w-4xl md:flex flex-col rounded-lg overflow-hidden hidden">
      {/* Auth Notice */}
      <p className="bg-green-100 text-green-600 p-4 text-sm text-center">
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼
      </p>

      {/* Auth Header */}
      <div className="w-full flex justify-between items-center px-8 mt-2">
        <h2 className="text-2xl font-semibold">
          {authMode === "login" ? "Sign In" : "Create Account"}
        </h2>
        {authMode === "signin" ? (
          <p className="text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setAuthMode("login")}
            >
              Sign In
            </span>
          </p>
        ) : (
          <p className="text-sm">
            Dont have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setAuthMode("signin")}
            >
              Create one{" "}
            </span>
          </p>
        )}
      </div>

      {/* Auth Form */}
      <div className="w-full grid grid-cols-2 py-6 px-8">
        {authMode === "login" ? <LoginForm /> : <SignUpForm />}
        <div className="w-full px-2">
          <img src={AuthBg} alt="authbg" />
          <p className="text-xs px-2 text-gray-500">
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        </div>
      </div>

      {/* Close Button */}
      <div className="fixed -right-2 -top-8 bg-gray-200 size-6 flex items-center justify-center rounded-full cursor-pointer" onClick={onClose}>
        <RxCross2  size={20}/>
      </div>
    </div>
  );
};

export default AuthComponent;
