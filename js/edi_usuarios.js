$(document).ready(function(){

$('#verusuario').click(function(){
     $('.container').load('index_usuarios.html');
   });

$('#verproducto').click(function(){
     $('.container').load('index_productos.html');
   });

$('.volver').click(function(){
     $('.container').load('edicion_usuari.html');
   });

});