import axios from "axios";
import jwt_decode from "jwt-decode";
const link = process.env.REACT_APP_API_LINK;

axios.defaults.withCredentials = true;

export const axiosNormal = axios.create({
  baseURL: link,
  headers: {
    "Content-Type": "application/json",
  },
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

export const axiosToken = (user, refreshUser) => {
  const newInstance = axios.create({
    baseURL: link,
    headers: {
      "Content-Type": "application/json",
    },
  });
  newInstance.interceptors.request.use(
    async (config) => {
      config.headers["token"] = "Bearer " + user?.accessToken;
      let date = new Date();
      const decodedToken = jwt_decode(user?.accessToken);

      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const newUser = {
          ...user,
          accessToken: data.accessToken,
        };
        refreshUser(newUser);
        config.headers["token"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};
