import React from "react";
import { FaFacebook, FaShareAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ShareContainer = ({ article, pageUrl }) => {
  const { title, tag, date } = article;

  const shareTitle = encodeURIComponent(`Check out this article: ${title}`);

  const shareOnFacebook = () => {
    const facebookUrl = `https://web.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${shareTitle}`;
    window.open(facebookUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareTitle}&url=${pageUrl}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${shareTitle} ${pageUrl}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: shareTitle,
          url: pageUrl,
        });
      } catch (error) {
        // Do nothing or handle the error gracefully
      }
    }
  };

  return (
    <section className="w-full py-4 flex justify-between items-center">
      <div className="flex items-center gap-4 text-base max-sm:text-xs font-medium text-yellow-500">
        <p className="py-1 px-2 text-yellow-500 bg-black rounded">{tag}</p>
        <p>{date}</p>
      </div>

      <div>
        <ul className="flex items-center gap-4 text-2xl font-medium object-cover">
          <li>
            <button onClick={shareOnFacebook} className="text-blue-900">
              <FaFacebook />
            </button>
          </li>
          <li>
            <button onClick={shareOnTwitter} className="text-blue-500">
              <FaTwitter />
            </button>
          </li>
          <li>
            <button onClick={shareOnWhatsApp} className="text-green-600">
              <FaWhatsapp />
            </button>
          </li>
          <li className="text-black">
            <button onClick={handleShare}>
              <FaShareAlt />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ShareContainer;
