import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoggedOut } from "../myReducers";

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(LoggedOut(null, false));
    localStorage.removeItem("token");
    localStorage.removeItem("info");
    navigate("/");
  };

  return (
    <nav id="nav">
      <div>
        <h1 id="title">PlayFlix</h1>
      </div>
      <Link className="links" to="/Latest">
        <h3>Latest</h3>
      </Link>
      <Link className="links" to="/TopRated">
        <h3>Top Rated</h3>
      </Link>
      <Link className="links" to="/Recommended">
        <h3>Recommended</h3>
      </Link>
      <Link className="links" to="/Profile">
        <h3>Profile</h3>
      </Link>
      <Link className="links" to="/WatchList">
        <h3>Watch List</h3>
      </Link>

      <Button
        id="logoutButton"
        variant="contained"
        color="secondary"
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </nav>
  );
}

export default Nav;
