import { Button, FormControl, FormHelperText, Input, InputLabel, TextareaAutosize } from '@material-ui/core'
import React,{ useState,useEffect } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components'
import { firestore } from "../firebase";
import Navbar from './Navbar';

const CreateBlog = () => {
    const history = useHistory()
    const [title,setTitle] = useState('')
    const [subTitle,setSubTitle] = useState('')
    const [content,setContent] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubTitleChange = (e) => {
        setSubTitle(e.target.value)
    }
    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const handleBlogPublish = (e) => {
        e.preventDefault()
        console.log(title,subTitle,content);
        firestore.collection('posts').add({
            title:title,
            subTitle:subTitle,
            content:content
        })
        history.push("/blogs")
    }

    return (
        <BlogCreateForm>
            <Navbar />
            <FormControl>
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <Input onChange={handleTitleChange} name="title" id="title" value={title} aria-describedby="my-helper-text" />
                </FormControl>
            <FormControl>    
                    <InputLabel htmlFor="subTitle">Sub - title</InputLabel>
                    <Input onChange={(e)=>handleSubTitleChange(e)} name="title" value={subTitle} id="subTitle" aria-describedby="my-helper-text" />
                </FormControl>   
                <FormControl>
                <TextareaAutosize onChange={(e)=>handleContentChange(e)} name="title" value={content} style={{height:'300px',overflowY:'scroll'}}
                    rowsMax={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua."
                />
                <Button onClick={handleBlogPublish} > Publish Blog</Button>
                </FormControl>
           
        </BlogCreateForm>
    )
}

export default CreateBlog


const BlogCreateForm = styled.div` 
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 10px auto;
`;

const FormField = styled.div`
    display: flex;
    flex-direction: column;
`;