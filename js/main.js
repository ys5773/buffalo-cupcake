document.addEventListener("DOMContentLoaded", function () {
  // Load navbar
  fetch("components/navbar.html")
    .then(res => res.text())
    .then(html => {
      const navbar = document.getElementById("navbar-container");
      if (navbar) navbar.innerHTML = html;
    });

  // Load menu
  fetch("components/menu.html")
    .then(res => res.text())
    .then(html => {
      const menu = document.getElementById("menu-container");
      if (menu) menu.innerHTML = html;
    });

  // Load collage
  fetch("components/cup-collage.html")
    .then(res => res.text())
    .then(html => {
      const collage = document.getElementById("cupCollageContainer");
      if (collage) collage.innerHTML = html;
    });

  // Load baker section
  fetch("components/cup-baker-section.html")
    .then(res => res.text())
    .then(html => {
      const baker = document.getElementById("baker-section");
      if (baker) baker.innerHTML = html;
    });

  // Load reviews section
  fetch("components/reviews.html")
    .then(res => res.text())
    .then(html => {
      const reviews = document.getElementById("reviews-section");
      if (reviews) reviews.innerHTML = html;
    });

  // Load footer
  fetch("components/footer.html")
    .then(res => res.text())
    .then(html => {
      const footer = document.getElementById("footer");
      if (footer) footer.innerHTML = html;
    });
});
