var botonCerrar = document.getElementsByClassName('botonCerrar');
for (var i = 0; i < botonCerrar.length; i++) {
  botonCerrar[i].addEventListener('click', function() {
    this.parentNode.parentNode.style.display = "none";
  });
};
var restaurar = document.getElementById('restaurarFotos');
var imagenes = document.getElementsByClassName('imagen');
restaurar.addEventListener('click', function() {
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "flex";
  }
});

var borrarTexto1 = document.getElementById('borrarTexto1');
var borrarTexto2 = document.getElementById('borrarTexto2');

var parrafos = document.getElementsByTagName('p');
borrarTexto1.addEventListener('click',function () {
    if(parrafos[0].style.visibility == "hidden"){
      parrafos[0].style.visibility = 'visible';

    }else{
      parrafos[0].style.visibility= 'hidden';
    }

});
borrarTexto2.addEventListener('click',function () {
if(parrafos[1].style.visibility == "hidden"){
  parrafos[1].style.visibility = 'visible';

}else{
  parrafos[1].style.visibility= 'hidden';
}

});
