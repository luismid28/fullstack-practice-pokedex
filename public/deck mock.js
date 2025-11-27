// public/js/mock-data.js

//Usuarios de ejemplo
const MOCK_USERS = [
{
id: 1,
nombredeusuario: "ash",
nombre: "Ash Ketchum",
correoelectronico: "ash@example.com"
},
{
id: 2,
nombredeusuario: "misty",
nombre: "Misty",
correoelectronico: "misty@example.com"
}
];

Pokémondeejemplo (formatosimplificadoparecidoaPokéAPI)
const MOCK_POKEMON = [
{
id: 1,
nombre: "bulbasaur",
tipos: ["planta", "veneno"],
sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
estadísticas: { hp: 45, ataque: 49, defensa: 49, velocidad: 45 }
},
{
id: 4,
nombre: "charmander",
tipos: ["fuego"],
Sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
Estadísticas: { HP: 39, Ataque: 52, Defensa: 43, Velocidad: 65 }
},
{
ID: 7,
Nombre: "Squirtle",
Tipos: ["Agua"],
Duendecillo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
Estadísticas: { HP: 44, Ataque: 48, Defensa: 65, Velocidad: 43 }
},
{
id: 25,
nombre: "Pikachu",
tipos: ["eléctrico"],
sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
estadísticas: { hp: 35, ataque: 55, defensa: 40, velocidad: 90 }
}
];

Mazosdeejemplo
const MOCK_DECKS = [
{
id: 1,
nombre: "Equipo inicial",
userId: 1, // ash
pokémonIds: [1, 4, 7, 25], // bulbasaur, charmander, squirtle, pikachu
estadísticas: {
totalAtaque: 49 + 52 + 48 + 55,
totalHp: 45 + 39 + 44
+ 35 }
},
{
id: 2,
nombre: "Equipo fuego",
userId: 1,
pokémonIds: [4, 4, 4, 25],
estadísticas: {
totalAtaque: 52 * 3 + 55,
totalHp: 39 * 3 + 35
}
}
];
