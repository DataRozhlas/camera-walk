title: "Tisícovce pražských kamer se nevyhnete. Zkuste si, kolik vás uvidí cestou po městě"
perex: "Na pořádek v pražských ulicích dohlíží celkem 1100 kamer ve správně města, další patří soukromníkům. Interaktivní mapa vám ukáže, které z nich si vás prohlédnou při běžných cestách metropolí."
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/images/03676350.jpeg?itok=9h75HnN1
coverimg_note: "Foto: Fotobanka Pixabay"
styles: ['https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.css']
libraries: ['https://api.mapy.cz/loader.js', 'https://cdnjs.cloudflare.com/ajax/libs/Turf.js/5.1.5/turf.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.js'] #jquery, d3, highcharts, datatables
options: [] #wide, noheader (, nopic)
---
<script type="text/javascript">Loader.load();</script>

Pokud se od Českého rozhlasu na pražských Vinohradech vydáte na Staroměstské náměstí, po cestě minete asi šedesát bezpečnostních kamer, za krátkou cestu na Hlavní nádraží jich potkáte na tři desítky.

_Server iROZHLAS připravil mapu, která vám naplánuje nejkratší pěší trasu mezi dvěma pražskými adresami a spočítá vám, kolik po cestě minete bezpečnostních kamer._

<wide>
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
</wide>

Mapa naznačuje, kolika průmyslovým kamerám se ocitnete na dohled. Můžete si tak lépe udělat představu, co by znamenalo automatické rozpoznávání obličejů, které by na [městských kamerách chtělo zprovoznit krajské ředitelství policie](https://www.irozhlas.cz/zpravy-domov/kamery-sledovani-praha-policie-zlocin-soukromi_1911200600_cib).

Proti plánu se už [postavili](https://www.irozhlas.cz/zpravy-domov/praha-kamery-na-rozpoznavani-obliceju-primator-zdenek-hrib-hamacek_1911211706_jak) jak pirátský primátor Zdeněk Hřib, tak i šéf bezpečnostní komise magistrátu Petr Hlubuček (STAN), předseda TOP 09 Jiří Pospíšil a šéf opozičního ANO Patrik Nacher. "Nechci podporovat Velkého bratra v čínském stylu," napsal na twitter Hřib, Nacher zase označil automatický dohled za "děsivě orwellovský".

<embed>
<blockquote class="twitter-tweet" data-dnt="true"><p lang="cs" dir="ltr">Kamerový systém se softwarem na rozpoznávání obličejů v ulicích Prahy? Já osobně jsem proti použití této technologie v rámci městského kamerového systému. Nechci podporovat Velkého bratra v čínském stylu.</p>&mdash; Zdeněk Hřib (@ZdenekHrib) <a href="https://twitter.com/ZdenekHrib/status/1197496053907496961?ref_src=twsrc%5Etfw">November 21, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</embed>

Město se obrátilo na [Úřad pro ochranu osobních údajů (ÚOOÚ)](https://www.uoou.cz/), aby požadavek policie zhodnotil. "Budeme žádat magistrát hlavního města o doplnění," řekl serveru iROZHLAS.cz mluvčí úřadu Tomáš Paták s tím, že nyní magistrátní dotaz neobsahuje všechny potřebné informace.

## Evidence chybí

Po nástupu [nařízení o ochraně osobních údajů GDPR](https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32016R0679&from=EN) úřad již nově neeviduje jednotlivé kamerové systémy. 

"Správci nám již podle obecného nařízení nemají povinnost své kamery a kamerové systémy s využitím technologie face recognition _(automatické rozpoznávání obličejů, pozn. red.)_ hlásit. Musí však dodržovat pravidla pro takovéto provozování," napsal Patákův kolega Vojtěch Marcín s tím, že je rozdíl mezi státní a městskou policií. Zatímco systémy provozované policií České republiky se řídí článkem 10 [trestněprávní směrnice](https://mpo.cz/cz/podnikani/ochrana-osobnich-udaju-gdpr/gdpr-dokumenty/trestnepravni-smernice--234039/), ty v rukách městské policie (což je i případ kamerového systému hlavního města) spadají pod GDPR.

Podle věstníku veřejných zakázek systém rozpoznávající jednotlivé chodce [provozuje například město Karviná](https://www.vestnikverejnychzakazek.cz/SearchForm/SearchContract?contractNumber=Z2018-022623).

## Přesná mapa kamer není veřejná

Praha na webových stránkách zveřejňuje [seznam jednotlivých kamer](http://www.praha.eu/jnp/cz/o_meste/magistrat/odbory/oddeleni_krizoveho_managementu/mestsky_kamerovy_system.html), které má ve správě, celkem jich je 1100. Jde ale často jen o přibližný popis umístění, navíc chybí informace o úhlech záběru. 

Mapa tak počítá s výčtem průmyslových kamer, které [zaznamenali](https://wiki.openstreetmap.org/wiki/Tag:man_made%3Dsurveillance) přispěvatelé [komunitní mapy OpenStreetMap](https://openstreetmap.cz/), těch je 948. Výpočet je přibližný, rozhled jednotlivých kamer se značně liší, některé jsou umístěné na střechách panelových domů, jiné zase nízko v ulicích. 

Mapa proto pracuje se dvě stě metrovým okruhem okolo každé kamery, což je vzdálenost, kterou výrobci výkonných průmyslových kamer [inzerují](https://www.getscw.com/the-lookout-26zv-2mp-1080p-ip-ptz-camera-with-30x-optical-zoom.php) jako efektivní pro rozpoznání konkrétní osoby, např. podle barevné kombinace oblečení nebo stylu chůze. Vzdálenost nutná pro automatickou identifikace dle obličeje je o poznání menší.