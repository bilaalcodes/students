import { useState } from 'react';
import { useNavigate } from 'react-router';
const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([
    { name: 'My daily activities', id: 1 },
    { name: 'My daily Hobby', id: 2 },
    { name: 'My Story', id: 3 },
  ]);
  const handleViewBlog = (id) => {
    console.log(id);
    navigate(`/blogs/${id}`);
  };
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map((item, index) => (
        <div
          onClick={() => handleViewBlog(item.id)}
          key={index}
          role='button'
          className='bg-secondary'
        >
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
