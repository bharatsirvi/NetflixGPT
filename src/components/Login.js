import React, {  useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData, checkValidateName } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_COVER_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = (e) => {
    const validateNameMsg = !isSignInForm
      ? checkValidateName(name.current.value)
      : null;
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMsg(validateNameMsg || message);

    if (validateNameMsg || message) return;

    // sign in or sign up logic

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          var user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch((addUser({
                uid,
                email,
                displayName
              })))
             
            })
            .catch((error) => {
              var errorMessage = error.message;
              setErrorMsg(errorMessage);
            });
        })
        .catch((error) => {
          var errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).then((userCredential) => {
        //   const user = userCredential.user;
        })
        .catch((error) => {
        //   const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm);
  };
  return (
    <div>
     <Header/>
      <div className="absolute bg-black h-full">
        <img
          className="opacity-50"
          src={NETFLIX_COVER_IMAGE}
          alt="cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute my-36 mx-auto left-0 right-0 px-12 py-12 bg-black text-white bg-opacity-70 rounded-md"
      >
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full border border-gray-500  bg-white bg-opacity-5 rounded-md"
          />
        )}

        <input
          ref={email}
          autoComplete="email"
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-2 w-full border border-gray-500  bg-white bg-opacity-5 rounded-md"
        />
        <input
          ref={password}
          autoComplete="current-password"
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full border border-gray-500  bg-white bg-opacity-5 rounded-md"
        />

        {errorMsg && <p className="text-red-500 text-sm my-1">{errorMsg}</p>}
        <button
          onClick={handleButtonClick}
          className="p-2 my-4 bg-red-700 w-full rounded-md "
        >
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
