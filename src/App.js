import './App.css';
import NavMenu from './components/NavMenu';
import {BrowserRouter, Routes,Route, } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
function App() {
  return (

  <BrowserRouter>
    <NavMenu/>
      <Routes>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Routes>
        <Route path='/Courses' element={<Courses/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
