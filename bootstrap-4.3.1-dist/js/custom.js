var datas = "";

$('#get').click(function() { //get here is the id of the button targetted
    console.log('working');
    $.ajax({ 
        // The URL for the request
        url: "http://localhost:8000/languages/",      
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
    })
      // Code to run if the request succeeds (is done);
      // The response is passed to the function
      .done(function( datas ) {
        $('h1').text( datas[1].name );
        //  $( "<h1>" ).text( json.title ).appendTo( "body" );
        //  $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
        console.log(datas);
      });
});

$("#post").click(function(){
  $.ajax({
    type:"POST",
    url:"http://127.0.0.1:8000/programmers/",
    //dataType: "json",
    //contentType: "application/json; charset=utf-8",
    data: {
        "name":"Baba",
        "languages":"http://127.0.0.1:8000/languages/3/"
     },
     //processData: true, 
     success: function(response) {          
        console.log(response);
      }  
  })
});


/*$("#post").click(function(){
  $.post("http://127.0.0.1:8000/programmers/",
  {
    name: "Donald Duck",
    languages: "http://127.0.0.1:8000/languages/5/"
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}); 
*/
