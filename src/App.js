import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router";
import { Header, Footer, MobileNav, NotFound } from "./components/general";
import {
  Home,
  About,
  Blog,
  BlogArticle,
  Resources,
  Contact,
  Search,
  Login,
  Signup,
} from "./pages";
import { routeName } from "./data/constant";

export const toggleContext = React.createContext();

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollMainContentRef = useRef(null);

  return (
    <div className="app font-opensans">
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
          <Route path={routeName.home} element={<Home />} />
          <Route path={routeName.about} element={<About />} />
          <Route path={routeName.blog} element={<Blog />} />
          <Route path={routeName.blogArticle} element={<BlogArticle />} />
          <Route path={routeName.resources} element={<Resources />} />
          <Route path={routeName.contact} element={<Contact />} />
          <Route path={routeName.search} element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </section>
    </div>
  );
};

export default App;
