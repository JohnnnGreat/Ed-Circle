let menu = document.getElementById("menu");
let nav = document.getElementById("nav");

menu.addEventListener("click", open);

function open() {
  nav.classList.toggle("open");
}

//Arrow move effect on Service section

let x = document.querySelectorAll(".services__wraper__card__item");

x.forEach((element) => {
  hover(element);
});

function hover(el) {
  if (!el) {
    throw new Error("Element source in invalid");
  } else {
    let x = el.querySelector(".more");
    let svg = x.querySelector("#arrow");

    x.addEventListener("mouseenter", function (e) {
      e.preventDefault();
      svg.style.marginLeft = "22px";
    });

    x.addEventListener("mouseleave", function (e) {
      e.preventDefault();
      svg.style.marginLeft = "10px";
    });
  }
}

(function () {
  navOverlay("menu", "click", "cover");
})();
//Show overlay cover on navigation open

function navOverlay(el, evt, cover) {
  let element = document.querySelector(`#${el}`);
  let navIsOpen = false;
  console.log(navIsOpen);
  if (element) {
    let coverOv = document.querySelector(`.${cover}`);

    if (coverOv) {
      navIsOpen = true;
      element.addEventListener(evt, function () {
        coverOv.classList.toggle("show");
      });
    }
  }
}

(function () {
  showExp("search", "click", "explore-more");
})();

//Show Explore more

function showExp(el, evt, more) {
  let element = document.querySelector(`#${el}`);
  let moreEx = document.querySelector(`.${more}`);

  moreEx.style.top = `${element.offsetTop + 40}px`;
  moreEx.style.left = `${element.offsetLeft}px`;

  element.addEventListener(evt, function (e) {
    moreEx.style.opacity = "1";

    moreEx.addEventListener("mouseleave", function () {
      setTimeout(function () {
        moreEx.style.opacity = "0";
      }, 1000);
    });
  });
}

let header = document.getElementById("nav");
header.addEventListener("mouseenter", function () {
  header.classList.add("overflow");
});

(function () {
  let coverAlr = document.querySelector(".frontend-alert");
  window.addEventListener("load", function () {
    this.setTimeout(function () {
      coverAlr.style.display = "none";
    }, 3000);
  });
})();
