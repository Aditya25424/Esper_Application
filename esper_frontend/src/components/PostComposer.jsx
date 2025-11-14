import React, { useState } from "react";
import "./PostComposer.css";

const topics = ["Technology", "Design", "Education", "Health", "Travel", "Sports"];

const PostComposer = () => {
  const [form, setForm] = useState({
    title: "",
    body: "",
    tags: "",
    extra: "",
    topic: "",
  });
  const [showTopics, setShowTopics] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const selectTopic = (t) => {
    setForm((f) => ({ ...f, topic: t }));
    setShowTopics(false);
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
          />

          <textarea
            className="pc-textarea"
            name="body"
            placeholder="Write your thoughts here..."
            value={form.body}
            onChange={update}
            rows={5}
          />

          <div className="pc-row">
            <input
              className="pc-input"
              type="text"
              name="tags"
              placeholder="Add Tags"
              value={form.tags}
              onChange={update}
            />
            <input
              className="pc-input"
              type="text"
              name="extra"
              placeholder="(Optional)"
              value={form.extra}
              onChange={update}
            />
          </div>

          {/* Topic select */}
          <div className="pc-topic-wrap">
            <button
              type="button"
              className="pc-topic-btn"
              onClick={() => setShowTopics((s) => !s)}
            >
              <span>{form.topic || "Select Topic"}</span>
              <span className="pc-chevron">›</span>
            </button>

            {showTopics && (
              <div className="pc-topic-menu">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="pc-topic-item"
                    onClick={() => selectTopic(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="pc-actions">
            <button type="button" className="pc-cancel" onClick={() => setForm({ title:"", body:"", tags:"", extra:"", topic:"" })}>
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
