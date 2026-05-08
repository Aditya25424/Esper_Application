import React, { useEffect, useState } from 'react'
import {
  Bell,
  CalendarDays,
  ClipboardList,
  FileText,
  LayoutDashboard,
  MenuSquare,
  LogOut,
  Plus,
  X,
  Trash2,
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import './Profile.css'



// const recentPosts = [
//   {
//     title: 'Ethical Challenges in AI',
//     description:
//       'Exploring the complexités of ethics in artificial intelligence and future implications.',
//     image:
//       'https://cdn.mos.cms.futurecdn.net/DVffQnnibMWmNpx2Wfb5Se.jpg',
//     age: '2d ago',
//   },
//   {
//     title: 'Blockchain Beyond Banking',
//     description:
//       'Discussing how blockchain technology is transforming industries beyond finance.',
//     image:
//       'https://www.tdk.com/en/tech-mag/sites/default/files/2024-03/Blockchain-Cryptocurrency.jpg',
//     age: '1w ago',
//   },
// ]

const quickLinks = [
  {
    label: 'Exploring about article',
    icon: FileText,
    path: '/home',
  },
  {
    label: 'Drafts',
    icon: ClipboardList,
    path: '/create-post',
  },
]

const Profile = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [notification, setNotification] = useState('')
  const [user, setUser] = useState(null);

  const [recentPosts, setRecentPosts] = useState([]);

useEffect(() => {

  const userId = localStorage.getItem("userId");

  console.log(localStorage.getItem("userId"));

  fetch(`http://localhost:8080/posts/user/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      setRecentPosts(data);
    })
    .catch((err) => console.log(err));



fetch(`http://localhost:8080/users/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      setUser(data);
    })
    .catch((err) => console.log(err));

}, []);

  const handleDelete = async (id) => {

  try {

    const res = await fetch(
      `http://localhost:8080/posts/${id}`,
      {
        method: "DELETE",
      }
    );

    if(!res.ok){
      throw new Error("Delete failed");
    }

    setRecentPosts((prev) =>
      prev.filter((post) => post.id !== id)
    );

  } catch(err) {

    console.log(err);

  }

}

  const handleLogout = () => navigate('/')

  const handleNotifications = () =>
    setNotification((msg) =>
      msg ? '' : 'You are all caught up. No new notifications.'
    )

  return (
    <main className="profile-main">
      <section className="profile-section">

        {/* ── Header ── */}
        <header className="profile-header">
          <Link to="/home" className="profile-logo">SHADD</Link>

          <div className="header-actions">
            <button
              type="button"
              onClick={() => navigate('/home')}
              className="icon-btn"
              aria-label="Dashboard"
              title="Dashboard"
            >
              <LayoutDashboard size={22} strokeWidth={2.3} />
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="icon-btn"
              aria-label="Menu"
              aria-expanded={menuOpen}
              title="Menu"
            >
              {menuOpen
                ? <X size={22} strokeWidth={2.3} />
                : <MenuSquare size={22} strokeWidth={2.3} />}
            </button>
          </div>

          {menuOpen && (
            <nav className="dropdown-menu">
              <button type="button" onClick={() => navigate('/home')} className="dropdown-item">
                Home
              </button>
              <button type="button" onClick={() => navigate('/create-post')} className="dropdown-item">
                Create Post
              </button>
              <button type="button" onClick={handleLogout} className="dropdown-item danger">
                Logout
              </button>
            </nav>
          )}
        </header>

        {/* ── 3-column grid ── */}
        <div className="profile-grid">

          {/* ── Left sidebar ── */}
          <aside className="left-sidebar">

            <section className="card-profile">
              <div className="profile-card-inner">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80"
                  alt="John Smith"
                  className="profile-avatar"
                />
                <h1 className="profile-name">{localStorage.getItem("username")}</h1>
                <p className="profile-bio">
                  Passionate about emerging technologies like AI and blockchain.
                  Sharing insights on future trends and innovation.
                </p>
                <button type="button" onClick={handleLogout} className="logout-btn">
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </section>

            <section className="card-sm">
              <h2 className="interests-title">Interests</h2>
              <div className="tags">
                <span className="tag">#ArtificialIntelligence</span>
                <span className="tag">#Web3</span>
                <span className="tag">#CreativeWriting</span>
              </div>
            </section>
          </aside>

          {/* ── Centre panel ── */}
          <section className="centre-panel">
            <div className="centre-header">
              <h2 className="centre-title">Recent Activity</h2>
              <p className="centre-subtitle">Explore your latest posts and interactions</p>
            </div>

            <div className="articles-list">
              {[...recentPosts].reverse().map((post) => (
                <article key={post.title} className="article-card">

                  <div>
                    <div className="article-img-wrap">
                      <img src={`http://localhost:8080/uploads/${post.image}`} alt={post.title} className="article-img" />
                    </div>
                    <div className="article-date">
                      <CalendarDays size={16} />
                      <span>{post.age}</span>
                    </div>
                  </div>

                  <div className="article-content">
                    <h3 className="article-title">{post.title}</h3>
                    <p className="article-age-inline">{post.age}</p>
                    <p className="article-desc">{post.content}</p>
                    <div className="article-footer">
                      
                      <button
                        type="button"
                        onClick={() => navigate(`/post/${post.id}`)}
                        className="view-post-btn"
                      >
                        View post
                      </button>
                      <div className="post-top-bar">
                      <button
                     type="button"
                     onClick={() => handleDelete(post.id)}
                     className="delete-btn">
                   <Trash2 size={18} />
                   </button> </div>
                     
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── Right sidebar ── */}
          <aside className="right-sidebar">

            <section className="card-sm">
              <div className="action-row">
                <button
                  type="button"
                  onClick={() => navigate('/create-post')}
                  className="create-post-btn"
                >
                  <Plus size={18} />
                  Create Post
                </button>

                <button
                  type="button"
                  onClick={handleNotifications}
                  className="notif-btn"
                  aria-label="Notifications"
                  title="Notifications"
                >
                  <Bell size={21} />
                  {!notification && <span className="notif-dot" />}
                </button>
              </div>

              {notification && (
                <p className="notif-message">{notification}</p>
              )}
            </section>

            <section className="card-sm">
              <h2 className="recent-title">Recent Activity</h2>
              <div className="quick-links">
                {quickLinks.map(({ label, icon: Icon, path }) => (
                  <button
                    type="button"
                    key={label}
                    onClick={() => navigate(path)}
                    className="quick-link-btn"
                  >
                    <span className="quick-link-icon">
                      <Icon size={22} />
                    </span>
                    <p className="quick-link-label">{label}</p>
                  </button>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Profile