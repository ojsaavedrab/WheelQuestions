/************************************************************************** 
// CS: Test 
// Permite crear un objeto de cuestionario por medio de un archivo de preguntas JSON
 ************************************************************************/

function Test(_selector) {

    /** PRIVATE PROPERTIES **/
    var test = this;
    var jqTest = $(_selector);

    /** PUBLIC PROPERTIES **/
    this.currentQuestion = 0;
    this.data;

    /** PRIVATE FUNCTIONS **/
    function init() {
        getData();
    }

    function getData() {
        var request = new XMLHttpRequest();
        request.open('GET', jqTest[0].dataset.file);
        request.responseType = 'json';
        request.send();
        request.onload = function () {
            test.data = request.response;
        }
    }

    /** PRIVILEGED METHODS **/
    this.getData = function () {
        getData();
    }

    /** EVENTS METHODS **/


    init();
}

Wheel.prototype = {
    constructor: Wheel,

    //Plublic: Funcion que se ejecuta cuando la obtencion es satisfactoria
    endRotate: function (position) {
        console.info(`la posición final es ${position}`);
    },

    //Plublic: Funcion que se ejecuta cuando la obtencion fallo
    fail: function () {
        console.error("Fallo la creación" + this.error.args.get_message())
    }
}
