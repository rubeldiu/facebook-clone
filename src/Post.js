import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import {ExpandMoreOutlined}from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Post({profilePic,image,username,timestamp,message}) {
    return (
        <div className='post'>
            <div className="post_top">
                <Avatar src={profilePic}
                className='post_avatar'

                />
                <div className="post__topInfo">
                    <h3>{username}</h3>
    {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
    <p>{Date().toLocaleString()}</p>
                </div>
            </div>
            <div className="post__bottom">
    <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlinedIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>
                
                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Post