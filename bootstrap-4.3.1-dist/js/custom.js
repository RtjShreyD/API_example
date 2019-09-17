
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
      .done(function( data ) {
        $('h1').text( data[1].name );
        //  $( "<h1>" ).text( json.title ).appendTo( "body" );
        //  $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
        console.log(json);
      });

});

$("#post").click(function(){
  $.post("http://127.0.0.1:8000/programmers/",
  {
    name: "Donald Duck",
    languages: "http://127.0.0.1:8000/languages/5/"
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}); 


/*$('#post').click(function() {

  // $.ajax( {

  //   url: "http://127.0.0.1:8000/programmers/",
 
  //  // The data to send (will be converted to a query string)
  //  data: {
  //   name: "Kantabai",
  //   "languages[]": ["http://127.0.0.1:8000/languages/5/"]
  // },
 
  //   // Whether this is a POST or GET request
  //   type: "POST",
 
  //   // The type of data we expect back
  //   dataType : "json",

  //   contentType: "application/json"

  // } )
  // .done(function(response) {
  //   console.log(response);
  // })

  $.post( "http://127.0.0.1:8000/programmers/", { 'name': "Messi", 'languages[]': [ "http://127.0.0.1:8000/languages/5/" ] } );

  // fetch("http://127.0.0.1:8000/programmers/", {

  //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //   // mode: 'cors', // no-cors, *cors, same-origin
  //   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //   // credentials: 'same-origin', // include, *same-origin, omit
  //   headers: {
  //       'Content-Type': 'application/json',
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   // redirect: 'follow', // manual, *follow, error
  //   // referrer: 'no-referrer', // no-referrer, *client
  //   body: JSON.stringify({
  //       "name": "Ritiiii",
  //       "languages": ["http://127.0.0.1:8000/languages/5/"]
  //     }), 

  // })
  // .then(function(data) {

  //   console.log(data);
  // })

})
 */
