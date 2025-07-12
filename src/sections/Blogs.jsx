import BlogList from '../components/BlogList';
import './Blogs.css';

const Blogs = () => {
  return (
    <section id="blogs" className="blogs-section">
      <div className="blogs-header">
        <h2>Latest Blogs</h2>
        <p>Stay updated with insights, trends, and tips from our tech experts.</p>
      </div>
      <BlogList />
    </section>
  );
};

export default Blogs;
