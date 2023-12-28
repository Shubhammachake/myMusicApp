import { useSelector } from "react-redux";

function Profile() {
  // const credentials = useSelector((state) => state.token);
  // console.log("my Credentials=>", credentials.userCredentials);
  const info = localStorage.getItem("info");
  return (
    <div id="cont">
      <div className="user">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="User"
          className="userImage"
        />
      </div>
      <h3>Email: {info}</h3>
      <h3>Password: **********</h3>
    </div>
  );
}
export default Profile;
