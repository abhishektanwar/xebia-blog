import React,{ useEffect,useState } from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { firestore } from '../firebase';
import { useParams } from 'react-router-dom'
const BlogDetail = (props) => {
    const [post,setPost] = useState({})
    const param = useParams();
    // console.log(paramm)
    useEffect(() => {
        firestore.collection('posts').doc(param.id).get().then((snapshot)=>{
            // console.log(snapshot.data())
            setPost(snapshot.data())

        })
        
    }, [])
    return (
        <BlogDetailContainer>
            {/* {post} */}
            <Navbar />
            <BlogHeading>
                {post['title']}
            </BlogHeading>
            <BlogContent>
                {post.content}
            </BlogContent>
        </BlogDetailContainer>
    )
}

export default BlogDetail

const BlogDetailContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const BlogHeading = styled.div``;
const BlogContent = styled.div``;
