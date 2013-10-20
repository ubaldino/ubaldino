jQuery(document).ready(function($) {
	$('#oruro_bt').click(function(event) {

		var datos = JSON.parse(window.localStorage.getItem('ciudad-oruro'));
		console.dir(datos);

	    $('#oruro_c #temperatura').append(datos.temperatura);
	    $('#oruro_c #humedad').append(datos.humedad);
	    $('#oruro_c #presion').append(datos.presion);
	    $('#oruro_c #fecha').append(datos.fecha); 
	
	});
});