import React,{ useEffect,useState } from 'react'
import styled from 'styled-components'
import BlogCard from './BlogCard'
import Navbar from './Navbar'
import {firestore} from '../firebase';
const Blogs = ({isSearch,setIsSearch,searchedBlog,setSearchedBlog}) => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        firestore.collection('posts').get().then((snapshot)=>{
            console.log(snapshot)
            const postsProxy = snapshot.docs.map(doc=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            setPosts(postsProxy)
            console.log(posts)
        })
        
    }, [])
    return (
        // <BlogHeader >
        //     dscw
        // </BlogHeader>
        <BlogContainer>
            <Navbar isSearch={isSearch} setIsSearch={setIsSearch} searchedBlog={searchedBlog} setSearchedBlog={setSearchedBlog}/>
            <Header>
                <h2>Xebia Blog App</h2>
            </Header>
            <Blogholder>
                {isSearch ? <BlogCard post={searchedBlog} /> : 
                posts && posts.map(post => <BlogCard post={post} /> )}
                
                {/* <BlogCard /> */}
                {/* <BlogCard />
                <BlogCard />
                <BlogCard /> */}
            </Blogholder>
            
        </BlogContainer>
        
        
    )
}

export default Blogs

const Blogholder = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const BlogContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const Header = styled.div`
    color: black;
    display: flex;
    margin-top: 100px;
    border: 1px solid pink;
    justify-content: center;
    margin: 20px auto;
    /* margin- */

    > h2{
        
    }
`;

// const Header = styled.div`
// `