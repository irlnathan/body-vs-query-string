/**
The point of this project is to show that when using jQuery $.ajax() syntax to send a request, in order for the data to be parsed in Sails as a parameter is to use the `contentType` property. That's because the data is going through the body.

If you use `$.post()` the data will be passed through the query string and automatically be parsed as parameters.
**/

$( document ).ready(function() {

  $('.da-body').click(function() {

    var it = {
        "title": "foo",
        "src": "a"
      } 

    $.ajax({
      url: "/foo",
      method: "POST",
      contentType: 'application/json',
      data: JSON.stringify(it), 
    }).done(function(msg) {

      console.log('msg: ', msg);

    });
  });

  $('.da-query-string').click(function() {
 
    $.post("/foo", {
      title: 'foo',
      src: 'a'
    }, function(data){

      console.log(data);

    });
  });
});