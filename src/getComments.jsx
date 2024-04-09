// Loader function that loads comments
export function loader({ params }) {
  const url = `https://blogpost-restapi.fly.dev/posts/${params.postId}/comments`;
  const options = { mode: 'cors' };

  return fetch(url, options);
}
