import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AuburnCoursework from './pages/AuburnCoursework';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/auburn" element={<AuburnCoursework />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 