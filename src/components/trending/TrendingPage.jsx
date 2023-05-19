import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { YouTube } from "youtube-sr";
import { menuSetDefault } from "../../utils/redux/appSlice";
import { Link } from "react-router-dom";
import { convertNumber } from "../../utils/helperfunctions";

const TrendingItemCard = ({ trendingPageVideos }) => {
  const {
    title,
    uploadedAt,
    thumbnail,
    views,
    channel,
    durationFormatted,
    description,
  } = trendingPageVideos;
  return (
    <div className=" mb-9 grid grid-cols-12 w-11/12  hover:cursor-pointer">
      <div className="relative col-span-4">
        <img className="object-cover rounded-md " src={thumbnail?.url} alt="" />
        <div className="absolute  p-1 bottom-0 inset-x-0 flex justify-end">
          <p className=" bg-black text-white text-end w-fit rounded-md px-0.5">
            {durationFormatted}
          </p>
        </div>
      </div>
      {/* <div className=""></div> */}
      <div className="m-2 flex col-span-8">
        <div className="">
          <div className="h-fit overflow-hidden font-semibold">{title}</div>
          <div className="flex opacity-80 mt-5">
            <p className="text-sm mr-3">{convertNumber(views)} views</p>
            <p className="text-sm">{uploadedAt}</p>
          </div>
          <div className="flex items-center mt-5">
            <img
              alt="icon"
              src={channel?.icon?.url}
              className="w-10 h-10 rounded-full"
            />
            <p className="opacity-80 text-md ml-4">{channel?.name}</p>
          </div>
          {/* <div className="leading-6 h-24   overflow-hidden font-semibold">
            {description}
          </div> */}
        </div>
      </div>
    </div>
  );
};
const TrendingPage = () => {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [trendCount, setTrendCount] = useState(1)
  const dispatch = useDispatch();
  const getSearchResuslts = async () => {
    const searchData = await YouTube.trending(
    //   { type: "video" },
    //   { mode: "cros" }
    )
      .then((data) => {
        if(data.length>0){
          setTrendCount(data.length)
          setTrendingVideos(data);
        }
        else{
          setTrendCount(0)
        }
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
  return(
    <div className="">
    {trendingVideos.length > 0 && trendCount > 0 ? (
      trendingVideos.map(
        (item) => {
          return (
            <Link to={`/watch?v=${item.id}`} key={item.id}>
              <TrendingItemCard trendingPageVideos={item} />;
            </Link>
          );
        }
      )
    ) : (
      <>{trendCount === 0 ? <p>No results foud</p> : <></>}</>
    )}
  </div>
  )
};

export default TrendingPage;
