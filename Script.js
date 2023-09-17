//Constantes
const equipo1Container = document.getElementById('equipo1');
const equipo2Container = document.getElementById('equipo2');
const equipoRandomContainer = document.getElementById('random');
const jugadoresSelect = document.getElementById('jugadores');

const equipo1Jugadores = [];
const equipo2Jugadores = [];
const randomJugadores = [];

//Carga JSON
fetch('Jugadores.json')
.then(response => response.json())
.then(nombre => {
    nombre.forEach(nombre => {
      const option = document.createElement('option');
      option.value = nombre;
      option.textContent = nombre;
      jugadoresSelect.appendChild(option);
    });
});

//Funciones
function agregarEquipo(equipo) {
    const seleccionado = jugadoresSelect.value;

    if (seleccionado) {
        if (equipo === 1 && equipo1Jugadores.length < 7) {
            agregarJugadorAEquipo(seleccionado, equipo1Container, equipo1Jugadores);
            jugadoresSelect.remove(jugadoresSelect.selectedIndex);
            document.getElementById('boton3').style.display = 'none';
            document.getElementById('random').style.display = 'none';
        }
        else if (equipo === 2 && equipo2Jugadores.length < 7) {
           agregarJugadorAEquipo(seleccionado, equipo2Container, equipo2Jugadores);
           jugadoresSelect.remove(jugadoresSelect.selectedIndex);
           document.getElementById('boton3').style.display = 'none';
           document.getElementById('random').style.display = 'none';
        }
        else if(equipo === 3 && randomJugadores.length < 14){
            agregarJugadorAEquipo(seleccionado,equipoRandomContainer,randomJugadores);
            document.getElementById('boton1').style.display = 'none';
            document.getElementById('boton2').style.display = 'none';
            jugadoresSelect.remove(jugadoresSelect.selectedIndex);
            if(randomJugadores.length === 14){
                jugadoresAlAzar(equipo1Container,equipo2Container,randomJugadores);
                document.getElementById('random').style.display = 'none';
            }
        }
     }
     if((equipo1Jugadores.length === 7 && equipo2Jugadores.length === 7) || randomJugadores.length === 14){
        document.getElementById('boton1').style.display = 'none';
        document.getElementById('boton2').style.display = 'none';
        document.getElementById('boton3').style.display = 'none';
     }
}

function agregarJugadorAEquipo(nombre, contenedor, jugadoresEquipo) {
    jugadoresEquipo.push(nombre);
    //Kjjjj, el [U+200E] es un caracter invisible para separar los nombres
    contenedor.innerHTML += `<p>${nombre} ‎ </p>`;
}

function jugadoresAlAzar(contenedor1,contenedor2,jugadoresEquipo){
    const jugadoresEquipoMezclado = jugadoresEquipo.sort((a, b) => 0.5 - Math.random());
    for(var i = 0;i<7;i++){
        contenedor1.innerHTML += `<p>${jugadoresEquipoMezclado[i]} ‎ </p>`;
        contenedor2.innerHTML += `<p>${jugadoresEquipoMezclado[i+7]} ‎ </p>`;
    }
}