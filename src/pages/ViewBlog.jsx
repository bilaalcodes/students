import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const ViewBlog = () => {
  const params = useParams();
  const [blogs, setBlogs] = useState([
    { name: 'My daily activities', id: 1 },
    { name: 'My daily Hobby', id: 2 },
    { name: 'My Story', id: 3 },
  ]);
  const [targetBlog, setTargetBlog] = useState();
  console.log(params);
  const getBlog = () => {
    let id = params.id;
    console.log(id, 'id');
    let target_blog = blogs.filter((item) => item.id == id);
    setTargetBlog(target_blog[0]);
  };
  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div>
      <h2> ViewBlog</h2>
      <h4>{targetBlog && targetBlog.name}</h4>
    </div>
  );
};

export default ViewBlog;
