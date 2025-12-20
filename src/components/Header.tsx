import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import filmikeDarkLogo from "/filmike-dark-logo.png";
import filmikeNameLogo from "/filmike-name-logo-dark.png";
import { useEffect } from "react";
import { addUser, removeUser } from "@/utils/userSlice";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = useSelector((store: any) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log("error: ", error);
      });
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //const uid = user.uid;
        dispatch(
          addUser({
            uid: user.uId,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser(null));
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-20 text-white flex justify-between w-full px-6 py-5 bg-linear-to-b from-black">
      <img
        className={`${!user && "w-10"}`}
        src={!user ? filmikeDarkLogo : filmikeNameLogo}
        alt="Filmike logo"
      />

      {!user && (
        <p className="text-sm h-full font-light tracking-wide text-white/75">
          All rights are reserved by{" "}
          <span className="text-white font-bold">@Filmike</span>
        </p>
      )}

      {user && (
        <div className="flex items-center">
          <img
            src={
              user.photoURL
                ? user.photoURL
                : "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
            }
            alt="profile image"
            className="w-10 mr-4 rounded-3xl"
          />
          <button
            className="bg-red-500 px-3 py-2 text-sm rounded-md font-semibold cursor-pointer"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
