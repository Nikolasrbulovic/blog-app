import { useParams } from "react-router"
import { getComments, getPost } from "../service/postService";
import { useEffect,useState } from "react";
import AddComment from "./AddComment";
const ShowPost = () =>{
    const {id} = useParams()
    const [post, setPost] = useState()
    const fetchPost = () =>{
      getPost(id).then(({ data }) => {
        setPost(data);
      });
    }
    useEffect(() => {
        if (id) {
          fetchPost()
        }
      }, [id]);
      

return (
  <div>
    <div  className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div className="col-md-6 px-0 text-center">
        <h1 className="display-4 fst-italic">{post?.title}</h1>
        <p className="lead my-3">{post?.text}</p>
        
    </div>
    </div> 
    <AddComment id={id} fetchPost={fetchPost}></AddComment>
    <ul className="list-group">
     {post?.comments.map((comment, key)=>{
      return (  <li key={key} className="list-group-item w-50 text-break">{comment.text}</li>)
     })} 
     </ul>
  </div>
)
}

export default ShowPost