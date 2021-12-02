import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { config, STATUS } from "./config";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPw: "",
  });
  const { userId, userPw } = userInfo;

  const updateUserId = (e) => {
    setUserInfo({
      ...userInfo,
      userId: e.target.value,
    });
  };

  const updateUserPassword = (e) => {
    setUserInfo({
      ...userInfo,
      userPw: e.target.value,
    });
  };

  const submitSignupInfo = (e) => {
    fetch(config.api + "/signup", {
      method: "POST",
      body: JSON.stringify({ id: userId, password: userPw }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === STATUS.SIGNUP) {
          localStorage.setItem("token", res.token);
        }
      });
  };

  const submitLoginInfo = async (e) => {
    const res = await fetch(config.api + "/login", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ id: userId, password: userPw }),
    }).then((res) => res.json());

    if (res.message === STATUS.LOGIN) {
      alert("Login 성공");
      goToMain();
    }
  };

  const goToMain = () => {
    navigate("/main");
  };

  const isUserInfoValid = userId.length > 6 && userPw.length > 6;

  return (
    <div className="login">
      <div className="loginBoxContainer">
        <h1 className="instagramTitle">instagram</h1>

        <div className="inputContainer">
          <input
            type="text"
            className="loginInput"
            placeholder="전화번호,사용자 이름 또는 이메일"
            onChange={updateUserId}
          />
          <input
            className="inputPassword loginInput"
            type="password"
            placeholder="비밀번호"
            onChange={updateUserPassword}
          />
        </div>

        <button
          name="signup"
          onClick={submitSignupInfo}
          className={`loginBtn ${isUserInfoValid ? "valid" : "invalid"}`}
        >
          회원가입
        </button>
        <button
          name="login"
          onClick={submitLoginInfo}
          className={`loginBtn ${isUserInfoValid ? "valid" : "invalid"}`}
        >
          로그인
        </button>
        <p className="passwordSearch">비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default Login;
