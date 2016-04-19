

// lab_6
function convertTemp(temp, type) {
  

  if (type === "C") {
     var FtoC = (temp - 32) * 5/9;
     console.log (FtoC + " degrees celsius");
    
    }
  
    else if (type === "F") {
    var CtoF = (temp * 1.8) + 32;
	console.log (CtoF + " degrees fahrenheit");
    }
  
} 

convertTemp (65, "C");

// lab_6 bonus

  var temp = prompt("Please enter your temp");
  var type = prompt("Please enter C or F");
  
  if (type === "F") {
      alert ((temp - 32) * 5/9 + " degrees celsius");
    }
  
    else  {
      alert ((temp * 1.8) + 32 + " degrees fahrenheit");
    }

  convertTemp ();
  console.log ("The converted temperature is " + temp + " degrees " + type);