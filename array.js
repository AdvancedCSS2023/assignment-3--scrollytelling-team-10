const scenes = [
    {
      selector: '.scene1__img--logo',
      class: 'scene1__img--logo--animation'
    },
    {
      selector: '.scene2__buildings',
      class: 'scene2__buildings--animation'
    },
    {
      selector: '.scene3__shake',
      class: 'scene3_shake--animation'
    },
    {
      selector: '.scene4__img--sun',
      class: 'scene4__img--sun--animation'
    },
    {
      selector: '.scene4__img--cloud',
      class: 'scene4__img--cloud--animation'
    },
    {
      selector: '.scene4',
      class: 'scene4--animation'
    },
    {
      selector: '.scene4__food',
      class: 'scene4__food--animation'
    },
    {
      selector: '.scene4__img--person1',
      class: 'scene4__img--person1--animation'
    },
    {
      selector: '.scene4__img--person2',
      class: 'scene4__img--person2--animation'
    },
    {
      selector: '.scene4__img--car',
      class: 'scene4__img--car--animation'
    },
    {
      selector: '.scene5__img--cloud',
      class: 'scene5__img--cloud--animation'
    },
    {
      selector: '.scene5__img--other--cloud',
      class: 'scene5__img--other--cloud--animation'
    },
    {
      selector: '.scene5__img--tent',
      class: 'scene5__img--tent--animation'
    },
    {
      selector: '.scene5__img--red--cross--person',
      class: 'scene5__img--red--cross--person--animation'
    },
    {
      selector: '.scene6__img--bigcar',
      class: 'scene6__img--bigcar--animation'
    },
    {
      selector: '.scene6__img--houses',
      class: 'scene6__img--houses--animation'
    },
    {
      selector: '.scene6__svg--heart',
      class: 'scene6__svg--heart--animation'
    },
    {
      selector: '.scene7__img--logo',
      class: 'scene7__img--logo--animation'
    }
  ];
  
  const observerOptions = {};
  
  scenes.forEach((scene) => {
    const elements = document.querySelectorAll(scene.selector);
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
  
        entry.target.classList.toggle(scene.class);
      });
    }, observerOptions);
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });
  