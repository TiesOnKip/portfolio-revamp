document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const sidebarToggle = document.querySelector("button.sidebar-toggle");
  const mobileNavWrapper = document.createElement("div");
  mobileNavWrapper.classList.add("mobile-nav-wrapper");
  mobileNavWrapper.innerHTML = `
        <nav class="mobile-nav">
            <a href="index.html">Home</a>
            <a href="about.html">Over</a>
            <a href="contact.html">Contact</a>
            <a href="projects.html">Projecten</a>
        </nav>
    `;
  document.body.appendChild(mobileNavWrapper);

  sidebarToggle.addEventListener("click", function () {
    header.classList.toggle("nav-opened");
    mobileNavWrapper.classList.toggle("show");
  });
});
