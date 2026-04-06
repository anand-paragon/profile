import React from 'react';

interface BlogPost {
  title: string;
  description: string;
  url: string;
  date: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: 'Getting Started with React 19',
    description: 'Exploring the latest features in React 19 including the new compiler, server components, and improved hooks.',
    url: 'https://example.com/react-19',
    date: 'Mar 2026',
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    title: 'Building Scalable Node.js APIs',
    description: 'Best practices for designing and building production-ready REST APIs with Node.js and Express.',
    url: 'https://example.com/nodejs-apis',
    date: 'Feb 2026',
    tags: ['Node.js', 'Backend', 'API'],
  },
  {
    title: 'TypeScript Tips for Large Codebases',
    description: 'Practical TypeScript patterns and techniques that help keep large projects maintainable.',
    url: 'https://example.com/typescript-tips',
    date: 'Jan 2026',
    tags: ['TypeScript', 'Best Practices'],
  },
];

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="section blogs-section">
      <div className="container">
        <h2 className="section-title">Blogs</h2>
        <div className="blogs-grid">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
            >
              <div className="blog-card-header">
                <span className="blog-date">{post.date}</span>
                <svg className="blog-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <div className="blog-tags">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="blog-tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
