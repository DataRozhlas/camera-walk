title: "Kamery koukají"
perex: "Pokud počítám vcelku nerealistických 200 metrů jako dosah kamery, je centrum města solidně pokryté."
coverimg: https://interaktivni.rozhlas.cz/brexit/media/cover.jpg
coverimg_note: "Foto <a href='https://ctk.cz'>ČTK</a>"
styles: ['https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.css']
libraries: ['https://api.mapy.cz/loader.js', 'https://cdnjs.cloudflare.com/ajax/libs/Turf.js/5.1.5/turf.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.js'] #jquery, d3, highcharts, datatables
options: [noheader, nopic] #wide, noheader (, nopic)
---
<script type="text/javascript">Loader.load();</script>

<div id="appka">
	<form action="?" id='geocoder'>
		<div class="inputs">
			<input type="text" id="gcode-from" placeholder="Odkud jdete">
			<input type="text" id="gcode-to" placeholder="Kam jdete">
			<input type="submit" id="inp-btn" value="Ukázat kamery">
		</div>
    </form>
	<div id="info">Zadejte, odkud a kam v Praze jdete. Aplikace odhadne, kolik kamer vás uvidí.</div>
	<div id="mapa"></div>
</div>