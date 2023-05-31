


function specialMix(...arguments) {
    // Your Code Here
    let sum = 0;


    for (let index = 0; index < (arguments.length); index++) {
        
        if (parseInt(arguments[index])) {
            sum = sum + parseInt(arguments[index]);
        }
    }

        if (sum === 0) {
            return "All values are strings";
        }
    return sum;
  }
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings