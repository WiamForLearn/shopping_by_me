const categoryDrop = document.querySelector(".categoryDrop");
const dropMenu = document.querySelector(".category-dropdown");
const burger = document.querySelector(".burger");
const burgerLine = document.querySelectorAll(".burger-line");
const mobileMenu = document.querySelector(".mobile-menu");
const filterpopup = document.querySelector(".filter-popup");
const filterNav = document.querySelector(".filter-nav");
const categoryPopup = document.querySelector(".category-popup");
const mobileCate = document.querySelector(".mobile-category");
const categoryLists = document.querySelectorAll(".mobile-category-list");

function openNavList() {
  categoryLists.forEach((cate) => {
    cate.children[1].classList.remove("active");
  });
  this.children[1].classList.add("active");
}
categoryLists.forEach((cate) => {
  cate.addEventListener("click", openNavList);
});

categoryPopup.addEventListener("click", () => {
  mobileCate.classList.toggle("active");
  categoryPopup.classList.toggle("active");
});

filterpopup.addEventListener("click", () => {
  filterNav.classList.toggle("active");
  filterpopup.classList.toggle("active");
});
categoryDrop.addEventListener("click", () => {
  dropMenu.classList.toggle("active");
  categoryDrop.classList.toggle("active");
});

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
  if ((body.style.overflow = "auto")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }

  if (burger.classList.contains("active")) {
    burger.children[0].style.transform = "rotate(135deg) translateY(-275%)";
    burger.children[1].style.display = "none";
    burger.children[2].style.transform = "rotate(-135deg) translateY(254%)";
  } else {
    burger.children[0].style.transform = "rotate(0)";
    burger.children[1].style.display = "block";
    burger.children[2].style.transform = "rotate(0deg)";
    document.body.style.overflow = "auto";
  }
});
