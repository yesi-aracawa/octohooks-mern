
const nameValue = 'Yesi';
const lastName = 'Servi';

const fullName = nameValue + ' ' + lastName // esta es ua forma de concatenación funcional y basica

console.log(fullName)

const templateStringName = `${nameValue} ${lastName}` //este es su equivalente en template string haciendolo más simple

console.log(templateStringName)

const templateStringName2 = `
    ${nameValue}
    ${lastName}
` // como ventaja para el uso del templateString, si se le da un formato a una cadena, es el mismo que será mostrado
//es decir al mostrar el resultado toma como parte de la cadena los espacios, saltos de linea, tabs, etc.

console.log(templateStringName2)

function getFullName( mainName, lastName ) {
    return `THIS IS THE FULL NAME GOT: ${mainName} ${lastName}`
}

console.log(`Hello! ${getFullName(nameValue, lastName)}`) // pueden ser convinados entre valores de cadenas, funciones, maths, etc.
