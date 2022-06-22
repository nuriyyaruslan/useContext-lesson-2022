import { Container,Box,Grid } from '@mui/material';
import React,{ useContext, useEffect } from 'react';
import styled from 'styled-components';
import Post from '../../components/Post/Post';
import { myCounterContext } from '../../contexts/CounterContext';

function Posts() {

    const Title = styled.h1`
        color:orange;
        font-size:32px;
        text-transform:uppercase;
    `
    const { posts, fetchPosts } = useContext(myCounterContext);

    useEffect(() => {
        fetchPosts();
    },[fetchPosts])

  return (
    <Container maxWidth="lg">
        <Title>Posts</Title>
        <Box>
            <Grid container spacing={2}>
                {
                    posts.length ? 
                    posts.map(post => 
                        post.id < 50 ?
                        <Grid item xs={12} md={4} key={post.id}>
                            <Box className="post-cover">
                                <Post post={post}/>
                            </Box>
                        </Grid>
                        :null
                    )
                    : null
                }
            </Grid>
        </Box>
    </Container>
  )
}

export default Posts