import { Button, Input } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {firestore} from '../firebase'
const Navbar = ({isSearch,setIsSearch, searchedBlog,setSearchedBlog}) => {

    const [search,setSearch] = useState('')
    const handleSearch = () =>{
        firestore.collection('posts').get().then((snapshot)=>{
            snapshot.docs.map(doc => {
                if(doc.data().title===search){
                    setSearchedBlog({...doc.data(),id:doc.id})
                    setIsSearch(true)
                    console.log("search data",doc.data());
                }
            })
        })
    }

    return (
        <NavbarContainer>
            <BlogNavbar >
                <Button><Link to="/">
                    HOME
                    </Link>
                </Button>
                <Button><Link to="/blogs">
                BLOGS
                </Link>
                    
                </Button>
                <Button><Link to="/create-blogs">
                Create Blog
                </Link>
                    
                </Button>
                <Input onChange={(e)=>setSearch(e.target.value)} value={search} />
                <Button onClick={handleSearch}>Search</Button>
            </BlogNavbar>
            
        </NavbarContainer>
    )
}

export default Navbar
const NavbarContainer = styled.div`
    display: flex;
    width:600px;
    margin: 0 auto;

    > button{
        background-color: pink;
    }
`;
const BlogNavbar = styled.div`
`;
