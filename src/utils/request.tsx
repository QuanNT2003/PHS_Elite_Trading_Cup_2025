import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000/",
});

const requestWithTokenRefresh = async (
  method: "GET" | "POST" | "PUT" | "DELETE",
  path: string,
  data?: Record<string, unknown> | FormData,
  options: Record<string, unknown> = {}
) => {
  return request({
    method,
    url: path,
    data,
    ...options,
  });
};

export const getMethod = async (
  path: string,
  options: Record<string, unknown> = {}
) => {
  return requestWithTokenRefresh("GET", path, undefined, options).then(
    (response) => response.data
  );
};

export const postMethod = async (
  path: string,
  data: Record<string, unknown> | FormData,
  options: Record<string, unknown> = {}
) => {
  return requestWithTokenRefresh("POST", path, data, options).then(
    (response) => response.data
  );
};

export const putMethod = async (
  path: string,
  data: Record<string, unknown> | FormData,
  options: Record<string, unknown> = {}
) => {
  return requestWithTokenRefresh("PUT", path, data, options).then(
    (response) => response.data
  );
};

export const deleteMethod = async (
  path: string,
  data: Record<string, unknown> | FormData,
  options: Record<string, unknown> = {}
) => {
  return requestWithTokenRefresh("DELETE", path, data, options).then(
    (response) => response.data
  );
};

export default request;
