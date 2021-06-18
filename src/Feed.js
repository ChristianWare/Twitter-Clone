import React from "react";
import Tweetbox from "./Tweetbox";
import "./Feed.css";
import Post from "./Post";

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
      <Post
        displayName='Chris Ware'
        username='chriswarereact'
        verified={true}
        text='hey it is working'
        avatart='https://images.unsplash.com/photo-1595429035839-c99c298ffdde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        image='https://media0.giphy.com/media/WZdlab0U3AkSc/giphy.gif'
      />
    
      {/* {Post}    */}
      {/* {Post}    */}
      {/* {Post}    */}
    </div>
  );
};

export default Feed;
