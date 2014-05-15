
$(document).ready(function(){
	for(i=1;i<=100;i++){
		var isDivisableBy3 = (i%3===0);
		var isDivisableBy5 = (i%5===0);

		var output;

		if(isDivisableBy3&&isDivisableBy5){
			output = "FizzBuzz";
		}
		else if(isDivisableBy3){
			output = "Fizz";
		}
		else if(isDivisableBy5){
			output = "Buzz";
		}
		else{
			output = i;
		}
		$("body").append("<div>"+ output +"</div>");
	}

});

