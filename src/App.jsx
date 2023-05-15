import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import Home from "./components/Home/Home";
import Watchpage from "./components/watchpage/Watchpage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body";
import Searchpage from "./components/search/Searchpage";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Body />,
      children:[
        {
          path:'/',
          element: <Home />,
          children:[]
        },
        {
          path:"watch",
          element: <Watchpage />,
          children:[]
        },
        {
          path:"search",
          element: <Searchpage />,
          children:[]
        }
      ]
    },
  ])
  return (
    <div className="">
      <Provider store={store}>

          <RouterProvider router={router}/>

      </Provider>
    </div>
  );
}

export default App;

/*
  => Header
    * Menu Icon
    * Logo
    * Search
    * Account
  => Top Buttons
    * All
    * Live
    * Gaming
    * Music ..etc
  => HomePage Videos
    => Video card List
    => shorts
    => Recomended Movies to Buy
    => Again Videos list
  => Video Player Page
    =>Center Video
      => Channel Detials
    => Recomended videos
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
