document.querySelectorAll("#gnb > li > a").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const ul = this.nextElementSibling;
    if (ul.classList.contains("active")) {
      // If the clicked ul already has the active class, remove it
      ul.classList.remove("active");
      item.classList.remove("active");
    } else {
      // Remove active class from all ul elements
      document.querySelectorAll("#gnb ul").forEach((ul) => {
        ul.classList.remove("active");
      });
      document.querySelectorAll("#gnb > li > a").forEach((ul) => {
        ul.classList.remove("active");
      });
      // Add active class to the clicked item's ul
      ul.classList.add("active");
      item.classList.add("active");
    }
  });
});
