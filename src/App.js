import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import SinglePage from "./components/Blog/SinglePage";
import LoginForm from "./components/Auth/LoginForm";
import Registeration from "./components/Auth/Registeration";
function App() {
  return (
    <Routes>
      <Route path="/blogs" element={<Blogs />}/>

        <Route path="/SinglePage" element={<SinglePage />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/Courses" element={<Courses />} />

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<LoginForm />} />

      <Route path="/registeration" element={<Registeration />} />
    </Routes>
  );
}

export default App;
