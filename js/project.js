$(function() {
    console.log( "page ready!" );
    loadData();

    // if()
      // var index = url.split('#project/')[1].trim();
      // renderSingleProjectPage(index, students);
});

function loadData() {
  $.getJSON( "students.json", function( data ) {
    // Write the data into our global variable.
    students = data;
    var index = window.location.hash.split('#')[1].trim();

    // Call a function to create HTML for all the students.
    renderSingleProjectPage(index,students);
  });
}

function renderSingleProjectPage(index, data){
  var counter = 0 ;
  var tagCounter = 0 ;
  var prevComma = 0  ;
  var newComma = 0 ;
  var position = 0 ;

  var portTrue = false ;
  var fbTrue = false ;
  var instaTrue = false ;
  var twitterTrue = false ;
  var linkTrue = false ;

  var page = $('.single-project'),
    container = $('.popup-detail');

  // Find the wanted project by iterating the data object and searching for the chosen index.
  if(data.length){
    data.forEach(function (item) {
      if(item.id == index){
        // console.log(item.profile-pic);
        // Populate '.popup-detail' with the chosen project's data.
        page.find('.page-name').text(item.name);
        page.find('.page-image').find('img').attr('src',item['profile-pic']);
        if(item.social['portfolio'] != "") {
          page.find('.portfolio').text("Portflio  |") ;
          page.find('.portfolio').attr('href', item.social['portfolio']) ;
          portTrue = true ;
        }
        if(item.social['facebook'] != "") {
          page.find('.fb').text("Facebook  |") ;
          page.find('.fb').attr('href', item.social['facebook']) ;
          fbTrue = true ;
        }
        if(item.social['instagram'] != "") {
          page.find('.insta').text("Instagram |") ;
          page.find('.insta').attr('href', item.social['instagram']) ;
          instaTrue = true ;
        }
        if(item.social['linkedin'] != "") {
          page.find('.linkedin').text("Linkedin  |") ;
          page.find('.linkedin').attr('href', item.social['linkedin']) ;
          linkTrue = true ;
        }
        if(item.social['twitter'] != "") {
          page.find('.twitter').text("Twitter  |") ;
          page.find('.twitter').attr('href', item.social['twitter']) ;
          twitterTrue = true ;
        }
        if(item.social['other'] != "") {
          page.find('.other').text(item.social['other']) ;
        } else {
            if(twitterTrue === true) {
              page.find('.twitter').text("Twitter") ;
            } else if (linkTrue === true) {
              page.find('.linkedin').text("Linkedin") ;
            } else if (instaTrue === true) {
              page.find('.insta').text("Instagram") ;
            } else if(fbTrue === true) {
              page.find('.fb').text("Facebook") ;
            } else if (portTrue === true) {
              page.find('.portfolio').text("Portfolio") ;
            }
        }

        // page.find('.page-list').find('li').first().find('a').attr('href','http://www.facebook.com');
        // page.find('.page-list').find('li:nth-child(2)').find('a').attr('href','http://www.instagram.com');
        for(var i = 0 ; i < item.aboutme.length ; i++) {
          page.find('.page-desc').append(item.aboutme[i]+ "<br>" + "<br>") ;
        }
        page.find('.project-name').text(item.project.title);
        for( var i = 0 ; i < item.project.description.length ; i++) {
          page.find('.project-desc').append(item.project.description[i] + "<br>" + "<br>");
        }
        if(item.project.image[0] != "") {
          for(var i = 0 ; i < item.project.image.length ;i++) {
            var newImage = document.createElement('img');
            newImage.setAttribute('src',"project/"+ item.id + "/" + item.project.image[i] );

            $( "#theProject" ).append(newImage) ;
          }
        }

        // if(item.project.hasOwnProperty('video')) {
        //   for(var i = 0 ; i < item.project.video.length ; i++) {
        //     var newVideo = document.createElement('video') ;
        //     var source = document.createElement('source');

        //     source.setAttribute('src', item.project.video[i]);
        //     newVideo.appendChild(source);
        //     newVideo.controls = true ;

        //     // newVideo.setAttribute('src', image.project.video[i]) ;
        //     // console.log(newVideo) ;
        //     $('#theProject').append(newVideo) ;
        //   }
        // }

        if(item.project.hasOwnProperty('video')) {
          for(var i = 0 ; i < item.project.video.length ; i++) {
            var newVideo = document.createElement('iframe') ;
            newVideo.setAttribute('src', item.project.video[i]) ;
            $('iframe').width(300) ;
            $('#theProject').append(newVideo) ;
          }
        }


        // page.find('.project').find('IMG').attr('src', "project/"+ item.id + "/" + item.project.image[0]);
        for(var i = 0 ; i < item.project['thesis-category'].length ; i++) {
           page.find('.thesis-category').append(item.project['thesis-category'][i] + "<br>") ;
        }
       

        for(var i = 0 ; i < item.project['tags'].length ; i++) {
          page.find('.myTags').append(item.project['tags'][i] + "<br>") ;
        }
        page.find('.studio1').append(item.project['studio-professor-1']+"<br>") ;
        page.find('.studio1').append(item.project['writing-professor-1']) ;
        if(item.project.hasOwnProperty('other-professor-1')) {
          console.log("ran") ;
          page.find('.studio1').append("<br>" + item.project['other-professor-1']) ;
        }
        page.find('.studio2').append(item.project['studio-professor-2']+"<br>") ;
        page.find('.studio2').append(item.project['writing-professor-2']) ;
        if(item.project.hasOwnProperty('other-professor-2')) {
          page.find('.studio2').append("<br>" + item.project['other-professor-2']) ;
        }

        container.find('h4').text(item.project.blurb);
        container.find('p').text(item.project.description);
      }
    });
  }

  // Show the page.
  page.addClass('visible');

}
