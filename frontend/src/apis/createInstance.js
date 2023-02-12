import axios from "axios";
import jwt_decode from "jwt-decode";
const link = process.env.REACT_APP_API_LINK;

// console.log(link);
export const axiosNormal = axios.create({
  // baseURL: `${link}`,
  baseURL: "http://localhost:8000/api/v1/",
});

const refreshToken = async () => {
  try {
    const res = await axiosNormal.get(`user/refresh`, {
      withCredentials: true,
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const axiosToken = (accessToken) => {
  console.log(1);
  const newInstance = axiosNormal;
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();

      const decodedToken = jwt_decode(accessToken);

      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        config.headers["token"] = "Bearer " + data;
      } else {
        config.headers["token"] = "Bearer " + accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};
