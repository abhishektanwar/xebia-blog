import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BlogCard = ({post}) => {
    console.log("post",post)
    return (
        <BlogCardContainer><Link style={{textDecoration:"none" ,color:"black"}} to={`/blogs/${post.id}`}>
            <BlogHeading>
                <h3 id="kl">{post["title"]}</h3>
            </BlogHeading>
            <BlogSubHeading>
                <h4>{post["subTitle"]}</h4>
            </BlogSubHeading>
            <BlogContentMini>
                {console.log(post.content.substr(0,3))}
                {post.content.substr(0,30) + "..."}
            </BlogContentMini>
            </Link>
        </BlogCardContainer>
    )
}

export default BlogCard

const BlogCardContainer = styled.div`
    border: 1px solid gray;
    height: 300px;
    width: 300px;
    border-radius: 5px;
    margin: 20px;
    color:black;
    
    > #kl{
        text-decoration: none;
    }
`;

const BlogHeading = styled.div`
    display: flex;
    font-size: large;

    > #kl{
        text-decoration: none;
    }
`;

const BlogSubHeading = styled.div``;

const BlogContentMini = styled.div``;