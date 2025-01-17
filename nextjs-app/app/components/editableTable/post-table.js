"use client";

import React from "react";
import { Button, Table } from "antd";

const EditableTable = ({ data }) => {
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
        <Button
          // loading={loader ? true.toString() : false.toString()}
          className="border-0 p-0 bg-transparent shadow-none text-hover-primary"
          //   onClick={() => editInventoryHandler(item)}
        >
          Update
        </Button>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      align: "center",
      render: (item) => (
        <Button
          // loading={loader ? true.toString() : false.toString()}
          className="border-0 p-0 text-danger"
          //   onClick={() => editInventoryHandler(item)}
        >
          Delete
        </Button>
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

export default EditableTable;
