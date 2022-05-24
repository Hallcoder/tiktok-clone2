import React from 'react';
import Posts from '../components/posts';
import SideBar from './../components/sideBar';
import "../css/home.css";
import NavBar from './../components/common/navBar';
function Home() {
    return ( 
         <div className="w-8/12 m-auto">
        <NavBar />
        <div className="flex flex-row m-1 ">
        <div className="sticky top-0 w-4/12">
        <SideBar  />
        </div>
          <Posts />
        </div>
      </div>
     );
}

export default Home;