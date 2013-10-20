jQuery(document).ready(function($) {
	
	$.ajax({
		url: 'http://climabolivia.colectivovirtual.com/clima.php',
		type: 'GET',
		dataType: 'json',
	})
	.done(function(data) {
		alert('Cargando informacion');
		$.each(data, function(index, val) {
			window.localStorage.setItem('ciudad-'+index, JSON.stringify(val));
			console.log('ciudad-'+index);
		});
	})
	.fail(function() {
		alert(' Datos no sincronizados');
	})
	.always(function() {
		console.log("Proceso completado");
	});
	
});