const articles = document.querySelectorAll("article");
const options = {};
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("visible");
    const visibleArticles = document.querySelectorAll(".visible");
    visibleArticles.forEach((article) => {
      const logo = article.querySelector(".scene__img--logo");
      const car = article.querySelector(".scene__img--car");
      const cloud = article.querySelector(".scene__img--cloud");
      const buildings = article.querySelector(".scene__buildings");
      const shakeBuildings = article.querySelector(".scene__shake");
      const sandwitches = article.querySelector(".scene4--sandwitches");
      const waterbottles = article.querySelector(".scene4--waterbottles");
      const person1 = article.querySelector(".scene__img--person1");
      const person2 = article.querySelector(".scene__img--person2");
      const bigcar = article.querySelector(".scene__img--bigcar");
      const houses = article.querySelector(".scene__img--houses");

      if (logo) {
        logo.classList.add("animate-logo");
      }

      if (car) {
        car.classList.add("animate-car");
      }

      if (cloud) {
        cloud.classList.add("animate-cloud");
      }

      if (buildings) {
        buildings.classList.add("animate-buildings");
      }

      if (shakeBuildings) {
        shakeBuildings.classList.add("animate-shake");
      }

      if (sandwitches) {
        sandwitches.classList.add("animate-sandwitches");
      }

      if (waterbottles) {
        waterbottles.classList.add("animate-waterbottles");
      }

      if (person1) {
        person1.classList.add("animate-person1");
      }

      if (person2) {
        person2.classList.add("animate-person2");
      }

      if (bigcar) {
        bigcar.classList.add("animate-bigcar");
      }

      if (houses) {
        houses.classList.add("animate-houses");
      }
    });
  });
}, options);

articles.forEach((article) => {
  observer.observe(article);
});