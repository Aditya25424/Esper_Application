import React, { useState } from "react";
import "./PostComposer.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const PostComposer = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
    hashtag: "",
    image: null,
  });

  // Handle text inputs
  const update = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image separately
  const handleFileChange = (e) => {
    setForm((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    try {

      const formData = new FormData();

      formData.append("userId", 1); // Example user id
      formData.append("title", form.title);
      formData.append("content", form.content);

      // hashtags should be Set<String> in backend
      formData.append("hashtags", form.hashtag);

      if (form.image) {
        formData.append("image", form.image);
      }
const token = localStorage.getItem("token");

const response = await axios.post(
  "http://localhost:8080/posts/create",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  }
);

      console.log(response.data);

      alert("Post Published Successfully");

      // Reset form
      setForm({
        title: "",
        content: "",
        hashtag: "",
        image: null,
      });

    } catch (error) {
      console.error(error);
      alert("Error while publishing post");
    }
  };

  return (
    <div className="pc-page">
      <div className="pc-card">

        <div className="pc-header">
          <h1>Compose Your Post</h1>

          <img
            className="pc-avatar"
            src="https://i.pravatar.cc/40?img=5"
            alt="avatar"
          />
        </div>

        <form onSubmit={submit} className="pc-form">

          <input
            className="pc-input"
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={update}
            required
          />

          <textarea
            className="pc-textarea"
            name="content"
            placeholder="Write your thoughts here..."
            value={form.content}
            onChange={update}
            rows={5}
            required
          />

          <div className="pc-row">

            <input
              className="pc-input"
              type="text"
              name="hashtag"
              placeholder="Add Tags"
              value={form.hashtag}
              onChange={update}
            />

            <input
              className="pc-input"
              type="file"
              name="image"
              onChange={handleFileChange}
            />

          </div>

          <div className="pc-actions">

            <button
              type="button"
              className="pc-cancel"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>

            <button type="submit" className="pc-publish" onClick={() => navigate(-1)}>
              Publish
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default PostComposer;