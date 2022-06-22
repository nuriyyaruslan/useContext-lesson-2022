import React from 'react';
import { Box } from '@mui/material';
import './Post.scss';

function Post({post}) {
  return (
    <Box className="post-item">
        <strong>{post.id}</strong>
        <Box className="post-title">{post.title}</Box>
        <Box className="post-body">{post.body}</Box>
    </Box>
  )
}

export default Post