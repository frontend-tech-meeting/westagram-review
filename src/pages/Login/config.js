/** @format */

export const config = {
  api: "https://westagram-signup.herokuapp.com/",
};

// https://westagram-signup.herokuapp.com/login (POST)
// https://westagram-signup.herokuapp.com/signup (POST)
// https://westagram-signup.herokuapp.com/profile (GET)
// 회원가입, 로그인시 id, password 필요하고, 유효성 검사는 각각 6자 이상이면 통과되도록 해두었습니다
// /profile에서는 유저 정보 확인할 수 있고 Authorization에 login에서 받은 token 넣어줘야 합니다
