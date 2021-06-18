import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Repeat,
  VerifiedUser,
  Publish,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=617&q=80' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Harley Quin{" "}
              <span className='post__headerSpecial'>
                <VerifiedUser className='post-badge' />
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>I challage you to build a twitter clone with react.</p>
          </div>
        </div>
        <img
          src='https://media2.giphy.com/media/VzvwdRvla47jyjwLZR/200.gif'
          alt='iron man'
        />
        <div className='post__footer'>
          <ChatBubbleOutline fontSize='small' />
          <Repeat fontSize='small' />
          <FavoriteBorder fontSize='small' />
          <Publish fontSize='small' />
        </div>
      </div>
    </div>
  );
};

export default Post;
