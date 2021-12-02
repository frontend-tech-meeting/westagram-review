/** @format */

import React, { useEffect, useState } from "react";
import "./Main.scss";
import Comment from "../Comment/Comment";

function Main() {
  const [reply, setReply] = useState("");
  const [submitReply, setSubmitReply] = useState([]);
  const [usersId, setUsersId] = useState(0);

  const getReply = (e) => {
    setReply(e.target.value);
  };

  const submit = () => {
    if (reply === "") {
      return;
    } else {
      setSubmitReply(submitReply.concat({ userId: usersId, userReply: reply }));
      setUsersId(usersId + 1);
      setReply("");
    }
  };
  console.log(submitReply);
  const comment = submitReply.map((ele, index) => {
    return <li key={index}>{ele.userReply}</li>;
  });

  useEffect(() => {
    fetch("http://localhost:3000/data/commentData.json")
      .then((res) => res.json())
      .then((data) => {
        setSubmitReply(data);
      });
  }, []);
  return (
    <div>
      <h1>{reply}</h1>
      <input value={reply} onChange={getReply} />
      <button onClick={submit}>클릭</button>
      <ul>
        {/* {submitReply.map((reply, index) => (
          <li key={index}>{reply.content}</li>
        ))} */}
      </ul>
      <ul>{comment}</ul>
    </div>
  );
}

export default Main;
