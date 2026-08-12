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
    title: 'AI agents are getting smarter. But can they actually get work done?',
    description: 'The AI race is moving beyond chatbots toward agents that can access data, use software, and complete tasks — but smarter models alone may not be enough. Anand Chaudhary explains why reliable integrations with CRMs, databases, and business systems are what turn reasoning into action.',
    url: 'https://economictimes.indiatimes.com/news/company/corporate-trends/ai-agents-are-getting-smarter-but-can-they-actually-get-work-done/articleshow/133182739.cms',
    date: 'Aug 2026',
    tags: ['Paragon', 'AI', 'Infrastructure', 'Engineering'],
  },
  {
    title: 'The Invisible Layer Holding Up The AI Boom And How An Expert Is Building It',
    description: 'While the industry obsesses over models and chatbots, the harder problem sits underneath: getting AI agents to actually work with the software businesses already use — and how Anand Chaudhary is building that infrastructure at Paragon.',
    url: 'https://www.republicworld.com/tech/the-invisible-layer-holding-up-the-ai-boom-and-how-an-expert-is-building-it-2026-07-14-132310',
    date: 'Jul 2026',
    tags: ['Paragon', 'AI', 'Infrastructure', 'Engineering'],
  },
  {
    title: 'Anand Chaudhary: The Engineer Building The Infrastructure AI Agents Depend On',
    description: 'As principal engineer at Paragon, Anand Chaudhary has led the development of a Workflow Engine that processes billions of event executions, and architected the data infrastructure AI agents depend on.',
    url: 'https://www.outlookindia.com/hub4business/anand-chaudhary-the-engineer-building-the-infrastructure-ai-agents-depend-on',
    date: 'May 2026',
    tags: ['Paragon', 'AI', 'Infrastructure', 'Engineering'],
  },
  {
    title: 'How Paragon Ships Integration Infrastructure for AI and SaaS Companies with a Startup-Sized Team',
    description: 'Discover how Paragon builds and scales integration infrastructure for AI and SaaS companies with a lean, startup-sized team — covering engineering process, HIPAA compliance, and domain ownership.',
    url: 'https://www.thehansindia.com/tech/how-paragon-ships-integration-infrastructure-for-ai-and-saas-companies-with-a-startup-sized-team-1062158',
    date: 'Apr 2026',
    tags: ['Paragon', 'SaaS', 'AI', 'Infrastructure'],
  },
  {
    title: 'AMP for Gmail with C#',
    description: 'Learn how to send AMP emails with rich, dynamic content using C# SMTP API, including setup, configuration, and alternate MIME views.',
    url: 'https://medium.com/@nndchaudhary8/amp-for-gmail-with-c-3a1be5c5dbde',
    date: 'Jun 2019',
    tags: ['C#', 'Gmail', 'AMP', 'Email'],
  },
  {
    title: 'Understanding CORS',
    description: 'A beginner-friendly guide to Cross-Origin Resource Sharing (CORS), covering headers, preflight requests, and how to secure your web applications.',
    url: 'https://dev.to/anakshiant/understanding-cors-2n26',
    date: 'Jun 2019',
    tags: ['CORS', 'Web Security', 'Node.js'],
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
