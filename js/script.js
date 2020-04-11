// Immediately invoked function expression
// to not pollute the global scope
$(function() {
  wheel = new Wheel("#Wheel1",7,10);
  wheel.endRotate = function(position){
    if(position==0){
      this.addScore(-100);
    }
    else{
      this.addScore(position*100);
    }
  }
});
