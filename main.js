let indexAnterior = 5;
let list = document.getElementsByTagName('summary');
let nodes = Array.prototype.slice.call(list, 0);

nodes.forEach(function (currentValue, currentIndex, listObj) {
	currentValue.addEventListener('click', () => {
		console.log(indexAnterior);
		console.log('Current Index: ' + currentIndex);

		if (indexAnterior != 5) {
			//Estado antes de que de click en summary
			let estado = document.getElementsByTagName('details')[currentIndex].open;
			console.log(estado);

			if (indexAnterior === currentIndex) {
				//Cuando se presiona la misma lista
				console.log(indexAnterior + '===' + currentIndex);
				document.getElementsByTagName('details')[currentIndex].open = estado;
			} else {
				//Cuando se presiona una lista diferente a la abierta
				document.getElementsByTagName('details')[indexAnterior].open = estado;
			}
		}
		indexAnterior = currentIndex;
	});
});
