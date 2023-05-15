import React from "react";
import { convertNumber } from "../../utils/helperfunctions";
import { Link } from "react-router-dom";
const RecomendedVideoCard = ({recomendedVideos}) => {
    const {title,uploadedAt,thumbnail,views,channel,durationFormatted,id} = recomendedVideos
    return (
    <Link to={`/watch?v=${id}`}>
    <div className=" mb-9 mr-3 grid grid-cols-12 w-[348px] justify-items-center hover:cursor-pointer">
      <div className="relative mr-3  h-full col-span-6 bg-gray-200">
      <img
        className="object-cover rounded-md "
        src={thumbnail?.url}
        alt=""
        />
      <div className="absolute  p-1 bottom-0 inset-x-0 flex justify-end">
        <p className=" bg-black text-white text-end w-fit rounded-md px-0.5">
          {durationFormatted}
          </p>
        </div>
        </div>
      <div className="mt-2 flex col-span-6">
        <div className="">
            <div className="leading-6 h-12   overflow-hidden font-semibold">
            {/* {title.length >60 ? title.slice(0,55)+" ...": title} */}
            {title}
            </div>
          <p className="opacity-80 text-sm">{channel?.name}</p>
          <div className="flex items-center opacity-80">
            <p className="text-sm mr-1">{convertNumber(views)} views</p>
            <p className="text-sm">
           {uploadedAt}
            </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default RecomendedVideoCard;
