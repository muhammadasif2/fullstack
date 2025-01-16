"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPost();
  }, []);
  const fetchPost = async () => {
    const response = await axios.get("http://localhost:5001/api/contacts");
    setPosts(response?.data?.data);
  };
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  );
}
