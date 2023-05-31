import { API } from "../shared/api";

export const getPosts = () => {
  return API.get("/posts");
};

export const getPost = (id) => {
  return API.get(
    `/posts/${id}?filter=${encodeURI(
      JSON.stringify({ include: ["comments"] })
    )}`
  );
};

export const postPost = (title, text) => {
  return API.post("/posts", { title, text });
};

export const editPost = (id, title, text) => {
  return API.patch(`posts/${id}`, { title, text });
};

export const deletePost = (id) => {
  return API.delete(`posts/${id}`);
};

export const getComments = (id) => {
  return API.get(`posts/${id}/comments`);
};

export const postComments = (id, text) => {
  return API.post(`posts/${id}/comments`, { text, postId: id });
};

export const countComments = (id) => {
  return API.get(`posts/${id}/comments/count`);
};
