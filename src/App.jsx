import { Route, Routes } from 'react-router';
import { Home, Login } from './pages/';
import { Navbar } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/app.css';
import { useState } from 'react';
function App() {
  const [state, setState] = useState();
  const routes = [
    { path: '/home', element: <Home /> },
    { path: '/login', element: <Login /> },
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
