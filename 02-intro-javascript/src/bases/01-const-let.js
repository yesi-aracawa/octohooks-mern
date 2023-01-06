// Variables y Constantes <3
// Se recomienda terminar las lineas con ; para evitar efectos no esperados

const nameValue = 'Yesi'; // no recomendado usar la palabra name unicamente ya que es una keyword y no será interpretada correctamente
const lastName = 'Servi';

let valueChanging = 10;
valueChanging = 9; // una vez declarado let, no es necesario re-utilizar let para cambiar su valor

console.log('Name: ', nameValue, ' Last Name: ', lastName, ' Value: ', valueChanging)

// Var ya no es estandar debido a que puede causar acciones no deseadas

if (true) {
    const nameValue = 'Tray'
    console.log('Name in Scope: ', nameValue) // toma el valor que está dentro del scope aun con el mismo nombre
}

console.log('Name?: ', nameValue) // muestra el valor en el scope hermano (es decir el que ha sido declarado al inicio)