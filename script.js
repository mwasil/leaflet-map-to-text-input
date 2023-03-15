var tileLayer = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="/copyright">autorzy OpenStreetMap</a>'
});
 
var map = new L.Map('map', {
  'center': [53.9639600, 18.5263800],
  'zoom': 12,
  'layers': [tileLayer]
});

var marker = L.marker([53.9639600, 18.5263800],{
  draggable: true
}).addTo(map);

marker.on('dragend', function (e) {
  document.getElementById('latitude').value = marker.getLatLng().lat;
  document.getElementById('longitude').value = marker.getLatLng().lng;
});