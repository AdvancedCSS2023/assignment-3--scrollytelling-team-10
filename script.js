const articles = document.querySelectorAll("article");
const options = {};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }    entry.target.classList.toggle("visible");
  });
}, options);
articles.forEach((article) => {
  observer.observe(article);
});