// Loader function that loads comments
export function loader({ params }) {
  const url = `https://blogpost-app-production.up.railway.app/posts/${params.postId}/comments`;
  const options = { mode: 'cors' };

  return fetch(url, options);
}
