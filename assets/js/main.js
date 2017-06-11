var sede;
var contentCoder = $('.coder');


var printFoto = function(sede) {
    $('#nombreCoder').val("");
    var contador = 0;
    contentCoder.empty();
    var numAleatorio = enteroAleatorio(0, sede.length);
    console.log();
    console.log(sede[numAleatorio].image);
    var imgCoder = $(`<img  class="imgCoder" alt="${sede[numAleatorio].name}" src="${'assets/img/'+sede+'/'+ sede[numAleatorio].image}" />`);
    contentCoder.append(imgCoder);
    $("button").on('click', function(e) {
      e.preventDefault();
      console.log(numAleatorio);
        if ($('#nombreCoder').val() == sede[numAleatorio].name) {
            //console.log("ingresa if");
          //  sede.splice(numAleatorio, 1);
          //  console.log(sede.splice(numAleatorio, 1));
            printFoto(sede);
        } else {
            console.log("contador" + contador);
            contador++;
            if (contador == 3) {
                console.log("longitud else" + sede.length);
                contador = 0;
console.log(numAleatorio);
              //  sede.splice(numAleatorio, 1);

                printFoto(sede);
            }
        }
    });
};


// clonar array
var seleccionSede = function(sede) {
    switch (sede) {
        case 'mexico':
            sede = mexico.slice(0);
            printFoto(sede);

            break;
        case 'peru':
            sede = peru.slice(0);
            printFoto(sede);
    }
}

// valor de eleccion sede
$('select').change(function() {
    var sede = $('.sede').val();
    seleccionSede(sede);
    //console.log(sede);
//  printFoto(sede);
    //
});
