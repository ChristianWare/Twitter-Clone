import React from "react";
import Tweetbox from "./Tweetbox";
import "./Feed.css";

const Feed = () => {
  return (
    <div className='feed'>
      {/* {Header}    */}
      <div className='feed__header'>
        <h2>Home</h2>
      </div>

      {/* {TweetBox}    */}
      <Tweetbox />

      {/* {Post}    */}
      {/* {Post}    */}
      {/* {Post}    */}
      {/* {Post}    */}
    </div>
  );
};

export default Feed;
