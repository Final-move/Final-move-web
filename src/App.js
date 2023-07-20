import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Page";
import About from "./pages/about/Page";
import Blog from "./pages/Blog/Page";
import Resources from "./pages/resources/Page";
import Contact from "./pages/contact/Page";
import Search from "./components/Search";
import Login from "./components/Login";
import MobileNav from "./components/MobileNav";

export const toggleContext = React.createContext();

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollMainContentRef = useRef(null);

  return (
    <div className="app">
      <toggleContext.Provider
        value={{ isExpanded, setIsExpanded, scrollMainContentRef }}
      >
        <MobileNav />
      </toggleContext.Provider>

      <section className="main-content" ref={scrollMainContentRef}>
        <toggleContext.Provider
          value={{ isExpanded, setIsExpanded, scrollMainContentRef }}
        >
          <Header />
        </toggleContext.Provider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </section>
    </div>
  );
};

export default App;
