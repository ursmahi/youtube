import React, { useState } from "react";
import { convertNumber } from "../../utils/helperfunctions";

const VideoDescription = ({ details }) => {
  const [showMore, setShowMore] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 470,
      behavior: 'smooth',
    })
  }
  return (
    <div className="bg-gray-100 rounded-lg p-3 mt-3">
      <div className="flex mb-5">
        <p className="font-semibold">{convertNumber(details?.views)} Views</p>
        <p className="font-semibold ml-5">{details?.uploadedAt} </p>
      </div>
      <div
        className={`leading-6 overflow-hidden ${showMore ? "h-fit" : "h-12"} `}
      >
        {details?.description?.split("\n").map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <button
      className="mt-3 font-semibold"
        onClick={() => {
          setShowMore(!showMore);
          if(showMore){
            scrollToTop()
          }
        }}
      >
       {
        showMore?'Show less':'Show more'
       }
      </button>
    </div>
  );
};

export default VideoDescription;
