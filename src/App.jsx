import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Sign from "./components/Sign";
import Latest from "./innerComponent/Latest";
import TopRated from "./innerComponent/TopRated";
import Recommended from "./innerComponent/Recommended";
import Profile from "./innerComponent/Profile";
import WatchList from "./innerComponent/WatchList";
import Products from "./components/Products";
import { useSelector } from "react-redux";

function App() {
  const tokenValue = useSelector((state) => state.token);
  // console.log("Token Data=>", tokenValue);
  // console.log("Tokenval==>", tokenValue.token);
  // console.log("isLogVal==>", tokenValue.isLog);
  const token = localStorage.getItem("token");
  console.log("tkn", token);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/Sign" element={<Sign />} />
        {tokenValue.isLog || token ? (
          <>
            <Route path="/" element={<Products />}>
              <Route path="Latest" element={<Latest />} />
              <Route path="TopRated" element={<TopRated />} />
              <Route path="Recommended" element={<Recommended />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="WatchList" element={<WatchList />} />
            </Route>
          </>
        ) : (
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
