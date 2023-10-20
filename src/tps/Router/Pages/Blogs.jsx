import React from 'react';
import './Blogs.scss';

const Blog = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
  const blogPosts = [
    {
      id: 1,
      title: 'How to Start a Blog',
      content: 'This is a guide on starting your own blog.',
    },
    {
      id: 2,
      title: 'Top 10 Blogging Tips',
      content: 'Learn the top tips for successful blogging.',
    },
    {
      id: 3,
      title: 'Writing Engaging Content',
      content: 'Tips on writing content that keeps your readers engaged.',
    },
  ];

  return (
    <div className="container blog_container" style={myStyle}>
      <h1>Blog</h1>
      <ul className="list-group">
        {blogPosts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
