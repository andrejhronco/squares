$(document).ready(function() {
	var randomNumber = randomFromTo(2,100, '.root-question',true); // first run on load
	var randNum = randomNumber[1]; // set randNum var
	
	//$('.square-root').text(Math.sqrt(randNum)+' : '+Math.floor(Math.sqrt(randNum))); // this shows the answer on load
	
	$('.next').on('click', function(){ // asks another question
		randomNumber = randomFromTo(2,100, '.root-question',true); //calls randomFromTo();
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
	var  randNum, simpleSet;
	if(simple === true){
		simpleSet = [4,9,16,25,36,49,64,81,100,121,144,169,196,225];
		randNum = simpleSet[Math.floor(Math.random()*simpleSet.length)];
	}
	else {
		randNum =  Math.floor(Math.random() * (to - from + 1) + from);
	}
	return [$(el).text(randNum), randNum];
}

//________ end randSquare _________\\

$.fn.createBoxes = function(numberOfBoxes, boxSize){
	$this = $(this);
	var box = [], boxClass, ranNum = Math.floor(Math.random() * 100);
	//console.log(ranNum);
	for(i=1;i<=numberOfBoxes;i++){
		// if(i%3 === 0) boxClass = 'black';
		// if(i%5 === 0) boxClass = 'white';
		// if(i%15 === 0) boxClass = 'gray';
		(i%ranNum === 0 || i%ranNum === 2) ? boxClass = 'black' : boxClass = 'white';
		if(i%ranNum === 0) boxClass = 'gray';
		box.push("<div class='box size-"+boxSize+" box-"+i+" "+boxClass+"'></div>");
	}
	return $this.html(box.join(''));
};
//________ end createBoxes() _________\\