import { useState, useEffect } from 'react';

function usePosts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/posts', { mode: 'cors' })
      .then((response) => {
        // If status > than 400 throw error
        if (response.status >= 400) {
          throw new Error('Server error');
        }
        // No server error return response
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
}

export default usePosts;
