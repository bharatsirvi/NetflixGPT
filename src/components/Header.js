import React, { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { DEFAULT_PROFLIE_LOGO, NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isScrolled, setIsScrolled] = useState(false);
   
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return user ? (
    <div
      className={`z-50 fixed top-0 left-0 w-full flex items-center justify-between px-12 py-3 transition-all duration-500 ${
        isScrolled
          ? "bg-neutral-950 shadow-md"
          : "bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-transparent"
      }`}
    >
      <div className="w-28">
        <img src={NETFLIX_LOGO} alt="logo" />
      </div>

      <div className="relative group">
        <div className="flex items-center cursor-pointer space-x-1 ">
          <img
            className=" w-8 rounded-md cursor-pointer"
            src={DEFAULT_PROFLIE_LOGO}
            alt="profile_logo"
          />
          <MdOutlineArrowDropDown
            size={25}
            className="text-white group-hover:rotate-180 transition-transform duration-200"
          />
        </div>
        <div className="absolute right-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 text-center text-white py-2  bg-black/80 shadow-md rounded  mt-2 min-w-[200px] transition-all duration-200">
          <ul className="text-sm p-2 ">
            <li className="p-2 hover:underline cursor-pointer ">
              <div className="flex items-center cursor-pointer space-x-2">
                <img
                  className="rounded-md cursor-pointer"
                  src={DEFAULT_PROFLIE_LOGO}
                  alt="profile_logo"
                />
                <p className="text-sm cursor-pointer hover:underline">
                  {user?.displayName}
                </p>
              </div>
            </li>
          </ul>
          <div className="mx-2 h-[0.5px] opacity-50 my-1 bg-gray-400" />
          <p
            onClick={handleSignOut}
            className="p-2 text-sm cursor-pointer hover:underline"
          >
            Sign out of Netflix
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="z-10 absolute px-8 py-2 bg-gradient-to-b from-black bg-opacity-60 w-full">
      <div>
        <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      </div>
    </div>
  );
};
export default Header;
