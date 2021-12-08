

//VARIABLES
//creación de objetos y arrays

let anioActual = 2021;
const saludo = document.querySelector("#bienvenida");
const divPelis = document.querySelector("#listaPelis");
const divSeries = document.querySelector("#listaSeries");
const divAnime = document.querySelector("#listaAnime");
let filtro= document.querySelectorAll(".filtro");
const vistos = document.querySelector("#contenedorVistos");
const subir = document.querySelector("#toTop"); //botón subir
const valorar = document.querySelector("#divOculto");
const cerrarDiv = document.querySelector("#cerrarDiv");
const contVisto = document.querySelector("#divVistos");

//creación de objetos (multimedia), luego tbn el administrador puede agregar o eliminar este contenido
const esdla = new Multimedias(1, "pelicula", "El señor de los anillos: la comunidad del anillo", "esdla.jpg", "fantasia", 2001, 178, 10);
const harry = new Multimedias(2, "pelicula", "Harry Potter y el prisionero de Azkaban", "hp.jpg", "fantasia", 2004, 140, 7);
const blairWitch = new Multimedias(3, "pelicula", "Proyecto Blair Witch", "blairWitch.jpg", "terror", 1999, 81, 4);
const orgullo = new Multimedias(4, "pelicula", "Orgullo y prejuicio", "orgullo.jpg", "romance", 2006, 127, 8);
const nottingHill = new Multimedias(5, "pelicula", "Un lugar llamado Notting Hill", "nottingHill.jpg", "romance", 1999, 124, 10);
const cruella = new Multimedias(6, "pelicula", "Cruella", "cruella.jpg", "infantil", 2021, 134, 6);
const nemo = new Multimedias(7, "pelicula", "Buscando a Nemo", "nemo.jpg", "infantil", 2003, 100, 8);
const rompebodas = new Multimedias(8, "pelicula", "Los rompebodas", "rompebodas.jpg", "comedia", 2005, 120, 9);
const xmen = new Multimedias(9, "pelicula", "X-men: días del futuro pasado", "xmen.jpg", "accion", 2014, 132, 12);
const avengers = new Multimedias(10, "pelicula", "Avengers: Endgame", "avengers.jpg", "accion", 2019, 180, 16);
const millionDollar = new Multimedias(11, "pelicula", "Million Dollar Baby", "millionDollar.jpg", "drama", 2005, 130, 22);
const calamar = new Multimedias(12, "serie", "El juego del calamar", "calamar.jpg", "drama", 2021,  9, 50);
const house = new Multimedias(13, "serie", "Dr. House", "house.jpg", "drama", 2004, 177, 32);
const got = new Multimedias(14, "serie", "Game of Thrones", "got.jpg", "fantasia", 2011,  73, 42);
const witcher = new Multimedias(15, "serie", "The Witcher", "witcher.jpg", "fantasia", 2019, 10, 20);
const breakingBad = new Multimedias(16, "serie", "Breaking Bad", "bb.jpg", "drama", 2008, 62, 48); 
const friends = new Multimedias(17, "serie", "Friends", "friends.jpg", "comedia", 1994, 236, 38);
const office = new Multimedias(18, "serie", "The Office", "office.jpg", "comedia", 2005, 201, 28);
const hannahMontana = new Multimedias(19, "serie", "Hannah Montana", "hannah.jpg", "infantil", 2006, 98, 15);
const veinticuatro = new Multimedias(20, "serie", "24", "24.jpg", "accion", 2001, 45, 17);
const ahs = new Multimedias(21, "serie", "American Horror Story", "ahs.jpg", "terror", 2011, 30, 25);
const once = new Multimedias(22, "serie", "Once Upon a Time", "once.jpg", "romance", 2011, 60, 30);
const blackClover = new Multimedias(23, "anime", "Black Clover", "bc.jpg", "accion", 2018, 170, 20);
const gintama = new Multimedias(24, "anime", "Gintama", "gintama.jpg", "comedia", 2006, 367, 48);
const jujutsu = new Multimedias(25, "anime", "Jujutsu Kaisen", "jujutsu.jpg", "accion", 2021, 24, 38);
const yona = new Multimedias(26, "anime", "Akatsuki no Yona", "yona.jpg", "romance", 2014, 24, 16);
const lieInApril = new Multimedias(27, "anime", "Your lie in April", "lie.jpg", "drama", 2015, 22, 19);
const bookworm = new Multimedias(28, "anime", "Ascendance of a Bookworm", "bookworm.jpg", "fantasia", 2019, 26, 15);
const holic = new Multimedias(29, "anime", "XXXHolic", "xxxholic.jpg", "terror", 2011, 12, 30);

let listaMultimedia = [esdla,harry,blairWitch,orgullo,nottingHill,cruella,nemo,rompebodas,xmen,avengers,millionDollar,calamar,house,got,witcher,breakingBad,friends,office,hannahMontana,veinticuatro,ahs,once,blackClover,gintama,jujutsu,yona,lieInApril,bookworm,holic]; //array de películas,series y anime

//variables de formularios login, registro y admin
const listaUsuarios = [];
const listaRegistro = [];

const loginForm = document.querySelector("#formulario");
let username = document.querySelector("#username");
let passwordLogin = document.querySelector("#passwordLogin");
const btnLogin = document.querySelector("#login");
const enlaceRegistro = document.querySelector("#enlaceRegistro");
let nombreCompleto = document.querySelector("#nombre");
let usernameDos = document.querySelector("#usuario");
let mail = document.querySelector("#email");
let passwordRegistro = document.querySelector("#password");
let passwordRegistro2 = document.querySelector("#password2");
let tipoSuscripcion = document.querySelector("#tipoSuscripcion");
let cuotasElegidas = document.querySelector("#cuotas");
const btnRegistro = document.querySelector("#btnRegistro");
const aparecer = document.querySelector("#registro");
const searchId = document.querySelector("#searchBox");
const searchBtn = document.querySelector("#searchBtn");
const searchDiv = document.querySelector("#resultadoEliminar");
const listaUsuariosReg = document.querySelector("#listaUsuarios");
const btnVerUsuarios = document.querySelector("#verUsuarioBtn");
const cerrarLista = document.querySelector("#ocultarLista");

//variables de sección suscripciones
let valorSuscripcionNeta = 1500;
const mensual = document.querySelector("#mensual");
const trimestral = document.querySelector("#trimestral");
const semestral = document.querySelector("#semestral");
const anual = document.querySelector("#anual");


//variables cálculos suscripciones

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;
const impuestoPais = x => x * 0.35;
const descuentoTrimestre = y => y * 0.10;
const descuentoSemestre = y => y * 0.25;
const descuentoAnual = y => y * 0.40;
const cambiarMoneda = document.querySelector("#usd");
const mensualUSd = document.querySelector("#mensualUsd");
const trimestralUsd = document.querySelector("#trimestralUsd");
const semestralUsd = document.querySelector("#semestralUsd");
const anualUsd = document.querySelector("#anualUsd");

//FUNCIONES
listaMultimedia.push({id:30, categoria:"anime", nombre:"Doraemon", poster:"doraemon.png", genero:"infantil", anioEstreno:1969, capitulos:1047, ratingAcumulado:12}); //agrega un anime al array

//FUNCIONES DE CARDS POR DOM

const ordenarPorAnio = (a,b) => { //ordena los arrays por año
    if (a.anioEstreno > b.anioEstreno) {
        return 1;
    }
    if (a.anioEstreno < b.anioEstreno) {
        return -1
    }
    return 0
}

function mostrarCard(listaMultimedia) { //muestra las cards en el DOM
    listaMultimedia.sort(ordenarPorAnio); //ordena los arrays por año
    const listaPelis = listaMultimedia.filter(obj=> obj.categoria == "pelicula"); //filtrar películas, así muestra por sección
    const listaSeries = listaMultimedia.filter(obj=> obj.categoria == "serie"); //filtrar series
    const listaAnimes = listaMultimedia.filter(obj=> obj.categoria == "anime"); //filtrar anime
    divPelis.innerHTML = "";
    listaPelis.forEach(obj => {     //agrega la tarjeta de las peliculas
        let tarjeta1 = document.createElement("div");
        tarjeta1.setAttribute("class", "card");
        tarjeta1.innerHTML =    `<ul>
                                    <li class="booking-card" style="background-image: url(images/peliculas/${obj.poster}" alt="${obj.nombre})">
                                        <div class="book-container">
                                            <div class="content">
                                                <button class="btn" onclick="capturar(${obj.id})">Ver</button>
                                            </div>
                                        </div>
                                        <div class="informations-container">
                                            <h2 class="title">${obj.nombre}</h2>
                                            <h4>${obj.genero}</h4>
                                            <p class="sub-title">${obj.anioEstreno}. ${obj.duracion} mins.</p>
                                            <p>Rating: ${obj.ratingAcumulado} couches</p>
                                        </div>
                                    </li>
                                </ul>`;
        divPelis.appendChild(tarjeta1); 
    });
    divSeries.innerHTML = "";
    listaSeries.forEach(obj => {  //agrega la tarjeta de las series
        let tarjeta2 = document.createElement("div"); 
        tarjeta2.setAttribute("class", "card");
        tarjeta2.innerHTML =    `<ul>
                                    <li class="booking-card" style="background-image: url(images/series/${obj.poster}" alt="${obj.nombre})">
                                        <div class="book-container">
                                            <div class="content">
                                                <button class="btn" onclick="capturar(${obj.id})">Ver</button>
                                            </div>
                                        </div>
                                        <div class="informations-container">
                                            <h2 class="title">${obj.nombre}</h2>
                                            <h4>${obj.genero}</h4>
                                            <p class="sub-title">${obj.anioEstreno}. ${obj.duracion} caps.</p>
                                            <p>Rating: ${obj.ratingAcumulado} couches</p>
                                        </div>
                                    </li>
                                </ul>`;
        divSeries.appendChild(tarjeta2); 
    });
    divAnime.innerHTML = "";
    listaAnimes.forEach(obj => {   //agrega la tarjeta de los anime
        let tarjeta3 = document.createElement("div");
        tarjeta3.setAttribute("class", "card");
        tarjeta3.innerHTML =    `<ul>
                                    <li class="booking-card" style="background-image: url(images/anime/${obj.poster}" alt="${obj.nombre})">
                                        <div class="book-container">
                                            <div class="content">
                                                <button class="btn" onclick="capturar(${obj.id})">Ver</button>
                                            </div>
                                        </div>
                                        <div class="informations-container">
                                            <h2 class="title">${obj.nombre}</h2>
                                            <h4>${obj.genero}</h4>
                                            <p class="sub-title">${obj.anioEstreno}. ${obj.duracion} caps.</p>
                                            <p>Rating: ${obj.ratingAcumulado} couches</p>
                                        </div>
                                    </li>
                                </ul>`;
        divAnime.appendChild(tarjeta3); 
    });
}

mostrarCard(listaMultimedia); //muestra las cards del contenido 

//FUNCIONES CONTENIDO VISTO
function mostrarVistas(array){ //muestra el contenido visto al apretar btn "ver", es como un carrito
    let i=1;
    vistos.innerHTML="";
    for(obj of array){
        vistos.innerHTML+=`
            <tr>
                <th scope="row">${i++}-</th>
                <td>${obj.nombre}</td>
                <td><button class="btn btn-danger" onclick="quitar(${obj.id})">X</button></td>
            </tr>`        
    }
}    

function agregarStorage(contenido){ //agrega el contenido al localStorage
    let storage= localStorage.getItem("vistos") ? JSON.parse(localStorage.getItem("vistos")) : [];//primero se comprueba que no exista, si no lo hace
    storage.push(contenido);
    return storage;
}

function guardarStorage(array){ //guarda el array en el localStorage
    localStorage.setItem("vistos", JSON.stringify(array));
}

function capturar(id){ //captura el id de la película o serie, guarda en storage y muestra el nombre en el historial
    let contenidoSeleccionado=listaMultimedia.find(obj=> obj.id == id); //primero busca coincidencia con el id
    guardarStorage(agregarStorage(contenidoSeleccionado));
    mostrarVistas(JSON.parse(localStorage.getItem("vistos")));
    valorar.style.display = "block";//muestra el popup de valoración y visto
    document.documentElement.scrollTop = 0;
    contVisto.innerHTML = `<p class="indice">Viste "${obj.nombre}"</p>
                            <div class="inputContainer">
                                <select class="barraSelect" id="valoracion" required> 
                                    <option selected disabled>Elegí un valor</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select> 
                                <button class="btnVer btnRtg" onclick="sumarRating(${id})">Valorar</button>
                            </div>`;//contenido del popup de valoración
}  

function sumarRating(id){ //suma al rating de la película o serie la valoración que hizo el usuario
    let contenidoSeleccionado=listaMultimedia.find(obj=> obj.id == id);
    let valoracion = document.querySelector("#valoracion").value;
    contenidoSeleccionado.rating(parseInt(valoracion));
    mostrarCard(listaMultimedia);//muestra en la card el nuevo rating
    contVisto.innerHTML = `<p class="indice">Gracias por valorar "${obj.nombre}"</p>`;//popup de gracias, se cierra luego de 2 segundos
    setTimeout(() => {
        valorar.style.display = "none";
    }, 2000);
}

function quitar(id){ //quita el contenido del localStorage y del historial
    let vistos=JSON.parse(localStorage.getItem("vistos"));
    let listaVistosFinal=vistos.filter(obj=> obj.id != id);//busca los que tienen distinto id
    guardarStorage(listaVistosFinal);
    mostrarVistas(JSON.parse(localStorage.getItem("vistos")));
}

//FUNCION PARA QUE EL ADMIN PUEDA ELIMINAR CONTENIDO, la fn para que agregue está hecha en la sección jQuery
//En formulario de administrador
function eliminar(id) { //filtra el array y lo devuelve sin la opción que el admin quiere eliminar
    let rdoSearch=listaMultimedia.find(obj=> obj.id == id);
    let listaActualizada=listaMultimedia.filter(obj=> obj.id != rdoSearch.id);
    listaMultimedia=listaActualizada;
    mostrarCard(listaActualizada);
    }

function showList() { //muestra la lista de usuarios registrados o logueados si el admin clickea el btn ver
    if (localStorage.getItem("formulario") != null || localStorage.getItem("registro") != null) {
        const lista = JSON.parse(localStorage.getItem("formulario"));
        const lista2 = JSON.parse(localStorage.getItem("registro"));
        for (i = 0; i < lista.length; i++){
            listaUsuariosReg.innerHTML += `<p class="txt">- ${lista[i].nombreUsuario}</p>`;//usuarios logueados
        }
        for (i = 0; i < lista2.length; i++){
            listaUsuariosReg.innerHTML += `<p class="txt">- ${lista2[i].nombreUsuario2}</p>`;//usuarios registrados
        }
    } else if (localStorage.getItem("formulario") == null && localStorage.getItem("registro") == null) {
        listaUsuariosReg.innerHTML = `<p class="txt">No hay usuarios registrados</p>`;
    }
}
//Fin formulario de administrador

//FUNCIONES PARA TIRAR O NO ERROR EN LOS CAMPOS DE LOS FORMULARIOS
const showError = (input, mensaje) => {//muestra el error en el input
    const formField = input.parentElement;
    formField.classList.remove("valido");
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.textContent = mensaje;
}

const showValido = (input) => {//cuando es válido lo ingresado en el input
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("valido");
    const error = formField.querySelector("small");
    error.textContent = '';
}

const checkUsuario = ()=> { //valida el usuario
    let valido = false;
    const min = 7;
    const max = 15;
    const usernameLogin = username.value.trim().toLowerCase();

    if (usernameLogin == '') {//distintos mensajes de error
        showError(username,"Ingresa un usuario válido");
    } else if (usernameLogin.length < min || usernameLogin.length > max) {
        showError(username, `El usuario tiene que tener entre ${min} y ${max} caracteres`);
    } else {
        showValido(username);
        valido = true;
    }
    return valido;
}

const checkPassword = ()=> { //valida contraseña
    let valido = false;
    const min = 8;
    const minusculas = /[a-z]/g;
    const mayusculas =/[A-Z]/g;
    const numeros = /[0-9]/g;
    const passwordValue = passwordLogin.value.trim();

    if (passwordValue == '') {//distintos mensajes de error
        showError(passwordLogin,"Ingresa una contraseña válida");
    } else if (passwordValue.length < min) {
        showError(passwordLogin, `La contraseña tiene que tener por lo menos ${min} caracteres`);
    } else if ((!passwordValue.match(mayusculas)) || (!passwordValue.match(minusculas)) || (!passwordValue.match(numeros))) {
        showError(passwordLogin, `Incluir al menos una minúscula, una mayúscula y un número`);
    } else {
        showValido(passwordLogin);
        valido = true;
    }
    return valido;
}

//FUNCION PARA CREAR USUARIO Y GUARDAR DATOS EN EL STORAGE

const nuevoUsuario = () => {
    const nombreUsuario = username.value;
    const contrasena = passwordLogin.value;

    const usuario = new Usuarios(nombreUsuario, contrasena);

    if (localStorage.getItem("formulario") === null) {//se fija antes si existe
        listaUsuarios.push(usuario);
        localStorage.setItem("formulario", JSON.stringify(listaUsuarios));
    } else {
        let listaNueva = JSON.parse(localStorage.getItem("formulario"));
        listaNueva.push(usuario);
        localStorage.setItem("formulario", JSON.stringify(listaNueva));
    }
}

//FORMULARIO SUSCRIPCION

const checkNombre = ()=> { //valida nombre
    let valido = false;
    const nombre = nombreCompleto.value.trim().toLowerCase();
    if (nombre == '') {
        showError(nombreCompleto,"Ingresa un nombre válido");
    } else {
        showValido(nombreCompleto);
        valido = true;
    }
    return valido;
}

const checkUsuarioDos = ()=> { //valida el usuario
    let valido = false;
    const min = 7;
    const max = 15;
    const usuarioReg = usernameDos.value.trim().toLowerCase();

    if (usuarioReg == '') {
        showError(usernameDos,"Ingresa un usuario válido");
    } else if (usuarioReg.length < min || usuarioReg.length > max) {
        showError(usernameDos, `El usuario tiene que tener entre ${min} y ${max} caracteres`);
    } else {
        showValido(usernameDos);
        valido = true;
    }
    return valido;
}

const mailValido = (email) => { //Valida el email
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const checkEmail = () => {
    let valido = false;
    const email = mail.value.trim();
    if (email == "") {
        showError(mail, 'El e-mail no puede estar vacio');
    } else if (!mailValido(email)) {
        showError(mail, 'El e-mail no es válido')
    } else {
        showValido(mail);
        valido = true;
    }
    return valido;
}

const checkPasswordDos = ()=> { //valida contraseña
    let valido = false;
    const min = 8;
    const minusculas = /[a-z]/g;
    const mayusculas =/[A-Z]/g;
    const numeros = /[0-9]/g;
    const password = passwordRegistro.value.trim();

    if (password == '') {
        showError(passwordRegistro,"Ingresa una contraseña válida");
    } else if (password.length < min) {
        showError(passwordRegistro, `La contraseña tiene que tener por lo menos ${min} caracteres`);
    } else if ((!password.match(mayusculas)) || (!password.match(minusculas)) || (!password.match(numeros))) {
        showError(passwordRegistro, `Incluir al menos una minúscula, una mayúscula y un número`);
    } else {
        showValido(passwordRegistro);
        valido = true;
    }
    return valido;
}

const checkPasswordTres = ()=> { //valida contraseña y ve que sean iguales
    let valido = false;
    const min = 8;
    const minusculas = /[a-z]/g;
    const mayusculas =/[A-Z]/g;
    const numeros = /[0-9]/g;
    const passwordDos = passwordRegistro2.value.trim();

    if (passwordDos == '') {
        showError(passwordRegistro2,"Ingresa una contraseña válida");
    } else if (passwordDos.length < min) {
        showError(passwordRegistro2, `La contraseña tiene que tener por lo menos ${min} caracteres`);
    } else if ((!passwordDos.match(mayusculas)) || (!passwordDos.match(minusculas)) || (!passwordDos.match(numeros))) {
        showError(passwordRegistro2, `Incluir al menos una minúscula, una mayúscula y un número`);
    } else if (passwordDos != passwordRegistro.value) {
        showError(passwordRegistro2, `Las contraseñas no coinciden`);
    } else {
        showValido(passwordRegistro2);
        valido = true;
    }
    return valido;
}

const nuevoRegistro = () => { //Agrega al storage al nuevo usuario que se registra
    const nombreUsuario2 = usernameDos.value;
    const contrasena2 = passwordRegistro2.value;
    const miembro = new Registrados(nombreUsuario2, contrasena2);

    if (localStorage.getItem("registro") === null) {
        listaRegistro.push(miembro);
        localStorage.setItem("registro", JSON.stringify(listaRegistro));
    } else {
        let listaMiembros = JSON.parse(localStorage.getItem("registro"));
        listaMiembros.push(miembro);
        localStorage.setItem("registro", JSON.stringify(listaMiembros));
    }
}

//Cálculos de distintos tipos de suscripciones

function valorSuscripcion(tipoDeSuscripcion) { //calcula el valor de la suscripción, según el tipo elegido calcula el valor con descuento

    if (tipoDeSuscripcion === "mensual") {
        let valorMensualNeto = valorSuscripcionNeta; //valor suscripcion mensual sin descuento
        return valorMensualNeto;
    } else if (tipoDeSuscripcion === "trimestral") {
        let valorTrimestralNeto = (resta(valorSuscripcionNeta, descuentoTrimestre(valorSuscripcionNeta)))*3; //valor suscripcion trimestral con descuento aplicado
        return valorTrimestralNeto;
    } else if (tipoDeSuscripcion === "semestral") {
        let valorSemestralNeto = (resta(valorSuscripcionNeta, descuentoSemestre(valorSuscripcionNeta)))*6; //valor suscripcion semestral con descuento aplicado
        return valorSemestralNeto;
    } else if (tipoDeSuscripcion === "anual") {
        let valorAnualNeto = (resta(valorSuscripcionNeta, descuentoAnual(valorSuscripcionNeta)))*12; //valor suscripcion anual con descuento aplicado
        return valorAnualNeto;    
    } 
}

function suscripcionMasImpuestos(tipoDeSuscripcion) { //al valor de la suscripción elegida se le suman los impuestos iva e impuesto país
    let agregarImpuestos =  suma(valorSuscripcion(tipoDeSuscripcion), (suma(iva(valorSuscripcion(tipoDeSuscripcion)), impuestoPais(valorSuscripcion(tipoDeSuscripcion)))));
    return agregarImpuestos;
}

function ahorroSuscripcion(tipoDeSuscripcion) { //calcula el ahorro del usuario según el tipo de suscripción elegida
    if (tipoDeSuscripcion === "trimestral") {
    let ahorroTrimestral = (resta((valorSuscripcionNeta * 3),valorSuscripcion(tipoDeSuscripcion))) * 1.56;//impuestos aplicados
    return ahorroTrimestral;    
    } else if (tipoDeSuscripcion === "semestral") {
        let ahorroSemestral = (resta((valorSuscripcionNeta * 6),valorSuscripcion(tipoDeSuscripcion))) * 1.56;
        return ahorroSemestral; 
    } else if (tipoDeSuscripcion === "anual") {
        let ahorroAnual = (resta((valorSuscripcionNeta * 12),valorSuscripcion(tipoDeSuscripcion))) * 1.56;
        return ahorroAnual; 
    }  
}   

//Agrega al html los datos por DOM
mensual.innerHTML = `Pagá $ ${valorSuscripcion("mensual")} <span class="spanImpuestos">antes de impuestos</span> por mes. Total con IVA e impuesto país incluídos: ARS ${suscripcionMasImpuestos("mensual")}`;

trimestral.innerHTML = `Pagá $ ${valorSuscripcion("trimestral")} <span class="spanImpuestos">antes de impuestos</span> por trimestre. Total con IVA e impuesto país incluídos: ARS ${suscripcionMasImpuestos("trimestral")}. <span class="spanSize">¡Ahorrás <span class="spanBold">ARS ${ahorroSuscripcion("trimestral")}</span>!</span>`;

semestral.innerHTML = `Pagá $ ${valorSuscripcion("semestral")} <span class="spanImpuestos">antes de impuestos</span> por semestre. Total con IVA e impuesto país incluídos: ARS ${suscripcionMasImpuestos("semestral")}. <span class="spanSize">¡Ahorrás <span class="spanBold">ARS ${ahorroSuscripcion("semestral")}</span>!</span>`;

anual.innerHTML = `Pagá $ ${valorSuscripcion("anual")} <span class="spanImpuestos">antes de impuestos</span> por año. Total con IVA e impuesto país incluídos: ARS ${suscripcionMasImpuestos("anual")}. <span class="spanSize">¡Ahorrás <span class="spanBold">ARS ${ahorroSuscripcion("anual")}</span>!</span>`;

//API para convertir de pesos a usd el precio de la suscripción (los efectos para los cambios en lo que muestra están en jquery)

let requestURL = 'https://api.exchangerate.host/convert?from=ARS&to=USD';//al tipo de cbio del día y redondea la cifra
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

function convertir() { //convierte el valor de la suscripción a dolares y lo imprime
    request.onload = function () {
        let mensual1 = Math.floor(request.response.result * valorSuscripcion("mensual"));
        let mensual2 = Math.floor(request.response.result * suscripcionMasImpuestos("mensual"));
        mensualUSd.innerHTML = `Pagás ${mensual1} USD <span class="spanImpuestos">antes de impuestos</span> por mes. Total con impuestos incluídos: ${mensual2} USD`;
        let trimestral1 = Math.floor(request.response.result * valorSuscripcion("trimestral"));
        let trimestral2 = Math.floor(request.response.result * suscripcionMasImpuestos("trimestral"));
        let trimestral3 = Math.floor(request.response.result * ahorroSuscripcion("trimestral"));
        trimestralUsd.innerHTML = `Pagás ${trimestral1} USD <span class="spanImpuestos">antes de impuestos</span> cada tres meses. Total con impuestos incluídos: ${trimestral2} USD. <span class="spanSize">¡Ahorrás <span class="spanBold">USD ${trimestral3}</span>!</span>`;
        let semestral1 = Math.floor(request.response.result * valorSuscripcion("semestral"));
        let semestral2 = Math.floor(request.response.result * suscripcionMasImpuestos("semestral"));
        let semestral3 = Math.floor(request.response.result * ahorroSuscripcion("semestral"));
        semestralUsd.innerHTML = `Pagás ${semestral1} USD <span class="spanImpuestos">antes de impuestos</span> cada seis meses. Total con impuestos incluídos: ${semestral2} USD. <span class="spanSize">¡Ahorrás <span class="spanBold">USD ${semestral3}</span>!</span>`;
        let anual1 = Math.floor(request.response.result * valorSuscripcion("anual"));
        let anual2 = Math.floor(request.response.result * suscripcionMasImpuestos("anual"));
        let anual3 = Math.floor(request.response.result * ahorroSuscripcion("anual"));
        anualUsd.innerHTML = `Pagás ${anual1} USD <span class="spanImpuestos">antes de impuestos</span> por año. Total con impuestos incluídos: ${anual2} USD. <span class="spanSize">¡Ahorrás <span class="spanBold">USD ${anual3}</span>!</span>`;
    };
}

convertir();

//Cálculo de cuotas, calcula el valor total con interés si el usuario elige pagar en cuotas y se lo muestra según las cuotas que elija

function cuotas(cuotas, tipoDeSuscripcion) { //calcula el valor de la cuota, según el tipo elegido calcula el valor con descuento
    if (cuotas == 1) {
        let unaCuota = Math.floor(suscripcionMasImpuestos(tipoDeSuscripcion));
        return unaCuota;
    } else if (cuotas == 3) {
        let tresCuotas = Math.floor(suscripcionMasImpuestos(tipoDeSuscripcion) * 1.20);
        return tresCuotas;
    } else if (cuotas == 6) {
        let seisCuotas = Math.floor(suscripcionMasImpuestos(tipoDeSuscripcion) * 1.30);
        return seisCuotas;
    }
}  

const showCuotas = (select, mensaje) => { //fn para mostrar mensaje con el total según cuotas elegidas
    const formField = select.parentElement;
    formField.classList.remove("error");
    formField.classList.add("mostrarCuotas");
    const totalCuotas = formField.querySelector("small");
    totalCuotas.textContent = mensaje;
}

//función para ir al top
function irAlTop() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { //si el scroll es mayor a 20px muestra el botón
    subir.style.display = "block";
    } else {
    subir.style.display = "none";
    }
}

//EVENTOS

//En formulario de admin
searchId.addEventListener("keydown", (e) => { //para que si el usuario presiona enter, se ejecute la función igual que si clickea el botón
    if (e.keyCode === 13) {
        e.preventDefault();
        searchBtn.click();
    }
});

searchBtn.addEventListener("click", (e) => { //busca el contenido según el id que el admin coloca y le da opción de eliminar ese contenido
    e.preventDefault();
    function search (id) {
        let rdoSearch=listaMultimedia.find(obj=> obj.id == id);
        searchDiv.innerHTML=`<p class="txt">${rdoSearch.id}- ${rdoSearch.nombre} <button class="txtBtn btn btn-danger" onclick="eliminar(${rdoSearch.id})" >Eliminar contenido</button></p>`;
    }  
    search(searchId.value);
});

btnVerUsuarios.addEventListener("click", (e) => { //muestra la lista de usuarios registrados o logueados
    e.preventDefault();
    showList();
    cerrarLista.style.display = "block";
    btnVerUsuarios.style.display ="none";
    if (listaUsuariosReg.style.display == "none") {
        listaUsuariosReg.style.display = "block";
    }
});

cerrarLista.addEventListener("click", (e) => { //oculta la lista de usuarios registrados o logueados
    cerrarLista.style.display = "none";
    listaUsuariosReg.style.display = "none";
    btnVerUsuarios.style.display ="block";
});

//Eventos en formulario de login

username.onchange = () => { //valida usuario
    checkUsuario();
}

passwordLogin.onchange = () => { //valida contraseña
    checkPassword();
}

btnLogin.onclick = (e)=>{ 
    e.preventDefault(); //prevenir el default del submit
    nuevoUsuario(); //guarda los datos del usuario en localStorage
    saludo.innerHTML += `<span> ${username.value}<span>`;//agrega nombre de usuario ingresado en h1
    document.querySelector("#exampleModal").style.display = "none"; //oculta el popup
    document.querySelector(".modal-backdrop").style.display = "none";
    document.querySelector(".modal-open").style.overflow = "scroll"; 
}

enlaceRegistro.onclick = () => {  //cierra el popup y direcciona al formulario de registro
    document.querySelector("#exampleModal").style.display = "none";
    document.querySelector(".modal-backdrop").style.display = "none";
    document.querySelector(".modal-open").style.overflow = "scroll"; 
}

//Eventos en formulario de suscripción/registro
nombreCompleto.onchange = () => {  //valida nombre
    checkNombre();
}

usernameDos.onchange = () => { //valida usuario
    checkUsuarioDos();
}

mail.onchange = ()=> { //valida mail
    checkEmail();
}

passwordRegistro.onchange = () => { //valida contraseña
    checkPasswordDos();
}

passwordRegistro2.onchange = () => { //valida contraseña q sea igual a la anterior
    checkPasswordTres();
}

btnRegistro.onclick = (e)=>{ 
    e.preventDefault(); //prevenir el default del submit
    nuevoRegistro(); //guarda los datos del nuevo usuario en localStorage
}

cuotasElegidas.addEventListener("click",(e)=>{ //cuando el usuario elige cuotas, se calcula el valor total con interés y se lo muestra
    if (e.target.value =="1") {
        cuotas(1, tipoSuscripcion.value);
        showCuotas(cuotasElegidas, `Total: $ ${cuotas(e.target.value, tipoSuscripcion.value)}`);
    }if (e.target.value =="3") {
        cuotas(e.target.value, tipoSuscripcion.value);
        showCuotas(cuotasElegidas, `Interés: 20% Total: $ ${cuotas(e.target.value, tipoSuscripcion.value)}`);
    }if (e.target.value =="6") {
        cuotas(e.target.value, tipoSuscripcion.value);
        showCuotas(cuotasElegidas, `Interés 30% Total: $ ${cuotas(e.target.value, tipoSuscripcion.value)}`);
    }  
});

//Botón toTop
window.onscroll = function() {irAlTop()}; //al hacer scroll, se muestra el botón

subir.addEventListener("click", () => {//al hacer click en el botón, se sube hasta el top
    document.documentElement.scrollTop = 0;
});