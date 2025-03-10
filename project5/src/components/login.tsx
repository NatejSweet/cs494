import { useUserContext, googleSignIn, logOut } from "../context/userContext";
import { Button, Typography, Box } from '@mui/material';
const Login = () => {
  const user = useUserContext();

  function handleLogOut() {
    logOut();
  }

  function handleGoogleSignIn() {
    googleSignIn();
  }

  return (
      <Box>
        {user ? (
          <Button sx={{ border: '1px solid #000' }} variant="contained" onClick={handleLogOut}>Log Out</Button>
        ) : (
            <Button sx={{ border: '1px solid #000' }} variant="contained" onClick={handleGoogleSignIn}>Sign in with Google</Button>
        )}
      </Box>
  );
}

export default Login;
