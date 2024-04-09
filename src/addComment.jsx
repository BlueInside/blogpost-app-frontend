import { redirect } from 'react-router-dom';

export async function action({ request, params }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data, params);

    const response = await fetch(
      `https://blogpost-restapi.fly.dev/posts/${params.postId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Content type as JSON
        },
        body: JSON.stringify(data), // Format data into JSON
      }
    );

    if (response.status >= 400) {
      throw new Error('Network response error');
    }

    const newComment = await response.json();
    console.log('Successfully created comment', newComment);

    // Redirect to the post detail page after the new comment is added
    return redirect(`/post/${params.postId}`);
  } catch (error) {
    console.error('Error', error);
    return redirect(`/post/${params.postId}`);
  }
}
