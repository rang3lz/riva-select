// Dados reais extraídos de rivaincorporadora.com.br/imoveis/ (setembro/2026)
// Escopo: apenas empreendimentos de Minas Gerais (Belo Horizonte)
const PROPERTIES = [
  {
    name: "Casa Sigaud Caiçara Riva",
    city: "Caiçara, Belo Horizonte/MG",
    area: "Caiçara",
    status: "Breve lançamento",
    size: "55.80m² até 83.19m²",
    rooms: "3 quartos",
    image: "images/casa-sigaud-caicara.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/casa-sigaud-caicara-riva/"
  },
  {
    name: "Breve Lançamento no Castelo",
    city: "Castelo, Belo Horizonte/MG",
    area: "Castelo",
    status: "Breve lançamento",
    size: "54.89m² até 82.79m²",
    rooms: "3 quartos",
    image: "images/casa-sintra-castelo.png",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/casa-sintra-residence-riva/"
  },
  {
    name: "Città Bene Riva Residence",
    city: "Ouro Preto, Belo Horizonte/MG",
    area: "Ouro Preto",
    status: "Lançamento",
    size: "51.13m² até 59.51m²",
    rooms: "3 quartos",
    image: "images/citta-bene-ouro-preto.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/citta-bene-riva-residence/"
  }
];

function renderProperties(filter) {
  const grid = document.getElementById("propertyGrid");
  const list = filter === "all" ? PROPERTIES : PROPERTIES.filter(p => p.area === filter);

  grid.innerHTML = list.map(p => `
    <a class="property-card" href="${p.url}" target="_blank" rel="noopener">
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
        <span class="property-cta">Ver detalhes no site da Riva</span>
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
