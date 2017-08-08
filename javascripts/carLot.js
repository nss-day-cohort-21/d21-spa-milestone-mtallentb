console.log('Car Lot');

let targetDiv = document.getElementById("targetDiv");
let cars; 
let inputField = document.getElementById("myTextField");

focusMethod = function getFocus() {           
  inputField.focus();
}

 function showCars(data) {
    cars = data[0].cars;
    console.log(cars);

	let i = 0;
    cars.forEach((element, index) => {
    	i++;
    	if (i === 4) {
    		targetDiv.innerHTML += `<div class="row"></div>`;
    	}
    	targetDiv.innerHTML += `<div class="col-sm-4 carCard" id="car-${[index]}">
	    							<h2>${cars[index].make} ${cars[index].model}</h2>
	    							<h4>${cars[index].year}</h4>
	    							<h5 id="carDescription-${[index]}">${cars[index].description}</h5>
	    							<h2>$${cars[index].price}</h2>
    							</div>`;

    	for (let i = 0; i < cars.length; i++) {
	    	$('#car-' + [i]).click( () => {
	    		$('.carCard').removeClass('fatBorder');
				console.log("Clicked on", $('#car-' + [i]));
				$('#car-' + [i]).toggleClass('fatBorder');
				inputField.placeholder = '';
				inputField.value = '';
				focusMethod();
			});

			inputField.addEventListener("keyup", function(event) {
				if ($('#car-' + [i]).hasClass('fatBorder') === true) {
					$('#carDescription-' + [i]).html(`<h5>${event.target.value}</h5>`);
				}
			});	
		}
    });
}

CarLot.getJSON(showCars);

    
