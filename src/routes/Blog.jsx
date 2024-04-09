// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import usePosts from '../components/hooks/usePosts';
import { useNavigate } from 'react-router-dom';
import BigSpinner from '../components/BigSpinner';
import {
  PostContainer,
  Title,
  Content,
} from '../components/StyledComponents/StyledComponents.styled';
import { htmlDecode } from '../utils/decodeHTML';
function Post({ id, title, content }) {
  const navigate = useNavigate();

  return (
    <PostContainer
      role="post"
      onClick={() => {
        navigate(`/post/${id}`);
      }}
    >
      <Title>{title}</Title>
      <Content>{htmlDecode(content)}</Content>
    </PostContainer>
  );
}

Post.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

function Blog() {
  // Use custom hook to fetch posts
  const {
    data: posts,
    error,
    loading,
  } = usePosts('https://blogpost-restapi.fly.dev/posts');

  if (loading) return <BigSpinner />;
  if (error) throw new Error(error.message);

  return (
    <>
      {posts &&
        posts.map((post) => {
          if (post.isPublished)
            return (
              <Post
                key={post._id}
                id={post._id}
                title={post.title}
                content={post.content}
              />
            );
        })}
    </>
  );
}

export default Blog;
