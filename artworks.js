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
 {src:'images/paintings/painting-9.jpeg',title:'Comfortlight',medium:'Olieverf op doek',size:'40 × 60 cm'},
 {src:'images/paintings/painting-10.jpeg',title:'Seen',medium:'Olieverf op paneel',size:'70 × 100 cm'},
 {src:'images/paintings/painting-11.jpeg',title:'Comfort',medium:'Olieverf op doek',size:'50 × 70 cm'},
 {src:'images/paintings/painting-12.jpeg',title:'One way',medium:'Olieverf op doek',size:'40 × 50 cm'},
 {src:'images/paintings/painting-13.jpeg',title:'Transfer',medium:'Olieverf op paneel',size:'40 × 50 cm'},
 {src:'images/paintings/painting-14.jpeg',title:'Gift',medium:'Olieverf op doek',size:'50 × 50 cm'},
 {src:'images/paintings/painting-15.jpeg',title:'Dreamer',medium:'Olieverf op paneel',size:'40 × 50 cm'},
 {src:'images/paintings/painting-16.jpeg',title:'Toekan',medium:'Olieverf op doek',size:'40 × 40 cm'},
 {src:'images/paintings/painting-17.jpeg',title:'Hide',medium:'Olieverf op doek',size:'70 × 90 cm'},
 {src:'images/paintings/painting-18.jpeg',title:'Stars',medium:'Olieverf op doek',size:'50 × 50 cm'},
 {src:'images/paintings/painting-19.jpeg',title:'Harley',medium:'Olieverf op doek 5 luik',size:'200 × 120 cm'}
];
const sketches = Array.from({length:27},(_,i)=>({src:`images/sketches/sketch-${i+1}.jpeg`,title:`Schets ${i+1}`}));
