let btnEnviar = document.getElementById("btnEnv");

btnEnviar.addEventListener("click", () => {
  let valor1: number = Number(dato1.value);
  let valor2: number = Number(dato2.value);
  let valor3: number = Number(dato3.value);

  if (valor3 > valor1) {
    if (valor3 > valor2) {
      console.log("El valor más grande es el tercer número ingresado", valor3);
    } else {
      console.log("El valor más grande es el segundo número ingresado", valor2);
    }
  } else {
    if (valor1 > valor2) {
      console.log("El valor más grande es el primer número ingresado", valor1);
    } else {
      console.log("El valor más grande es el segundo número ingresado", valor2);
    }
  }
});
