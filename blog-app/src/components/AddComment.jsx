import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { postComments } from "../service/postService"

const AddComment = ({id,fetchPost}) =>{
    const [text, setText] = useState()

    const submitHandler = (e) =>{
        e.preventDefault();
        postComments(id,text);
        fetchPost();
        setText('')
    }
    return(
        <Form onSubmit={submitHandler}>
             <Form.Group className="mb-3 w-50">
                <Form.Label>Add Comment </Form.Label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Add Comment"
                    onChange={(e)=> setText(e.target.value)}
                    value={text}
                />
                <Button type="submit">Add</Button>      
            </Form.Group>
            
        </Form>
    )
}

export default AddComment