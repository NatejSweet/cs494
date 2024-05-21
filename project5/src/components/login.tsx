import { useUserContext, googleSignIn, logOut } from "../context/userContext";
import { useEffect, useState } from "react";

const Login = () => {
  const user = useUserContext();

  function handleLogOut() {
    logOut();
  }

  function handleGoogleSignIn() {
    googleSignIn();
  }

  return (
    <div style={{}}>
      <p>
        <b>login.tsx</b>
      </p>
      <div>
        {user ? (
          <button onClick={handleLogOut}>Log Out</button>
        ) : (
          <div>
            <p>
              <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
