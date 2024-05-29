ng build
git add . 
git commit -m "preparando formulario" 
git push origin main





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

