import React, {useEffect, useState} from "react";
import { NewsCard, AsideCard } from "../../components";
import { latestNews, rencentNews } from "../../data/newsData";
import BlogPost from './BlogPost';

const BlogNews = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('api/blog-data');
      const jsonData = await response.json();
      setBlogData(jsonData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <section className="w-full grid gap-4">
      <section className="w-full grid gap-4 grid-cols-blog-col">
        {blogData.map(blog => (
          <BlogPost
            key={blog.id}
            id={blog.id}
            title={blog.title}
            author={blog.author}
            category={blog.category}
            content={blog.content}
            image={blog.image}
            published_at={blog.published_at}
          />
        ))}
      </section>
      <section className="w-full grid gap-4 grid-cols-blog-col">
        {latestNews.map((data, index) => (
          <NewsCard {...data} key={index} />
        ))}
      </section>
      <aside className="w-full grid grid-cols-blog-col max-[550px]:grid-cols-1 overflow-x-scroll">
        {rencentNews.map((data, index) => (
          <AsideCard {...data} key={index} />
        ))}
      </aside>
    </section>
  );
};

export default BlogNews;
