$(document).ready(function() {
	var randNum;
	function init() {
		askQuestion();
		createBoxes();
	}
	
	$('input.simple').change(function() {
		// I moved the logic for showing/hiding the from to element here,
		// due to it only changing if simple is checked or not.
		var fromTo = $('.from-to');
		this.checked ? fromTo.hide(): fromTo.show();
	});

	
		
	$('.next').on('click', function() {
		askQuestion();
	});
	
	
	$("#answer_form").submit(function() {
		// Putting a space after 'if' denotes it is a language operator, and not a function call.
		if ($("input[name=answer]").val() == Math.sqrt(randNum) {
			$('.square-root').text('correct!');
			createBoxes();
		} else {
			$('.square-root').text('wrong!');	
		}
		return false;
	});
	
	
	function createBoxes() {
		// I encapsulated the call to createBoxes mostly because I wanted to capture the 
		// Magic Numbers 1600 and 5 in a single place. 
		$('#box').createBoxes(1600, 5);	
	}

	function askQuestion() {}
		// By naming functions well you replace comments (which get stale)
		// with code that generally stays up to date. (After all, no one likes
		// to call a function that doesn't do what it says it does, right?)
		randNum = randomFromTo(2,25, $('input.simple').is(':checked'));
		$('.root-question').text(randNum);
	}
	
	init();
}
});
function randomFromTo(from, to, simple){
	// I removed all DOM related activity from this function, as it is 
	// a pretty common pattern to seperate responsibilities of view
	// and calculation logic.
	var randNum;

	if(simple === true){	
		var simpleSet = [4,9,16,25,36,49,64,81,100,121,144,169,196,225];
		randNum = simpleSet[Math.floor(Math.random()*simpleSet.length)];
	}
	else {
		randNums = Math.floor(Math.random() * (to - from + 1) + from);
		randNum = randNums*randNums;
	}
	return randNum;
}
function isInt(n) {
   return n % 1 === 0;
}
//________ end fromTo _________\\

$.fn.createBoxes = function(numberOfBoxes, boxSize){
	$this = $(this);
	var box = [], boxClass, ranNum = Math.floor(Math.random() * 100);

	for(i=1;i<=numberOfBoxes;i++){
		(i%ranNum === 2) ? boxClass = 'black' : boxClass = 'white';
		if(i%ranNum === 0) boxClass = 'gray';
		box.push("<div id='box-"+i+"' class='box size-" + boxSize + " " + boxClass+"'></div>");
	}
	return $this.html(box.join(''));
};
//________ end createBoxes() _________\\