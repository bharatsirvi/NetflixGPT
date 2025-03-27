import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm);
  };
  return (
    <div >
      <Header />
      <div className="absolute bg-black">
        <img
          className="opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_large.jpg"
          alt="cover"
        />
      </div>

      <form className="w-3/12 absolute my-36 mx-auto left-0 right-0 px-12 py-12 bg-black text-white bg-opacity-70 rounded-md">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&  <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-2 w-full border border-gray-500  bg-white bg-opacity-5 rounded-md"
        /> }
       
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-2 w-full border border-gray-500  bg-white bg-opacity-5 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full border border-gray-500  bg-white bg-opacity-5 rounded-md"
        />
        <button className="p-2 my-4 bg-red-700 w-full rounded-md ">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span className="p-2">
          {isSignInForm ? "New to Netflix ? " : "Already register ? "}

          <span
            className="font-bold hover:cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </span>
        </span>
      </form>
    </div>
  );
};

export default Login;
