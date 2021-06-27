import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BlogCard = ({post}) => {
    console.log("post",post)
    return (
        <BlogCardContainer><Link to={`/blogs/${post.id}`}>
            <BlogHeading>
                <h3>{post["title"]}</h3>
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
`;

const BlogHeading = styled.div`
    display: flex;
    font-size: large;
`;

const BlogSubHeading = styled.div``;

const BlogContentMini = styled.div``;