import React, { useState } from "react";
import YoutubeLog from "./../../assets/youtube-logo.png";
import IconsMenu from "../../icon-components/IconsMenu";
import IconsUser from "../../icon-components/IconsUser";
import IconsSearch from "../../icon-components/IconsSearch";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu, toogleWatchMenu } from "../../utils/redux/appSlice";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuState = useSelector((store) => store.app.isOpen);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const handleMenu = () => {
    const path = location.pathname;
    // console.log(`path : ${path}`);
    // console.log(menuState);
    if (path === "/" && (menuState === "homeOn" || menuState === "homeOff")) {
      dispatch(toogleMenu());
    }
    if (path === "/search") {
      dispatch(toogleMenu());
    }
    if (path === "/watch" && menuState === "watchOn") {
      dispatch(toogleWatchMenu("watchOff"));
    }
    if (path === "/watch" && menuState === "watchOff") {
      dispatch(toogleWatchMenu("watchOn"));
    }
  };
  const sendSearchRequest=()=>{
    if(searchQuery.length>=3){
      console.log(`Query : ${searchQuery}`)
      navigate(`/search?query=${searchQuery}`)
    }
  }
  return (
    <>
      <div className="h-18 grid items-center grid-cols-12 p-2 pt-4 pb-4">
        <div className="col-span-3 flex items-center ml-6">
          <IconsMenu
            className="h-8 w-6 mr-6 hover:cursor-pointer"
            onClick={() => {
              handleMenu();
            }}
          />

          <img alt="logo youtube" src={YoutubeLog} className="w-24 h-6" />
        </div>
        <div className="col-span-7 flex justify-center">
          <div className="w-9/12 border border-gray-400 p-1 rounded-l-full focus-within:border-blue-500 h-10">
            <input
              placeholder="search"
              className="w-full pl-3 outline-none text-lg"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onKeyDown={(event) => {
                if(event.key==='Enter'){
                  sendSearchRequest()
                }
                }}
            />
          </div>
          <button
            onClick={() => {
              sendSearchRequest()
            }}
            className="rounded-r-full w-14 flex justify-center items-center border border-gray-400 hover:border-gray-500 opacity-50 hover:opacity-80"
          >
            <IconsSearch className="w-8 h-8" />
          </button>
        </div>
        <div className="col-span-2 flex justify-end">
          <IconsUser className="h-10 w-10 opacity-70 hover:opacity-95 mr-6" />
        </div>
      </div>
    </>
  );
};

export default Header;
