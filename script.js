/* scene 1 */
const scene1__img__logo = document.querySelectorAll(".scene1__img--logo");

const options = {};

const observer1 = new IntersectionObserver(
  function (entries, observer1) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene1__img--logo--animation");
    });
  },

  options
);

scene1__img__logo.forEach((scene1__img__logo) => {
  observer1.observe(scene1__img__logo);
});

/* scene 2 */
const scene2__buildings = document.querySelectorAll(".scene2__buildings");

const observer2 = new IntersectionObserver(
  function (entries, observer2) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene2__buildings--animation");
    });
  },

  options
);

scene2__buildings.forEach((scene2__buildings) => {
  observer2.observe(scene2__buildings);
});

/* scene 3 */

const scene3__shake = document.querySelectorAll(".scene3__shake")

const observer3 = new IntersectionObserver(
  function (entries, observer3) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene3_shake--animation");
    });
  },

  options
);

scene3__shake.forEach((scene3__shake) => {
  observer3.observe(scene3__shake);
});

/* scene 4 - sun */

const scene4__img__sun = document.querySelectorAll(".scene4__img--sun");

const observer4 = new IntersectionObserver(
  function (entries, observer4) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene4__img--sun--animation");
    });
  },

  options
);

scene4__img__sun.forEach((scene4__img__sun) => {
  observer4.observe(scene4__img__sun);
});

/* scene 4 - cloud */

const scene4__img__cloud = document.querySelectorAll(".scene4__img--cloud ");

const observer5 = new IntersectionObserver(
  function (entries, observer5) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene4__img--cloud--animation");
    });
  },

  options
);

scene4__img__cloud.forEach((scene4__img__cloud) => {
  observer5.observe(scene4__img__cloud);
});

/*scene 4 - background */

const scene4 = document.querySelectorAll(".scene4 ");

const observer6 = new IntersectionObserver(
  function (entries, observer6) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene4--animation");
    });
  },

  options
);

scene4.forEach((scene4) => {
  observer6.observe(scene4);
});

/* scene 4 - food */

const scene4__food = document.querySelectorAll(".scene4__food ");

const observer7 = new IntersectionObserver(
  function (entries, observer7) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene4__food--animation");
    });
  },

  options
);

scene4__food.forEach((scene4__food) => {
  observer7.observe(scene4__food);
});

/* scene 4 - person1 */

const scene4__img__person1 = document.querySelectorAll(".scene4__img--person1");

const observer8 = new IntersectionObserver(
  function (entries, observer8) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene4__img--person1--animation");
    });
  },

  options
);

scene4__img__person1.forEach((scene4__img__person1) => {
  observer8.observe(scene4__img__person1);
});

/* scene 4 - person2 */

const scene4__img__person2 = document.querySelectorAll(".scene4__img--person2");

const observer9 = new IntersectionObserver(
  function (entries, observer9) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene4__img--person2--animation");
    });
  },

  options
);

scene4__img__person2.forEach((scene4__img__person2) => {
  observer9.observe(scene4__img__person2);
});

/* scene 4 - car */

const scene4__img__car = document.querySelectorAll(".scene4__img--car");

const observer10 = new IntersectionObserver(
  function (entries, observer10) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene4__img--car--animation");
    });
  },

  options
);

scene4__img__car.forEach((scene4__img__car) => {
  observer10.observe(scene4__img__car);
});

/* scene 5 - cloud */
const scene5__img__cloud = document.querySelectorAll(".scene5__img--cloud");

const observer11 = new IntersectionObserver(
  function (entries, observer11) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene5__img--cloud--animation");
    });
  },

  options
);

scene5__img__cloud.forEach((scene5__img__cloud) => {
  observer11.observe(scene5__img__cloud);
});

/* scene 5 - other cloud */

const scene5__img__other__cloud = document.querySelectorAll(
  ".scene5__img--other--cloud"
);

const observer12 = new IntersectionObserver(
  function (entries, observer12) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene5__img--other--cloud--animation");
    });
  },

  options
);

scene5__img__other__cloud.forEach((scene5__img__other__cloud) => {
  observer12.observe(scene5__img__other__cloud);
});

/* scene 5 - tent */

const scene5__img__tent = document.querySelectorAll(".scene5__img--tent");

const observer13 = new IntersectionObserver(
  function (entries, observer13) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene5__img--tent--animation");
    });
  },

  options
);

scene5__img__tent.forEach((scene5__img__tent) => {
  observer13.observe(scene5__img__tent);
});

/* scene 5 - red cross person */

const scene5__img__red__cross__person = document.querySelectorAll(
  ".scene5__img--red--cross--person"
);

const observer14 = new IntersectionObserver(
  function (entries, observer14) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle(
        "scene5__img--red--cross--person--animation"
      );
    });
  },

  options
);

scene5__img__red__cross__person.forEach((scene5__img__red__cross__person) => {
  observer14.observe(scene5__img__red__cross__person);
});

/* scene 6 - big car */

const scene6__img__bigcar = document.querySelectorAll(".scene6__img--bigcar");

const observer15 = new IntersectionObserver(
  function (entries, observer15) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene6__img--bigcar--animation");
    });
  },

  options
);

scene6__img__bigcar.forEach((scene6__img__bigcar) => {
  observer15.observe(scene6__img__bigcar);
});

/* scene 6 - houses */
const scene6__img__houses = document.querySelectorAll(".scene6__img--houses");

const observer16 = new IntersectionObserver(
  function (entries, observer16) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene6__img--houses--animation");
    });
  },

  options
);

scene6__img__houses.forEach((scene6__img__houses) => {
  observer16.observe(scene6__img__houses);
});

/* scene 6 - heart */
const scene6__svg__heart = document.querySelectorAll(".scene6__svg--heart");

const observer17 = new IntersectionObserver(
  function (entries, observer17) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene6__svg--heart--animation");
    });
  },

  options
);

scene6__svg__heart.forEach((scene6__svg__heart) => {
  observer17.observe(scene6__svg__heart);
});

/* scene 7 - logo */
const scene7__img__logo = document.querySelectorAll(".scene7__img--logo");

const observer18 = new IntersectionObserver(
  function (entries, observer18) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("scene7__img--logo--animation");
    });
  },

  options
);

scene7__img__logo.forEach((scene7__img__logo) => {
  observer18.observe(scene7__img__logo);
});
