import usePosts from './hooks/usePosts';
import { useParams } from 'react-router-dom';

export default function Post() {
  let { postId } = useParams();
  const {
    data: post,
    error,
    loading,
  } = usePosts(`http://localhost:3000/posts/${postId}`);

  if (error) throw new Error(error.message);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <div>
          <p>Author: {post.author.fullname}</p>
          <p>Published on: {post.formattedTimeStamp}</p>
          <p>Comments: {post.comments.length}</p>
        </div>
      </div>
    </div>
  );
}
