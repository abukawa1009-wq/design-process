// タイトルがゆっくり動く
const title = document.querySelector(".title");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  title.style.transform = `translateY(${y * 0.2}px)`;
});

// Set Listスムーススクロール
const links = document.querySelectorAll(".setlist a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

//画像スライダー
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
