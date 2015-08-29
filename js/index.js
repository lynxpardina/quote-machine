$(document).ready(function(){
  getQuote();
  $('#qb').click(getQuote);
})

function getQuote(handleData){
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?',
      dataType: 'jsonp',
      success: function (data){
        $('#quote').text(data.quoteText);
        $('#author').text(data.quoteAuthor);
        var txt = data.quoteText + " " + data.quoteAuthor;
        var link = "https://twitter.com/intent/tweet?button_hashtag=quotes" + "&text=" + txt;
        $("#tweet").attr("href", link);      
      }, 
      error: function(){
        $('#quote').text("No se ha po");
      }
    });
}