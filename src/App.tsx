import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Books from "./pages/Books";
import Tools from "./pages/Tools";
import Services from "./pages/Services";
import Checklist from "./pages/Checklist";
import About from "./pages/About";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticleDetail />} />
        <Route path="/books" element={<Books />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/services" element={<Services />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;