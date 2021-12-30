const lista1 = [
  100,
  200,
  300,
  500
];

const calcularPromedio = (array) => {
  // let sumaNumeros = 0;
  // for(let i = 0; i < array.length; i++) {
  //   sumaNumeros = sumaNumeros + array[i];
  // }

  const sumaNumeros = array.reduce((accumulator, currentValue) => accumulator + currentValue)
  const promedio = sumaNumeros / array.length;
  return promedio;
}

calcularPromedio(lista1);