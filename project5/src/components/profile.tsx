import { useUserContext, useUserDataContext } from "../context/userContext";
import { useEffect, useState } from "react";
import { UserData } from "../types/userData";
import { Button, TextField, Typography, Avatar, Container } from '@mui/material';

const Profile = () => {
  const user = useUserContext();
  const {userData, updateUserData, resetUserData, setOccupation, setOrganization, setLinkedIn, setGithub} = useUserDataContext();
  const [edit, setEdit] = useState(false);

  function editProfile() {
    setEdit(!edit);
  }
  function saveProfile() {
    setEdit(!edit);
    updateUserData(userData);
  }

  function cancelEditProfile() {
    setEdit(!edit);
    resetUserData();
  }

  return (
    <Container sx={{margin: '10px'}}>
      {user ? (
        <Container sx={{ display: 'flex'}}>
          <Container sx={{marginBottom: '3px', fontSize: '20px'}}>
            <Avatar sx={{height: "50px", width: "50px"}} src={user?.photoURL ? user.photoURL : ""} alt="User Profile" />
            <Typography variant="h5"> {user?.displayName}</Typography>
            <Typography variant="h5"> {user?.email}</Typography>
          </Container>
          {edit ? 
            <Container sx={{ fontSize: '20px', display: 'flex', flexDirection: 'column'  }}>
              <TextField label="Occupation" value={userData?.occupation} onChange={(e) => setOccupation(e.target.value)} />
              <TextField label="Organization" value={userData?.organization}  onChange={(e) => setOrganization(e.target.value)}/>
              <TextField label="LinkedIn" value={userData?.linkedIn}  onChange={(e) => setLinkedIn(e.target.value)}/>
              <TextField label="Github" value={userData?.github}  onChange={(e) => setGithub(e.target.value)}/>
              <Container>
                <Button variant="contained" onClick={saveProfile}>Save</Button>
                <Button variant="contained" onClick={cancelEditProfile}>Cancel</Button>
              </Container>
            </Container> : 
            <Container sx={{ fontSize: '20px' }}>
              <Typography variant="h5"> Occupation: {userData?.occupation}</Typography>
              <Typography variant="h5"> Organization: {userData?.organization}</Typography>
              <Typography variant="h5"> LinkedIn: {userData?.linkedIn}</Typography>
              <Typography variant="h5"> Github: {userData?.github}</Typography> 
              <Button variant="contained" onClick={editProfile}>Edit Profile</Button> 
            </Container>
          }
        </Container>
      ) : (
        <Container>
        </Container>
      )} 
    </Container>
  );
};
export default Profile;
