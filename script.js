// Lista de códigos de meses
const MONTH_CODES = ['BB', 'LS', 'JH', 'PL', 'BK', 'WH', 'FF', 'BF', 'CF', 'CK', 'CB', 'VM'];

// Obtiene la fecha actual
const d = new Date();
const month = d.getMonth(); // Obtiene el mes actual (0-11)

// Obtiene el código del mes correspondiente
const monthCode = MONTH_CODES[month];
// Genera un número aleatorio entre 10.000 y 99.999
const randomNums = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

// Asigna una función al evento onload de la ventana
window.onload = function() {
    // Crea un objeto con la información a mostrar
    const message = {
        codigo: monthCode + randomNums // Combina el código del mes con el número aleatorio
    };

    // Selecciona el primer elemento de la clase 'codigo' y cambia su contenido
    document.querySelector('codigo').innerHTML = message.codigo;
};

document.querySelector('#reload').onclick=(() => window.location.href = "https://www.miexperienciabkespana.com/");
document.querySelector('#return').onclick=(() => window.location.href = "https://www.miexperienciabkespana.com/");