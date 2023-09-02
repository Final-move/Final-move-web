import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router";
import { Header, Footer, MobileNav } from "./components/general";
import {
  Home,
  About,
  Blog,
  Resources,
  Contact,
  Search,
  Login,
  Signup,
} from "./pages";
import BlogArticle from "./pages/blog/blogArticle/Page";

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
          <Route path="/blog/article/:id" element={<BlogArticle />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<Signup />} />
        </Routes>

        <Footer />
      </section>
    </div>
  );
};

export default App;
