/* Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100] */

function OrderArray(arr){
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambiar elementos si están en el orden incorrecto
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Ejemplo de uso
let entrada = [3, 6, 12, 5, 100, 1];
let salida = [];

console.log("Entrada:", entrada);
salida=OrderArray(entrada);
console.log("Salida:", salida)