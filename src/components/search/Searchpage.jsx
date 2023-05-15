import React, { useEffect } from "react";
import { YouTube } from "youtube-sr";

const SearchItemCard = () => {
  return (
    <>
      <div className="w-full bg-red-500">
        
      </div>
    </>
  );
};
const Searchpage = () => {
  const getSearchResuslts = async()=>{
    const searchData = await YouTube.search("telugu")
    .then((data)=>{
      console.log(data)

    }).catch((error)=>{
      // console.log(error)
    })
  }
  useEffect(()=>{
    getSearchResuslts()
  },[])
  return (
    <>
      <SearchItemCard />
    </>
  );
};

export default Searchpage;
