// Voeg later nieuwe werken toe door een foto in de juiste map te zetten en hieronder één regel toe te voegen.
const paintings = [
 {src:'images/paintings/painting-1.jpeg',title:'Solitude',medium:'Olieverf op doek',size:'40 × 50 cm'},
 {src:'images/paintings/painting-2.jpeg',title:'Regret',medium:'Olieverf op paneel',size:'45 × 45 cm'},
 {src:'images/paintings/painting-3.jpeg',title:'Lost Joy',medium:'Olieverf op doek',size:'60 × 80 cm'},
 {src:'images/paintings/painting-4.jpeg',title:'Blind Stillness',medium:'Olieverf op doek',size:'70 × 100 cm'},
 {src:'images/paintings/painting-5.jpeg',title:'Streetlife',medium:'Olieverf op doek',size:'50 × 60 cm'},
 {src:'images/paintings/painting-6.jpeg',title:'Together',medium:'Olieverf op doek',size:'70 × 100 cm'},
 {src:'images/paintings/painting-7.jpeg',title:'Offspring',medium:'Olieverf op doek',size:'120 × 90 cm'},
 {src:'images/paintings/painting-8.jpeg',title:'Waiting',medium:'Olieverf op doek',size:'50 × 50 cm'},
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
