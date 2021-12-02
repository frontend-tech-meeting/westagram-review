import React, { useEffect, useState } from "react";
import "./Main.scss";
import Comment from "../Comment/Comment";
import { config } from "../Login/config";

function Main() {
  const [userInfo, setUserInfo] = useState({ username: "" });

  useEffect(() => {
    fetch(config.api + "/profile", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => setUserInfo({ username: res.username }));
  }, []);

  return (
    <div>
      {userInfo.username}
      {/* <h1>{reply}</h1>
      <input value={reply} onChange={getReply} />
      <button onClick={submit}>클릭</button> */}
      <ul>
        {/* {submitReply.map((reply, index) => (
          <li key={index}>{reply.content}</li>
        ))} */}
      </ul>
      {/* <ul>{comment}</ul> */}
    </div>
  );
}

export default Main;
