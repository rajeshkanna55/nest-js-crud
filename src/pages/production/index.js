import React from 'react';

function Production({ data }) {
  return (
    <div>
      <h1>Server-Side Rendering (SSR) in Next.js</h1>
      <p>Data fetched on the server:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps() {
  // Simulate fetching data from an API
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
export default Production;