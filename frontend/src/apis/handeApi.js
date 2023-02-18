import axios from "axios";

const link = process.env.REACT_APP_API_LINK;

export const getListDoc = async (type, axiosJWT, accessToken) => {
  try {
    const url = `${link}/v1/${type}/`;
    const res = await axiosJWT.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getDoc = async (id, type, axiosJWT, accessToken) => {
  try {
    const url = `${link}/v1/${type}/${id}`;
    const res = await axiosJWT.get(url, {
      headers: { token: `Bearer ${accessToken}` },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addDoc = async (type, data, axiosJWT, accessToken) => {
  try {
    const res = await axiosJWT({
      method: "POST",
      url: `${link}/v1/${type}`,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteDoc = async (id, type, axiosJWT, accessToken) => {
  try {
    const res = await axiosJWT.delete(`${link}/v1/${type}/${id}`, {
      headers: { token: `Bearer ${accessToken}` },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateDoc = async (id, type, data, axiosJWT, accessToken) => {
  try {
    const res = await axiosJWT({
      method: "PATCH",
      url: `${link}/v1/${type}/${id}`,
      data,
      headers: { token: `Bearer ${accessToken}` },
    });
  } catch (error) {
    console.log(error);
  }
};
