interface ElementoComun {
  id: number;
  titulo: string;
  info: string;
}

interface Clase extends ElementoComun {
  info2: string;
  dia: string;
  precio: string;
  horario: string;
  nivel: string;
  dire: string;
  imagen: string;
}

interface Pregunta extends ElementoComun {}

interface Personal extends ElementoComun {
  rol: string;
}

interface Promocion extends ElementoComun {
  info2: string;
  dia: string;
  precio: string;
  horario: string;
  nivel: string;
  dire: string;
  imagen: string;
}


interface Producto extends ElementoComun {
  info2: string;
  imagen: string;
  link: string;
}

interface Texto extends ElementoComun {
  info2: string;
}

const clase: Clase[] = [
  {
    id: 1,
    titulo: 'titulo 1',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    info2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. ',
    dia: 'Sábados',
    precio: '$20.000',
    horario: '09:00 - 10:00 am',
    nivel: 'avanzado',
    dire: 'Av. Corriente 4534 (El Juvenil)',
    imagen: '../../assets/img09.jpeg',
  },
  {
    id: 2,
    titulo: 'titulo 2',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    info2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
    dia: 'Sábados',
    precio: '$20.000',
    horario: '19:00 - 20:00 hs',
    nivel: 'intermedio / avanzado',
    dire: 'Av. Corriente 4534 (El Juvenil)',
    imagen: '../../assets/img10.jpeg',
  },
  {
    id: 3,
    titulo: 'titulo 3',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    info2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.',
    dia: 'Domingos',
    precio: '$20.000',
    horario: '19:00 - 20:00 hs',
    nivel: 'principante',
    dire: 'Lambaré 990 (Sendas del Sol)',
    imagen: '../../assets/img11.jpeg',
  },
];

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

const personal: Personal[] = [
  {
    id: 1,
    titulo: 'Cecilia Bulgarelli,',
    rol:' Community Manager',
    info: 'Trabajo en la Administración de nuestras redes e ideas creativas tanto en diseño como para el modelo de nuestro negocio.',
  },

  {
    id: 2,
    titulo: 'Juan Manuel Almirón',
    rol:'CEO',
    info: 'Creador de BASC Argentina. Comparto mi gran pasión por el baile con aquellas personas que tengan ganas de aprender.',
  },

  {
    id: 3,
    titulo: 'Guido Romano',
    rol:' Desarrollador',
    info: 'Trabajo en Marketing digital y en aplicaciones para lograr un contacto más eficiente con nuestra comunidad.',
  },

  {
    id: 4,
    titulo: 'Cami',
    rol:'Profesora y Pareja de Baile.',
    info: ' Experta en enseñanza de bailes de salón; guía con destreza y pasión en el arte del Ballroom.',
  }
];

//PRECIO VIEJO TACHADO
//PRECIO NUEVO
//AHORRAS (x)
//NOMBRE DE LA PROMO
const promocion: Promocion[] = [
  {
    id: 1,
    titulo: '',
    info: '',
    info2: '',
    dia: '',
    precio: '',
    horario: '',
    nivel: '',
    dire: '',
    imagen: '',
  },
  {
    id: 2,
    titulo: '',
    info: '',
    info2: '',
    dia: '',
    precio: '',
    horario: '',
    nivel: '',
    dire: '',
    imagen: '',
  },
  {
    id: 3,
    titulo: '',
    info: '',
    info2: '',
    dia: '',
    precio: '',
    horario: '',
    nivel: '',
    dire: '',
    imagen: '',
  },
];


const producto: Producto[] = [
  {
  id: 1,
  titulo: 'Baile Latino con Lentejuelas',
  info: 'Material exterior: hecho de cuero sintético y lentejuelas de alta calidad. Los zapatos brillarán con pasos elegantes y serás el Centro de atención de todos. La plantilla cómoda tiene una excelente resistencia a la compresión, Anti - deformación y anti - distorsión, puede soportar la fuerza de larga duración, alta frecuencia pisotear sin deformación, especialmente diseñado para bailar.',
  info2: '',
  imagen: 'https://m.media-amazon.com/images/I/61pHz1ri7fL._AC_SY625_.jpg',
 link: 'https://amzn.to/3WQ56mH',
},

{
  id: 2,
  titulo: 'diamantes de Imitación para Salón de Baile',
  info: 'Material: piedras satinadas y de lluvia. Las suelas de gamuza son suaves y flexibles, silenciosas y antideslizantes, lo que puede hacer que los bailarines bailen libremente sin cansarse.',
  info2: '',
  imagen: 'https://m.media-amazon.com/images/I/71YHcP5IJ6L._AC_SY625_.jpg',
 link: 'https://amzn.to/3UTSOXO'
},


{
  id: 3,
  titulo: 'Moderno Tango Tap',
  info: 'Este zapato de baile está hecho de satén y caucho de alta calidad,tiene cuatro correas en la parte superior para la mayoría de los trajes de baile e incluso para los zapatos de todos los días,adecuados para usar al aire libre.Nota:El tamaño de los zapatos es el código de la etiqueta, consulte la tabla de tallas y el número de código real correspondiente.',
  info2: '',
  imagen: 'https://m.media-amazon.com/images/I/51HMobCtcML._AC_SX679_.jpg',
 link: 'https://amzn.to/3KaPoe9'
},

{
  id: 4,
  titulo: 'Puntera Cerrada, Tango cha-cha',
  info: 'Diseño: diseño clásico de puntera cerrada, transpirable y cómodo. Los zapatos de baile de salón son duraderos, ligeros y cómodos. La hebilla y el clip del zapato pueden lograr un deslizamiento y liberación instantáneos. Buena resistencia al deslizamiento y equilibrio',
  info2: '',
  imagen: 'https://m.media-amazon.com/images/I/61AwjA4O70L._AC_SY625_.jpg',
 link: 'https://amzn.to/3WTqvv4'
},

{
  id: 5,
  titulo: 'Latín, Sandalia con talón Mujer',
  info: 'nuestro tamaño de zapatos es todo en tamaño estándar europeo, el ancho de los zapatos es medio (b o m), si sus zapatos diarios ancho de tamaño ancho (D, W o ee), por favor compre un tamaño más grande. Consulte la tabla de tallas para comparar cuidadosamente los datos de longitud del pie antes de realizar el pedido.',
  info2: '',
  imagen: 'https://m.media-amazon.com/images/I/71uwrXQj7ZL._AC_SY625_.jpg',
 link: 'https://amzn.to/3V76TT0'
},

{
  id: 6,
  titulo: 'Bachata Brillantes',
  info: 'Material externo: hecho de cuero sintético / satinado de alta calidad, la suela es de gamuza, suave, cómoda y antideslizante, la mejor opción para el entrenamiento y el rendimiento en la danza.',
  info2: '',
  imagen: 'https://m.media-amazon.com/images/I/61mGdsYBBcL._AC_SY625_.jpg',
 link: 'https://amzn.to/3wATMjF'
},

{
  id: 7,
  titulo: 'Zapatos de Baile Suave y cómodo',
  info: 'Los zapatos de salón tienen una altura adecuada para el talón, es muy cómodo de llevar.  Moda y clásico, hacen que el baile sea más atractivo. Vestirse y combinar es más fácil que antes con él.',
  info2: '',
  imagen: 'https://m.media-amazon.com/images/I/61Mg50sYnnL._AC_SY625_.jpg',
 link: 'https://amzn.to/4bxexf9'
},

{
  id: 8,
  titulo: 'Cuero con Punta Redonda',
  info: 'Altura del tacón: 3 cm/4,5 cm. Cabeza redonda de 360º. Antihumedad y transpirable',
  info2: '',
  imagen: 'https://m.media-amazon.com/images/I/41tUOBDkVXL._AC_SY625_.jpg',
 link: 'https://amzn.to/44T5RgH'
},

{
  id: 9,
  titulo: 'Baile Latino',
  info: 'Los zapatos son adecuados para la danza latina, suela de gamuza adecuada para el interior, antideslizante, fuerte agarre. Cierre: hebilla, altura del talón: 2.7 centímetros, ancho del zapato: normal.',
  info2: '',
  imagen: 'https://m.media-amazon.com/images/I/61Nq8n6uy+L._AC_SY625_.jpg',
 link: 'https://amzn.to/3UPwaQ7'
},
];



const texto: Texto[] = [
  {

    id: 1,
    titulo: 'Juan Manuel Almirón, creador de BASC.',
    info: 'Mi historia en el mundo del baile comenzó con una chispa de inspiración al presenciar la gracia y la destreza del bailarín Oleksandr Honcharov, fue él lo que me llevó a querer aprender esta danza.',
    info2: 'Mi búsqueda de conocimiento me hizó descubrir DSC, una escuela de baile que se convertiría en el punto de partida de mi viaje en este apasionante universo. Recuerdo el día que crucé por primera vez las puertas de la sucursal en Avenida Corrientes, y conocí a los dos maestros que dejaron una huella indeleble en mi formación: Mery Lenz y Eugenio Dmytrenko. Desde ese momento, supe que quería absorber cada enseñanza que estos virtuosos de la danza tenían para ofrecerme.\n\nA lo largo de los años, he participado en competiciones de ballroom, destacándome en categorías de letras y Open, obteniendo primeros puestos y llegando a ser finalista en múltiples ocasiones. He compartido mis conocimientos a través de clases grupales y particulares en diversas provincias de Argentina, desde Buenos Aires hasta Santa Fe, desde niveles iniciales hasta avanzados.\n\nSin embargo, el año 2024 marca un nuevo capítulo en mi trayectoria, ya que he decidido emprender mi propio proyecto personal: BASC. Mi objetivo con BASC es claro: difundir los bailes de salón, transmitir mi amor por esta danza y apoyar, formar y acompañar a todos aquellos que deseen adentrarse en este apasionante mundo.\n\nPor lo tanto, los invito a todos a unirse a mí en este viaje de aprendizaje y descubrimiento. ¡Los espero con los brazos abiertos para aprender a bailar y compartir juntos este emocionante camino!'
  },
  
  {
    id: 2,
    titulo: '¡Bienvenido a BASC (Ballroom Argentina Sport Club)!',
    info: 'Nuestra misión es difundir la pasión por el baile en Argentina y Latinoamérica. Ofrecemos clases para todos los niveles: principiantes, intermedios y avanzados. Ya sea que bailes por hobby, recreación o competitivamente, ¡tenemos algo para ti!',
    info2: 'Nos preocupamos por tu progreso, por eso nuestros instructores reciben formación continua en ballroom dance, preparación física y psicología deportiva. En BASC, creamos un ambiente cómodo donde el error es parte del aprendizaje y, sobre todo, ¡donde te diviertes mientras aprendes!\n\n¿Preguntas? ¿Quieres más información? ¡No dudes en contactarnos a través de MD y te responderemos lo antes posible!'
  },
  
  {
    id: 3,
    titulo: '¿Qué es Ballroom?',
    info: '"Ballroom" es la denominación que se usa para designar un conjunto de 10 ritmos. Pertenecen a los llamados ritmos "Standard": Vals Inglés, Vals Vienés, Tango, Foxtrot, Quickstep.\n\nCorresponden a los ritmos "Latin": Samba, Cha Cha Cha, Rumba, Paso Doble, Jive. En una competencia se puede competir en los 10 ritmos abarcando Standard y Latin, o en los 5 ritmos de Standard, o en los 5 ritmos de Latin. Pero nunca en 1 solo ritmo a selección de alguna modalidad.',
    info2: ''
  },
  
  {
    id: 4,
    titulo: 'Detrás de un buen bailarín SIEMPRE hay un gran maestro de danza.',
    info: 'Porque inspiran con su pasión por bailar. Son fuente de motivación y el vínculo que realiza un bailarín con su entrenador puede ser tan fuerte como el de un padre con su hijo...',
    info2: 'Porque hay entrenadores que se convierten en padres y padres que se vuelven entrenadores.'
  },
  
  {
    id: 5,
    titulo: '3 Puntos claves para todo practicante inicial de ballroom',
    info: 'En las etapas iniciales de Ballroom Latin, donde un bailarín/na empieza con su alfabetización en cuanto al nombre de las figuras, los tiempos de cada ritmo, los fundamentos del ballroom, conviene tener en cuenta los siguientes conceptos:',
    info2: '1. Figuras claras: Debe quedar claro las distinciones entre una figura, la transición, y la figura que le continua.\n\n2. Tiempos precisos: Criterio fundamental y crítico tanto a la hora de evaluar una pareja, como también el poder demostrar que se entiende el lenguaje por el que esta compuesto la música.\n\n3. Postura correcta: Fundamental tanto a la hora de la presentación del bailarín tanto individual como la pareja, ya que transmite entre tantas cosas, la presencia hacia el público, la claridad de los movimientos, la distinción y caracterización de cada ritmo.'
  },
  
  {
    id: 6,
    titulo: 'No son simples personas, sino intérpretes de la danza.',
    info: 'Y sí, cuando pisas la pista de baile tenés que forzar la postura, no mirar el piso, esforzarte, tratar de sobresalir...\n\n',
    info2: 'Como dice mi entrenador cuando nos prepara para bailar en los torneos: "Ustedes en la pista no son personas, son bailarines"'
  },
  
  {
    id: 7,
    titulo: 'Bailarines de Showmatch vs Bailarines de Ballroom',
    info: 'A raíz de la aparición del ballroom en televisión de la mano de programas como "Showmatch", "Strictly Come Dancing" o "Dancing Whit the Stars", el ballrom ha logrado tener cierta llegada al público. Sin embargo, es importante distinguir las diferencias entre el ballroom original y la fusión de elementos que se ven en los show televisivos.',
    info2: '1) COREOGRAFÍAS: Las coreografías son sin duda el principal elemento distintivo entre los concursos televisivos y el ballroom original.\n\nLas coreografías hechas para los programas, tienen como finalidad principal el show y el espectáculo. Las coreografías de ballroom tiene como directriz subyacente el concepto de "elegancia", lo que suele derivar en prescindir de trucos y acrobacias.\n\nCONTEXTO // AMBIENTE: En los concursos televisivos se puede preparar todo un show alrededor de una coreografía. Se permite tanto elegir el tema y la comodidad de bailar una sola pareja en la pista, sumado a que no se encuentran los parámetros de evaluación por los cuales son evaluadas las parejas en competición.\n\nEn los torneos de ballroom, se suele bailar con varias parejas al mismo tiempo, no se puede elegir la canción o música. Si bien hay un orden de ritmos predeterminados (Samba, Cha Cha Cha, Rumba, Paso Doble, Jive) no se puede elegir el tema a bailar. Simplemente la música suena, los bailarines demuestran su capacidad de interpretación, escucha de tiempos y bailan.\n\nEs mucho menos controlado, las parejas tienen coreografías acorde a este factor y también teniendo en cuenta que son evaluadas por: conexión física, coreografía, postura y balance, calidad de los movimientos, musicalidad, precisión, fluidez en las transiciones. Pero no buscan el puro show o llamar la atención, de hecho, muchas veces se prescinden de esos factores porque rompe con la estética de los torneos, en otras palabras, "ensucian" la expresión de la música.'
  },
  
  {
    id: 8,
    titulo: '¿Quién gana un torneo de ballroom?',
    info: '¿Los más rápidos?\n\n¿Los más técnicos?\n\n¿Los más precisos?\n\n¿La coreografía más complicada?\n\n¿La mejor conexión?',
    info2: '🟡Puede que una suma balanceada de todos estos factores sea una respuesta, incluso puede que esten balanceados en todo esto y sobresalgan en una de estas cualidades, lo que es bueno ya que da la marca personal. Y todos sabemos lo importante que es ser único y original en el arte.\n\nBryan Watson dice que el mejor bailarín es quien mejor expresa la música. La técnica, las herramientas y habilidades son herrramientras para ello, pero no replicar constantemente la coreografía una y otra vez, ejecutando la mécanica de los movimientos a la perfección, infinitas veces en todos los temas de todos los ritmos de la misma manera, eso no te hará un gran bailarín. Debes adecuar tus herramientas para expresar de la mejor forma posible la música.\n\nPor lo tanto, la coreografía con distintas canciones debe verse diferente (musicalmente por lo menos). Si se ven todas iguales, eres como un atleta de 100 mt llanos, que apenas suena la campana sale corriendo y dando lo máximo físicamente que puede entregar su cuerpo. Perfecto, eres un gran atleta, pero no estás realmente bailando. Y digo que no estás realmente bailando porque no hay una escucha, una interpretación y una expresión de lo que la música te genera. Y aquí en danza hay que tener en cuenta que también y en gran parte es arte, y como dijo Bruce, el arte no solo es embellecimiento u ornamento, también es expresión.\n\n¿Y tú que pareja crees que debe ganar una competencia?'
  },
  
  {
    id: 9,
    titulo: '¿Qué evalúan en las primeras rondas de los torneos de baile de salón?',
    info: 'Postura\n\nTécnica básica\n\nPrecisión musical\n\nClaridad de las figuras',
    info2: 'Décimo texto oculto.'
  },
  
  {
    id: 10,
    titulo: 'Señales de sobreentrenamiento',
    info: '1) Sentir ansiedad prácticamente a diario.\n\n2) Sentirse constantemente fatigado, desmotivado o agotado emocionalmente',
    info2: '3) No estar disfrutando nada de tu deporte.\n\n4) Considerar que estás la mayor parte de tu día a día irritable o susceptible.\n\n5) Estar alejándote de tus vínculos sociales.'
  },
  
  {
    id: 11,
    titulo: 'Disciplina y determinación',
    info: "Un gran 'SÍ' implica muchos pequeños 'No'. Decir 'SÍ' a bailar, a realmente aprender y formarse como un bailarín, conlleva sacrificios diarios que a menudo pasan desapercibidos.\n\n",
    info2: "Bailar bien no es resultado de un curso rápido que promete habilidades en 30 días con una garantía de empleo. No. Bailar bien requiere, como mínimo, meses de dedicación y estudio profundo. Implica asistir regularmente a clases, dejar atrás vicios que podrían menguar nuestro rendimiento físico, y renunciar a las constantes salidas de fiesta que podrían afectar nuestra recuperación. Implica regresar a casa después de horas en el salón y seguir estudiando.\n\nAprender a lidiar con la incertidumbre de eventos, la aceptación del público, y la superación de las expectativas. Implica NO adoptar malos hábitos alimenticios. Implica empezar a renunciar a las salidas frecuentes con amigos o familia. La selectividad en el tiempo compartido se convierte en una realidad. No derrochar en gastos innecesarios, pues el mundo del arte demanda inversiones considerables con retornos a largo plazo. No trasnochar frecuentemente (siempre que sea posible). Significa practicar hasta altas horas de la noche, madrugar al día siguiente para seguir practicando, y vivir con la incertidumbre del resultado. Esa es la única verdad.\n\nPero veámoslo desde el lado positivo, por más desafiante que sea la danza y sin importar las circunstancias, SIEMPRE hay espacio para mejorar y aprender. Solo depende de la práctica, la voluntad y la disciplina."
  },
  
  {
    id: 12,
    titulo: '¿Quieres mantenerte al tanto de todas las novedades y eventos exclusivos de las clases de BASC?',
    info: '¡Estamos emocionados de anunciar que hemos creado un grupo de WhatsApp para ti! ',
    info2: 'Únete ahora para recibir actualizaciones instantáneas, detalles de las clases y mucho más. No te pierdas esta oportunidad de ser parte de nuestra vibrante comunidad de bailarines.\n\n¡Únete hoy mismo haciendo clic en el enlace de abajo y déjate llevar por el ritmo!:',
  },
  
  {
    id: 13,
    titulo: 'Cosas que puedes hacer para apoyar a tu hijo/a que quiere ser bailarín',
    info: 'Si la danza es un ambiente ajeno a tu experiencia, ten en cuenta estos tips que siempre puedes hacer para acompañar a crecer a tu hijo/a en este mundo:',
    info2: '1. Intenta ir a verle siempre que tenga presentaciones, shows, competencias, etc.\n\nEntiende, escuchale, y apoya sus sueños. La danza es una hermosa vida, pero requiere trabajo y paciencia.\n\nAyúdalo/a con su peinado, vestuario, maquillaje.\n\nGrita su nombre y aplaude después de cada presentación.\n\nAcompáñalo/a a sus ensayos y clases de danza.'
  },
  
  {
    id: 14,
    titulo: 'La comodidad en el vestuario es crucial.',
    info: '• Para practicar tener en cuenta la comodidad combinado con la conciencia que el profesor o profesora, deberá corregirte líneas, postura y el uso correcto de los músculos. El vestuario podría facilitar este trabajo.',
    info2: 'Para competir hay que tener en cuenta: el estilo de tu danza, tus intenciones, el vestuario de tu pareja, la elegancia, tus particularidades acerca de tu somatotipo, los reglamentos vigentes de la asociación de baile deportivo donde participarás.'
  },
  
  {
    id: 15,
    titulo: '¿Qué zapatos debo usar para Ballroom Dance?',
    info: 'Si bien no es necesario tener el calzado específico de Ballroom Dance en tus primeras clases, con el transcurrir del tiempo se vuelven imprescindibles para que la práctica sea la adecuada.',
    info2: 'Se debe a la costumbre que le darás a tus músculos de pisar de forma correcta con el calzado específico.'
  },
  
  
  {
    id:16,
    titulo: '¿Cómo ir vestido a tus primeras clases de ballroom?',
    info: 'Pantalón o jogging, remera y camisa cómodos\n\nZapatos o zapatillas flexibles',
    info2: 'Luego, a medida que el alumno continué asistiendo a clases, se recomienda usar la ropa característica de ballroom, como los pantalones y zapatos.\n\nPuntualmente, el calzado de ballroom se vuelve una herramienta imprescindible para asistir a clases.(El color negro es por tradición el color que más se estila para asistir a clases)'
  },
  
  {
    id: 17,
    titulo: 'Lo que naturalmente el cuerpo sabe hacer',
    info: 'Dando clases, observo que hay gente que es tan buena bailando que sólo tengo que hacer de psicólogo y destrabar los bloqueos para que haga lo que naturalmente su cuerpo sabe hacer.\n\n',
    info2: 'Hay gente que me canta la musicalidad con el cuerpo, sin escuchar la música ya sé que ritmo están bailando.\n\nEn varios casos, el bailarín o la bailarina, siempre estuvieron ahí, solo tengo que sacar las cuerdas que le sujetan.'
  },
  
  {
    id: 18,
    titulo: 'Técnica perfecta',
    info: 'La técnica es en danza, la/las herramientas básicas a partir de las cuales desarrollará uno su propia manera de expresarse o ser, adoptando lo útil, desechando lo inútil, y agregando lo esencialmente propio de uno, desarrollando así su propio estilo. Funciona como bálsamo que lo ayude a cruzar de orilla a orilla.\n\n',
    info2: 'Pero no es un Dios al que reverenciar ciegamente y si no es así, está mal, no baila.... no seas esclavo de la teoría. Experimenta, prueba por ti mismo.'
  },
  
  {
    id: 19,
    titulo: '¿Por qué recomiendo asistir a clases de baile social a todo competidor de ballroom? ',
    info: 'Por un motivo muy puntual: porque irás a bailar por el simple hecho de bailar. PUNTO.',
    info2: 'En ballroom se enfocan tanto en la competición y en maximizar el rendimiento deportivo, que se terminan olvidando de algo fundamental: el placer de bailar por bailar.\n\nY bueno... es entendible. Si en todas las clases todo lo que se enseña va enfocado en competir y ganar, se te juzga constantemente, es un caldo de cultivo perfecto para padecer problemas de ansiedad generados por el ambiente de la danza deportiva.\n\nEntonces en danzas del tipo social (salsa, tango, bachata por ejemplo) se baila por el simple motivo de disfrutar bailando. Incluso esto tendrá un beneficio para el ámbito competitivo: te hará recordar lo que es sentir la música sin tanta estructura previa de cómo sentirla y moverse, y también, disfrutar bailar sin más, lo cual se disfruta muchísimo más que competir e intentar ser mejor que los demás, y eso se transmitirá hacia los demás. Y por ende, tu danza será maravillosa.\n\nY de paso vamos a salsear juntos 😉.\n\nOff topic: bailar no es correr, además, uno cuando no se encuentra en modo competitivo es cuando más creativo se vuelve.'
  },
  
  {
    id: 20,
    titulo: '¿Por qué aconsejo a los hombres aprender la parte coreográfica de las mujeres?',
    info: 'Tú serás quien conduce, por lo tanto deberás saber que pasos debe hacer ella.',
    info2: 'Aprendar su coreografía y sus figuras, te hará entender que debe sentir ella y como, para que ella pueda desplegarse mejor en la coreografía.'
  },
  
  {
    id: 21,
    titulo: '¡Gracias!',
    info: 'Me honran todas y cada una de las personas que me eligen para que les enseñe a bailar.\n\n',
    info2: 'Así que prometo nunca cerrar la puerta a un estudiante que llegue tarde, ni retirar del salón a quien no tenga la vestimenta "de primera línea" para entrenar, ni mucho menos a quien llegue con los zapatos de práctica rotos (porque conozco de sobra los grandes sacrificios que hay que hacer para bailar).\n\nMi única meta en este nuevo camino, es encender esa chispa, es que logren sacar o descubran ese bailarín/na que llevan dentro, ese amor por la danza, tal cual lo hicieron mis maestros conmigo.'
  },
  
  {
    id: 22,
    titulo: 'Destreza adquirida',
    info: 'Nadie nace siendo buen bailarín/na, o bueno bailando.\n\nEn danza es casi todo, destreza adquirida.\n\nAsí como también, no hay una sola forma de ser buen bailarín.',
    info2: 'El secreto de bailar bien: Escuchar a tus maestros y luego, encerrarte en tu pieza a practicar hasta el quiebre emocional o que ya no puedas más, o júntate con amig@s que estén igual de emocionados que vos y pásensela genial en esos ensayos.\n\nY algún día, todo el mundo los va a aplaudir, van a terminar diciendo "¡Wuaw! ¡Yo quiero bailar como él!'
  },
  ];
  
export const TextConfig = { clase, pregunta, personal, producto, texto};
