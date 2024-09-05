const menuIcon = document.querySelector(".menu-icon");
const main = document.querySelector("main");
const menu = document.querySelector(".menu");
const homePage = document.querySelector(".home-page");
const faSolid = document.querySelector(".fa-bars.fa-solid");

const dropdown = document.querySelector(".dropdown");
const dropLink = document.querySelector(".drop-link");

const functionLink = document.querySelector(".function-link-btn");
const preSetting = document.querySelector(".pre-setting");

const functionLink1 = document.querySelector(".function-link");
const goods = document.querySelector(".goods");

const DeleteBtn1 = document.querySelector(".delete-btn-1");
const DeleteBtn2 = document.querySelector(".delete-btn-2");
const goodsItem1 = document.querySelector(".goods-Item-1");

const btnDot = document.querySelector(".btnn");
const subBtn = document.querySelector(".sub-btn");

const heart = document.querySelector(".heart");
const iconHeart = document.querySelector(".fa-regular.fa-heart");

const history = document.querySelector(".history");
const historySection = document.querySelector(".history-section");

const bell = document.querySelector(".fa-bell");
const notification = document.querySelector(".notification");

bell.addEventListener("click", function () {
  notification.classList.toggle("active");
});

menuIcon.addEventListener("click", function () {
  main.classList.toggle("active");
  homePage.classList.toggle("active");
});
menuIcon.addEventListener("click", function () {
  faSolid.classList.toggle("fa-xmark");
});
menuIcon.addEventListener("click", function () {
  faSolid.classList.toggle("fa-bars");
});
menuIcon.addEventListener("click", function () {
  menu.classList.toggle("active");
});
dropLink.addEventListener("click", function () {
  dropdown.classList.toggle("active");
});
functionLink.addEventListener("click", function () {
  preSetting.classList.toggle("active");
});
functionLink1.addEventListener("click", function () {
  goods.classList.toggle("active");
});
btnDot.addEventListener("click", function () {
  subBtn.classList.toggle("active");
});
heart.addEventListener("click", function () {
  iconHeart.classList.toggle("fa-solid");
});

history.addEventListener("click", function () {
  historySection.classList.toggle("active");
});


// ឬសរសេរបែបនេះវិញក៏បាន ដោយប្រើនូវ Condition
// toggle.addEventListener("click", function () {
//   if (navLists.classList.contains("active")) {
//     navLists.classList.remove("active");
//   } else {
//     navLists.classList.add("active");
//   }
// });
