/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { config } from "./config";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPw: "",
  });
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://westagram-signup.herokuapp.com/signup", {})
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  const { userId, userPw } = userInfo;
  const submitUserId = (e) => {
    setUserInfo({
      ...userInfo,
      userId: e.target.value,
    });
  };

  const submitUserPassword = (e) => {
    setUserInfo({
      ...userInfo,
      userPw: e.target.value,
    });
  };

  // const goToMain = () => {
  //   userId.includes("@") && userPw.length >= 5
  //     ? navigate("/main")

  // };

  return (
    <div className='login'>
      <div className='loginBoxContainer'>
        <h1 className='instagramTitle'>instagram</h1>

        <div className='inputContainer'>
          <input
            type='text'
            className='inputIdNameOrPhone inputStyled'
            placeholder='전화번호,사용자 이름 또는 이메일'
            onChange={submitUserId}
          />
          <input
            className='inputPassword inputStyled'
            type='password'
            placeholder='비밀번호'
            onChange={submitUserPassword}
          />
        </div>

        <button
          // onClick={goToMain}
          className={
            userId.includes("@") && userPw.length >= 5
              ? "validLoginBtn"
              : "unValidLoginBtn"
          }>
          로그인
        </button>

        <p className='passwordSearch'>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default Login;
