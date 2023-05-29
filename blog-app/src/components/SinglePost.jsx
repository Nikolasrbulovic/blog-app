import { Link } from "react-router-dom"
const SinglePost = ({post}) => {
    return(
        <div key={post.id} className="p-4 p-md-5 mb-4 rounded text-bg-dark">
            <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">{post.title}</h1>
                <p className="lead my-3">{post.text}</p>
                <Link to={`${post.id}`}><p className="lead mb-0">View Post</p></Link>
            </div>
      </div>  
    )
}
export default SinglePost