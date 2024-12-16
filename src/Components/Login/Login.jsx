import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState();

  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();

  const handleGOogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const LogUser = result.user;
        console.log(LogUser);
        setUser(LogUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });

    // console.log("Google Authentication will come soon");
  };

  return (
    <div>
      <button className="flex items-center justify-center btn mt-5"
        onClick={handleGOogleSignIn}>

        Sign In

      </button>
      {user && 
        <div>
          <h3> Name : {user.displayName}</h3>
          <h3> Email : {user.email}</h3>
        </div>
      }

    
    </div>
  );
};

export default Login;
