

$(function(){

  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});



function getRequest(searchTerm){
  var params = {  // why do we need to put quotes around part, key, q, maxResults?
    part: "snippet",
    key: "AIzaSyD1GKcq922Qe8V0Z0UWDT-PI1CpoFIx2ZQ",
    q: searchTerm + ' prank',
    maxResults:6,
    order: 'viewCount'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    console.log(data);
    showResults(data.items);
  });
}


function showResults(videos){
  var html = "";
  $.each(videos, function(index,video){
    console.log(video.snippet.thumbnails.medium.url);
      html = html + "<li><p class= 'results'>" + video.snippet.title +
      "</p> <a href='https://www.youtube.com/watch?v=" + video.id.videoId +"'> <img src='" +  video.snippet.thumbnails.medium.url+ "'/></a></li>" ;
  });
  $('#search-results').html(html);
}


//