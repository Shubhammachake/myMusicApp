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
      <div className="a">
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
      </div>
      <div className="b">
        <input
          type="text"
          name="search"
          placeholder="Enter Movie Name "
          style={{
            width: "250px",
            backgroundColor: "white",
            borderRadius: "5px",
            height: "32px",
            textAlign: "center",
          }}
        />
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </nav>
  );
}

export default Nav;
