// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Informatic from './informatic';
import Infa from './infa';
import Courses from './courses';
import Page from './page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/informatic" element={<Informatic />} />
        <Route path="/infa" element={<Infa />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
