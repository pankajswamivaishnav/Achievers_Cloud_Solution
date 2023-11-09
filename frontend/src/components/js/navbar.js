export function addScrollListener() {
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar"); // Replace with your actual navbar class
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}
