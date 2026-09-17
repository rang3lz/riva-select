// PROPERTIES vem de data.js (compartilhado com imovel.js)

function renderProperties(filter) {
  const grid = document.getElementById("propertyGrid");
  const list = filter === "all" ? PROPERTIES : PROPERTIES.filter(p => p.area === filter);

  grid.innerHTML = list.map(p => `
    <a class="property-card" href="imovel.html?slug=${p.slug}">
      <div class="property-media">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="property-badge">${p.status}</span>
      </div>
      <div class="property-body">
        <span class="property-location">${p.city}</span>
        <h3>${p.name}</h3>
        <div class="property-meta">
          ${p.size ? `<span>${p.size}</span>` : ""}
          ${p.rooms ? `<span>${p.rooms}</span>` : ""}
        </div>
        <span class="property-cta">Ver detalhes</span>
      </div>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProperties("all");

  // Filtro por bairro
  const filterBar = document.getElementById("filterBar");
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProperties(btn.dataset.filter);
  });

  // Header com fundo ao rolar
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menu mobile
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("is-open");
  });
  mainNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mainNav.classList.remove("is-open"));
  });

  // FAQ accordion
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const wasOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("is-open"));
      if (!wasOpen) item.classList.add("is-open");
    });
  });
});
