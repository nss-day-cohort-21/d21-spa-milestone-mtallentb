console.log("Main IFFE");

var CarLot = (function () {

  // Define a private scope variable to store cars
  var dataFromJSON = [];  

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace

  return {

    getJSON: function (callback) {

      let xhr = new XMLHttpRequest();

      xhr.addEventListener('load', function(e) {
        dataFromJSON.push(JSON.parse(e.target.responseText));
      });
      xhr.addEventListener('error', function() {
          console.log("Error loading JSON file.");
      });
      
      xhr.open('GET', 'inventory.json', false);
      xhr.send();

      // console.log(dataFromJSON);

      dataFromJSON.forEach((arrayItem) => {
      	// console.log(arrayItem.cars);
      });

      callback(dataFromJSON);
      

    }
  }



    
    // CarLot.showCars(dataFromJSON);
  

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
})(CarLot || {});