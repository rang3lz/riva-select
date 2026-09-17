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
  },
  {
    name: "Città Primo Riva Residence",
    city: "Ouro Preto, Belo Horizonte/MG",
    area: "Ouro Preto",
    status: "Em obras",
    size: "43.04m² até 50.62m²",
    rooms: "2 quartos",
    image: "images/citta-primo-riva-residence.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/citta-primo-riva-residence/"
  },
  {
    name: "Neo Pampulha Residence Riva",
    city: "Ouro Preto, Belo Horizonte/MG",
    area: "Ouro Preto",
    status: "Obras avançadas",
    size: "82.72m²",
    rooms: "3 quartos",
    image: "images/neo-pampulha-residence-riva.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/neo-pampulha-residence-riva/"
  },
  {
    name: "Sun Raja Residence Riva",
    city: "São Bento, Belo Horizonte/MG",
    area: "São Bento",
    status: "Em obras",
    size: null,
    rooms: "2 quartos",
    image: "images/sun-raja-residence.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/sun-raja-residence-riva/"
  },
  {
    name: "Sky Raja Residence Riva",
    city: "São Bento, Belo Horizonte/MG",
    area: "São Bento",
    status: "Pronto para morar",
    size: "58.51m²",
    rooms: "2 quartos",
    image: "images/sky-raja-residence-riva.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/sky-raja-residencial/"
  },
  {
    name: "Ápice Home Riva",
    city: "Coração Eucarístico, Belo Horizonte/MG",
    area: "Coração Eucarístico",
    status: "Em obras",
    size: "43m² até 90m²",
    rooms: "1 a 3 quartos",
    image: "images/apice-home-riva.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/apice-home-riva/"
  },
  {
    name: "Be All Jaraguá Residence",
    city: "Aeroporto, Belo Horizonte/MG",
    area: "Aeroporto",
    status: "Em obras",
    size: "24m² até 54m²",
    rooms: "1, 2 e 3 quartos",
    image: "images/be-all-jaragua-residence.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/be-all-jaragua-residence/"
  },
  {
    name: "Essenza Home Riva",
    city: "Palmares, Belo Horizonte/MG",
    area: "Palmares",
    status: "Em obras",
    size: "55.62m² até 64.67m²",
    rooms: "2 e 3 quartos",
    image: "images/essenza-home-riva.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/essenza-home-riva/"
  },
  {
    name: "Life 360 Residencial Clube",
    city: "Palmares, Belo Horizonte/MG",
    area: "Palmares",
    status: "Pronto para morar",
    size: "82.72m²",
    rooms: "3 quartos",
    image: "images/life-360-residencial-clube.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/life-360-residencial-clube/"
  },
  {
    name: "Vivence Lagoa Riva",
    city: "Santa Amélia, Belo Horizonte/MG",
    area: "Santa Amélia",
    status: "Em obras",
    size: "63.54m²",
    rooms: "2 e 3 quartos",
    image: "images/vivence-lagoa-riva.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/vivence-lagoa-riva/"
  },
  {
    name: "Eleva Residence Riva",
    city: "São Luiz, Belo Horizonte/MG",
    area: "São Luiz",
    status: "Em obras",
    size: "82.72m²",
    rooms: "3 quartos",
    image: "images/eleva-residence-riva.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/eleva-residence-riva/"
  },
  {
    name: "Get Easy Studios Riva",
    city: "São Cristovão, Belo Horizonte/MG",
    area: "São Cristovão",
    status: "Pronto para morar",
    size: "27.11m²",
    rooms: "Studio",
    image: "images/get-easy-studios-riva.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/get-easy-studios-riva/"
  },
  {
    name: "Be Easy Studios Riva",
    city: "Nova Suíça, Belo Horizonte/MG",
    area: "Nova Suíça",
    status: "Pronto para morar",
    size: "29.2m²",
    rooms: "Studio",
    image: "images/be-easy-studios-riva.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/be-easy-studios-riva/"
  },
  {
    name: "Be Up Silva Lobo Residence",
    city: "Nova Suíça, Belo Horizonte/MG",
    area: "Nova Suíça",
    status: "Pronto para morar",
    size: "54.80m²",
    rooms: "2 quartos",
    image: "images/be-up-silva-lobo-residence.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/be-up-silva-lobo-residence/"
  },
  {
    name: "Go Up Residence",
    city: "Nova Suíça, Belo Horizonte/MG",
    area: "Nova Suíça",
    status: "Pronto para morar",
    size: "58.01m² até 58.90m²",
    rooms: "2 quartos",
    image: "images/go-up-residence.jpg",
    url: "https://www.rivaincorporadora.com.br/imoveis/mg/belo-horizonte/"
  },
  {
    name: "Elo Paradise Riva",
    city: "Castelo, Belo Horizonte/MG",
    area: "Castelo",
    status: "Pronto para morar",
    size: "64m²",
    rooms: "3 quartos",
    image: "images/elo-paradise-riva.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/elo-paradise-riva/"
  },
  {
    name: "Reserva dos Buritis",
    city: "Palmeiras, Belo Horizonte/MG",
    area: "Palmeiras",
    status: "Pronto para morar",
    size: "67.40m²",
    rooms: "3 quartos",
    image: "images/reserva-dos-buritis.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/reserva-dos-buritis/"
  },
  {
    name: "Reserva dos Pássaros",
    city: "Palmeiras, Belo Horizonte/MG",
    area: "Palmeiras",
    status: "Pronto para morar",
    size: "67.40m²",
    rooms: "3 quartos",
    image: "images/reserva-dos-passaros.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/reserva-dos-passaros/"
  },
  {
    name: "Reserva das Palmeiras",
    city: "Palmeiras, Belo Horizonte/MG",
    area: "Palmeiras",
    status: "Pronto para morar",
    size: "67.40m²",
    rooms: "3 quartos",
    image: "images/reserva-das-palmeiras.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/reserva-das-palmeiras/"
  },
  {
    name: "Reserva do Parque",
    city: "Palmeiras, Belo Horizonte/MG",
    area: "Palmeiras",
    status: "Pronto para morar",
    size: "27.01m² até 46.15m²",
    rooms: "Studio a 2 quartos",
    image: "images/reserva-do-parque.jpg",
    url: "https://www.rivaincorporadora.com.br/imoveis/mg/belo-horizonte/"
  },
  {
    name: "Be You Barro Preto Residence",
    city: "Barro Preto, Belo Horizonte/MG",
    area: "Barro Preto",
    status: "Pronto para morar",
    size: "54.80m²",
    rooms: "2 quartos",
    image: "images/be-you-barro-preto-residence.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/be-you-barro-preto-residence/"
  },
  {
    name: "Exclusive Montreal",
    city: "Caiçara, Belo Horizonte/MG",
    area: "Caiçara",
    status: "Pronto para morar",
    size: "52.06m²",
    rooms: "2 quartos",
    image: "images/exclusive-montreal.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/exclusive-montreal/"
  },
  {
    name: "Alto Gutierrez Condomínio Boutique",
    city: "Gutierrez, Belo Horizonte/MG",
    area: "Gutierrez",
    status: "Pronto para morar",
    size: "79.12m²",
    rooms: "3 quartos",
    image: "images/alto-gutierrez.jpg",
    url: "https://www.rivaincorporadora.com.br/empreendimentos/alto-gutierrez-condominio-boutique/"
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
