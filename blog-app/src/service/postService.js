import { API } from "../shared/api";

export const getPosts = () =>{
    return API.get("/posts")
}

export const getPost = (id) =>{
    return API.get(`/posts/${id}`)
}

export const postPost = (title,text) =>{
    return API.post("/posts",{title,text})  
}