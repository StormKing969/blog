const rootURL = process.env.rootURL;
const testingURL = "http://localhost:3000/";

// endpoint: {root URL}/api/posts
export default async function getPost(id) {
  const res = await fetch(`${testingURL}api/posts`);
  const posts = await res.json();

  if (id) {
    return posts.find((value) => value.id === id);
  }

  return posts;
}
