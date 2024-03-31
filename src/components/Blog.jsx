// import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function Post({ title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

function Blog() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:3000/posts', { mode: 'cors' })
      .then((response) => response.json())
      .then((response) => {
        setPosts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      {isLoading && <div>Loading...</div>}
    </>
  );
}

export default Blog;
