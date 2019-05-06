$(document).ready(function() {
    $.ajax( {
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
        success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);
        
        var linktext = $('#quote-content p').text();

        $('a#get-tweet').attr("href", "https://twitter.com/intent/tweet?hashtags=design_quotes&amp;related=freecodecamp&amp;text="+linktext);

          // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
            $('#quote-source').html('- ' + post.custom_meta.Source);
        } else {
            $('#quote-source').text();
        }
    },
    cache: false
    });
});

$('#get-another-quote').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);

        var linktext = $('#quote-content p').text();

        $('a#get-tweet').attr("href", "https://twitter.com/intent/tweet?hashtags=design_quotes&amp;related=freecodecamp&amp;text="+linktext);

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('- ' + post.custom_meta.Source);
        } else {
          $('#quote-source').text();
        }
      },
      cache: false
    });
 });

document.onkeyup=function(e){
  var e = e || window.event; // for IE to cover IEs window event-object
  if(e.which == 82) {
    $('#get-another-quote').click();
  }
};