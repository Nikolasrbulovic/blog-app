import { getPosts } from "../service/postService"
import { useEffect,useState } from "react"
import SinglePost from "./SinglePost";
const AppPosts = () =>{
    const [posts, setPosts] = useState()
    useEffect(() => {
        getPosts().then(({data}) => setPosts(data));
      }, []);
    
    return(
        <div className="row mb-2">
            {posts?.map((post)=>(
            <SinglePost post={post}></SinglePost>
          ))}
        </div>
        
       
    )
}
export default AppPosts