
import { Form,Button } from "react-bootstrap";
import { useState } from "react"
import { postPost } from "../service/postService"
const AddPost = ()=>{
    const [title, setTitle]= useState()
    const [text, setText] = useState()

    const submitHandler =(e)=>{
        e.preventDefault()
        postPost(title,text)
        setTitle('')
        setText('')
    }
    return(
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
                <Form.Label>TITLE </Form.Label>
                <Form.Control id="brand" type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Text </Form.Label>
                <Form.Control id="brand" type="text" placeholder="Enter Text" value={text} onChange={(e) => setText(e.target.value)}/>
            </Form.Group>
            <div className="pt-4 text-center">
                <Button type="submit"> Submit</Button>
            </div>
        </Form>
    )
}
export default AddPost