import React, { useState } from "react";
import "./PostComposer.css";
const PostComposer = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    hashtag: "",
    image: "",
  });

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };


  const submit = (e) => {
    e.preventDefault();
    // TODO: POST to your API
    console.log("Publish:", form);
    alert("Post published (demo).");
  };

  return (
    <div className="pc-page">
      <div className="pc-card">
        {/* Header */}
        <div className="pc-header">
          <h1>Compose Your Post</h1>
          <img
            className="pc-avatar"
            src="https://i.pravatar.cc/40?img=5"
            alt="avatar"
          />
        </div>

        {/* Form */}
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
               required
              onChange={update}
            />
            <input
              className="pc-input"
              type="FILE"
              name="image"
              placeholder="IMAGE / VIDEO URL"
              value={form.image}
              onChange={update}
            />
          </div>
          <div className="pc-actions">
            <button type="button" className="pc-cancel" onClick={() => setForm({ title:"", content:"", hashtag:"", image:"" })}>
              Cancel
            </button>
            <button type="submit" className="pc-publish">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostComposer;
