//helpers
const ordenarSalarios = (salarios) => salarios.sort((a, b) => a - b);
const esPar = (numero) => numero % 2 === 0;
const calcPromedio = (array) => {
  const sumaNumero = array.reduce((a, b) => a + b);
  const promedio = sumaNumero / array.length;
  return promedio
};
const conseguirlistaTops = (salarios, top) => {
  const porcentajeRestante = 100 - top;
  const porcentaje = (salarios.length * porcentajeRestante) / 100
  const corte = parseInt(porcentaje);
  const topArray = salarios.slice(corte);
  return topArray;
}
//variables
const salariosCol = colombia.map((persona) => persona.salary);
const salariosColSorted = ordenarSalarios(salariosCol);

//Calculadora de medianas

const medianaSalarios = (salarios) => {
  const mitadArray = parseInt(salarios.length / 2);
  let mediana;
  if (esPar(salarios.length)) {
    const elemento1 = salarios[mitadArray - 1];
    const elemento2 = salarios[mitadArray];
    mediana = calcPromedio([elemento1, elemento2]);
  } else {
    mediana = salarios[mitadArray];
  }
  return mediana
};
const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%

const salariosColTop10 = conseguirlistaTops(salariosColSorted, 10);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(`
Lista de los salarios de Colombia: ${salariosColSorted}\n
La mediana de los salarios generales de Colombia es: ${medianaGeneralCol}\n
Lista del top 10 de los salarios de Colombia: ${salariosColTop10}\n
La mediana del top 10 de los salarios de Colombia es: ${medianaTop10Col}.
`);