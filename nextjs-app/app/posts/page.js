"use client";

import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useState } from "react";

const CreateForm = () => {
  const [form] = Form.useForm();
  const [posts, setPosts] = useState();
  // Handle form submission
  const onFinish = async (values) => {
    console.log("values", values);
    try {
      // Replace with your API endpoint

      const response = await axios.post("http://localhost:5001/api/contacts/", {
        title: values.title,
        email: "asifbsit@gmail.com",
        description: values.description,
        _id: "67894176d5a4ef2873b6ae26",
        createdAt: "2025-01-16T17:27:18.231Z",
        updatedAt: "2025-01-16T17:27:18.231Z",
        __v: 0,
      });

      message.success("Data created successfully!");
      console.log("Response:", response.data);

      // Reset the form after successful submission
      form.resetFields();
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to create data.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>Create Contact</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="title" // Changed to match expected field name
          // rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="description" // Changed to match expected field name
          // rules={[
          //   { required: true, message: "Please enter your email" },
          //   { type: "email", message: "Please enter a valid email" },
          // ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateForm;
