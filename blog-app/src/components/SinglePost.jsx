import { Link } from "react-router-dom"
import { countComments, deletePost } from "../service/postService"
import { useEffect, useState } from "react"
const SinglePost = ({post,fetchPosts}) => {
    const [count, setCount] = useState(0)
    const deleteHandler = () =>{
        deletePost(post.id).then(fetchPosts())

      }
     useEffect(()=>{
        countComments(post.id).then((data)=> setCount(data.data.count))
     },[])
    
    return(
   
        <div className="col-md-6 mb-5" style={{height: "230px", width: "100%"}}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-50 position-relative text-center h-100 ">
                <div className="col p-4 d-flex flex-column position-static">
                
                <h3 className="mb-1">{post.title}</h3>
                <div className="mb-1 text-body-secondary"> {post.createdAt}</div>
                <p className="card-text mb-auto">{post.text}</p>
                <div className="mb-1 text-body-secondary d-flex justify-content-between align-items-center" style={{height: "40px", width: "30px"}}>
                    
                <div >{count}</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 14">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                
                </div>
              
                <div className="d-flex flex-row justify-content-between">
                <Link to={`${post.id}`}>
                    <button type="button" className="btn btn-outline-primary">View Post</button>
                </Link>
                <Link to={`/edit/${post.id}`}>
                    <button type="button" className="btn btn-outline-warning">Edit Post</button>
                </Link>
                <button type="button" className="btn btn-outline-danger btn-sm" onClick={deleteHandler}>Delete</button>
                </div>
                
                </div>
                
            </div>
        </div>
    
    )
}
export default SinglePost

{/* <div key={post.id} className="p-4 p-md-5 mb-4  rounded text-bg-dark w-25">
<div className="col-md-6 px-0">
    <h1 className="display-5 fst-italic">{post.title}</h1>
    <p className="lead my-3">{post.text}</p>
    <Link to={`${post.id}`}><p className="lead mb-0">View Post</p></Link>
</div>
</div>  */}