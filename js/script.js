// Immediately invoked function expression
// to not pollute the global scope
$(function () {
  //var data = {"title":"Teju's Shadow","questions":[{"id":0,"question":"How do you describe a shadow?","options":[{"id":"A","option":"like a dark picture"},{"id":"B","option":"like a spy"},{"id":"C","option":"like a monster"}],"value":100,"idAnswer":"B"},{"id":1,"question":"¿What is the child in the story afraid?","options":[{"id":"A","option":"of the Night"},{"id":"B","option":"of a Shadow"},{"id":"C","option":"of the Puppets"},{"id":"D","option":"of his Mother"}],"value":500,"idAnswer":"A"},{"id":2,"question":"What is the way for a shadow to disappear?","options":[{"id":"A","option":"Taking a shower"},{"id":"B","option":"Running"},{"id":"C","option":"Turning off the light"}],"value":200,"idAnswer":"C"},{"id":3,"question":"Who dances and jumps with Tejus?","options":[{"id":"A","option":"his Mother"},{"id":"B","option":"his Schoolmates"},{"id":"C","option":"his Shadow"}],"value":100,"idAnswer":"C"},{"id":4,"question":"*** PENANCE ***","options":[{"id":"A","option":"Scream very loud"}],"value":100,"idAnswer":"A"},{"id":5,"question":"What did Teju's mother do when he tells her that is afraid of the dark?","options":[{"id":"A","option":"she gave him a big hug"},{"id":"B","option":"she gave him a stuffed animal"},{"id":"C","option":"she kissed him"}],"value":400,"idAnswer":"A"},{"id":6,"question":"*** PENANCE ***","options":[{"id":"A","option":"Tell someone you love him"}],"value":100,"idAnswer":"A"}]}

  var wheel = new Wheel("#Wheel1", 7, 10);
  var test = new Test("#Test1");
  var question;
  //$.extend(test, data);

  dialog = new Form('#Test1');
  dialog.render({ item: { test }, selector: ".test" });

  //join event whell with the test
  wheel.endRotate = function (position) {
    showQuestion(position);
  }

  function showQuestion(id){
    question = test.getQuestion(id);
    dialog.render({ item: { question }, selector: ".question" });
    dialog.render({ item: question.options, selector: ".options", objName: "option" });
    dialog.showModal();

    //Add event for options
    dialog.on('.option.item', 'click', sendChoice);
  }

  function sendChoice() {
    var response = test.sendChoice($(this).attr("id"));
    if(response.isCorrect){
      wheel.addScore(response.value);
    }
    dialog.close();
  }
});
