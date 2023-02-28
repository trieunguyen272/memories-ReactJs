import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8040/api/v1" });

//we intercept every requests
API.interceptors.request.use((req) => {
  //anything you want to attach to the requests such as token
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchPosts = () => API.get(`/memories`);

export const fetchPostsBySearch = (searchQuery) =>
  API.get(`memories/search?searchQuery=${searchQuery}`);

export const createPost = (newPost) => API.post("/memories", newPost);
export const updatePost = (id, updatePost) =>
  API.patch(`/memories/${id}`, updatePost);
export const deletePost = (id) => API.delete(`/memories/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
