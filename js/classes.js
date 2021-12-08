//CLASSES

class Multimedias { //creación de los objetos películas, series y anime
    constructor(id, categoria, nombre, poster, genero, anioEstreno, duracion, ratingAcumulado) { 
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.poster = poster;
        this.genero = genero;
        this.anioEstreno = anioEstreno;
        this.duracion = duracion; //en minutos o capítulos
        this.ratingAcumulado = ratingAcumulado;
    }    
        rating(valoracion) { //método para que el usuario ingrese una valoración de 1 a 5 de la peli, serie o anime y se acumule en el rating acumulado. Para valorar, el usuario debe clickear en "ver" y le aparecerá un popup con las opciones para valorar.
            this.ratingAcumulado += valoracion;
        }
}

class Usuarios { //Para datos del usuario que se loguean al iniciar sesión
    constructor(nombreUsuario, contrasena) {
        this.nombreUsuario = nombreUsuario;
        this.contrasena = contrasena;
    }
}

class Registrados { //Creación de los objetos usuarios registrados
    constructor(nombreUsuario2, contrasena2) {
        this.nombreUsuario2 = nombreUsuario2;
        this.contrasena2 = contrasena2;
    }
}