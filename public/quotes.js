

var baseUrl ='window.location.origin';

document.addEventListener('DOMContentLoaded', function() {
  searchQuote();
}, false);


function searchQuote() {
  var quoteText = document.getElementById('quoteText');
  var authorText = document.getElementById('authorText');
  fetch(baseUrl + '/random-quote', {
        method: 'GET'
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      var quote = JSON.parse(data);
      quoteText.textContent = quote.text;
      authorText.textContent = quote.author;
    })
    .catch(function(err) {
      authorText.textContent = '-';
    });
}
