/************************************************************************** 
// CS: Form 
// Permite crear un objeto de formulario para renderizar sobre un HTML
 ************************************************************************/

function Form(_selector){

	/** PRIVATE PROPERTIES **/
    var form = this;
    var jqForm = $(_selector);

	/** PUBLIC PROPERTIES **/
	this.currentQuestion = 0;
	
	/** PRIVATE FUNCTIONS **/
	function init(){

	}

	function renderItem(options){
        var jqItem =  jqForm.find(options.selector);
        
        //reemplazamos los atributos de data-text
        jqItem.find('[data-text]').each(function() {
            $data = $(this);
            $data.text(getProperty(options.item, $data.attr('data-text')))
        });
    }
    
    function getProperty(obj, path) {
        return path.split('.').reduce(function(prev, curr) {
            return prev ? prev[curr] : null
        }, obj || self)
    }

	/** PRIVILEGED METHODS **/
	this.render = function (options) {
        if(options.item instanceof Array  == Array){
            renderItems(options);
        }
        else if(options.item instanceof Object){
            renderItem(options);
        }
        else{
            //Error
        }
	}

	init();
} 

Form.prototype = {
    constructor: Form,

    //Plublic: Funcion que se ejecuta cuando la obtencion es satisfactoria
    endRotate: function(position) {
        console.info(`la posición final es ${position}`);
    },

    //Plublic: Funcion que se ejecuta cuando la obtencion fallo
    fail: function() {
        console.error("Fallo la creación" + this.error.args.get_message())
    }
}
