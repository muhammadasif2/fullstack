import Posts from "./posts/page";

export default async function Home() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Posts />
    </div>
  );
}
