import React from 'react';
import { Link } from 'react-router-dom';
import Img from "../../components/optimization/Img";

const BlogPost = ({ id, title, author, content, image, published_at }) => {
  const backendBaseURL = 'http://localhost:8000';
  const fullImageUrl = `${backendBaseURL}/media/${image}`;

  // Parse and format the date
  const date = new Date(published_at);
  const formattedDate = isNaN(date.getTime())
    ? 'Invalid Date'
    : date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

  return (
    <section className="w-full h-[450px] bg-white rounded-lg shadow-md p-2 overflow-hidden">
      <Link to={`/blog/article/${id}`} className="text-black">
        <div className="w-full overflow-hidden h-[200px] rounded">
          <Img
            src={fullImageUrl}
            alt={`${title} image`}
            className="w-full h-full object-cover object-center hover:scale-110"
          />
        </div>
        <article className="w-full h-[250px] flex flex-col gap-4 py-4 px-1">
          <div className="w-full flex items-center gap-4 text-sm font-medium text-yellow-500">
            <p className="py-1 px-2 text-yellow-500 bg-black rounded">{title}</p>
            <p>{formattedDate}</p>
          </div>
          <div className="w-full h-full flex flex-col justify-between gap-2 mb-2">
            {/*<p className="text-black text-lg font-medium">
              {content.length > 195 ? `${content.slice(0, 192)}...` : content}
            </p>*/}
            <div
              className="text-black text-lg font-medium"
              dangerouslySetInnerHTML={{__html: content.length > 195 ? `${content.slice(0, 192)}...` : content}}
            />
            <p className="text-base font-medium text-yellow-500 underline">
              Read more
            </p>
          </div>
        </article>
      </Link>
    </section>
  );
};

export default BlogPost;
