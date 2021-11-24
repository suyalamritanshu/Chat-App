import React from 'react'
import video from "../assets/video.png";
import phone from "../assets/phone.png";

export default function Avatar({ user, showName }) {
    return (
        <div className="avatar-component">
            
            <img className="avatar" src={user.avatar} alt="" />
            {showName && <h3 className="avatar-title">{user.name}</h3>}
            {/* <img  src={video} alt="" />
            <img  src={phone} alt="" /> */}
        </div>
    )
}
