
const enlaceEstilo = document.getElementById('theme-stylesheet');
document.addEventListener("DOMContentLoaded", function () {
  // Comprobar si la web está en modo pantalla completa
  if (!window.navigator.standalone) {
    console.log("La aplicación está en modo pantalla completa.");
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
    window.onload = function () {
      // Crea un objeto con la información a mostrar
      const message = {
        codigo: monthCode + randomNums // Combina el código del mes con el número aleatorio
      };

      // Selecciona el primer elemento de la clase 'codigo' y cambia su contenido
      document.querySelector('codigo').innerHTML = message.codigo;
    };

    document.querySelector('#reload').onclick = (() => window.location.href = "https://www.miexperienciabkespana.com/");
    document.querySelector('#return').onclick = (() => window.location.href = "https://www.miexperienciabkespana.com/");
  } else {
    // Código para cuando no está en pantalla completa
    enlaceEstilo.setAttribute('href', './alertaPantallaCompleta.css');
    localStorage.setItem('estiloSeleccionado', './alertaPantallaCompleta.css');
    console.log("La aplicación NO está en modo pantalla completa.");
    document.body.innerHTML = `
        <h2>Esta web solo es compatible con dispositivos IOS tras añadirla a la pantalla de inicio.</h2>
        <h3>Pasos a seguir:</h3>
        <p>1: Haz click en el botón "compartir" de la barra de direcciones: <img id="share" src="img/removed-bg/share-transparent.png" alt="Botón compartir"></p>
        <p>2: Busca la opción: "Añadir a pantalla de inicio" y haz click.</p><img id="menu-compartir" src="img/menu_compartir.png" alt="Menú compartir">
        <p>Asígnale un nombre y haz click en "Añadir".</p>
        <p id="icon-sandy-p">3: Busca el icono que acabas de crear junto al resto de tus aplicaciones y ábrelo: <img id="icon-sandy" src="img/removed-bg/free-sandy-removebg-preview.png" alt="Icono de la aplicación"></p>
        <p>4: ¡Disfruta de tu helado gratis!</p>
    `;
  }
});