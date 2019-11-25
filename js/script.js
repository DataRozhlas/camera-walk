import "./byeie"; // loučíme se s IE
import { cams } from "./cams"

Loader.load()

let map = L.map('mapa')
map.fitBounds([
  [50.180416, 14.709320], //phorni
  [49.939731, 14.218369], //lspodni 
])

L.tileLayer('https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">Mapy.cz, a.s.</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const sezLogo = L.control({position: 'bottomleft'});
sezLogo.onAdd = function(map){
    var div = L.DomUtil.create('div', 'sez-logo');
    div.innerHTML= '<a target="_blank" href="https://mapy.cz"><img src="https://api.mapy.cz/img/api/logo.svg"/>';
    return div;
}
sezLogo.addTo(map);
let routeCams = L.featureGroup().addTo(map) // prázná vrstva na vložení trasy a kamer

let startEnd

function flipCoords(coords) {
  return coords.map(v => [v[1], v[0]])
}

function foundRoute(route) {
  let seenCams = []
  let trackCoords = []
  route.getResults().geometry.forEach(coord => {
    trackCoords.push([coord.x, coord.y])
  })
  const track = turf.lineString(trackCoords)
  cams.forEach(cam => {
    const isect = turf.lineIntersect(track, turf.lineString(cam))
    if (isect.features.length > 0) {
      seenCams.push(cam)
    }
  })
  document.getElementById('info').innerHTML = `Po cestě tě uvidí ${seenCams.length} kamer!`
  routeCams.clearLayers() // úklid mapy po předchozím hledání
  // trasu do mapy
  L.polyline(flipCoords(trackCoords), {color: 'red'}).addTo(routeCams)
  // kamery do mapy
  seenCams.forEach(cam => {
    L.polygon(flipCoords(cam), {color: 'blue'}).addTo(routeCams)
  })
  // zoom na vysledek
  map.fitBounds(routeCams.getBounds())
}

function gcode(query) {
  new SMap.Geocoder(query + ', Praha', gcodeResp)
}

function gcodeResp(geocoder) {
  if (!geocoder.getResults()[0].results.length) {
      console.log('Neznama adresa')
      return;
  }
  const res = geocoder.getResults()[0].results[0].coords
  startEnd.push(SMap.Coords.fromWGS84(res.x, res.y))
  if (startEnd.length == 2) {
    new SMap.Route(startEnd, foundRoute, {criterion: 'turist2'})  // krátká pěší trasa
  }
}

const form = document.getElementById("geocoder")
form.onsubmit = function submitForm(event) {
  event.preventDefault()
  startEnd = []
  const fromAddr = document.getElementById('gcode-from').value
  const toAddr = document.getElementById('gcode-to').value
  
  gcode(fromAddr)
  gcode(toAddr)
}