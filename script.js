const enlaceEstilo = document.getElementById('theme-stylesheet');
const userAgent = navigator.userAgent;
document.addEventListener("DOMContentLoaded", function () {
  // Comprobar si la web está en modo pantalla completa
  if (window.matchMedia('(display-mode: standalone)').matches) {
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
    enlaceEstilo.setAttribute('href', './alertaPantallaCompleta.css');
    localStorage.setItem('estiloSeleccionado', './alertaPantallaCompleta.css');
    console.log("La aplicación NO está en modo pantalla completa.");
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Dispositivo iOS
      if (/Chrome/i.test(userAgent)) {
        //Chrome
        document.body.innerHTML = `
        <h2>Para el correcto funcionamiento de esta web, es necesario añadirla a la pantalla de inicio.</h2>
        <h3>Pasos a seguir:</h3>
        <p>1: Pulsa en el siguiente icono situado en la parte superior derecha de la pantalla: <img id="share" src="img/removed-bg/share-transparent.png" alt="Botón compartir"></p>
        <p>2: Busca la opción: "Añadir a pantalla de inicio" y púlsala.</p><img id="menu-compartir" src="img/menu_compartir.png" alt="Menú compartir">
        <p>3: Pulsa "Añadir", situado en la parte superior derecha de tu pantalla.</p>
        <p id="icon-sandy-p">Busca el icono que acabas de crear junto al resto de tus aplicaciones y ábrelo: <img id="icon-sandy" src="img/removed-bg/free-sandy-removedbg.png" alt="Icono de la aplicación"></p>
        <p>4: ¡Disfruta de tu helado gratis!</p>
        <footer>
          <span lang="es">  Si quieres apoyarme, <span class="link">haz click aquí.</span><span lang="en" id="copyright">&copy;Copyright 2024 Hugo Gil Tejero</span></span>
        </footer>
      `;
      } else if(/Safari/i.test(userAgent) && !/Chrome/i.test(userAgent)) {
        //Safari
        alert('mec');
        document.body.innerHTML = `
        <h2>Para el correcto funcionamiento de esta web, es necesario añadirla a la pantalla de inicio.</h2>
        <h3>Pasos a seguir:</h3>
        <p>1: Pulsa en el siguiente icono situado en la parte inferior de la pantalla: <img id="share" src="img/removed-bg/share-transparent.png" alt="Botón compartir"></p>
        <p>2: Busca la opción: "Añadir a pantalla de inicio" y púlsala.</p><img id="menu-compartir" src="img/menu_compartir.png" alt="Menú compartir">
        <p>3: Pulsa "Añadir", situado en la parte superior derecha de tu pantalla.</p>
        <p id="icon-sandy-p">Busca el icono que acabas de crear junto al resto de tus aplicaciones y ábrelo: <img id="icon-sandy" src="img/removed-bg/free-sandy-removedbg.png" alt="Icono de la aplicación"></p>
        <p>4: ¡Disfruta de tu helado gratis!</p>
        <footer>
          <span lang="es">  Si quieres apoyarme, <span class="link">haz click aquí.</span><span lang="en" id="copyright">&copy;Copyright 2024 Hugo Gil Tejero</span></span>
        </footer>
      `;
      }
      
    } else if (/Android/.test(userAgent)) {
      // Dispositivo Android
      document.body.innerHTML = `
        <h2>Para el correcto funcionamiento de esta web, es necesario añadirla a la pantalla de inicio.</h2>
        <h3>Pasos a seguir:</h3>
        <p>1: Pulsa en el siguiente icono situado en la parte superior derecha de la pantalla: <img id="boton-configuracion"
              src="img/boton-configuracion.png" alt="Botón configuración"></p>
        <p>2: Busca la opción: "Añadir a pantalla de inicio" y púlsala.</p><img id="menu-configuracion"
          src="img/menu-configuracion.png" alt="Menú configuración">
        <p id="icon-sandy-p">3: Pulsa "Añadir", busca el icono que acabas de crear junto al resto de tus aplicaciones y ábrelo:
        <img id="icon-sandy" src="img/removed-bg/free-sandy-removedbg.png" alt="Icono de la aplicación"></p>
        <p>4: ¡Disfruta de tu helado gratis!</p>
        <footer>
          <span lang="es">  Si quieres apoyarme, <span class="link">haz click aquí.</span><span lang="en" id="copyright">&copy;Copyright 2024 Hugo Gil Tejero</span></span>
        </footer>
      `;
    } else if (/windows|mac|Macintosh|MacIntel|MacPPC|Mac68K|MacOS|CrOS|linux/i.test(userAgent)) {
      // PC
      document.body.innerHTML = `
        <h2 style="text-align: center; font-size: 3em;">Esta web solo es compatible con dispositivos móviles.</h2>
        <p style="font-size: 2em;">Por favor, ábrela desde tu teléfono.</p>
        <img width="30%" src="img/Free_Sandy_BK_QR.png" alt="https://hugogilt.github.io/FreeSandyBK/">
        <footer>
          <span lang="es">  Si quieres apoyarme, <span class="link">haz click aquí.</span><span lang="en" id="copyright">&copy;Copyright 2024 Hugo Gil Tejero</span></span>
        </footer>
      `;
    }

    else {
        document.documentElement.style.height = '100vh';
        console.log('Dispositivo no detectado');
        document.body.innerHTML = `
          <h2>Para el correcto funcionamiento de esta web, es necesario abrirla desde un teléfono y añadirla a la pantalla de inicio.</h2>
          <p>Por favor, añade la web a tu pantalla de inicio y ábrela desde ahí</p>
          <footer>
          <span lang="es">  Si quieres apoyarme, <span class="link">haz click aquí.</span><span lang="en" id="copyright">&copy;Copyright 2024 Hugo Gil Tejero</span></span>
          </footer>
        `;
    }




//DONACIÓN------------------------
    window.onload = function () {
      document.body.querySelector('footer').addEventListener('click', function (event) {
        // Prevenir el clic en el span para que no cierre el div inmediatamente
        event.stopPropagation();

        // Crear el div
        const divDonacion = document.createElement('div');
        divDonacion.id = 'divDonacion';

        // Añadir el contenido del divDonacion (puedes poner un código QR aquí)
        divDonacion.innerHTML = '<a target= "_blank" href= "https://www.paypal.me/hugogilt"><img id= "payPal" src="./img/paypal/payPal.png" alt="https://www.paypal.me/hugogilt" id="paypal"></a><a target= "_blank" href= "https://www.paypal.me/hugogilt"><img id= "qr" src="./img/paypal/qrPayPal.png" alt="https://www.paypal.me/hugogilt" id="qr"></a><p style= "color: white" id="thanks">Gracias por su colaboración.</p>'; // Reemplaza esto con tu código QR

        // Añadir el divDonacion al body
        document.body.appendChild(divDonacion);

        // Agregar la clase 'show' para activar la transición
        setTimeout(() => {
          divDonacion.classList.add('show');
        }, 0);

        // Cerrar el divDonacion al hacer clic en cualquier parte de la pantalla
        const closeDivDonacion = (event) => {
          // Si el clic fue fuera del divDonacion, cierra el divDonacion
          if (!divDonacion.contains(event.target)) {
            divDonacion.classList.remove('show'); // Elimina la clase para iniciar la transición de cierre
            setTimeout(() => {
              divDonacion.remove(); // Elimina el div del DOM después de la transición
            }, 500); // Espera 0.5s antes de eliminar
            // Elimina el evento de clic para no seguir escuchando
            document.removeEventListener('click', closeDivDonacion);
          }
        };

        // Añadir el evento de clic al document
        document.addEventListener('click', closeDivDonacion);
      });
    }
  }
});