 // js/menu.js
document.addEventListener("DOMContentLoaded", function() {
  const linkActivo = document.querySelector(".menu-link.activo");
  if (linkActivo) {
    linkActivo.addEventListener("click", function(event) {
      event.preventDefault(); // evita que navegue
    });

    linkActivo.style.opacity = "0.7";
    linkActivo.style.cursor = "default";
  }
});