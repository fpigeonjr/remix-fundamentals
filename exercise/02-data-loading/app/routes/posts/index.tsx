import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

async function getPosts() {
  return [
    {
      slug: "my-first-post",
      title: "My First Post",
      date: new Date("2020-01-01"),
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
      date: new Date("2020-01-02"),
    },
  ];
}

export async function loader() {
  const posts = await getPosts();
  return json({ posts });
}

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>(); // <-- get the data into your UI
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title} {post.date}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
