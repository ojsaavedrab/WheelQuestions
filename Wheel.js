
function Wheel(sectors,speed){
	var position = 0;
	var sectorDegree = 360/sectors
	

	var alive=true, age=1;
	var maxAge=70+Math.round(Math.random()*15)+Math.round(Math.random()*15);
	function makeOlder(){ return alive = (++age <= maxAge) } 

	var myName=n?n:"John Doe";
	var weight=1;


	// ************************************************************************ 	
	// PRIVILEGED METHODS 
	// MAY BE INVOKED PUBLICLY AND MAY ACCESS PRIVATE ITEMS 
	// MAY NOT BE CHANGED; MAY BE REPLACED WITH PUBLIC FLAVORS 
	// ************************************************************************ 
	this.toString=this.getName=function(){ return myName } 

	this.eat=function(){ 
		if (makeOlder()){ 
			this.dirtFactor++;
			return weight*=3;
		} else alert(myName+" can't eat, he's dead!");
	} 
	this.exercise=function(){ 
		if (makeOlder()){ 
			this.dirtFactor++;
			return weight/=2;
		} else alert(myName+" can't exercise, he's dead!");
	} 
	this.weigh=function(){ return weight } 
	this.getRace=function(){ return race } 
	this.getAge=function(){ return age } 
	this.muchTimePasses=function(){ age+=50; this.dirtFactor=10; } 


	// ************************************************************************ 
	// PUBLIC PROPERTIES -- ANYONE MAY READ/WRITE 
	// ************************************************************************ 
	this.clothing="nothing/naked";
	this.dirtFactor=0;
	
	/** PRIVATE FUNCTIONS **/
	
} 

