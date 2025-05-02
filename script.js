let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("angular");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("php");
        habilidades[6].classList.add("laravel");
        habilidades[7].classList.add("filamentPHP");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("trabajoEnEquipo");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("organizacion");
        habilidades[12].classList.add("proactividad");
        habilidades[13].classList.add("responsabilidad");
    }
}

// Configuración del Dark Mode
function initDarkMode() {
    const options = {
        bottom: '32px', // Posición desde abajo
        right: '32px',  // Posición desde la derecha
        left: 'unset',  // Anula posición izquierda
        time: '0.5s',   // Tiempo de transición
        mixColor: '#fff', // Color de mezcla
        backgroundColor: '#fff', // Color de fondo claro
        buttonColorDark: '#100f2c', // Color botón en modo oscuro
        buttonColorLight: '#fff', // Color botón en modo claro
        saveInCookies: true, // Guardar preferencia
        label: '🌓',     // Icono del botón
        autoMatchOsTheme: true // Seguir preferencia del sistema
    };
    
    const darkmode = new Darkmode(options);
    darkmode.showWidget();
}

// Eventos
window.addEventListener('load', initDarkMode);


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}