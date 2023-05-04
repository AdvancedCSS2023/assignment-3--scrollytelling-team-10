/* scene 2 */
const scene2__buildings = document.querySelectorAll(".scene2__buildings");
const options = {};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.toggle("scene2__buildings--animation");
  });
}, options);

scene2__buildings.forEach((scene2__buildings) => {
  observer.observe(scene2__buildings);
});

/* scene 3 */

const scene3__shake = document.querySelectorAll(".scene3__shake");

const observer2 = new IntersectionObserver(function (entries, observer2) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.toggle("scene3_shake--animation");
  });
}, options);

scene3__shake.forEach((scene3__shake) => {
  observer2.observe(scene3__shake);
});

/* sun */

const scene4__img = document.querySelectorAll(".scene4__img--sun");

const observer3 = new IntersectionObserver(function (entries, observer3) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.toggle("scene4__img--sun--animation");
  });
}, options);

scene4__img.forEach((scene4__img) => {
  observer3.observe(scene4__img);
});
