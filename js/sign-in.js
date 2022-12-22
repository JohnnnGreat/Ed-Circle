//Sign-up functionalities
let inputText = document.querySelectorAll(".label");
let input = document.querySelectorAll(".fullname");
let container = document.querySelectorAll(".container-input");
let isFocus = false;
inputText.forEach((elementText) => {
  elementText.addEventListener("click", function () {
    let x = elementText.nextElementSibling;

    x.style.display = "block";
    x.focus();
    let text = x.parentElement.querySelector(".label");
    text.classList.add("text-re");
  });
});

function validate() {
  let name = document.getElementById("fullname");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let check = document.getElementById("email-check");
  if (email.value == "" || password.value == "") {
    showError("Error in Input", "error");
  } else {
    showError("Success", "success");
  }
}

let submitBtn = document.querySelector(".sign-up-n");
submitBtn.addEventListener("click", validate);

function showError(message, infoType) {
  let infoBar = document.querySelector(".info-rate");
  let text = document.querySelector(".text");

  text.textContent = message;
  if (infoType == "success") {
    infoBar.style.background = "rgb(30, 194, 1)";
  } else {
    infoBar.style.background = "rgb(252, 111, 111)";
  }
  infoBar.classList.remove("scale-down");
  infoBar.classList.add("scale-up");

  setTimeout(function () {
    infoBar.classList.add("scale-down");
    infoBar.classList.remove("scale-up");
  }, 4000);
}
// let inputField = document.querySelectorAll(".input-f");
// let arr = [];
// document.body.addEventListener("click", function () {
//   inputField.forEach((item) => {
//     item.style.display = "none";
//   });
// });
let menu = document.getElementById("menu");
let nav = document.getElementById("nav");

menu.addEventListener("click", open);

function open() {
  nav.classList.toggle("open");
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
