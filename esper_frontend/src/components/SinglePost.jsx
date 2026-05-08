import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SinglePost.css";

// Picks the right CSS grid class based on image count
const gridClass = (count) => {
  if (count === 1) return "single";
  if (count === 2) return "double";
  if (count === 3) return "triple";
  return "quad"; // 4+
};

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <h1 style={{ color: "#0f1419", padding: 20 }}>Loading...</h1>;

  // Normalize images — supports:
  //   post.image  (single string)   → "photo.jpg"
  //   post.images (array of strings) → ["a.jpg","b.jpg"]
  const images = post.images
    ? post.images.slice(0, 4)              // cap at 4
    : post.image
    ? [post.image]
    : [];

  const date = new Date(post.createdAt || Date.now());
  const timeStr = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const dateStr = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <>
      <div className="single-post-page">

        <div className="post-topbar">
          <button className="back-btn" onClick={() => navigate(-1)}>←</button>
          <h2>Post</h2>
        </div>

        <div className="single-post-card">

          <div className="post-author-row">
            <div className="author-left">
              <div className="avatar">
                {post.authorAvatar
                  ? <img src={`http://localhost:8080/uploads/${post.authorAvatar}`} alt="avatar" />
                  : (post.author?.[0] || "A").toUpperCase()
                }
              </div>
              <div className="author-info">
                <span className="author-name">{post.author?.username  || "Anonymous"}</span>
                <span className="author-handle">@{post.handle || "user"}</span>
              </div>
            </div>
           
          </div>

          <div className="post-body">
            <h1>{post.title}</h1>
            <p>{post.content}</p>

            {images.length > 0 && (
              <div className={`post-images ${gridClass(images.length)}`}>
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={`http://localhost:8080/uploads/${img}`}
                    alt={`Post image ${i + 1}`}
                    onClick={() => setLightboxSrc(`http://localhost:8080/uploads/${img}`)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="post-meta">
            <span>{timeStr}</span>
            <span className="meta-dot">·</span>
            <span>{dateStr}</span>
            <span className="meta-dot">·</span>
            
          </div>

          <div className="post-actions">
            <button className="action-btn comment">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              {post.comments ?? 0}
            </button>
            
            <button className="action-btn like">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              {post.likes ?? 0}
            </button>
            <button className="action-btn share">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="lightbox open" onClick={() => setLightboxSrc(null)}>
          <button className="lightbox-close">✕</button>
          <img src={lightboxSrc} alt="full size" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};

export default SinglePost;