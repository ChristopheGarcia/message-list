$('#count').text(($('p').length));

$('#btn-add').click(
  function () {
    $('#message-list').append('<div class="row"><img class="avatar" src="./images/avatar-1.jpg" alt="avatar"><div><h6>Noel Paganelli</h6><p>'+$("#add-message").val()+'</p></div><i id="test" class="fa fa-trash" aria-hidden="true"></i></div>');
    $('#count').text(($('p').length));
  }
);

$('.fa.fa-trash').click(
  function() {
    $(this).parent().remove();
    $('#count').text(($('p').length));
});

$('#message-list').on("click", "i",
  function(){
    $(this).parent().remove();
    $('#count').text( $("p").length );
  }
)

$('#btn-search').click(
  function() {
    $(".row-message").show();
    var inputValue = $('#recherche').val();
    var matchH6 = $('h6');
    matchH6.each( function() {
      if (inputValue == $(this).text()) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
      }
        $("#recherche").val("");
     }
    );
  });


  