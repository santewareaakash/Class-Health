import { toast } from "react-toastify";
import { axiosInstance } from "./axiosInstance";

export const PostLogin = (credential) =>
  new Promise((resolve, reject) =>
    axiosInstance
      .post("/auth/login", credential)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error.response?.data?.status_message);
        toast.error(error.response?.data?.status_message);
      })
  );
