const heroCarousel = [
  {
    id: 1,
    active: "active-slide",
    img: `/assets/media/images/carousel/reinhard-bonnke.jpg`,
    title: `REINHARD BONNKE (1940-2019):
      "Christianity is either supernatural or nothing at all....`,
    href: `#`,
  },
  {
    id: 2,
    active: "",
    img: `/assets/media/images/carousel/india.jpg`,
    title: `INSTANTLY HEALED OF DEAFNESS!
    THE POWER OF JESUS IS THE SAME EVERYWHERE!
    `,
    href: `#`,
  },
  {
    id: 3,
    active: "",
    img: `/assets/media/images/carousel/louisiana.jpg`,
    title: `Jesus is a very big sensation everywhere!
    LOCATION: LAFAYETTE, LOUISIANA, USA.
    `,
    href: `#`,
  },
];

const carouselContainer = document.querySelector(".hero__carousel-track");

window.addEventListener("DOMContentLoaded", () => {
  showHeroCarousel(heroCarousel);
});

const showHeroCarousel = (carousel) => {
  const carouselItem = carousel
    .map((item) => {
      return `<li class="hero__carousel-slide ${item.active}">
    <a href="#">
      <div class="hero__carousel-overlay"></div>
      <img
        src=${item.img}
        alt=""
        class="hero__carousel-image"
      />
      <div class="hero__carousel-caption">
        <h3>
          ${item.title}
        </h3>
      </div>
    </a>
    </li>`;
    })
    .join("");

  carouselContainer.innerHTML = carouselItem;

  const carouselSlide = document.querySelectorAll(".hero__carousel-slide");
  const indicator = document.querySelectorAll(".indicator");

  const currentSlide = 1;

  // indicator control
  const indicatorMoveSlide = (manual) => {
    carouselSlide.forEach((carouselSlide) => {
      carouselSlide.classList.remove("active-slide");

      indicator.forEach((indicator) => {
        indicator.classList.remove("current-slide");
      });
    });

    carouselSlide[manual].classList.add("active-slide");
    indicator[manual].classList.add("current-slide");
  };

  indicator.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      indicatorMoveSlide(i);
      currentSlide = i;
    });
  });

  // image slider autoplay
  const repeat = (activeClass) => {
    const active = document.querySelectorAll(".hero__carousel-slide");
    const activeDots = document.getElementsByClassName("current-slide");
    let i = 1;

    const repeater = () => {
      setTimeout(() => {
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove("active-slide");
        });

        [...activeDots].forEach((dots) => {
          dots.classList.remove("current-slide");
        });

        carouselSlide[i].classList.add("active-slide");
        indicator[i].classList.add("current-slide");
        i++;

        if (currentSlide.lenght === i) {
          i = 0;
        }

        if (i >= carouselSlide.length) {
          i = 0;
        }

        repeater();
      }, 5000);
    };
    repeater();
  };
  repeat();
};
