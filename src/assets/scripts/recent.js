const recent = [
  {
    id: 1,
    href: "#",
    img: `/assets/media/images/recents/special-teaching.jpg`,
    title: `HOW TO EMERGE A SUCCESSFUL PERSON.`,
    text1: `Before studying how to do it, let us first of all study HOW
    IT WILL NOT WORK.`,
    text2: `Often, learning how something does not work helps people not
    to waste their time on what will not work....`,
    time: "",
  },
  {
    id: 1,
    href: "#",
    img: `/assets/media/images/recents/special-teaching.jpg`,
    title: `HOW TO EMERGE A SUCCESSFUL PERSON.`,
    text1: `Before studying how to do it, let us first of all study HOW
    IT WILL NOT WORK.`,
    text2: `Often, learning how something does not work helps people not
    to waste their time on what will not work....`,
    time: "",
  },
  {
    id: 1,
    href: "#",
    img: `/assets/media/images/recents/special-teaching.jpg`,
    title: `HOW TO EMERGE A SUCCESSFUL PERSON.`,
    text1: `Before studying how to do it, let us first of all study HOW
    IT WILL NOT WORK.`,
    text2: `Often, learning how something does not work helps people not
    to waste their time on what will not work....`,
    time: "",
  },
  {
    id: 1,
    href: "#",
    img: `/assets/media/images/recents/special-teaching.jpg`,
    title: `HOW TO EMERGE A SUCCESSFUL PERSON.`,
    text1: `Before studying how to do it, let us first of all study HOW
    IT WILL NOT WORK.`,
    text2: `Often, learning how something does not work helps people not
    to waste their time on what will not work....`,
    time: "",
  },
  {
    id: 1,
    href: "#",
    img: `/assets/media/images/recents/special-teaching.jpg`,
    title: `HOW TO EMERGE A SUCCESSFUL PERSON.`,
    text1: `Before studying how to do it, let us first of all study HOW
    IT WILL NOT WORK.`,
    text2: `Often, learning how something does not work helps people not
    to waste their time on what will not work....`,
    time: "",
  },
];

// load recents
const recentContainer = document.querySelector(".recent__container");

window.addEventListener("DOMContentLoaded", () => {
  showRecents(recent);
});

const showRecents = (recentItems) => {
  const DisplayRecents = recentItems
    .map((item) => {
      return `<div class="post">
      <a href=${item.href} class="post_link">
        <div class="post__img">
          <img
            src=${item.img}
            alt="sign fireman in a green suit holding a microphone"
            class="img"
          />
        </div>
        <div class="post__info">
          <div class="heading-text">
            <h5>${item.title}</h5>
          </div>
          <div class="body-text">
            <p>
              ${item.text1}
            </p>
            <p>
             ${item.text2}
            </p>
          </div>
          <div class="track">
          <div class="track__timing">
          <p><i class="fa-regular fa-clock"></i> &nbsp; 6h ago</p>
          </div>
          <div class="track__views">
            <p><i class="fas fa-eye"></i> &nbsp; 1.3K views</p>
          </div>
          </div>
        </div>
      </a>
    </div>`;
    })
    .join("");

  recentContainer.innerHTML = DisplayRecents;
};
