"use client";

import React from "react";
import { Button, Table } from "antd";
import Link from "next/link";
const PostView = ({ data }) => {
  const updateHandler = (item) => {
    console.log("item", item);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
    },
    {
      title: "Update Date",
      dataIndex: "updatedAt",
      key: "updatedAt",
      align: "center",
    },
    {
      title: "Edit",
      key: "edit",
      align: "center",
      render: (item) => (
        <Link href={`/create-post?id=${item}`}>
          <Button
            // loading={loader ? true.toString() : false.toString()}
            className="border-0 p-0 bg-transparent shadow-none text-hover-primary"
          >
            Update
          </Button>
        </Link>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      align: "center",
      render: (item) => (
        <Link href={{ pathname: "/products", query: { category: "fashion" } }}>
          <Button
            // loading={loader ? true.toString() : false.toString()}
            className="border-0 p-0 text-danger"
            //   onClick={() => editInventoryHandler(item)}
          >
            Delete
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="_id"
      pagination={false}
      bordered
    />
  );
};

export default PostView;
