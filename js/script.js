/*------------------------------------------------*/
//	Load the JSON
/*------------------------------------------------*/
var students = [];

$(function() {
    console.log( "ready!" );
    loadData();
});

function loadData() {
  $.getJSON( "students.json", function( data ) {
    // Write the data into our global variable.
    students = data;

    // Call a function to create HTML for all the students.
    generateAllStudentsHTML(students);

    // Manually trigger a hashchange to start the app.
    $(window).trigger('hashchange');
  });
}

function generateAllStudentsHTML(data) {

  var list = $('.students-list');

  var source = $("#students-template").html();

  //Compile the template​
  var template = Handlebars.compile(source);
  list.append (template(data));

  // Each students has a data-index attribute.
  // On click change the url hash to open up a preview for this project only.
  // Remember: every hashchange triggers the render function.
  list.find('li').on("mouseover mouseout", function(){
    console.log("running this myPhoto") ;
        $(this).find('.myPhoto').toggleClass("imageHover");
    // list.find('h6').on("mouseover mouseout", function() {
        $(this).find('.theprojecttitle').toggleClass("textHover") ;
    // });
  });

  

  list.find('li').on('click', function (e) {
    console.log("something happened") ;
    e.preventDefault();
    var studentIndex = $(this).data('index');
    var hash = "#"+studentIndex;

    window.location.href  = "page.html" + hash;
    // window.location.hash = 'project/' + studentIndex;
  })
}
