function descriptionFor(p) {
  const statusPhrases = {
    "Breve lançamento": "está com lançamento previsto em breve",
    "Lançamento": "acaba de ser lançado",
    "Em obras": "está em fase de construção",
    "Obras avançadas": "está com as obras em fase avançada",
    "Pronto para morar": "está pronto para morar"
  };
  const statusPhrase = statusPhrases[p.status] || "é um empreendimento Riva";
  const sizePhrase = p.size ? ` com unidades de ${p.size}` : "";
  const roomsPhrase = p.rooms ? `, de ${p.rooms.toLowerCase()}` : "";
  return `O ${p.name} ${statusPhrase}, no bairro ${p.area}, em Belo Horizonte${sizePhrase}${roomsPhrase}. Um empreendimento Riva Incorporadora (grupo Direcional), com design moderno, localização estratégica e condições facilitadas de pagamento.`;
}

function renderPropertyCard(p) {
  return `
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
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const property = PROPERTIES.find(p => p.slug === slug);

  if (!property) {
    window.location.href = "index.html#imoveis";
    return;
  }

  document.getElementById("pageTitle").textContent = `${property.name} — RIVA Select`;
  document.getElementById("pageDescription").setAttribute(
    "content",
    `${property.name} em ${property.city}. ${property.size || ""} ${property.rooms || ""}.`.trim()
  );

  document.getElementById("propImage").src = property.image;
  document.getElementById("propImage").alt = property.name;
  document.getElementById("propStatusBadge").textContent = property.status;
  document.getElementById("propName").textContent = property.name;
  document.getElementById("propCity").textContent = property.city;
  document.getElementById("propDescription").textContent = descriptionFor(property);

  const specs = [
    { label: "Bairro", value: property.area },
    { label: "Status", value: property.status },
    { label: "Metragem", value: property.size || "Consulte um consultor" },
    { label: "Quartos", value: property.rooms || "Consulte um consultor" }
  ];
  document.getElementById("specGrid").innerHTML = specs.map(s => `
    <div class="spec-item">
      <span class="spec-label">${s.label}</span>
      <span class="spec-value">${s.value}</span>
    </div>
  `).join("");

  document.getElementById("whatsappCta").href = whatsappLink(property.name);
  document.getElementById("officialLink").href = property.url;

  // Outros imóveis no mesmo bairro (ou, se não houver, outros aleatórios)
  document.getElementById("relatedHeading").textContent = `Outros imóveis em ${property.area}`;
  let related = PROPERTIES.filter(p => p.area === property.area && p.slug !== property.slug);
  if (related.length === 0) {
    document.getElementById("relatedHeading").textContent = "Outros imóveis Riva em Belo Horizonte";
    related = PROPERTIES.filter(p => p.slug !== property.slug).slice(0, 3);
  }
  document.getElementById("relatedGrid").innerHTML = related.slice(0, 3).map(renderPropertyCard).join("");

  // Menu mobile
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("is-open");
  });
  mainNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mainNav.classList.remove("is-open"));
  });
});
