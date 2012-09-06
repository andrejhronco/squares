$(document).ready(function() {
	var simple = true;
	$('input.simple').change(function(){
		simple = this.checked ? true : false;
		return simple;
	});

	var randomNumber = randomFromTo(2,25, '.root-question', simple); // first run on load
	var randNum = randomNumber[1]; // set randNum var
		
	$('.next').on('click', function(){ // asks another question
		randomNumber = randomFromTo(2,25, '.root-question', simple); //calls randomFromTo();
		randNum = randomNumber[1]; //sets/updates the randNum var
	});
//________ end next root question _________\\
	$("#answer_form").submit(function() {
		if($("input[name=answer]").val() == Math.sqrt(randomNumber[1])) {
			$('.square-root').text('correct!');
			$('#box').createBoxes(1600, 5);
			return false;
		}
		else{
			$('.square-root').text('wrong!');
			return false;
		}
	});
//________ end submit  _________\\
	$('#box').createBoxes(1600, 5);

});
function randomFromTo(from, to, el, simple){
	var  randNum, simpleSet, fromTo = $('.from-to');

	if(simple === true){
		fromTo.hide();
		simpleSet = [4,9,16,25,36,49,64,81,100,121,144,169,196,225];
		randNum = simpleSet[Math.floor(Math.random()*simpleSet.length)];
	}
	else {
		fromTo.show();
		randNums =  Math.floor(Math.random() * (to - from + 1) + from);
		randNum = randNums*randNums;
	}
	return [$(el).text(randNum), randNum];
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
		box.push("<div class='box size-"+boxSize+" box-"+i+" "+boxClass+"'></div>");
	}
	return $this.html(box.join(''));
};
//________ end createBoxes() _________\\