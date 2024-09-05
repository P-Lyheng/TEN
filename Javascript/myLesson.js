const history = document.querySelector(".history");
const like = document.querySelector(".like");
const watchLatter = document.querySelector(".watchlatter");
const list = document.querySelector(".option-link.list");
const historySection = document.querySelector(".history-section");
const watchLatterSection = document.querySelector(".watch-latter");
const likeSection = document.querySelector(".like-lesson");
const listSection = document.querySelector(".list-section");

history.addEventListener("click", function () {
  
  history.classList.add("active");
  like.classList.remove("active");
  list.classList.remove("active");
  watchLatter.classList.remove("active");

  historySection.classList.add("active");
  watchLatterSection.classList.remove("active");
  likeSection.classList.remove("active");
  listSection.classList.remove("active");
});

like.addEventListener("click", function () {
  like.classList.add("active");
  history.classList.remove("active");
  list.classList.remove("active");
  watchLatter.classList.remove("active");

  likeSection.classList.add("active");
  watchLatterSection.classList.remove("active");
  historySection.classList.remove("active");
  listSection.classList.remove("active");
});

watchLatter.addEventListener("click", function () {

  watchLatter.classList.add("active");
  history.classList.remove("active");
  like.classList.remove("active");
  list.classList.remove("active");
  watchLatterSection.classList.add("active");
  historySection.classList.remove("active");
  likeSection.classList.remove("active");
  listSection.classList.remove("active");
});
list.addEventListener("click", function () {
  list.classList.add("active");
  history.classList.remove("active");
  like.classList.remove("active");
  watchLatter.classList.remove("active");


    listSection.classList.add("active");
    watchLatterSection.classList.remove("active");
    historySection.classList.remove("active");
    likeSection.classList.remove("active");
  });

 
// like.addEventListener("click", function () {
//     listSection.classList.remove("active")
//     historySection.classList.remove("active");
//   likeSection.classList.add("active")
//   watchLatterSection.classList.remove("active")
//   });

// watchLatter.addEventListener("click", function () {
//     historySection.classList.remove("active");
//   likeSection.classList.remove("active")
//   listSection.classList.remove("active")
//   watchLatterSection.classList.add("active")
//   });
