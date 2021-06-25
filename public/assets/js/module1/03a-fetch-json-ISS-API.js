// Making a map and tiles
const mymap = L.map('issMap').setView([0, 0], 1);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// Making a marker with a custom icon
const issIcon = L.icon({
  iconUrl: '/assets/image/iss200.png',
  iconSize: [50, 32],
  iconAnchor: [25, 16]
});
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

let firstTime = true;
const endpoint = 'https://api.wheretheiss.at/v1/satellites/25544';
    
const getISS = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  
  const { latitude, longitude } = data;
  marker.setLatLng([latitude, longitude]);
  if (firstTime) {
    mymap.setView([latitude, longitude], 2);
    firstTime = false;
  }
  document.getElementById('latitude').textContent = latitude.toFixed(2);
  document.getElementById('longitude').textContent = longitude.toFixed(2);
}

getISS();
setInterval(getISS, 1000);
// ==============================================================================================================================================================================================================================================================