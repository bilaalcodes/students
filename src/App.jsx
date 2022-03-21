import { Navigate, Route, Routes, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Home, Login, Blogs, ViewBlog } from './pages/';
import { Navbar } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/app.css';
import { useState } from 'react';
const BackToHome = () => {
  let user_auth = false;
  let navigate = useNavigate();

  /* with useNavigate hook */
  // useEffect(() => {
  //   if (!user_auth) {
  //     navigate('/home');
  //   }
  // }, []);
  // return <h1>User is authenticated and you can view this page</h1>;
  /* with Navigate component */
  if (user_auth) {
    return <h1>User is authenticated and you can view this page</h1>;
  } else return <Navigate to='/home' />;
};
function App() {
  const [state, setState] = useState();
  const routes = [
    { path: '/home', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blogs/:id', element: <ViewBlog /> },
    { path: '/back-to-home', element: <BackToHome /> },
  ];
  return (
    <div>
      <h2>Welcome Home</h2>
      <Navbar />
      <Routes>
        {/* ok. */}
        {/* {routes.map((item) => {
          if (2 > 1) {
            return <Route path={item.path} element={<item.element />} />;
          }
        })} */}
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
        {/* <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
