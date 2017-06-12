var usados = [];
var arraySede;
var numAleatorio;
var sede;
var puntajeTotal=0;
var inputName = $('input');
var contentCoder = $('.coder');
var repetido = function(num) {
    var repe = false;
    for (var i = 0; i < usados.length; i++) {
        if (num == usados[i]) {
            repe = true;
        }
    }
    console.log(repe);
    return repe;
}
var enteroAleatorio = function(min, max) {
    if (usados.length != (max - min)) {
        while (repe != false) {
            console.log("while");
            var num = Math.floor(Math.random() * (max - min)) + min;
            console.log(num);
            var repe = repetido(num);
        }
        usados.push(num);
        console.log(usados);
        return num;
    } else {
        //var juego=;
        contentCoder.append($('<p> el juego a terminado </p>'));
        $('button').attr("disabled", true);
        return null;

    }
}
var seleccionSede = function(sede) {
    switch (sede) {
        case 'mexico':
            arraySede = mexico;
            //  printFoto(sede);

            break;
        case 'peru':
            arraySede = peru;
            //  printFoto(sede);
    }
}

$('select').change(function(e) {
    var sede = $('.sede').val();
    seleccionSede(sede);
    numAleatorio = enteroAleatorio(1, 6);
    var imgCoder = $(`<img  class="imgCoder" alt="${arraySede[numAleatorio].name}" src="${'assets/img/'+sede+'/'+ arraySede[numAleatorio].image}" />`);
    contentCoder.append(imgCoder);
     var contador=0;
    $('button').on('click', function() {
      contador++;
        if ((numAleatorio != null && inputName.val()==arraySede[numAleatorio].name)||contador==5) {
          contentCoder.empty();
            numAleatorio = enteroAleatorio(1, 6);
            var imgCoder = $(`<img  class="imgCoder" alt="${arraySede[numAleatorio].name}" src="${'assets/img/'+sede+'/'+ arraySede[numAleatorio].image}" />`);
            contentCoder.append(imgCoder);
            if(contador==5){
              puntajeTotal--;
            }else {
              puntajeTotal++;
            }
            contador=0;
            $('#puntajeTotal').text(puntajeTotal);

        }
        inputName.val("");
    });
});
