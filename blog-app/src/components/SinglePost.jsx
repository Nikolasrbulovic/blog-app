import { Link } from "react-router-dom"
const SinglePost = ({post}) => {
    
    return(
   
        <div className="col-md-6 mb-5" style={{height: "200px"}}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-50 position-relative text-center h-100">
                <div className="col p-4 d-flex flex-column position-static">
                
                <h3 className="mb-1">{post.title}</h3>
                <div className="mb-1 text-body-secondary"> {post.createdAt}</div>
                <p className="card-text mb-auto">{post.text}</p>
                <Link to={`${post.id}`}><p className="lead mb-0">View Post</p></Link>
                <Link to={`/edit/${post.id}`}><p className="lead mb-0">Edit Post</p></Link>
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