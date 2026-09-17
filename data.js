// Dados reais dos empreendimentos Riva em Belo Horizonte/MG
// Compartilhado entre script.js (grid da home) e imovel.js (página de detalhe)
const PROPERTIES = [
  {
    slug: "casa-sigaud-caicara-riva",
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
    slug: "breve-lancamento-no-castelo",
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
    slug: "citta-bene-riva-residence",
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
    slug: "citta-primo-riva-residence",
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
    slug: "neo-pampulha-residence-riva",
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
    slug: "sun-raja-residence-riva",
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
    slug: "sky-raja-residence-riva",
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
    slug: "apice-home-riva",
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
    slug: "be-all-jaragua-residence",
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
    slug: "essenza-home-riva",
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
    slug: "life-360-residencial-clube",
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
    slug: "vivence-lagoa-riva",
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
    slug: "eleva-residence-riva",
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
    slug: "get-easy-studios-riva",
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
    slug: "be-easy-studios-riva",
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
    slug: "be-up-silva-lobo-residence",
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
    slug: "go-up-residence",
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
    slug: "elo-paradise-riva",
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
    slug: "reserva-dos-buritis",
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
    slug: "reserva-dos-passaros",
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
    slug: "reserva-das-palmeiras",
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
    slug: "reserva-do-parque",
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
    slug: "be-you-barro-preto-residence",
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
    slug: "exclusive-montreal",
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
    slug: "alto-gutierrez-condominio-boutique",
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

const WHATSAPP_NUMBER = "5531971186432";

function whatsappLink(propertyName) {
  const text = encodeURIComponent(`Olá! Tenho interesse no imóvel ${propertyName}.`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
