//Código del cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado ** 2;

//Código del triángulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const semiperimetroTriangulo = (lado1, lado2, base) => perimetroTriangulo(lado1, lado2, base) / 2;
const areaTrianguloTradicional = (base, altura) => (base * altura) / 2;
const areaTrianguloHeron = (lado1, lado2, base) => {
  const semiP = semiperimetroTriangulo(lado1, lado2, base);
  const resultado = Math.sqrt(semiP * (semiP - lado1) * (semiP - lado2) * (semiP - base));
  return resultado;
};

//Código del círculo
const PI = Math.PI;
const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => (radio ** 2) * PI;

//Aqui se interactua con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputTriangulo1");
  const value1 = parseInt(input1.value);

  const input2 = document.getElementById("inputTriangulo2");
  const value2 = parseInt(input2.value);

  const input3 = document.getElementById("inputTriangulo3");
  const value3 = parseInt(input3.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("inputTriangulo1");
  const value1 = parseInt(input1.value);

  const input2 = document.getElementById("inputTriangulo2");
  const value2 = parseInt(input2.value);

  const input3 = document.getElementById("inputTriangulo3");
  const value3 = parseInt(input3.value);

  const input4 = document.getElementById("inputTriangulo4");
  const value4 = Number(input4.value);
 
  if (value4 === 0) {
    const area = areaTrianguloHeron(value1, value2, value3);
    if (area == NaN) {
      alert(Math.round(area));
    }
    alert(area);
  } else {
    const area = areaTrianguloTradicional(value3, value4);
    alert(area);
  }
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}
