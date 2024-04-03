// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import usePosts from '../components/hooks/usePosts';
import { useNavigate } from 'react-router-dom';

function Post({ id, title, content }) {
  const navigate = useNavigate();

  return (
    <article
      role="post"
      onClick={() => {
        navigate(`/post/${id}`);
      }}
    >
      <h2>{title}</h2>
      <div>
        <p>{content}</p>
      </div>
    </article>
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
  } = usePosts('http://localhost:3000/posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {posts &&
        posts.map((post) => (
          <Post
            key={post._id}
            id={post._id}
            title={post.title}
            content={post.content}
          />
        ))}
    </>
  );
}

export default Blog;
