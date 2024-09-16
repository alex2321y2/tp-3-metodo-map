var numerosAleatorios = Array.from({ length: 10 }, () => Math.random());

var cubos = numerosAleatorios.map(numero => Math.pow(numero, 3));

console.log("Números aleatorios:", numerosAleatorios);
console.log("Cubos de los números:", cubos);
