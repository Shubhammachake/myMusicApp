import { Outlet } from "react-router-dom";
import Nav from "./nav";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

export default function Products() {
  // const visibleVal = useSelector((state) => state.visible);
  // console.log("visibleVal=>", visibleVal.visible);

  // console.log("MOvies", movie);
  return (
    <>
      <Nav />
      <Outlet />
      {/* <div className="imgContainer">
        <img
          className="bollywood"
          src="https://t3.ftcdn.net/jpg/05/88/58/84/360_F_588588479_ovLQK1dhZCyzSR4I8P414zsqrWK58LJk.jpg"
          alt="error"
        />
      </div> */}
    </>
  );
}
