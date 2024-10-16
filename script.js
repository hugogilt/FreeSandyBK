// Lista de códigos de meses
const MONTH_CODES = ['BB', 'LS', 'JH', 'PL', 'BK', 'WH', 'FF', 'BF', 'CF', 'CK', 'CB', 'VM'];

// Obtiene la fecha actual
const d = new Date();
const month = d.getMonth(); // Obtiene el mes actual (0-11)

// Obtiene el código del mes correspondiente
const monthCode = MONTH_CODES[month];
debugger;
// Genera un número aleatorio entre 0 y 9999
const randomNums = Math.floor(Math.random() * 100000);

// Asigna una función al evento onload de la ventana
window.onload = function() {
    // Crea un objeto con la información a mostrar
    const message = {
        codigo: monthCode + randomNums // Combina el código del mes con el número aleatorio
    };

    // Selecciona el primer elemento de la clase 'codigo' y cambia su contenido
    document.querySelector('codigo').innerHTML = message.codigo;
};
