import usePosts from '../components/hooks/usePosts';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';
import { decodeHTMLEntities as decodeHE } from '../utils/decodeHTML';
import { format } from 'date-fns';
import { Form } from 'react-router-dom';
import useComments from '../components/hooks/useComments';

export default function Post() {
  let { postId } = useParams();
  const {
    data: post,
    error,
    loading,
  } = usePosts(`http://localhost:3000/posts/${postId}`);

  const comments = useComments({ postId });

  console.log(comments);

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
          <p>Comments: {comments.length}</p>

          {comments &&
            comments.map((comment) => (
              <Comment
                key={comment._id}
                username={comment.username}
                text={comment.text}
                timeStamp={comment.timeStamp}
              />
            ))}
        </div>
        <Form action={`comments`} method="post">
          <p>
            <label
              htmlFor="username"
              type="hidden"
              aria-label="username"
            ></label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
            />
          </p>
          <p>
            <label htmlFor="text" aria-label="Comment value"></label>
            <textarea
              name="text"
              id="text"
              cols="30"
              rows="10"
              placeholder="Comment..."
              required
            ></textarea>
          </p>
          <p>
            <button>Submit</button>
          </p>
        </Form>
      </div>
    </div>
  );
}

function Comment({ username, text, timeStamp }) {
  return (
    <div>
      <div className="meta-data">
        <h1>{username}</h1>
        <span>{format(timeStamp, 'd MMM y')}</span>
      </div>
      <p>{decodeHE(text)}</p>
    </div>
  );
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string,
  timeStamp: PropTypes.instanceOf(Date),
};
