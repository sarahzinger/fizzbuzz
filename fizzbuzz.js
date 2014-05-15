
$(document).ready(function(){
	var questionNum = prompt("Pick a number for Fizzbuzz");
	questionNum = +questionNum;
	var isFizzBuzz = function(x) {
		if (isNaN(x)){
			$("body").append("<div>"+ "You didn't pick a number, silly!"+"</div>");
		} else {
			for(i=1;i<=x;i++){
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
		}
	};
	isFizzBuzz(questionNum);
});