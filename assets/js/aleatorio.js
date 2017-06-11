var usados = [];
var arraySede;
var contentCoder = $('.coder');
var repetido = function(num) {
    var repe = false;
    for (var i = 0; i < usados.length; i++) {
        if (num == usados[i]) {
            repe = true;
        }
    }
    return repe;
}
var enteroAleatorio = function(min, max) {
  if (usados.length!=(max-min)) {
    if (repe !=false) {
      console.log("while");
        var num = Math.floor(Math.random() * (max - min)) + min;
        console.log(num);
        var repe=repetido(num);
    }
    usados.push(num);
    console.log(usados);
    return num;
  }else {
    //var juego=;
    return null;
    contentCoder.append($('<p> el juego a terminado </p>'));
    $('button').attr("disabled", true);
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
  e.preventDefault();
  e.stopPropagation();
    var sede = $('.sede').val();
    seleccionSede(sede);
    var numAleatorio=enteroAleatorio(1,6);
    console.log(enteroAleatorio(1,6));
    console.log(sede);
    var imgCoder = $(`<img  class="imgCoder" alt="${arraySede[numAleatorio].name}" src="${'assets/img/'+sede+'/'+ arraySede[numAleatorio].image}" />`);
    contentCoder.append(imgCoder);

});
