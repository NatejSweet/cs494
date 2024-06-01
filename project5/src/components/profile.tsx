import { useUserContext } from "../context/userContext";
import { useEffect } from "react";

const Profile = () => {
  const user = useUserContext();
  console.log("user:", user);

  useEffect(() => {
    console.log("user.photoUrl:", user?.photoURL);
  }, [user]);

  return (
    <div>
      <p>
        <b>profile.tsx</b>
      </p>
      {user ? (
        <div>
          <h3> User: {user?.displayName}</h3>
          <h3> Email: {user?.email}</h3>
          <img src={user?.photoURL ? user.photoURL : ""} alt="User Profile" />
          <h3> Occupation: {user?.occupation}</h3> // Uncomment this line
          <h3> Organization: {user?.organization}</h3> // Uncomment this line
          <h3> LinkedIn: {user?.linkedIn}</h3> // Uncomment this line
          <h3> Github: {user?.github}</h3> // Uncomment this line
          <button onclick={editProfile}>Edit Profile</button> // Uncomment this
          line
        </div>
      ) : (
        <div>
          <h3> User: Not logged in</h3>
        </div>
      )}
    </div>
  );
};

export default Profile;
