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

  //creamos el formulario
  test={
    "title": "Prueba de formulario",
    "option": "Nápoles"
  };
  dialog = new Form('#Test1');
  dialog.render({item:{test}, selector:".test"});

});
