import React from "react";
import img from "./ff.jpg";
const ProfilePhoto = () => {
  return (
    <div>
      <span> MY PROFILE</span>
      <div className={"about img flex"}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ProfilePhoto;
