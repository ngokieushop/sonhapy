function updateCurrency(cur,target) {
	$.ajax({
		url:target+cur,
		context:document.body
	}).done(function(data, textStatus, jqXHR) {
		var block = document.getElementById('pkgs');
		if (block) {
			block.innerHTML = data;
			updateCurrencyValues(function() { updateQuantity(); });
		}
	}).fail(function( jqXHR, textStatus, errorThrown ) {
		location.reload(); // reload page if ajax fails
	});
}
