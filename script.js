var btn = document.getElementById('btn');
var map = document.getElementById('map');

var loader = document.getElementsByClassName('loader');
var latitude;
var longitude;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    var mapUrl = 'http://maps.googleapis.com/maps/api/staticmap'
      + '?center=' + latitude + ',' + longitude
      +' &zoom=18'
      + '&size=500x500'
      + '&markers=color:red|' + latitude + ',' + longitude
      + '&sensor=false';
    map.src = mapUrl;
    map.onload = loader[0].style.display = 'none';
}

btn.addEventListener('click', function() {
    loader[0].style.display = 'block';
    getLocation();
});
