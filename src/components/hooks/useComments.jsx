import { useEffect, useState } from 'react';

export default function useComments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`http://localhost:3000/posts/${postId}/comments`, {
      mode: 'cors',
      signal: signal,
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Failed fetching comments');
        }
        return response.json();
      })
      .then((response) => setComments(response))
      .catch((err) => {
        throw new Error(err);
      });

    return () => {
      controller.abort();
    };
  }, [postId]);

  return comments;
}
