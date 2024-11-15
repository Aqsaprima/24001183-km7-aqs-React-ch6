import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const { exp } = jwtDecode(token);
    const currTime = Math.floor(Date.now() / 1000);
    return exp < currTime;
  } catch (err) {
    console.log("Error decoding token: ", err);
    return true;
  }
};

export default isTokenExpired;
