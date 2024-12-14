import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();

  const handleGOogleSignIn = () => {

    signInWithPopup(auth, provider)

    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error =>{
      console.log('error', error.message);
    })
    
    // console.log("Google Authentication will come soon");
  };

  return (
    <div>
      <button
        className="flex items-center justify-center btn mt-5"
        onClick={handleGOogleSignIn}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
