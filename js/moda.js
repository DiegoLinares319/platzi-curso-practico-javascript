const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 3, 1, 1, 3];

const calcularModa = (array) => {
  const objectCounter = {};
  
  array.forEach((element) => objectCounter[element] ? objectCounter[element] += 1 : objectCounter[element] = 1);
  
  const arrayEntries = Object.entries(objectCounter).sort((elementA, elementB) => elementA[1] - elementB[1]);

  const tempmoda = arrayEntries[arrayEntries.length - 1];

  const moda = [];

  arrayEntries.forEach((element) => {
    if (element[1] == tempmoda[1]) {
      moda.push(element);
    }
  });
  return moda;
}

console.log(calcularModa(lista1));