const articleItems = [
  {
    id: 1,
    blueTitle: 'No me lo esperaba. ',
    title: 'Estudio revela que el humor garantiza buenos resultados en entrevistas laborales',
    subhead:
      'Científicos de Bernal Oeste, no se dejaron llevar por la mala fama del conurbano y nos iluminaron con esta revelación. "El humor debe estar presente en todo", afirmaron.',
    img: '/images/img-1.jpg',
    author: 'Por Daniel Brunat',
    note: '',
  },
  {
    id: 2,
    blueTitle: 'Dalma Maradona: ',
    title: 'los novios y otras anécdotas sobre Diego',
    subhead:
      'La entrevista con Dalma transcurrió hace ocho años en un bar de Palermo cerca del que sería su departamento de soltera. Acababa de ensayar para una obra de teatro que la tendría en esos meses sobre un escenario.',
    img: '/images/img-2.jpg',
    author: 'Por Adriana Balaguer',
    note:
      'https://www.lanacion.com.ar/lifestyle/el-auto-novios-otras-anecdotas-dalma-maradona-nid2520768',
  },
  {
    id: 3,
    blueTitle: 'Basta de pavadas. ',
    title: 'El hombre creó la pizza con ananá? o la pizza con ananá creó al hombre?',
    subhead:
      'Los mismos científicos que hacían declaraciones fuertes sobre el humor en entrevistas laborales, lanzan al aire nuevos descubrimientos: "La pizza con ananá fue creada por el hombre para ocultar que en casa cocinamos con cualquier cosa". ',
    img: '/images/img-3.jpg',
    author: 'Por Daniel Brunat',
    note: '',
  },
  {
    id: 4,
    blueTitle: 'Argentinos. ',
    title:
      'Wimbledon: Diego Schwartzman igualó su mejor actuación histórica y Nadia Podoroska se despidió',
    subhead:
      'El Peque avanzó a la tercera rueda en el All England Club y ahora enfrentará al húngaro Márton Fucsovics; la Peque perdió contra la checa Tereza Martincova',
    img: '/images/img-4.jpg',
    author: '',
    note:
      'https://www.lanacion.com.ar/deportes/tenis/wimbledon-diego-schwartzman-igualo-su-mejor-actuacion-historica-y-nadia-podoroska-se-despidio-nid30062021/',
  },
  {
    id: 5,
    blueTitle: 'Varado en Miami. ',
    title: '"Me queda insulina para 15 días y el seguro médico no me lo cubre"',
    subhead:
      'Mariano Pocrnjic es insulino dependiente, y había viajado a Estados Unidos; necesita regresar en los próximos días a la Argentina para no tener que afrontar el enorme costo de comprar sus medicamentos en el exterior',
    img: '/images/img-5.jpg',
    author: 'Por Alejandro Horvat',
    note:
      'https://www.lanacion.com.ar/sociedad/varado-en-miami-me-queda-insulina-para-15-dias-y-el-seguro-medico-no-me-lo-cubre-nid30062021/',
  },
  {
    id: 6,
    blueTitle: 'Robo. ',
    title: 'El chofer de un intendente mató a un ladrón dentro de una clínica',
    subhead:
      'Un policía retirado abatió a un delincuente en un centro médico ubicado en Lomas de Zamora',
    img: '/images/img-6.jpg',
    author: 'Por Silvia Stang',
    note:
      'https://www.lanacion.com.ar/seguridad/robo-el-chofer-intendente-mato-ladron-dentro-nid2520875',
  },
  {
    id: 7,
    blueTitle: 'Juan Carlos De Pablo. ',
    title: 'Qué estamos negociando realmente con el FMI',
    subhead: 'Nuestra relación pasada y presente con el Fondo Monetario Internacional',
    img: '/images/img-7.jpg',
    author: 'Por Juan Carlos De Pablo',
    note:
      'https://www.lanacion.com.ar/economia/nuestra-relacion-pasada-y-presente-con-el-fondo-monetario-nid2516148',
  },
  {
    id: 8,
    blueTitle: 'Autos. ',
    title: 'Test drive del Peugeot 208.',
    subhead:
      'Sostenido en un diseño cautivante, ofrece un excepcional confort de marcha, un buen nivel de equipamiento y tecnología, y una mecánica probada y confiable.',
    img: '/images/img-8.jpg',
    author: 'Por Diego Cúneo',
    note:
      'https://www.lanacion.com.ar/autos/test-drive-probamos-version-manual-del-peugeot-nid2515833',
  },
  {
    id: 9,
    blueTitle: 'Un plan postergado. ',
    title: 'Fernández pone en marcha el Consejo Económico y Social',
    subhead:
      'El presidente Alberto Fernández pondrá en marcha en los próximos días el Consejo Económico y Social, en el que estarán representados, varios sectores.',
    img: '/images/img-9.jpg',
    author: 'Por Santiago Dapelo',
    note:
      'https://www.lanacion.com.ar/politica/embargada-alberto-fernandez-pone-marcha-consejo-economico-nid2519792',
  },
  {
    id: 10,
    blueTitle: 'Murio Diego Maradona. ',
    title: 'El llanto de un ángel, metáfora de un país pobre',
    subhead:
      'Cuentan que lloraba con frecuencia Diego Maradona en estos meses finales, y las lágrimas decían mucho más que tantas palabras innecesarias.',
    img: '/images/img-10.jpg',
    author: 'Por Daniel Brunat',
    note: '',
  },
  {
    id: 11,
    blueTitle: 'Misterio. ',
    title: 'Adoptaron a dos chicos en África y los abandonaron: qué dijeron',
    subhead:
      'El documento indica que la familia residió en Bahía Blanca, donde los hermanos, de seis años, fueron escolarizados y hasta participaron de actividades extracurriculares, como básquet, pero en febrero pasado se mudaron a San Martín de Los Andes.',
    img: '/images/img-11.jpg',
    author: 'Por Paula Rossi',
    note:
      'https://www.lanacion.com.ar/sociedad/bahia-blanca-adoptaron-africa-hermanos-mellizos-abandonaron-nid2519759',
  },
  {
    id: 12,
    blueTitle: 'Historia médica. ',
    title: 'Las constantes en la salud de Diego',
    subhead:
      'Diego Maradona murió hoy, a los 60 años, mientras atravesaba un proceso de recuperación. Su estado general de salud no era bueno.',
    img: '/images/img-12.jpg',
    author: 'Por Fabiola Czubaj',
    note:
      'https://www.lanacion.com.ar/sociedad/murio-diego-maradona-internaciones-sobrepeso-adicciones-constantes-nid2520910',
  },
  {
    id: 13,
    blueTitle: 'Restricciones a los vuelos. ',
    title: 'Gollán: Las decisiones de unos pocos no pueden afectar las libertades de millones',
    subhead:
      'El ministro de Salud bonaerense se refirió a las críticas al cupo para la llegada al país de argentinos desde el exterior',
    img: '/images/img-13.jpg',
    author: '',
    note:
      'https://www.lanacion.com.ar/politica/daniel-gollan-sobre-las-restricciones-a-los-vuelos-las-decisiones-de-unos-pocos-no-pueden-afectar-nid30062021/',
  },
  {
    id: 14,
    blueTitle: 'Reconciliación. ',
    title: '"Vino a casa y comimos asado, es un buen chabón, no voy a decir nada mas"',
    subhead:
      'Las peleas entre los ex mandatarios parecen haber cesado. Hubo gestos reconciliadores y hasta asadito. "Me sorprendí que le gustara la mini provoleta", afirmó Cristina.',
    img: '/images/img-14.jpg',
    author: '',
    note: '',
  },
  {
    id: 15,
    blueTitle: 'Alguien tenía que decirlo. ',
    title: 'La pastafrola es de membrillo.',
    subhead:
      'Nadie puede negar que la pastafrola es un clásico entre los argentinos. La pregunta igualmente es: ¿Por qué a la gente le gusta de batata?',
    img: '/images/img-15.jpg',
    author: 'Por Daniel Brunat',
    note: '',
  },
];

export default articleItems;
