import usePosts from './hooks/usePosts';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { decodeHTMLEntities as decodeHE } from '../utils/decodeHTML';
import { format } from 'date-fns';
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
          {post.comments.map((comment) => (
            <Comment key={comment} postId={postId} commentId={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Comment({ postId, commentId }) {
  const [comment, setComment] = useState(false);

  useEffect(() => {
    // Fetch details about comments
    fetch(`http://localhost:3000/posts/${postId}/comments/${commentId}`, {
      mode: 'cors',
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Server error');
        }
        return response.json();
      })
      .then((response) => setComment(response))
      .catch((err) => {
        throw new Error('Failed fetching comments', err);
      });
  }, [postId, commentId]);

  // Handles orphan comments Id
  if (!comment) {
    return (
      <div>
        <h1>Anonymous</h1>
        <p>Post has been deleted.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="meta-data">
        <h1>{comment.username}</h1>
        <span>{format(comment.timeStamp, 'd MMM y')}</span>
      </div>
      <p>{decodeHE(comment.text)}</p>
    </div>
  );
}

Comment.propTypes = {
  postId: PropTypes.string,
  commentId: PropTypes.string,
};
