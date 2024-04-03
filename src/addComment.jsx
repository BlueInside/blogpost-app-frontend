import { redirect } from 'react-router-dom';
export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data, params);
  fetch(`http://localhost:3000/posts/${params.postId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Content type as JSON
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Network response error');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Successfully created comment', data);
    })
    .catch((error) => {
      console.log('Error', error);
    });
  return redirect(`/post/${params.postId}`);
}
