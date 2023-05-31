
import { Form,Button } from "react-bootstrap";
import { useEffect, useState } from "react"
import { editPost, postPost, getPost } from "../service/postService"
import { useParams } from "react-router";
const AddPost = ()=>{
    const [title, setTitle]= useState()
    const [text, setText] = useState()
    const {id} = useParams();
    console.log(id)
        useEffect(()=>{
            if(id){
            getPost(id).then(({ data }) => {
                setTitle(data.title)
                setText(data.text)
              });
            } 
        },[id])
    
    const resetHandler = () =>{
        setTitle('')
        setText('')
    }

    const submitHandler =(e)=>{
        e.preventDefault()
        if(id){
            editPost(id,title,text)
        }else{
            postPost(title,text)
        }
       
       
        resetHandler()
    }
    return(
        <Form onSubmit={submitHandler} className="w-25 m-5">
            <Form.Group className="mb-3">
                <Form.Label>TITLE </Form.Label>
                <Form.Control id="brand" type="text" minLength={2} placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Text </Form.Label>
                <Form.Control id="brand" type="text" maxLength={300} placeholder="Enter Text" value={text} onChange={(e) => setText(e.target.value)}/>
            </Form.Group>
            <div className="pt-4 text-center">
                <Button type="submit"> Submit</Button>
            </div>
            <div className="pt-4 text-center">
                <Button onClick={resetHandler} type="button" className="btn btn-outline-danger"> Reset</Button>
            </div>
        </Form>
    )
}
export default AddPost