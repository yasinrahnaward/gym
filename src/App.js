import './App.css';
import {BrowserRouter, Routes,Route, } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import SinglePage from './components/Blog/SinglePage';
import LoginForm from './components/Auth/LoginForm';
import Registeration from './components/Auth/Registeration'
function App() {
  return (

  <BrowserRouter>
    
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
        <Route path='/SinglePage' element={<SinglePage/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
      </Routes>
      <Routes>
        <Route path='/registeration' element={<Registeration/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
