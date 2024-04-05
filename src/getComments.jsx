// Loader function that loads comments
export function loader({ params }) {
  const url = `http://localhost:3000/posts/${params.postId}/comments`;
  const options = { mode: 'cors' };

  return fetch(url, options);
}
