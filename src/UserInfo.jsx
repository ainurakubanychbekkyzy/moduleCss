import React from "react";
import Avatar from "./Avatar";

const UserInfo = (props) => {
  return (
    <div className="userInfo">
      <Avatar url={props.author.avatarUrl} name={props.author.name}/>
      <div className="userInfo-name">{props.author.name}</div>
    </div>
  );
};

export default UserInfo;
