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
    q:'prank',
    maxResults:6,
    order: 'viewCount'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}


function showResults(videos){
  var html = "";
  $.each(videos, function(index,video){
    console.log(video.snippet.thumbnails.medium.url);
      html = html + "<li><p>" + video.snippet.title +
        "</p><img src='" +  video.snippet.thumbnails.high.url + "'/></li>" ;
  });
  $('#search-results').html(html);
}

