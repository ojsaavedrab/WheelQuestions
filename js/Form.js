/************************************************************************** 
// CS: Form 
// Permite crear un objeto de formulario para renderizar sobre un HTML
 ************************************************************************/

function Form(_selector) {

    /** PRIVATE PROPERTIES **/
    var form = this;
    var jqForm = $(_selector);

    /** PUBLIC PROPERTIES **/
    this.currentQuestion = 0;

    /** PRIVATE FUNCTIONS **/
    function init() {

    }

    function renderItem(options) {
        var jqItem = jqForm.find(options.selector);

        //reemplazamos los atributos de data-text
        jqItem.find('[data-text]').each(function () {
            $data = $(this);
            $data.text(getProperty(options.item, $data.attr('data-text')))
        });

        //reemplazamos los atributos de de {{}}
        jqItem.html(jqItem.html().replace(/{{([^}]*)}}/g, function (f, g) {
            return getProperty(options.item, g);
        }));

    }
    function renderItems(options) {
        var jqItem = jqForm.find(options.selector);

        //delete items from template
        jqItem.find(`.item.${options.objName}`).remove();

        //Create items
        for (var i = 0; i < options.item.length; i++) {
            var item = {}
            item[options.objName] = options.item[i];

            var template = jqItem.find(`.template.${options.objName}`).clone().removeClass('template').addClass('new item');
            jqItem.append(template);
            renderItem({ item: item, selector: `.new.${options.objName}` });
            jqItem.find(`.new.${options.objName}`).attr("id", options.item[i].id).removeClass('new');
        }
    }

    function getProperty(obj, path) {
        return path.split('.').reduce(function (prev, curr) {
            return prev ? prev[curr] : null
        }, obj || self)
    }

    /** PRIVILEGED METHODS **/
    this.render = function (options) {
        if (options.item instanceof Array) {
            renderItems(options);
        }
        else if (options.item instanceof Object) {
            renderItem(options);
        }
        else {
            //Error
        }
    }

    this.showModal = function () {
        jqForm[0].showModal();
    }

    this.close = function(){
        jqForm[0].close();
    }

    this.on = function (_selector, _event, _func) {
        jqForm.find(_selector).on(_event, _func);
    }

    init();
}

Form.prototype = {
    constructor: Form,

    //Plublic: Funcion que se ejecuta cuando la obtencion es satisfactoria
    endRotate: function (position) {
        console.info(`la posición final es ${position}`);
    },

    //Plublic: Funcion que se ejecuta cuando la obtencion fallo
    fail: function () {
        console.error("Fallo la creación" + this.error.args.get_message())
    }
}
