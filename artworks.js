// Voeg later nieuwe werken toe door een foto in de juiste map te zetten en hieronder één regel toe te voegen.
const paintings = [
 {src:'images/paintings/painting-1.jpeg',title:'Lege Stoel',medium:'Olieverf op doek',size:'40 × 50 cm',description:`Twee stoelen kijken naar de zee. Slechts één is bezet.
En precies hierdoor krijgt de andere betekenis.
Wie zat daar? Wie wordt verwacht? Of is de lege stoel eenvoudig de ruimte die we soms naast ons nodig hebben?
Een figuur kijkt weg van ons, naar een horizon die voortdurend verandert. Rond haar liggen zand, water en lucht in bijna eindeloze stilte. Alleen de stoelen en hun schaduwen, donkere vormen die verankerd lijken in het zand, en die zeggen willen: wij zijn hier, op dit ogenblik. Met daartegenover de zee, een constante van beweging, het vaste en het voorbijgaande ontmoeten elkaar.
Dit schilderij gaat niet alleen over iemand die naar de zee kijkt. Het gaat over aanwezigheid en afwezigheid, over wachten, herinneren en verlangen.
De lege stoel vertelt hier niets, en daardoor alles..
`},
 {src:'images/paintings/painting-2.jpeg',title:'Tussen binnen en buiten',medium:'Olieverf op paneel',size:'45 × 45 cm',description:`Een hand verbergt een gezicht en maakt zichtbaar wat woorden soms niet kunnen zeggen. De figuur trekt zich terug uit onze blik, terwijl het landschap rondom hem vervaagt tot een bijna innerlijke ruimte.
Is dit verdriet, vermoeidheid, afzondering of eenvoudigweg een moment van stilte?
Het schilderij geeft geen antwoord. Het laat ruimte voor herkenning door de toeschouwer.
Soms vertelt juist wat verborgen blijft het meest.
`},
 {src:'images/paintings/painting-3.jpeg',title:'Toen ik nog kon vliegen',medium:'Olieverf op doek',size:'60 × 80 cm',description:`Een oude vrouw in de schaduw, een kind dat baadt in het licht.
Tussen hen liggen slechts enkele passen,  en misschien een heel mensenleven.
De ene houdt zich vast. De andere spreidt haar armen alsof de wereld nog geen grenzen kent.
Kijkt de vrouw naar het kind? Naar haar verleden? Of naar iets wat ieder van ons onderweg verliest en toch blijft meedragen?
Voor mij gaat het over dat vreemde menselijke vermogen om in een jong lichaam plots de tijd zichtbaar te zien worden.
Met dit schilderij laat ik twee momenten naast elkaar bestaan:  wie we ooit waren en wie we geworden zijn.
Want misschien verdwijnt het kind in ons nooit, maar staat het alleen steeds iets verder van ons vandaan.`},
 {src:'images/paintings/painting-4.jpeg',title:'Zien en zwijgen',medium:'Olieverf op doek',size:'70 × 100 cm',description:`Niet alles wat we zien, hoeft gezegd te worden. En niet alles waarover we zwijgen, blijft ongezien.
Soms sluiten we onze ogen om beter te voelen. Soms bewaren we stilte omdat woorden iets zouden verbreken.
Een kind kent nog de kunst van het ongefilterde spreken. Waarheid komt uit een kindermond, 
misschien omdat het nog niet geleerd heeft haar te verbergen.
Tussen zien en zwijgen ligt een ruimte waarin vertrouwen ontstaat, waarin geheimen veilig kunnen zijn en twee mensen elkaar begrijpen zonder iets te zeggen.
Misschien begint werkelijk begrijpen waar kijken en spreken even ophouden.
`},
 {src:'images/paintings/painting-5.jpeg',title:'Streetlife',medium:'Olieverf op doek',size:'50 × 60 cm'},
 {src:'images/paintings/painting-6.jpeg',title:'Verbonden',medium:'Olieverf op doek',size:'70 × 100 cm',description:`Twee mensen zitten tegenover elkaar. Naakt, zonder kleding om zich achter te verschuilen. Toch zijn ze niet volledig zichtbaar want ze dragen beide een masker. Juist daarin zit een tegenstelling: we kunnen ons letterlijk blootgeven en toch iets van onszelf verborgen houden.
Die naaktheid staat voor mij voor de waarheid, voor kwetsbaarheid en voor wie we werkelijk zijn wanneer alle uiterlijke lagen wegvallen. Het masker vertelt het tegenovergestelde verhaal. Het is het gezicht dat we aan de buitenwereld tonen. Soms uit bescherming, soms uit onzekerheid, soms omdat de maatschappij of onze omgeving van ons verwacht dat we een bepaalde rol aannemen. 
Tussen de twee figuren bevindt zich het touw. Het verbindt hen, maar tegelijkertijd bindt het hen vast. Dat maakt die verbondenheid dubbelzinnig. Mensen zijn nu eenmaal met elkaar verweven: door liefde, familie, vriendschap, verwachtingen, verantwoordelijkheid of herinneringen. Sommige banden kiezen we zelf, andere ontstaan zonder dat we daarom gevraagd hebben. Willens nillens dragen we elkaar mee.
Opvallend is dat de figuren elkaar aankijken, maar door hun maskers blijft de vraag bestaan of ze elkaar werkelijk zien. Misschien herkennen ze zichzelf in de ander. Misschien proberen ze juist te ontdekken wie er achter het masker zit.
En toch raken hun handen elkaar bijna bij datgene wat hen bindt. Daar zit voor mij ook iets zachts in. Het touw hoeft niet alleen gevangenschap te betekenen. Een band kan ons beperken, maar kan ons tegelijkertijd houvast geven. Verbonden zijn betekent soms vrijheid opgeven, rekening houden met de ander en zelfs verstrikt raken, maar het betekent ook dat we niet alleen zijn.
De warme, bijna vurige achtergrond versterkt die spanning. Er is weinig afleiding; alles draait om de twee lichamen, de maskers en hun onderlinge band. Alsof alle maatschappelijke versiering is verdwenen en alleen een fundamentele menselijke vraag overblijft:
Hoe dicht kunnen we werkelijk bij een ander komen, zolang we allebei nog een masker dragen?
Misschien is dat uiteindelijk de naakte waarheid van het schilderij: we verlangen ernaar werkelijk gezien te worden, maar zijn tegelijkertijd bang om ons volledig te laten zien.`},
 {src:'images/paintings/painting-7.jpeg',title:'Wat voor ons ligt',medium:'Olieverf op doek',size:'120 × 90 cm',description:`Een vrouw draagt twee kinderen. Ze houdt hen dicht tegen zich aan, terwijl ze samen naar de horizon kijken. Hun gezichten blijven verborgen. Daardoor gaat dit schilderij minder over wie deze mensen precies zijn en meer over wat hen met elkaar verbindt.
De omhelzing van het kind rond haar hals en de armen waarmee zij de kinderen draagt, vormen bijna één geheel. Er is vertrouwen, geborgenheid en liefde. Op dit moment draagt zij hen, letterlijk én figuurlijk. Zoals we kinderen een tijdlang door het leven dragen, hen beschermen tegen wat ze nog niet zelf kunnen dragen en proberen hun een veilige plek te geven vanwaaruit ze de wereld kunnen ontdekken.
Maar voor hen ligt een enorme open ruimte. De zee, de horizon en vooral die weidse lucht lijken symbool te staan voor de toekomst. Een toekomst die nog niet ingevuld is. Mooi en licht, maar ook onbekend. De wolken maken die toekomst niet helemaal zorgeloos. Zoals in ieder leven zullen er heldere momenten zijn, maar ook stormen die we niet kunnen voorspellen.
Misschien zit daar een beetje kwetsbaarheid in: als ouder wil je je kinderen het liefst blijven vasthouden en beschermen, maar je weet dat dat niet voor altijd kan. Op een dag zullen de armen die hen nu dragen hen moeten loslaten.
En toch kijken ze allemaal dezelfde kant op. Dat vind ik misschien wel het hoopvolste element. De volwassene staat niet vóór de kinderen om hun uitzicht te bepalen. Ze kijkt samen met hen. Alsof ze niet zegt: dit is de weg die je moet nemen, maar eerder: kijk, daar ligt de wereld, en voorlopig kijk ik met je mee.
De horizon krijgt daardoor iets symbolisch. Achter hen ligt wat al geweest is; vóór hen ligt alles wat nog mogelijk is. En ergens tussen die twee bevindt zich dit ene moment van nabijheid, waarin vasthouden en loslaten nog naast elkaar mogen bestaan.
Uiteindelijk gaat dit over een van de moeilijkste vormen van liefde: iemand zo stevig vasthouden dat die zich veilig voelt, maar nooit zo stevig dat die niet meer kan vertrekken, want ooit zullen de kinderen zelf naar die horizon stappen. `},
 {src:'images/paintings/painting-8.jpeg',title:'Tussen aankomst en vertrek…',medium:'Olieverf op doek',size:'50 × 50 cm',description:`Een man, een bank, een koffer en een bijna verlaten perron. Hiermee probeer ik om een wereld van stilte en verwachting op te roepen.

Terwijl de lijnen van het station naar de verte en het onbekende leiden, blijft de figuur onbeweeglijk zitten. De donkere koffer wordt een tweede aanwezigheid: drager van wat geweest is en van wat misschien nog moet komen. Het groenige licht en de vervagende achtergrond maken van het station meer dan een concrete plek. Het wordt een mentale tussenruimte.

Dit schilderij gaat uiteindelijk niet over reizen, maar over <strong>wachten</strong>. Over dat kwetsbare ogenblik tussen blijven en vertrekken, wanneer het verleden nog tastbaar is en de toekomst slechts uit lichtvlekken bestaat.

<strong>De trein die we niet zien, is minder belangrijk dan het vertrek dat zich in deze man nog niet heeft voltrokken.</strong>`},
 {src:'images/paintings/painting-9.jpeg',title:'Licht uit een andere wereld',medium:'Olieverf op doek',size:'40 × 60 cm',description:`Dit schilderij gaat over aandacht, afzondering en de grens tussen aanwezig en afwezig zijn. De figuur zit alleen tegenover een televisie, omgeven door een grote, donkere ruimte. Hierdoor  ontstaat een gevoel van stilte en eenzaamheid.
Het licht van de televisie verbindt de figuur met het scherm en verspreidt zich over het lichaam, de vloer en de muur. Het is niet wat er op televisie te zien is, wat centraal staat, maar wat het kijken met de persoon doet.
Ik laat hier bewust open of dit moment rust en geborgenheid uitstraalt, of juist vervreemding en isolement.
En uiteindelijk stel ik de vraag, als we volledig opgaan in wat we bekijken, waar zijn we dan zelf nog?`},
 {src:'images/paintings/painting-10.jpeg',title:'Gezien',medium:'Olieverf op paneel',size:'70 × 100 cm',description:`Kwetsbaarheid, afzondering en geborgenheid staan hier centraal. De ineengedoken houding van de figuur suggereert een behoefte aan bescherming en terugtrekking, terwijl de gedeeltelijk zichtbare blik toch contact zoekt met de toeschouwer.
De grote lege wand versterkt de stilte en laat het menselijke lichaam klein en kwetsbaar aanvoelen. Het warme licht speelt daarbij een belangrijke rol: het brengt de figuur voorzichtig tevoorschijn, maar laat haar tegelijk deels verborgen.
Het werk legt geen vast verhaal of emotie op. Eenzaamheid, rust, verdriet en geborgenheid kunnen naast elkaar bestaan. Centraal staat de menselijke tegenstelling tussen zich willen terugtrekken en toch gezien willen worden.`},
 {src:'images/paintings/painting-11.jpeg',title:'Zolang ik je vasthoud',medium:'Olieverf op doek',size:'50 × 70 cm',description:`De twee lichamen, getekend door de tijd, worden in dit schilderij bijna één. Het blauw verbindt hen; de armen en handen vertellen wat woorden niet meer hoeven te zeggen.
De rolstoel spreekt over kwetsbaarheid en afhankelijkheid, maar het schilderij gaat niet over hulpeloosheid. Het gaat over zorg als lichamelijk gebaar: dragen, ondersteunen, nabij blijven. Ook degene die helpt, buigt en zoekt houvast. Beiden behoren tot dezelfde kwetsbare menselijke wereld.
De omgeving verdwijnt naar de achtergrond. Wat overblijft, is een eenvoudig en universeel moment:
zolang ik je nog kan vasthouden, laat ik je niet vallen.`},
 {src:'images/paintings/painting-12.jpeg',title:'One way',medium:'Olieverf op doek',size:'40 × 50 cm',description:`Een man loopt voorbij. Meer lijkt er niet te gebeuren, en toch ontstaat precies daar het schilderij.
Boven hem wijst ONE WAY naar rechts, terwijl hij naar links beweegt. Achter hem groeit zijn schaduw uit tot een tweede aanwezigheid, alsof de muur iets bewaart van wat voorbijgaat.
De zachte, bijna verstilde kleuren maken van een alledaags moment iets tijdloos. De man nadert de donkere rand van het beeld, met onder zijn arm een helder vlak dat bijna licht lijkt te dragen.
Dit werk gaat niet zozeer over waar iemand naartoe gaat, maar over voorbijgaan zelf: over tijd, richting en de mens die zijn eigen weg volgt.
Eén richting. Geen terugkeer. Ik probeer met dit beeld dat moment even vast te houden.`},
 {src:'images/paintings/painting-13.jpeg',title:'Ergens tussenin',medium:'Olieverf op paneel',size:'40 × 50 cm',description:`In dit beeld vertel ik een verhaal over verlangen, afzondering en het onderweg zijn. Een jong meisje in een bus die naar buiten kijkt. Haar houding straalt rust uit, maar tegelijk is ze verzonken in haar eigen gedachten. 
De scherpere figuur tegenover de vervagende buitenwereld versterkt het gevoel dat we even deelgenoot worden van haar innerlijke wereld.
Voor mij ging het vooral over die herkenbare momenten waarop je onderweg bent en je gedachten beginnen af te dwalen: je lichaam reist vooruit, terwijl je gedachten misschien ergens anders zijn, over de stilte die kan ontstaan midden in beweging. Openbaar vervoer is normaal een plaats van overgang: mensen komen ergens vandaan en zijn onderweg naar iets anders. Juist daar ontstaat een tijdelijk niemandsland waarin iemand kan observeren, dromen, wachten of in gedachten verdwijnen.`},
 {src:'images/paintings/painting-14.jpeg',title:'Gift',medium:'Olieverf op doek',size:'50 × 50 cm'},
 {src:'images/paintings/painting-15.jpeg',title:'Dreamer',medium:'Olieverf op paneel',size:'40 × 50 cm'},
 {src:'images/paintings/painting-16.jpeg',title:'Toekan',medium:'Olieverf op doek',size:'40 × 40 cm'},
 {src:'images/paintings/painting-17.jpeg',title:'Verstoppertje',medium:'Olieverf op doek',size:'70 × 90 cm',description:`Dit schilderij vindt zijn oorsprong in een eenvoudig kinderspel: verstoppertje. Een kind bedekt de ogen en even lijkt de wereld te verdwijnen. Wat je niet ziet, bestaat voor een ogenblik niet.
Maar datzelfde gebaar kan ook iets anders betekenen. Het wordt een poging om zich af te sluiten voor een werkelijkheid die soms te hard, te gewelddadig of te ingewikkeld is. Oorlog, verdriet, onrecht, angst en alle andere donkere kanten van de wereld dringen ook het leven van kinderen binnen, terwijl een kind daar eigenlijk nog voor beschermd zou moeten worden.
De handen voor de ogen vormen daardoor bijna een schild tussen de onschuld van het kind en de werkelijkheid daarbuiten. Tegelijkertijd is dat schild kwetsbaar. De handen kunnen de ogen bedekken, maar de wereld blijft bestaan. Je kunt haar niet werkelijk laten verdwijnen door niet te kijken.
De zachte, bijna dromerige kleuren versterken voor mij dat gevoel. Het kind lijkt zich in een eigen, veilige wereld terug te trekken. 
Zo ontstaat er een tegenstelling tussen kinderlijke onschuld en een harde werkelijkheid. Wat begint als een spelletje krijgt daardoor iets aangrijpends: soms sluiten we onze ogen niet omdat we niet nieuwsgierig zijn, maar omdat wat er te zien is te veel is.
En misschien gaat het schilderij daardoor niet alleen over een kind. Ook als volwassenen hebben we soms de neiging onze ogen te sluiten voor wat pijnlijk, bedreigend of onrechtvaardig is. Verstoppertje spelen wordt dan een metafoor voor onze menselijke behoefte om ons af en toe voor de werkelijkheid te verbergen.`},
 {src:'images/paintings/painting-18.jpeg',title:'Stars',medium:'Olieverf op doek',size:'50 × 50 cm'},
 {src:'images/paintings/painting-19.jpeg',title:'Harley',medium:'Olieverf op doek 5 luik',size:'200 × 120 cm'}
];
const sketches = Array.from({length:27},(_,i)=>({src:`images/sketches/sketch-${i+1}.jpeg`,title:`Schets ${i+1}`}));
