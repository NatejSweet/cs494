import { useUserContext } from "../context/userContext";

const Profile = () => {
  const user = useUserContext();
  console.log("user:", user);

  return (
    <div>
      <p>
        <b>profile.tsx</b>
      </p>
      {user ? (
        <div>
          <h3> User: {user?.displayName}</h3>
          <h3> Email: {user?.email}</h3>
          {/* <h3> Occupation: {user?.occupation}</h3>
          <h3> Organization: {user?.organization}</h3>
          <h3> LinkedIn: {user?.linkedIn}</h3>
          <h3> Github: {user?.github}</h3>
          <button onclick={editProfile}>Edit Profile</button> */}
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
