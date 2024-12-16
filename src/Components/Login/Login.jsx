import { FacebookAuthProvider, getAuth, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState();
  const auth = getAuth(app);

  // console.log(app);



  //Google Authentication Integration
  const GoogleProvider = new GoogleAuthProvider();

  const handleGOogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const LogUser = result.user;
        // console.log(LogUser);
        setUser(LogUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });

    // console.log("Google Authentication will come soon");
  };


  //GitHub Authentication Integration
  const GitHubProvider = new GithubAuthProvider();

  const handleGitSignIn = () => {
    signInWithPopup(auth, GitHubProvider)
      .then((result) => {
        const LogUser = result.user;
        // console.log(LogUser);
        setUser(LogUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };


  //Facebook Authentication Integration
  const FacebookProvider = new FacebookAuthProvider();

  const HandleFacebookSignIn = () =>{
    signInWithPopup(auth, FacebookProvider)
    .then(result =>{
      const LogUser = result.user;
      // console.log(LogUser);
      setUser(LogUser);
    })
    .catch(error =>{
      console.log("error", error.message)
    })
  }

  //Twitter Authentication Integration

  const TwitterProvider = new TwitterAuthProvider();

  const HandleTwitterSignIn = () =>{
    signInWithPopup(auth, TwitterProvider)
    .then(result => {
      const LogUser = result.user;
      // console.log(LogUser);
      setUser(LogUser);
    })
    .catch(error =>{
      console.log("error", error.message)
    })
  }

  //SgnOut
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
        console.log("Signout Successful", result);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    // {user ? Signout : Sign in} make the signin and out conditional
    <div className="flex items-center justify-evenly mt-5">
      {user ? 
      ( <button className=" btn mt-5" onClick={handleSignOut} > Sign Out </button> ) : 
      (
        <>
          <button className="btn mt-5" onClick={handleGOogleSignIn} >  Google Sign In </button>
          <button className="btn mt-5" onClick={handleGitSignIn} > GitHub Sign In </button>
          <button className="btn mt-5" onClick={HandleFacebookSignIn} > Facebook Sign In </button>
          <button className="btn mt-5" onClick={HandleTwitterSignIn} > Twitter Sign In </button>
        </>
      )}

      {user && (
        <div>
          <h3> Name : {user.displayName}</h3>
          <h3> Email : {user.email}</h3>
          <p><img src={user.photoURL}/></p>
        </div>
      )}
    </div>
  );
};

export default Login;
