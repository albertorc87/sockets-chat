var socket = io();

//on: para escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdida conexión');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alber',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ' + resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ' + mensaje);
});