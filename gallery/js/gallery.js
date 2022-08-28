// Used by the Gallery index page to display thumbnails
// albums and targets are defined in Gallery.html
function index()
{
  var theThumbs = document.getElementById('thumbs');
  for (t = 0; t < targets.length; t++)
  {
    var album = albums[t];
    var target = targets[t];
    for (ph = 0; ph < album.length; ph++)
    {
      var photo = document.createElement('img');
      photo.src = "thumbs/" + album[ph][0];
      photo.className = "thumb";
      var newlink = document.createElement('a');
      newlink.setAttribute('href', target + '?ph=' + ph);
      newlink.appendChild(photo);
      theThumbs.appendChild(newlink);
    }
  }
}
