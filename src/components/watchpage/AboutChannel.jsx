import React, { useState } from "react";
import { YouTube } from "youtube-sr";
import { convertNumber } from "../../utils/helperfunctions";
import VideoDescription from "./VideoDescription";
const AboutChannel = ({videoid}) => {
  const [channelDetails,setChannelDetails] = useState({});
  const [videoDetials,setvideoDetials] = useState([])

  const getVideoDetails = async () => {
    const videoData = await YouTube.getVideo(
      `https://www.youtube.com/watch?v=${videoid}`
    )
      .then((data) => {
        setChannelDetails(data.channel);
        setvideoDetials(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    getVideoDetails();
  }, [videoid]);
  return (
    <div className="mt-5">
      <h2 className="font-semibold text-xl">{videoDetials?.title}</h2>
      <div className="grid grid-cols-12 mt-4">
        <div className="col-span-6 flex items-center gap-8">
          <img
            alt="user-icon"
            src={channelDetails?.icon?.url}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold"> {channelDetails?.name}</h3>
            <p className="text-sm">
              {convertNumber(channelDetails?.subscribers)} subscribers
            </p>
          </div>
          <button className="bg-black text-white rounded-full px-2.5 py-1.5">
            Subscribe
          </button>
        </div>
        <div className="col-span-6">
          <button className="hover:rounded-full hover:bg-gray-200 p-2">
            {/* <div className="flex">
              <PhThumbsUpThin className="text-2xl" />
              <p>{comments?.likeCount==0?'':comments?.likeCount}</p>
              </div> */}
          </button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      <VideoDescription details={videoDetials} />
    </div>
  );
};

export default AboutChannel;
