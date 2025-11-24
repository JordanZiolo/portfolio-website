// src/App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import ProjectDetail from './Pages/ProjectDetail';

function App() {
  return (
 <BrowserRouter basename="/portfolio-website/">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/projecten" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/projecten/:projectId' element={<ProjectDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;