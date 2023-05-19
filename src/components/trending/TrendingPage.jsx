import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { YouTube } from "youtube-sr";
import { menuSetDefault } from "../../utils/redux/appSlice";
const TrendingPage = () => {
  const [trendingVideos, setTrendingVideos] = useState();
  const dispatch = useDispatch();
  const getSearchResuslts = async () => {
    const searchData = await YouTube.trending(
    //   { type: "video" },
    //   { mode: "cros" }
    )
      .then((data) => {
        setTrendingVideos(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const setMenuDefault = () => {
    dispatch(menuSetDefault());
  };

  useEffect(() => {
    setMenuDefault();
    getSearchResuslts();
  }, []);
  return <div>TrendingPage</div>;
};

export default TrendingPage;
