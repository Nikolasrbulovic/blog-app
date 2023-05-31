import { deletePost, getPosts } from "../service/postService"
import { useEffect,useState } from "react"
import SinglePost from "./SinglePost";
const AppPosts = () =>{
    const [posts, setPosts] = useState()
    const fetchPosts = () =>{
      getPosts().then(({data}) => setPosts(data));
    }
    useEffect(() => {
      fetchPosts()
      
      }, []);


    
    
    return(
        <div className="row mb-2">
            {posts?.map((post)=>(
              <div key={post.id} className="d-inline-flex w-50">
                <SinglePost post={post} fetchPosts={fetchPosts}></SinglePost>
          
              </div>
              ))}
            
        </div>
        
       
    )
}
export default AppPosts