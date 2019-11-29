title: "Tisícovce pražských kamer se nevyhnete. Zkuste si, kolik vás uvidí cestou po městě"
perex: "Pokud se od budovy Českého rozhlasu na Vinohradech vydáte pěšky na Staroměstské náměstí, minete zhruba šedesát bezpečnostních kamer, za krátkou cestu na hlavní nádraží pak na tři desítky. Celkem na pořádek v Praze dohlíží 1100 městských kamer, další patří soukromníkům. V interaktivní mapě, kterou připravil datový tým serveru iROZHLAS.cz, zjistíte, kde všude na ně narazíte."
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/profimedia-043342082_191127-173040_miz.jpg?itok=RG1lecHS
coverimg_note: "Foto: Petr Topič/MAFRA"
styles: ['https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.css']
libraries: ['https://api.mapy.cz/loader.js', 'https://cdnjs.cloudflare.com/ajax/libs/Turf.js/5.1.5/turf.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.js'] #jquery, d3, highcharts, datatables
options: [] #wide, noheader (, nopic)
---
<script type="text/javascript">Loader.load();</script>

Aplikace nastiňuje, kolika průmyslovým kamerám se každý ocitne na dohled. Lze si tak lépe udělat představu, co by znamenalo automatické rozpoznávání obličejů, které by na [městských kamerách chtělo zprovoznit krajské ředitelství policie](https://www.irozhlas.cz/zpravy-domov/kamery-sledovani-praha-policie-zlocin-soukromi_1911200600_cib).

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

Proti plánu se už [postavili](https://www.irozhlas.cz/zpravy-domov/praha-kamery-na-rozpoznavani-obliceju-primator-zdenek-hrib-hamacek_1911211706_jak) jak pirátský primátor Zdeněk Hřib, tak i šéf bezpečnostní komise magistrátu Petr Hlubuček (STAN), předseda pražské TOP 09 Jiří Pospíšil a šéf pražské buňky opozičního ANO Patrik Nacher. 

"Nechci podporovat Velkého bratra v čínském stylu," napsal na twitter Hřib, Nacher zase označil automatický dohled za "děsivě orwellovský".

<blockquote class="twitter-tweet tw-align-center" data-dnt="true"><p lang="cs" dir="ltr">Kamerový systém se softwarem na rozpoznávání obličejů v ulicích Prahy? Já osobně jsem proti použití této technologie v rámci městského kamerového systému. Nechci podporovat Velkého bratra v čínském stylu.</p>&mdash; Zdeněk Hřib (@ZdenekHrib) <a href="https://twitter.com/ZdenekHrib/status/1197496053907496961?ref_src=twsrc%5Etfw">November 21, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Město se obrátilo na [Úřad pro ochranu osobních údajů (ÚOOÚ)](https://www.uoou.cz/), aby požadavek policie zhodnotil. "Budeme žádat magistrát hlavního města o doplnění," řekl serveru iROZHLAS.cz mluvčí úřadu Tomáš Paták s tím, že nyní magistrátní dotaz neobsahuje všechny potřebné informace.

## Evidence chybí

Od dubna 2018, kdy začalo platit unijní [nařízení o ochraně osobních údajů GDPR](https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32016R0679&from=EN) (známé pod zkratkou GDPR), ochránci osobních údajů jednotlivé kamerové systémy neevidují.

"Správci nám již podle obecného nařízení nemají povinnost své kamery a kamerové systémy s využitím technologie face recognition _(automatické rozpoznávání obličejů – pozn. red.)_ hlásit. Musí však dodržovat pravidla pro takovéto provozování," přiblížil pro iROZHLAS.cz Patákův kolega Vojtěch Marcín. A dodal, že je rozdíl v pravidlech pro státní a městskou policii.

Zatímco systémy provozované policií České republiky se řídí článkem 10 [trestněprávní směrnice](https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32016L0680&from=CS), ty v rukách městské policie (což je i případ kamerového systému hlavního města) spadají pod GDPR.

Podle věstníku veřejných zakázek systém rozpoznávající jednotlivé chodce [provozuje například město Karviná](https://www.vestnikverejnychzakazek.cz/SearchForm/SearchContract?contractNumber=Z2018-022623).

## Přesná mapa kamer není veřejná

Praha [seznam kamer](http://www.praha.eu/jnp/cz/o_meste/magistrat/odbory/oddeleni_krizoveho_managementu/mestsky_kamerovy_system.html), které má ve správě, zveřejňuje na webových stránkách – celkem jich je 1100. Jde ale často jen o přibližný popis umístění, navíc chybí informace o úhlech záběru.

Interaktivní mapa tak počítá s výčtem průmyslových kamer, které [zaznamenali](https://wiki.openstreetmap.org/wiki/Tag:man_made%3Dsurveillance) přispěvatelé [komunitní mapy OpenStreetMap](https://openstreetmap.cz/), těch je 948. Výpočet je přibližný, rozhled jednotlivých kamer se navíc značně liší – některé jsou umístěné na střechách panelových domů, jiné zase nízko v ulicích.

Mapa proto pracuje se 200metrovým okruhem okolo každé kamery. "Moderní běžně užívané kamerové systémy mohou spolehlivě rozeznávat obličeje za standardních podmínek na vzdálenost v řádu několika desítek metrů. Teoreticky, za použití špičkové bezpečnostní kamery a optimálních podmínek je to až na vzdálenost 200 metrů," napsal serveru iROZHLAS.cz Vladimír Mařík jr. ze společnosti CertiCon, která se kamerovými systémy zabývá. 

Obdobnou vzdálenost [inzerují](https://www.getscw.com/the-lookout-26zv-2mp-1080p-ip-ptz-camera-with-30x-optical-zoom.php) i další výrobci výkonných průmyslových kamer jako efektivní pro rozpoznání konkrétní osoby, např. podle barevné kombinace oblečení.