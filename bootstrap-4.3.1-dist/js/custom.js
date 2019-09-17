
$('#get').click(function() {

    console.log('working');

    $.ajax({
 
        // The URL for the request
        url: "http://localhost:8000/languages/",
     
        // The data to send (will be converted to a query string)
        data: {
            id: 123
        },
     
        // Whether this is a POST or GET request
        type: "GET",
     
        // The type of data we expect back
        dataType : "json",
    })
      // Code to run if the request succeeds (is done);
      // The response is passed to the function
      .done(function( json ) {
        //  $( "<h1>" ).text( json.title ).appendTo( "body" );
        //  $( "<div class=\"content\">").html( json.html ).appendTo( "body" );
        console.log(json);
      })

})
