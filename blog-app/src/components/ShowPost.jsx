import { useParams } from "react-router"
import { getPost } from "../service/postService";
import { useEffect,useState } from "react";
const ShowPost = () =>{
    const {id} = useParams()
    const [post, setPost] = useState()
    useEffect(() => {
        if (id) {
          getPost(id).then(({ data }) => {
            setPost(data);
          });
        }
      }, []);
      

return (
    <div  className="p-4 p-md-5 mb-4 rounded text-bg-dark">
    <div className="col-md-6 px-0">
        <h1 className="display-4 fst-italic">{post?.title}</h1>
        <p className="lead my-3">{post?.text}</p>
        
    </div>
    </div>  
)
}

export default ShowPost