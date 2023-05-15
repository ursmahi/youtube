import React from "react";
import {
  IconsHome,
  IconsVideoLibrary,
  IconsSubscription,
} from "../../icon-components/sidebar-icons/SidebarIconComponents";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const sideBarList = [
  { Icon: "", title: "Home", link: "/" },
  { Icon: "", title: "Shorts", link: "/" },
  { Icon: "", title: "Subscriptions", link: "/" },
  { Icon: "", title: "Trending", link: "/" },
  { Icon: "", title: "Shopping", link: "/" },
  { Icon: "", title: "Music", link: "/" },
  { Icon: "", title: "Movies", link: "/" },
  { Icon: "", title: "Live", link: "/" },
  { Icon: "", title: "Gaming", link: "/" },
  { Icon: "", title: "News", link: "/" },
  { Icon: "", title: "Sports", link: "/" },
  { Icon: "", title: "Learning", link: "/" },
  { Icon: "", title: "Fashion & Beauty", link: "/" },
  //   { icon: "", title: "", link: "/" },
];

const MinSlideBarCard = () => {
  const minSidebarItems = [
    { Icon: IconsHome, title: "Home", link: "/" },
    { Icon: IconsVideoLibrary, title: "Shorts", link: "/" },
    { Icon: IconsVideoLibrary, title: "Library", link: "/" },
    { Icon: IconsSubscription, title: "Subscriptions", link: "/" },
  ];
  return (
    <div className="flex flex-col items-center ">
      {minSidebarItems.map((item, index) => (
        <Link to={item.link} key={index}>
          <button className="px-3 py-4  hover:bg-gray-100 w-full rounded-lg flex flex-col items-center">
            <item.Icon className="w-7 h-6" />
            <span className="text-xs">{item.title}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

const SiderItemCard = ({ Icon, title, link }) => {
  return (
    <Link to={link}>
      <button className="p-2 flex items-center">
        <span className="mr-6">
          <IconsHome className="w-7 h-6" />
        </span>
        <span className="text-left text-md">{title}</span>
      </button>
    </Link>
  );
};
const Sidebar = () => {
  const menuState = useSelector((store) => store.app.isOpen);
  return (
    <>
      <div className=" w-full sticky top-20">
        {menuState === "homeOn" && (
          <div className="ml-6 w-52 ">
            {sideBarList.map((item, index) => {
              return (
                <div key={index} className="hover:bg-gray-100 rounded-xl">
                  <SiderItemCard {...item} key={index} />
                </div>
              );
            })}
          </div>
        )}
        {menuState === "homeOff" && (
          <div className="ml-1 mr-6">
            <MinSlideBarCard />
          </div>
        )}
        {menuState === "watchOff" && <></>}
      </div>
      <div className="h-full fixed top-[70px] bg-white">
        {
          menuState ==="watchOn" && <>
          <div className="ml-6 w-52 ">
            {sideBarList.map((item, index) => {
              return (
                <div key={index} className="hover:bg-gray-100 rounded-xl">
                  <SiderItemCard {...item} key={index} />
                </div>
              );
            })}
          </div>
          </>
        }
      </div>
    </>
  );
};

export default Sidebar;
/*
=> Siderbar
* Home
* Shorts
* Subscriptions
* Like Videos
* Explore
  * Trending
  * Shopping
  * Music
  * Movies
  * Live
  * Gaming
  * News
  * Sports
  * Learning
  * Beauty and Fashion
* More From Youtube
  * Youtbe Premium
  * Youtube studio
  * Youtube Music
  * Youtube Kids
* Settings
* Help
* Feedback

*/
