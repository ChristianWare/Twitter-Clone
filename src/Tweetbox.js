import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Tweetbox.css";

const Tweetbox = () => {
  return (
    <div className='tweetbox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' />
          <input placeholder="What's happening?" type='text' />
        </div>
        <input
          className='tweetBox__imageInput'
          placeholder='Optional: Enter image URL'
          type='text'
        />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
};

export default Tweetbox;
