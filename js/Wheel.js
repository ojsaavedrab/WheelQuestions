/************************************************************************** 
// CS: Wheel 
// Permite crear un objeto de rueda de la fortuna de acuerdo al selector
 ************************************************************************/

function Wheel(_selector,_sectors,_speed){
	/** PRIVATE PROPERTIES **/
	var wheel = this;
	var selector = _selector;
	var sectors = _sectors;
	var speed = _speed;
	var sectorDegree = 360/sectors;
	var minTurns = 10,  maxTurns=30;
	var degrees, addSectors, score;
	var whellApp = $(selector);
	var whellImg = whellApp.find(".wheel>img");
	var whellScore = whellApp.find("label>svg>text");
	var whellSpin = whellApp.find(".button.spin");
	var whellRestart = whellApp.find(".button.restart");

	/** PUBLIC PROPERTIES **/
	this.position = 0;
	
	/** PRIVATE FUNCTIONS **/
	function init(){
		wheel.position=0;
		degrees = 0;
		addSectors = 0;
		score=0		
		whellImg.css("transform", `rotate(${degrees}deg)`);
		updateScore();
	}

	function setDegrees(){
		degrees = 360 * minTurns + Math.random() * 360 * maxTurns;
		addSectors = Math.round(degrees/sectorDegree);
		degrees = Math.round(addSectors*sectorDegree);		 
	}

	function endRotate(){
		wheel.position = addSectors % sectors;
		degrees = Math.round((wheel.position) * sectorDegree);
		whellImg.css("transition", 'none');
		whellImg.css("transform", `rotate(${degrees}deg)`);
		wheel.endRotate(wheel.position);
	}

	function updateScore(){
		
		whellScore.html(score.toString().padStart(4, '0'));
	}

	/** PRIVILEGED METHODS **/
	this.rotate = function () {
		setDegrees();
		// Start rotate image
		whellImg.css("transition", 'all 10s ease-out');
		whellImg.css("transform", `rotate(${degrees}deg)`);
	}

	this.addScore = function(_score){
		score+=_score;
		updateScore();
	}

	/** EVENTS METHODS **/
	whellImg.on('transitionend', endRotate);
	whellSpin.on('click', this.rotate)
	whellRestart.on('click', init)

	init();
} 

Wheel.prototype = {
    constructor: Wheel,

    //Plublic: Funcion que se ejecuta cuando la obtencion es satisfactoria
    endRotate: function(position) {
        console.info(`la posición final es ${position}`);
    },

    //Plublic: Funcion que se ejecuta cuando la obtencion fallo
    fail: function() {
        console.error("Fallo la creación" + this.error.args.get_message())
    }
}
