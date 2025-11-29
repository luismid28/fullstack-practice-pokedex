console.log("loadPokemons.js loaded!")

async function loadPokemons() {
  const API_BASE = "https://pokeapi.co/api/v2";
  const LIMIT = 151;

  const grid = document.getElementById("pokemon-grid");
  grid.innerHTML = "Cargando Pokémon...";

  // 1. Obtener lista
  const resList = await fetch(`${API_BASE}/pokemon?limit=${LIMIT}`);
  const dataList = await resList.json();

  const pokemonData = [];

  // 2. Obtener detalles
  for (const item of dataList.results) {
    const res = await fetch(item.url);
    const data = await res.json();

    pokemonData.push({
      id: data.id,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
    });
  }

  // 3. Renderizar
  grid.innerHTML = "";
  pokemonData.forEach((p) => {
    const card = document.createElement("div");
    card.className = "pokemon-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" width="120">
      <h3>${p.name}</h3>
      <p>#${p.id}</p>
    `;

    grid.appendChild(card);
  });
}

window.onload = loadPokemons;
