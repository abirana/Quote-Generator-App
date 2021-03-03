function generateQuote() {
  $.ajax( {
      url: 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&per_page=1&_fields=author,id,content,title&callback=',
      success: function(data) {
      var post = data.shift(); // The data is an array of posts. Grab the first one.
      $('#quote-title').text(post.title.rendered);
      $('#quote-content').html(post.content.rendered);
      
      var linktext = $('#quote-content p').text();
  
      $('a#get-tweet').attr("href", "https://twitter.com/intent/tweet?hashtags=design_quotes&text="+linktext);
  
      // If the Source is available, use it. Otherwise hide it.
      if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('- ' + post.custom_meta.Source);
      } else {
          $('#quote-source').text();
      }
  },
  cache: false
  });
}

$(document).ready(function(e) {
  generateQuote();
});

$('#get-another-quote').on('click', function(e) {
    e.preventDefault();
    generateQuote();
 });

document.onkeyup=function(e){
  var e = e || window.event; // for IE to cover IEs window event-object
  if(e.which == 82) {
    $('#get-another-quote').click();
  }
};
