const esPar = (numero) => (numero % 2 === 0) ? true : false;
const mitadLista = (array) => parseInt(array.length / 2);
const calcularPromedio = (array) => {  
  const sumaNumeros = array.reduce((accumulator, currentValue) => accumulator + currentValue)
  const promedio = sumaNumeros / array.length;
  return promedio;
}
const calcularMediana = (array) => {
  const ordenedArray = array.sort((a, b) => a - b);
  const centroLista = mitadLista(array);

  let mediana;
  if (esPar(array.length)) {
    const elemento1 = ordenedArray[centroLista - 1];
    const elemento2 = ordenedArray[centroLista];
    const promedioElemento1y2 = calcularPromedio([elemento1, elemento2]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = ordenedArray[centroLista];
  }
  return mediana;
}

console.log(calcularMediana([200, 400000000, 800, 500]));
console.log(calcularMediana([10, 3050, 200, 500, 700]));
