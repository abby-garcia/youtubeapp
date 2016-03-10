$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});



function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyD1GKcq922Qe8V0Z0UWDT-PI1CpoFIx2ZQ',
    q:'prank'
  };
  url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=prank&key=AIzaSyD1GKcq922Qe8V0Z0UWDT-PI1CpoFIx2ZQ';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}


function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);
}

