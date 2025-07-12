import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../redux/blogSlice';
import './BlogList.css';

const BlogList = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="blog-grid">
      {status === 'loading' ? (
        <p>Loading blogs...</p>
      ) : (
        data?.map(blog => (
          <div key={blog?.id} className="blog-card">
            <img src={blog?.image_url} alt={blog?.name} className="blog-image" />
            <div className="blog-content">
              <h3>{blog?.name}</h3>
              <p className="short-desc">{blog?.short_description}</p>
              <p className="blog-author">By {blog?.writer_name}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
