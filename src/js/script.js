// console.log("TEST");

function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);
//------------Script for go to
const transitItems = document.querySelectorAll('.nav-link[data-goto]');
if (transitItems.length > 0) {
  transitItems.forEach(transitItem =>{
    transitItem.addEventListener('click', onTransitItemClick);
  });

  function onTransitItemClick(e) {
    const transitItem = e.target;
    if(transitItem.dataset.goto && document.querySelector(transitItem.dataset.goto)){
      const gotoBlock = document.querySelector(transitItem.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top +pageYOffset - document.querySelector('banner');
      
      window.scrollTo({
        top:gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();

    }
  }
}