const scene3__shake = document.querySelectorAll(".scene3__shake");
const options = {};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.toggle("scene3_shake--animation");
  });
}, options);

scene3__shake.forEach((scene3__shake) => {
  observer.observe(scene3__shake);
});

/* sun */

const scene4__img = document.querySelectorAll(".scene4__img--sun");

const observer2 = new IntersectionObserver(function (entries, observer2) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.toggle("scene4__img--sun--animation");
  });
}, options);

scene4__img.forEach((scene4__img) => {
  observer2.observe(scene4__img);
});
