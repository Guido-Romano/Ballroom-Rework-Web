ng build
git add . 
git commit -m "traduciendo dinamic" 
git push origin main




const pregunta: Pregunta[] = [
  { id: 1, 
    titulo: '¿Qué es el ballroom?',
    info: '"Ballroom" es la denominación que se usa para designar un conjunto de 10 ritmos. Pertenecen a los llamados ritmos "Standard". Estos son: Vals Inglés, Vals Vienés, Tango, Foxtrot, Quickstep. Corresponden a los ritmos "Latin" Samba, Cha Cha Cha, Rumba, Paso Doble, Jive.'
   },

  { id: 2, 
    titulo: '¿Ofrecen clases gratis?' ,
    info: 'La primer clase es gratuita.'},

  { id: 3, 
    titulo: '¿Qué días son las clases de Ballroom?' ,
    info: clase[0].dia + ', ' + clase[1].dia + ', ' + clase[2].dia},

  { id: 4,
    titulo: '¿Cuáles son los horarios de las clases?' ,
    info: clase[0].dia + ', ' + clase[0].horario + ' / ' + clase[1].dia + ', ' + clase[1].horario + ' / ' + clase[2].dia + ', ' + clase[2].horario},

  { id: 5, 
    titulo: '¿Dónde se realizan las clases?' ,
    info:  clase[0].dire + ' / ' + clase[1].dire + ' / ' + clase[2].dire },

  { id: 6,
    titulo: '¿Cuál es el precio de las clases?' ,
    info: clase[0].precio + ' / ' + clase[1].precio + ' / ' + clase[2].precio + ' al Mes.'},

  { id: 7,
    titulo: '¿Hay clases para principiantes?' ,
    info: 'Para principantes, intermedios y avanzados'},

  { id: 8, 
    titulo: '¿Cómo debo ir vestido para las clases?' ,
    info: 'Se recomienda usar pantalón o jogging, remera y camisa cómodos, y zapatos o zapatillas flexibles.'},

  { id: 9, 
    titulo: '¿Debo ir acompañado a las clases?' ,
    info: 'No es necesario, pero para una mejor experiencia te recomendamos hacerlo.'},
];
