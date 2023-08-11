//Title animation
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const glitchName = document.querySelector(".glitch-name");
  const initialText = glitchName.innerText;

  const interval = setInterval(() => {
    glitchName.innerText = glitchName.innerText
      .split("")
      .map(() => letters[Math.floor(Math.random() * 26)])
      .join("");

    if (count >= 25) {
      clearInterval(interval);
      glitchName.innerText = initialText;
    }

    count++;
  }, 50);
});

//Image animations
document.addEventListener("DOMContentLoaded", () => {
  function scrolling() {
    let images = document.querySelectorAll(".scroll_img");

    images.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      } else {
        element.classList.remove("is-visible");
      }
    });

    window.requestAnimationFrame(scrolling);
  }

  scrolling();
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".load_img");
  images.forEach(function(img) {
      img.addEventListener("load", function() {
          img.classList.add("loaded");
      });
  });
});
