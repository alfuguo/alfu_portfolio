const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 13",
      excerpt: "Learn about the new features and improvements in Next.js 13, including the app directory and server components.",
      date: "Dec 15, 2024",
      image: "static/img/blog/blog-1.jpg",
      category: "Web Development",
      link: "#"
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Best practices for creating robust and scalable REST APIs using Node.js, Express, and modern development patterns.",
      date: "Dec 10, 2024",
      image: "static/img/blog/blog-2.jpg",
      category: "Backend",
      link: "#"
    },
    {
      id: 3,
      title: "React Performance Optimization Tips",
      excerpt: "Discover techniques to optimize your React applications for better performance and user experience.",
      date: "Dec 5, 2024",
      image: "static/img/blog/blog-3.jpg",
      category: "React",
      link: "#"
    }
  ];

  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Latest Blog Posts</h3>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4 m-15px-tb">
              <div className="blog-box">
                <div className="blog-img">
                  <img src={post.image} title="" alt="" />
                </div>
                <div className="blog-info">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-category">{post.category}</span>
                  </div>
                  <h6>
                    <a href={post.link}>{post.title}</a>
                  </h6>
                  <p>{post.excerpt}</p>
                  <a href={post.link} className="blog-link">
                    Read More <i className="ti-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-bar text-center">
          <a href="#" className="px-btn px-btn-theme">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;