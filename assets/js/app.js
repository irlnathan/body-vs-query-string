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