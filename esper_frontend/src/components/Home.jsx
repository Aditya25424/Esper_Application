import React from "react";
import Navbar from "./Navbar";
import Trending from "./trendingtopics";
import Posts from "./Posts";


const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="homemid">
        {/* Left Sidebar */}
        <div className="sidebarleft">
          <div className="tren">
            <h2>Trending Topics</h2>
            <Trending />
          </div>

          <div className="authors">
            <h2>Top Authors</h2>
            <Trending />
          </div>
        </div>

        {/* Center Feed */}
        <Posts />

        {/* Right Sidebar */}
        <div className="sidebarright">
          <div className="tren">
            <h2>Trending Topics</h2>
            <Trending />
          </div>

          <div className="authors">
            <h2>Top Authors</h2>
            <Trending />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
