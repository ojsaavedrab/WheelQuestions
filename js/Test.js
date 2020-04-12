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
            $.extend(test, request.response);
        }
    }

    /** PRIVILEGED METHODS **/
    this.getData = function () {
        getData();
    }

    this.getQuestion = function (id) {
        var list = $.grep(test.questions, function (item, index) {
            return item.id == id;
        });
        if (list.length > 0) {
            test.currentQuestion = list[0];
            return test.currentQuestion;
        }
        else {
            return null;
        }
    }

    this.sendChoice = function (id) {
        var response = { "isCorrect": false, "value": 0 }
        if (test.currentQuestion.idAnswer == id) {
            response.isCorrect = true;
            response.value = test.currentQuestion.value;
        }
        return response;
    }

    /** EVENTS METHODS **/


    init();
}

Test.prototype = {
    constructor: Test,

    //Plublic: Funcion que se ejecuta cuando la obtencion es satisfactoria
    endRotate: function (position) {
        console.info(`la posición final es ${position}`);
    },

    //Plublic: Funcion que se ejecuta cuando la obtencion fallo
    fail: function () {
        console.error("Fallo la creación" + this.error.args.get_message())
    }
}
