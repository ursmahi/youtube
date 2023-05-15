import React, { useEffect, useState } from "react";
import { YouTube } from "youtube-sr";
import VideoCard from "./VideoCard";
import ShimmerVideoCard from "./ShimmerVideoCard";
import RecomendedList from "./RecomendedList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { menuSetDefault,toogleMenu } from "../../utils/redux/appSlice";
const Home = () => {
  const [homePageVideos, setHomePageVideos] = useState([]);
  const menuState = useSelector((store) => store.app.isOpen);
  const dispatch = useDispatch();
  const handleMenu = () => {
    const path = location.pathname;
    console.log(`path at home page : ${path}`);
    console.log(menuState);
    if (path === "/" && (menuState === "homeOn" || menuState === "homeOff")) {
      dispatch(toogleMenu());
    }
    else if (path === "/") {
      console.log("logging");
      dispatch(menuSetDefault());
    }
  };
  useEffect(() => {
    handleMenu()
    fetchHomePageData();
  }, []);
  const fetchHomePageData = async () => {
    YouTube.homepage()
      .then((data) => {
        setHomePageVideos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <RecomendedList />
      <div className="flex flex-wrap space-x-5 ">
        {homePageVideos.length > 0 ? (
          <>
            {homePageVideos.map((item, index) => {
              return (
                <Link to={`/watch?v=${item.id}`} key={item.id}>
                  <VideoCard homePageVideos={item} />
                </Link>
              );
            })}
          </>
        ) : (
          <>
            {Array(15)
              .fill(10)
              .map((item, index) => (
                <ShimmerVideoCard key={index} />
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
