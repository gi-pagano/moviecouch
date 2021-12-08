//USO DE JQUERY

jQuery(() => {

    //variables para el envío por AJAX
    let sendUrl = "https://jsonplaceholder.typicode.com/posts";
    let metodo = $("#formularioRegistro").attr("method");
    let nombreRegistro;
    let usernameRegistro;
    let mailRegistro; 
    let passwordRegistro3;
    let suscripcionElegida;
    let cuotasElegidasRegistro;

    //Funciones para filtro
    function mostrarH2(){ //muestra los subtítulos
        $("#peliculas").show("fast");
        $("#series").show("fast");
        $("#anime").show("fast");
    }

    function filtrarCategoria(array, dato){ //fn para filtrar los datos del array por categoría
        return array.filter(obj=> obj.categoria == dato);
    }

    function filtrar(array, dato){ //fn para filtrar los datos del array por género
        return array.filter(obj=> obj.genero == dato);
    }

    //EVENTOS
    //FORMULARIO ADMIN
    $("#btnAdmin").on("click", function(e) { //para mostrar x dom la card de la información que coloque el administrador
        e.preventDefault();
        let id = Number($("#nroId").val());
        let categoria = $("#categoria").val();
        let nombre = $("#titulo").val();
        let poster = $("#poster").val();
        let genero = $("#genero").val();
        let anioEstreno = Number($("#anioEstreno").val());
        let duracion = Number($("#duracion").val());
        let ratingAcumulado = Number($("#rating").val());

        let nuevoContenido = new Multimedias(id, categoria, nombre, poster, genero, anioEstreno, duracion, ratingAcumulado);
        listaMultimedia.push(nuevoContenido);
        mostrarCard(listaMultimedia);
        $('#formularioAdmin').trigger("reset");//vacía el formulario
    });

    $("#enlaceAdmin").on("click", function(){ //popup del formulario de admin a partir del enlace en el form de login
        $("#formularioAdmin").fadeIn("2000", function(){;
            $("#exampleModal").css("display","none");//cierra el popup de login
            $(".modal-backdrop").css("display","none");
            $(".modal-open").css("overflow","scroll"); 
        });
    })

    $("#cerrarAdmin").on("click", function(){ //cerrar el formulario de admin
        $("#formularioAdmin").fadeOut("2000");
    });
    
    //Eventos de la barra filtro
    //filtrar por género, según el valor del select
    $("#accion").on("click",function(){     
        mostrarCard(filtrar(listaMultimedia, "accion"));
        mostrarH2();
    });

    $("#comedia").on("click",function(){   
        mostrarCard(filtrar(listaMultimedia, "comedia"));
        mostrarH2();
    });

    $("#drama").on("click",function(){   
        mostrarCard(filtrar(listaMultimedia, "drama"));
        mostrarH2();
    });

    $("#fantasia").on("click",function(){   
        mostrarCard(filtrar(listaMultimedia, "fantasia"));
        mostrarH2();
    });

    $("#infantil").on("click",function(){   
        mostrarCard(filtrar(listaMultimedia, "infantil"));
        mostrarH2();
    });

    $("#romance").on("click",function(){   
        mostrarCard(filtrar(listaMultimedia, "romance"));
        mostrarH2();
    });

    $("#terror").on("click",function(){   
        mostrarCard(filtrar(listaMultimedia, "terror"));
        mostrarH2();
    });

    //filtrar por categoría (pelis, series o anime) según lo elegido por el usuario, tbn esconde h2 
    $("#one").on("click",function(){   
        $("#peliculas").show("fast", function(){
            $("#series").show("fast", function(){
                $("#anime").show("fast", function(){
                    mostrarCard(listaMultimedia);
                });
            });
        });
    });
    
    $("#two").on("click",function(){   
        $("#series").hide("fast", function(){
            $("#anime").hide("fast", function(){
                $("#peliculas").show("fast", function(){
                    mostrarCard(filtrarCategoria(listaMultimedia, "pelicula"));
                });
            });
        });
    });   
    
    $("#three").on("click",function(){   
        $("#peliculas").hide("fast", function(){
            $("#anime").hide("fast", function(){
                $("#series").show("fast", function(){
                mostrarCard(filtrarCategoria(listaMultimedia, "serie"));
                });
            });
        });
    });  

    $("#four").on("click",function(){   
        $("#series").hide("fast", function(){
            $("#peliculas").hide("fast", function(){
                $("#anime").show("fast", function(){
                    mostrarCard(filtrarCategoria(listaMultimedia, "anime"));
                });   
            });
        });
    }); 
    
    //Eventos formulario suscripción
    
    $("#registro").on("click", function(){
        $("#formularioRegistro").slideToggle(1500);
    })
    
    //Envío de formulario con AJAX
    $("#btnRegistro").on("click", function(){ 
        $.ajax({
            beforeSend:function(){
                nombreRegistro = $("#nombre").val().trim();
                usernameRegistro = $("#usuario").val().trim();
                mailRegistro = $("#email").val().trim();
                passwordRegistro3 = $("#password").val().trim();
                suscripcionElegida = $("#tipoSuscripcion").val();
                cuotasElegidasRegistro = $("#cuotas").val();
            },
            url: sendUrl,
            type: metodo,
            data: {nombre: nombreRegistro, usuario: usernameRegistro, email: mailRegistro, password: passwordRegistro3, tipoSuscripcion: suscripcionElegida, cuotas: cuotasElegidasRegistro},
            success: function(response){
                $('#formularioRegistro').trigger("reset");
                $("#formularioRegistro").slideUp(1000);
                $("#envioExitoso").fadeIn(2500);
                $("#registro").fadeOut(1500);
            },
            error: function(jqXHL, status, response){
                $("#status").text("Error");
                console.log(response);
                console.log(status);
            },
            
        })
    });

    //En tipos de suscripción:
    //Muestra cifras en dólares o pesos, según lo que elija el usuario

    $("#usd").on("click", function(){
        $("#ars").show(500);
        $("#mensual").hide(1500);
        $("#mensualUsd").show(1500);
        $("#trimestral").hide(1500);
        $("#trimestralUsd").show(1500);
        $("#semestral").hide(1500);
        $("#semestralUsd").show(1500);
        $("#anual").hide(1500);
        $("#anualUsd").show(1500);
        $(this).hide(500);
    });

    $("#ars").on("click", function(){
        $("#usd").show(500);
        $("#mensualUsd").hide(1500);
        $("#mensual").show(1500);
        $("#trimestralUsd").hide(1500);
        $("#trimestral").show(1500);
        $("#semestralUsd").hide(1500);
        $("#semestral").show(1500);
        $("#anualUsd").hide(1500);
        $("#anual").show(1500);
        $(this).hide(500);
    });

    //cerrar el popup que se abre al presionar el botón "ver" al presionar X
    $("#cerrarDiv").on("click", function(){ 
        $("#divOculto").hide("2000");
    });
});



