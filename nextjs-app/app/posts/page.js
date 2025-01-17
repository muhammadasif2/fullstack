// Posts.js

import EditableTable from "../components/editableTable/post-table";

export default async function Posts() {
  try {
    // Fetch data server-side
    const res = await fetch("http://localhost:5001/api/contacts", {
      cache: "no-store", // Ensures SSR with fresh data on each request
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const data = await res.json();

    const tableData = data?.data?.map((item) => ({
      _id: item._id,
      title: item.title,
      email: item.email,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));

    return (
      <div>
        <EditableTable data={tableData} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <p>Failed to load data.</p>;
  }
}
