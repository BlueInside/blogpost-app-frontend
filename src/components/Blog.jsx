// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import usePosts from './hooks/usePosts';
function Post({ title, content }) {
  return (
    <article role="post">
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
  const { data: posts, error, loading } = usePosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {posts &&
        posts.map((post) => (
          <Post
            key={post._id}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
    </>
  );
}

export default Blog;
