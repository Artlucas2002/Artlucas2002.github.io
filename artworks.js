// Voeg later nieuwe werken toe door een foto in de juiste map te zetten en hieronder één regel toe te voegen.
const paintings = [
 {src:'images/paintings/painting-1.jpeg',title:'Solitude',medium:'Olieverf op doek',size:'40 × 50 cm'},
 {src:'images/paintings/painting-2.jpeg',title:'Regret',medium:'Olieverf op paneel',size:'45 × 45 cm'},
 {src:'images/paintings/painting-3.jpeg',title:'Lost Joy',medium:'Olieverf op doek',size:'60 × 80 cm'},
 {src:'images/paintings/painting-4.jpeg',title:'Blind Stillness',medium:'Olieverf op doek',size:'70 × 100 cm'},
 {src:'images/paintings/painting-5.jpeg',title:'Streetlife',medium:'Olieverf op doek',size:'50 × 60 cm'},
 {src:'images/paintings/painting-6.jpeg',title:'Together',medium:'Olieverf op doek',size:'70 × 100 cm'},
 {src:'images/paintings/painting-7.jpeg',title:'Offspring',medium:'Olieverf op doek',size:'120 × 90 cm'},
 {src:'images/paintings/painting-8.jpeg',title:'Tussen aankomst en vertrek…',medium:'Olieverf op doek',size:'50 × 50 cm',description:`Een man, een bank, een koffer en een bijna verlaten perron. Hiermee probeer ik om een wereld van stilte en verwachting op te roepen.

Terwijl de lijnen van het station naar de verte en het onbekende leiden, blijft de figuur onbeweeglijk zitten. De donkere koffer wordt een tweede aanwezigheid: drager van wat geweest is en van wat misschien nog moet komen. Het groenige licht en de vervagende achtergrond maken van het station meer dan een concrete plek. Het wordt een mentale tussenruimte.

Dit schilderij gaat uiteindelijk niet over reizen, maar over <strong>wachten</strong>. Over dat kwetsbare ogenblik tussen blijven en vertrekken, wanneer het verleden nog tastbaar is en de toekomst slechts uit lichtvlekken bestaat.

<strong>De trein die we niet zien, is minder belangrijk dan het vertrek dat zich in deze man nog niet heeft voltrokken.</strong>`},
 {src:'images/paintings/painting-9.jpeg',title:'Licht uit een andere wereld',medium:'Olieverf op doek',size:'40 × 60 cm',description:`Dit schilderij gaat over aandacht, afzondering en de grens tussen aanwezig en afwezig zijn. De figuur zit alleen tegenover een televisie, omgeven door een grote, donkere ruimte. Hierdoor  ontstaat een gevoel van stilte en eenzaamheid.
Het licht van de televisie verbindt de figuur met het scherm en verspreidt zich over het lichaam, de vloer en de muur. het is niet wat er op televisie te zien is, wat centraal staat, maar wat het kijken met de persoon doet.
Ik laat hier bewust open of dit moment rust en geborgenheid uitstraalt, of juist vervreemding en isolement.
En uiteindelijk stel ik de vraag, als we volledig opgaan in wat we bekijken, waar zijn we dan zelf nog?`},
 {src:'images/paintings/painting-10.jpeg',title:'Gezien',medium:'Olieverf op paneel',size:'70 × 100 cm',description:`Kwetsbaarheid, afzondering en geborgenheid staan hier centraal. De ineengedoken houding van de figuur suggereert een behoefte aan bescherming en terugtrekking, terwijl de gedeeltelijk zichtbare blik toch contact zoekt met de toeschouwer.
De grote lege wand versterkt de stilte en laat het menselijke lichaam klein en kwetsbaar aanvoelen. Het warme licht speelt daarbij een belangrijke rol: het brengt de figuur voorzichtig tevoorschijn, maar laat haar tegelijk deels verborgen.
Het werk legt geen vast verhaal of emotie op. Eenzaamheid, rust, verdriet en geborgenheid kunnen naast elkaar bestaan. Centraal staat de menselijke tegenstelling tussen zich willen terugtrekken en toch gezien willen worden.`},
 {src:'images/paintings/painting-11.jpeg',title:'Zolang ik je vasthoud',medium:'Olieverf op doek',size:'50 × 70 cm',description:`De twee lichamen, getekend door de tijd, worden in dit schilderij bijna één. Het blauw verbindt hen; de armen en handen vertellen wat woorden niet meer hoeven te zeggen.
De rolstoel spreekt over kwetsbaarheid en afhankelijkheid, maar het schilderij gaat niet over hulpeloosheid. Het gaat over zorg als lichamelijk gebaar: dragen, ondersteunen, nabij blijven. Ook degene die helpt, buigt en zoekt houvast. Beiden behoren tot dezelfde kwetsbare menselijke wereld.
De omgeving verdwijnt naar de achtergrond. Wat overblijft, is een eenvoudig en universeel moment:
zolang ik je nog kan vasthouden, laat ik je niet vallen.`},
 {src:'images/paintings/painting-12.jpeg',title:'One way',medium:'Olieverf op doek',size:'40 × 50 cm',description:`Een man loopt voorbij. Meer lijkt er niet te gebeuren — en toch ontstaat precies daar het schilderij.
Boven hem wijst ONE WAY naar rechts, terwijl hij naar links beweegt. Achter hem groeit zijn schaduw uit tot een tweede aanwezigheid, alsof de muur iets bewaart van wat voorbijgaat.
De zachte, bijna verstilde kleuren maken van een alledaags moment iets tijdloos. De man nadert de donkere rand van het beeld, met onder zijn arm een helder vlak dat bijna licht lijkt te dragen.
Dit werk gaat niet zozeer over waar iemand naartoe gaat, maar over voorbijgaan zelf: over tijd, richting en de mens die zijn eigen weg volgt.
Eén richting. Geen terugkeer. We houden met dit beeld dat moment even vast.`},
 {src:'images/paintings/painting-13.jpeg',title:'Ergens tussenin',medium:'Olieverf op paneel',size:'40 × 50 cm',description:`In dit beeld vertelt ik een verhaal over verlangen, afzondering en het onderweg zijn. Een jong meisje in een bus die naar buiten kijkt. Haar houding straalt rust uit, maar tegelijk is ze verzonken in haar eigen gedachten. 
De scherpere figuur tegenover de vervagende buitenwereld versterkt het gevoel dat we even deelgenoot worden van haar innerlijke wereld.
Voor mij ging het vooral over die herkenbare momenten waarop je onderweg bent en je gedachten beginnen af te dwalen: je lichaam reist vooruit, terwijl je gedachten misschien ergens anders zijn, over de stilte die kan ontstaan midden in beweging. Openbaar vervoer is normaal een plaats van overgang: mensen komen ergens vandaan en zijn onderweg naar iets anders. Juist daar ontstaat een tijdelijk niemandsland waarin iemand kan observeren, dromen, wachten of in gedachten verdwijnen.`},
 {src:'images/paintings/painting-14.jpeg',title:'Gift',medium:'Olieverf op doek',size:'50 × 50 cm'},
 {src:'images/paintings/painting-15.jpeg',title:'Dreamer',medium:'Olieverf op paneel',size:'40 × 50 cm'},
 {src:'images/paintings/painting-16.jpeg',title:'Toekan',medium:'Olieverf op doek',size:'40 × 40 cm'},
 {src:'images/paintings/painting-17.jpeg',title:'Hide',medium:'Olieverf op doek',size:'70 × 90 cm'},
 {src:'images/paintings/painting-18.jpeg',title:'Stars',medium:'Olieverf op doek',size:'50 × 50 cm'},
 {src:'images/paintings/painting-19.jpeg',title:'Harley',medium:'Olieverf op doek 5 luik',size:'200 × 120 cm'}
];
const sketches = Array.from({length:27},(_,i)=>({src:`images/sketches/sketch-${i+1}.jpeg`,title:`Schets ${i+1}`}));
