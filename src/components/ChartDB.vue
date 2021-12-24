<template></template>

<script>
export default {
  name: "ChartDB",
  props: {
    userName: String,
  },
  emits: ["getData"],
  setup(props, context) {
    const db = {
      zones: [
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth",
        "seventh",
        "eighth",
        "nineth",
        "tenth",
        "eleventh",
        "twelfth",
      ],
      stars: [
        { class: "sun", char: "☉" },
        { class: "moon", char: "☾" },
        { class: "lilith", char: "⚸" },
        { class: "mercury", char: "☿" },
        { class: "venus", char: "♀" },
        { class: "mars", char: "♂" },
        { class: "jupiter", char: "♃" },
        { class: "saturn", char: "♄" },
        { class: "uranus", char: "♅" },
        { class: "neptune", char: "♆" },
        { class: "pluto", char: "♇" },
      ],
      signs: [
        { class: "aries", char: "♈︎" },
        { class: "taurus", char: "♉︎" },
        { class: "gemini", char: "♊︎" },
        { class: "cancer", char: "♋︎" },
        { class: "leo", char: "♌︎" },
        { class: "virgo", char: "♍︎" },
        { class: "libra", char: "♎︎" },
        { class: "scorpio", char: "♏︎" },
        { class: "sagitarius", char: "♐︎" },
        { class: "capricorn", char: "♑︎" },
        { class: "aquarius", char: "♒︎" },
        { class: "pisces", char: "♓︎" },
      ],
      info: [
        {
          id: 1,
          star: "ascendent",
          sign: "virgo",
          data: [
            {
              title: "Ascendente en Virgo",
              text: "Se caracteriza por su exagerada meticulosidad y prolijidad. Son muy perspicaces, justos y disciplinados, no huyen de las responsabilidades y buscan una meta común, la realización personal. Analítico, observador, reflexivo. Posee una inteligencia lógica y un pragmatismo curioso para las relaciones sentimentales. Terriblemente prudente a la hora de intervenir en proyectos o negocios. Goza de un desarrollado sentido del deber tanto para la familia, amigos y compañeros laborales. Son tímidos y algo retraídos. Les cuesta trabajo hacer nuevos amigos. Requiere sentirse útil y con objetivos a descubrir. Le es muy significativo saber que alguien se inquieta por él, que es amado y querido. Suele ser demasiado detallista, olvidando las grandes ocupaciones. Su personalidad es una mezcla rara de realismo, frialdad, planificación, exactitud. A veces, en un ser orgulloso, pedante, presumido, sermoneador, inflexible e importuno. Tiende a perderse en los detalles y esto lo hace ser una persona de mentalidad estrecha. Opta por permitir que otros den el primer paso a la hora de hacer amigos. Siente inclinación hacia individuos que son hacendosos, inteligentes, pulcros y que saben estar al tanto de lo que desean.",
            },
          ],
        },
        {
          id: 2,
          star: "sun",
          sign: "leo",
          data: [
            {
              title: "Sol en Leo - Casa 12",
              text: "Signo de fuego. Se caracteriza por su luminosidad, su enorme potencial de energía, su espíritu apasionado y su alegría. Es unser radiante, ardiente y expresivo. Optimista, posee gran dominiose sí mismo, necesita sobresalir, destacarse en cualquier aspectode su vida. Ambicioso, déspota, siempre deseoso de gobernar. Elelemento solar para este signo muestra el estado de conciencia yaquello que le motiva, fortalece y lo que le apasiona. El sol enLeo muestra una persona noble, que irradia dignidad y posee unmundo interior lleno de orgullo. Un tanto vanidoso, siempre encontinua búsqueda del éxito, fama o gloria. Si bien Leo poseemuchas virtudes, debe encontrar tu propia naturaleza independientedel reconocimiento por parte de los demás, es decir encontrarse así mismo. Le cuesta aceptar la diversidad de pensamiento. Muchasveces no entiende las necesidades de tu prójimo, pues le cuestarelacionarse y comunicarse con sus pares. Lo mortifica la rutina ylo angustian las situaciones que no acontecen como lo desea.Detesta ser evaluado o criticado, le agradan los puestos en quepuede demostrar sus aptitudes y su autoridad. Es imposible quepase inadvertido ya que su resplandor majestuoso lo diferencia delresto. Es un ser muy generoso y comparte sus riquezas con otros.Pero carece de humildad, así como también, debería ejercitar eloído escuchando y asumiendo que delegar tareas no es autoritarismosino organización.",
            },
            {
              title: "EL SOL EN LA DUODÉCIMA CASA",
              text: "La casa doceava es la de las pruebas y limitaciones, la vida escondida, los secretos, los sacrificios, el exilio, la pérdida de la libertad, las renuncias, las prácticas o trabajos ocultos, la vida mística, la delincuencia, el vicio, las enfermedades crónicas, las hospitalizaciones, el inconsciente. Simboliza la terminación de un ciclo evolutivo. Aquí se disuelve el ego y el sentido de la individualidad, basados en designaciones materiales, falsas, a favor de un sentimiento de comunión y comunidad espiritual. Representa la soledad, el sacrificio, la empatía y la inspiración mística. El Sol en esta casa revela una tendencia a la soledad, a alejarse de los contactos humanos normales. Exito en los trabajos aislados relacionados con asilos, hospitales o laboratorios. Exilio voluntario ya que es tan receptivo a lo que emanan otros, que continuamente absorbe influencias del medio. Neurosis y timidez. La resolución del problema exige que el ser se amplíe más allá de los alcances habituales de la conciencia y que cultive el situarse al servicio del alma, de la identidad espiritual, y de los demás. Su sensibilidad y tu actitud abierta ante aquello que va más allá de las necesidades e intereses de tu propia persona pueden llevarle a ser un buen asistente que responde con eficacia a las necesidades de otros.",
            },
            {
              title: "EL SOL OPOSICIÓN LUNA",
              text: "La persona tiene que elegir entre sus sentimientos y su imagen, su padre y su madre, y así con otras situaciones en la vida en el que se crean conflictos, porque ambas cosas son igualmente importantes. Apego al pasado. Constantes indecisiones que llevan a la inconstancia en el proceder y en el sentir. Dudas sobre sí mismo, luchas contra sí mismo. Repetidos cambios de profesión. Discusiones con parientes y padres. Frustraciones que hacen el carácter irascible. Fuerte sobreprotección de la madre o del padre. Madre que asume el rol del padre por ausencia o debilidad de carácter de este, o viceversa. Creatividad. Buena salud, excelente constitución física. El hogar es muy importante. Generalmente espera a que otros hagan el primer intento de contacto. Prefiere trabajar solo o en algo que le permita decidir cuándo y cómo hacer las cosas, sin la presión de otros. Necesita pequeños espacios de soledad y tranquilidad para nutrirse espiritualmente, ya que corre el riesgo de envejecer prematuramente ante las tensiones, competencias y malestares de la sociedad moderna.",
            },
            {
              title: "EL SOL CUADRATURA MARTE",
              text: "Personas que pierden fácilmente el control, cometiendo en tales estados actos violentos, insensatos e impulsivos para luego arrepentirse, todo lo cual hace difícil su entendimiento con el medio ambiente, así como condiciones profesionales cambiantes. Sus reveses y fracasos, deben ser atribuidos a que no planifica cuidadosamente los detalles de ninguna acción, cuando aprenda a pensar antes de hacer las cosas, se evitará la pérdida de tiempo que invierte en tener que volver a hacerlo todo de nuevo. Cuando está bien canalizada, es índice de carácter bélico, guerrero, con confianza en sí mismo y certeza y rapidez en las propias reacciones, pero deberá entonces entender, que este tipo de trabajo requiere de disciplina y orden, y someterse a él. Sobre valoración de las propias capacidades, de las otras personas y de las cosas. Energía, dinamismo y acción en casi todo lo que hacen. Tendencia a la aventura y al riesgo, sobre todo si se los desafía. Trabajo con armas o herramientas y aparatos cortantes peligrosos para el nativo. El sexo y el ejercicio son muy importantes, pero podrían ser fuentes de frustraciones y tensiones. No siente que tiene que ceder ante nadie, lo cual podría entorpecer cualquier relación formal, a menos que sea una competencia de conquista, donde haya un rival que vencer. Eventualmente habrá romances que acabaran tan pronto como el otro sea conquistado.",
            },
            {
              title: "EL SOL CUADRATURA PLUTON",
              text: "Todo lo que se lee a continuación podría ser usado con fines benéficos algunas veces, pero muy probablemente sea utilizado para el mal, con este aspecto. Gran capacidad de trabajo, enfoque súper concentrado de pensamientos, fuerza interior inusitada. Capacidad para dirigir y sugestionar masas. Diseño y pro actividad en todo, olfato psicológico agudo y acertado, habilidad para quitar las máscaras de las personas y ver lo que realmente son o quieren. Sabiduría del mal íntimamente elaborada, pero, por no comparar y corregir con referencias externas, es obsesivo y maníaco compulsivo con sus propias concepciones. Aspiraciones a ser guía social de la humanidad. Reserva extrema de sus propios asuntos. Necesidad de imponerse a los demás, de ser el primero o el centro de atención. Figurativamente es un cazador en busca constante de presas y no descansará hasta lograr lo que quiere. Temperamento volcánico, intenso y obsesivo en todo lo que hace. Capacidad para expresarse hacia el entorno inmediato o lejano, por medio de expresiones habladas, escritas o sugestivas. Largas investigaciones y registros de datos para concluir en concreto. Sangre fría. Objetividad. Son autodestructivos o destructivos por que no obtienen la cultura y educación apropiada, o porque se obsesionan por lo equivocado o peligroso, pues eliminaran cualquier obstáculo hacia su meta. Poder de regeneración de sí mismo y de lo que lo rodea, que lo lleva a drásticos cambios en su identidad psicológica y a establecer periódicamente nuevas etapas de vida. Esta energía destructiva es muchas veces liberada sexualmente. Intoxicación y quistes. Gran poder mental. Psiquiatra, psicólogo, médico.",
            },
          ],
        },
        {
          id: 3,
          star: "moon",
          sign: "acuarius",
          data: [
            {
              title: "Luna en Acuario - Casa 6",
              text: "Los nativos de este signo aman la independencia y les asusta el compromiso, tiene una conducta inquebrantable y se destacan por su originalidad. Es sereno, cordial e inmensamente amigo de sus amigos y conocidos. Posee ideas de libertad, fraternidad, amor global. Sobre todo su condición de romper con lo usual o socialmente impuesto. Descubre el futuro vive intensamente, sueña siempre con nuevos horizontes, le desagrada la rutina, lo conservador. Está gobernado por Saturno y Urano y pertenece al elemento aire. Los signos de aire viven en el mundo abstracto de las ideas y de los pensamientos, los cuales son para ellos tan reales como cualquier objeto físico. La Luna en este signo revela un carácter sensible y humanitario, independientes, buscan libertad en sus relaciones sentimentales. Muy sociables con numerosas amistades. Su hogar será un lugar para el encuentro con amistades y actividades grupales. Rebelde, testarudo, con gran temor a las ataduras o responsabilidades. Se siente seguro cuando expresa sus pensamientos con plena libertad, no pierde la oportunidad de revelar su individualidad como un sujeto único, altruista, que necesita la aprobación de los conocidos. Posee gran capacidad para escuchar, comprender y aconsejar a los seres queridos.",
            },
            {
              title: "LA LUNA EN LA SEXTA CASA",
              text: "La sexta casa es la de la salud, la higiene, la alimentación, el servicio, la servidumbre y los subalternos, los animales domésticos. Corresponde a nuestra facultad y forma de utilizar nuestros recursos y cualidades según las necesidades que se presentan en la vida. Aquí vemos nuestra actitud hacia el trabajo y el modo de cómo organizamos nuestra existencia. Los temas relacionados con el cumplimiento del deber, la inteligencia práctica. La Luna en esta Casa revela una posición favorable para empleos de servicio público, empleos subalternos, pero donde se goza de mucha simpatía. Es un ser con una salud frágil, con funciones naturales irregulares y el estómago delicado. Posee malestares frecuentes pero no graves. Le agrada realizar actividades variadas, con espíritu siempre servicial. Necesita sentirse cuidado o protegido, su capacidad de hacer frente a las contingencias de todos los días, variarán de acuerdo con sus estados de ánimo.",
            },
            {
              title: "LA LUNA CUADRATURA MARTE",
              text: "Derroche insensato de vitalidad, temeridad peligrosa, tendencia a experimentar con todo, materialismo. Ansiedad emocional e impaciencia. Persona violenta e irrefrenable, de sentimientos tumultuosos porque es sumamente sensible sobre lo que digan o hagan las personas. Constantemente se defiende de ataques que nunca fueron tal, y reacciona atacando o abusando de aquellos que no merecen ese trato. Al final, la gente trata de evadirlos, porque no se puede llegar a ningún acuerdo con ellos, esto les hace actuar a la defensiva y atacando a todos los que intimidan. Contradicción entre la extrema sensibilidad por lo que otros le hagan y la indiferencia hacia los sentimientos de otras personas. Gran energía sexual, que muchas veces es violenta, impulsiva y demasiado emocional. Rechazo a los cambios, viajes, y determinaciones aunque sean necesarios. Profesión peligrosa. La paz mental solo se logrará cuando aprenda a tener dominio íntimo sobre todos los elementos mencionados y a posponer decisiones que impliquen relaciones permanentes hasta bajar la tensión emocional que les provoca.",
            },
            {
              title: "LA LUNA CUADRATURA PLUTON",
              text: "Metabolismo acelerado. Apariencia diferente a su verdadera edad, o muy joven o muy mayor. El problema radica en la incapacidad para dejar atrás el pasado. Resolver los traumas, miedos y culpas es importante. Gran necesidad de cambios y de hacer cosas que cambien al mundo propio y ajeno. Errores permanentes o inmadurez emocional, torpeza y nerviosismo lo cual los lleva a elegir un oficio o vocación equivocada a su naturaleza. Amor profundo y tenaz, pero frecuentemente no correspondido, o al cual no corresponde su negación a asumir responsabilidad sobre lo que sienta el otro. Por otro lado, probablemente dentro de un lapso de tiempo descubra que la pareja que tuvo y que apartó por otro amor, era la más significativa para usted. Debe salirse de todo su medio usual de vez en cuando para descansar, hacerse periódicos chequeos médicos y relajarse de las cosas serias que siempre lo rodean. Mucha precaución al incursionar en lo oculto, tal vez quede más confundido que iluminado con estas cosas.",
            },
          ],
        },
        {
          id: 4,
          star: "lilith",
          sign: "sagitarius",
          data: [
            {
              title: "Lilith en Sagitario - Casa 4",
              text: "En Sagitario, Lilith quiere todo en exceso. Se excita fácilmente, especialmente cuando está de viaje. Quien inventó el club de una milla de altura probablemente tenga su Lilith en Sagitario. Le encanta ir a donde nadie ha ido antes. Aquellos con su Lilith en Sagitario deben aprender a tener fe como parte de su deber kármico. Al contrario de su oscuridad, Lilith en Sagitario puede inspirar profundamente a quienes la rodean.",
            },
            {
              title: "TU MNTRA EN LILITH",
              text: "Lo que es popular no siempre es correcto. Tengo confianza y fe en el universo. Escucho abiertamente a los demás, pero también sopeso los hechos y me mantengo firme en mi verdad.",
            },
            {
              title: "LILITH EN LA TERCERA CASA",
              text: "Con Lilith en la 3ª casa, nuestro sentido de curiosidad por el mundo y la capacidad de asombrarnos por lo que encontramos a nuestro alrededor, o podríamos encontrar, está ligado a los problemas de Lilith. Con esta ubicación aquí, si estamos ocultando a nuestra Lilith, puede haber una sensación de hastío de que el mundo no tiene cosas asombrosas para ofrecernos en un esplendor variado, y tal vez solo ofrece el juicio severo o el abuso de los demás. La naturaleza de la tercera casa curiosa, abierta y llena de maravillas de una persona es contra lo que otros han reaccionado y usado para castigar a la persona con Lilith aquí. Estas personas necesitan permitir que los demás se sientan incómodos mientras los nativos exploran el mundo que los rodea y preguntan y aprenden lo que necesitan preguntar y aprender.",
            },
          ],
        },
        {
          id: 5,
          star: "mercury",
          sign: "virgo",
          data: [
            {
              title: "Mercurio en Virgo - Casa 12",
              text: "La casa duodécima es la de las pruebas y limitaciones, la vida escondida, los secretos, los sacrificios, el exilio, la pérdida de la libertad, las renuncias, las prácticas o trabajos ocultos, la vida mística, la delincuencia, el vicio, las enfermedades crónicas, las hospitalizaciones, el inconsciente. Simboliza la terminación de un ciclo evolutivo. Aquí se disuelve el ego y el sentido de la individualidad, basados en designaciones materiales, falsas, a favor de un sentimiento de comunión y comunidad espiritual. Representa la soledad, el sacrificio, la empatía y la inspiración mística. Mercurio en esta casa favorece las ocupaciones relacionadas con asilos, hospitales beneficencia, cárceles etc. La persona es servicial y bondadosa. También le atraen los temas relacionados con misterios, tabúes, secretos y enigmas. Dotado de cierta habilidad para la reflexión, explorar el inconsciente para descubrirle porqué de las actitudes. Le incomodan los lugares colmados de gente, prefiere disfrutar de aquellos sitios tranquilos y con música suave. Ama la vida en la naturaleza y disfruta ampliamente los momentos a solas.",
            },
            {
              title: "MERCURIO EN CASA 1",
              text: "El planeta Mercurio en la casa I potencia y agudiza las facultades intelectuales, tanto abstractas como concretas. Aviva el ingenio, la habilidad y la astucia, favoreciendo una atracción natural por todo lo racional y lo científico. Son personas llenas de curiosidad por el mundo que les rodea y dotadas de gran flexibilidad y capacidad de adaptación. Sobresalen por su facilidad de expresión, tanto verbal como escrita, y suelen ser buenos oradores a la vez que polemistas; muy elocuentes, persuasivos y con gran capacidad de convicción, fruto de su natural listeza y fluidez verbal. También están dotados de una y rápida facilidad de comprensión, y su ment e se hace cargo pronto de las cosas. Es una posición que favorece un carácter inquieto y un intelecto siempre alerta. En estas personas, el lado racional domina sobre los sentimientos, emociones e instintos, y en algunas ocasiones pueden llegar a ser muy fríos. En el ámbito espiritual son más bien dados al escepticismo, sientiéndose más atraídos por los asuntos concretos y por las ambiciones mundanas. La inteligencia y el ingenio son sus mejores armas para vencer las dificultades y resolver los problemas. Si el planeta está angular, o conjunto al Ascendente, convierte al nativo en un tipo 'mercuriano', de temperamento nervioso, rostro triangular, rasgos delgados -finos y juveniles-, gestos múltiples -vivos y rápidos-. Cuando está afligido, hace que sean mentirosos y amorales, profundamente egoístas e interesados, y también chismosos, liantes y dados a utilizar  a los demás.",
            },
            {
              title: "MERCURIO TRIGONO MARTE",
              text: "Capacidad para el cálculo y las matemáticas. Mentalidad activa y previsora, habilidades marciales y mecánicas. Saber luchar limpiamente en la vida. Palabras fuertes en el lenguaje cotidiano. Querer vivir bien sin realizar esfuerzo. Mentiras banales. Locutor, periodista o lleva cuentos. Discurso polémico. Audacia en el pensar y en el actuar, tendencia belicosa, exploradora, impositiva y aguerrida. Ejecutar y ganar",
            },
            {
              title: "MERCURIO TRIGONO SATURNO",
              text: "Talentos varios, capacidad para gobernar, dirigir y organizar. Mentalidad despierta y ordenada. Constante crecimiento personal. Triunfo. Saber callar y aplicar la lógica a cualquier situación. Introspección. Carácter introspectivo, observador, analítico, filosófico, abstracto y realizador. Administrador subalterno, contador, fiscal, auditor, perito, corredor de seguros y bolsa. Saber evaluar y ser evaluado es importante. Confiar en ciertas personas es necesario. El aire de indiferencia puede hacer que las personas crean que no quiere ningún contacto social, pero en general el nativo tiene la habilidad de saber comunicarse. En algún momento de su vida laboral, puede estar seguro del éxito merecido por esfuerzo propio, lo cual le hará sentir muy orgulloso de sí mismo. El o ella puede ser un ejemplo de las recompensas que traen la constancia y el trabajo duro.",
            },
            {
              title: "MERCURIO TRIGONO URANO",
              text: "Poder mental, gran capacidad de resolución de cualquier problema. Talento excepcional. Mentalidad vanguardista. Liderazgo. Amplitud positiva de los puntos de vista, espíritu de independencia. Nervios de acero. Carácter extremadamente inquieto, movedizo, ingenioso, innovador, inconvencional e irreductiblemente independiente. Autodidacta. Estar actualizado es importante, y harán numerosos cursos, talleres, conferencias y viajes asociados a estos. Experto en su materia.",
            },
            {
              title: "MERCURIO TRIGONO NEPTUNO",
              text: "Misticismo, capacidad para comprender a los demás y sentir lo que sienten. Retorcer la verdad, para no tener que enfrentar. La educación superior es una imperativa necesidad. Esta persona no sobreestima las cualidades de otros, ni las propias. Tiende a ser impresionada por el glamour, lujo o notoriedad de otras personas, pero no queda atrapada en la ilusión. Es muy sugestionable, pero usa la sugestión propia y ajena para beneficiarse a sí mismo y a otros. Sabe canalizar constructivamente la creatividad y el psiquismo. Apto para la medicina en cualquiera de sus ramas. Vocación de servicio. Pureza de sentimientos. Fuerte magnetismo personal. Excelente e inspirada imaginación. Estados de iluminación, proféticos, románticos, misteriosos o exóticos. Poesía.",
            },
            {
              title: "MERCURIO SEXTIL PLUTON",
              text: "Mentalidad que influencia a los demás, poder mental. Increíble capacidad de concentración sugestión y autosugestión. Dones curativos, magnetismo aplicado a cosas concretas. Profundidad de pensamiento. Esta persona no hablara de lo que verdaderamente está pensando jamás, lo cual disimula muy bien estados de abatimiento o sentimientos al observador casual. Es importante confiar en alguien para hablar de los propios problemas. Actores, recitadores y locutores. Don de la observación, descubre fácilmente los defectos o flaquezas en los demás y los usa en su propio provecho. Alegría por la vida y afabilidad. Habilidad manual y presencia de espíritu en el ejercicio de su profesión. Letras.",
            },
            {
              title: "MERCURIO CONJUNCION ASCENDENTE",
              text: "Intelectual y entusiasta de cada pedacito de información que recibe, es una biblioteca andante, que siempre tiene la respuesta para todo. Para estas personas aprender es algo fácil y que no requiere de gran concentración, esto es muy bueno siempre y cuando no se burlen de otras personas que requieren un poco más de esfuerzo. Lanza la pregunta y se responde a sí mismo, no dando la oportunidad a los demás de responder sus preguntas. En las reuniones maneja las conversaciones hacia cosas que solo él puede saber. Gestual y dramático en sus discursos. La gente queda fascinada por el dominio del idioma y la eficiencia en el mensaje. Jamás tiene miedo de hablar si sabe que tiene razón, y dará todos los argumentos necesarios para convencer a su interlocutor, incluso reacciona mal e indignado ante la crítica a sus puntos de vista, pero el hecho es que no siempre tendrá la razón, en estos casos prefiere dar la pelea, antes que callarse.",
            },
          ],
        },
        {
          id: 6,
          star: "venus",
          sign: "cancer",
          data: [
            {
              title: "Venus en Cancer - Casa 11",
              text: "La casa Undécima es la de los amigos y conocidos, los clubes, las fraternidades, los contactos diarios y superficiales, las simpatías de otras personas hacia el individuo, las protecciones, las esperanzas, los proyectos y planes, los beneficios económicos derivados de la profesión o trabajo. Refleja nuestro deseo de conseguir una determinada identidad o posición por medio de la identificación con un grupo. Entramos en contacto con otras personas para intercambiar ideas y formular objetivos comunes, muchas veces destinados a mejorar la situación social actual. Simboliza experiencias colectivas, ideas humanitarias y visiones futuras destinadas al progreso de la sociedad en que vivimos. Venus en esta Casa otorga gran éxito social, popularidad, gratas amistades, beneficio, suerte, provecho por amistades. Muestra una persona que realiza sus metas, sueños. Existe la posibilidad que halle el amor a través de sus amigos o actividades sociales. Es un ser con gran capacidad para aportar influencias positivas en cualquier grupo al que pertenezca; le gusta la vida social y las actividades culturales. Es un ser que demuestra un nivel muy elevado de amistad y de compromiso con el grupo, es probable que se decepcione si otros no comparten sus ideales o no están a su altura. Es leal y su amistad es eterna. ",
            },
            {
              title: "VENUS SEXTIL MARTE",
              text: "El abandono a los sentimientos por el ser amado y la entrega absoluta aparecen aquí como aspectos predominantes del carácter. Esta entrega no se limita al contacto físico, sino que invade todas las áreas de la vida en común con una saludable y bondadosa influencia. Intereses estético y artístico. Sensualidad precoz. Excelentes amantes. El amor sexual-sensual es importante.",
            },
            {
              title: "VENUS CONJUNCION JUPITER",
              text: "Carácter imaginativo, artístico, organizador, virtuoso, o religioso, muy atrayente para el sexo opuesto, ocupaciones honorables, lucrativas, fáciles y prestigiosas. Simpatía y estimación. Protección por partida doble, beneficios y buena suerte. Gran capacidad para los deportes y actividades al aire libre. Felicidad y placer por la vida. Espiritualidad que se complementa con los factores materiales agradables de la existencia. Posición muy positiva y enriquecedora. En negativo: voluptuosidad exagerada. Vida de placeres que acaba con la salud. Inmoralidad. Espiritualidad que se contradice con las ambiciones materiales. Ostentación del dinero y del poder. Mediación. Absorbente personalismo, vanidad e hipocresía. Habilidades manuales que pueden estar al servicio de instituciones de caridad o de beneficencia. La infancia, tal vez no fue tan abundante en cosas materiales, pero si en cariño, amor y comprensión. En la vida adulta vendrán los lujos y las comodidades materiales.",
            },
            {
              title: "VENUS OPOSICION SATURNO",
              text: "Carácter modesto servicial, trato lleno de paciencia y afán de servir. Filantropía. Gusto por las cosas sencillas de la vida. Economía. Soltura y buenos propósitos. La competencia y las comparaciones son necesarias para que la persona aprenda a valorar justamente sus capacidades, usualmente se subestima tanto, que piensa que su trabajo es inútil o insignificante. Cuando intervenga la adversidad, despierta depravada sensualidad, insaciabilidad sexual. Gustos por los lujos, frialdad sensual y emotiva. Amor no correspondido, o amor alejado por circunstancias ajenas a él o la pareja, pareja que viaja, pareja muy mayor o muy menor. Las frustraciones en el ámbito emocional pueden ser compensadas con el crecimiento profesional o económico. Siempre es aquella persona que debe adaptarse a las demandas de otros por el beneficio de las relaciones. Tal vez se resigne a poner más que la pareja en la relación personal. El optimismo que se asimile con aprendizaje condicionado debe ser genuino para que funcione. No se apresure a casarse desde muy joven, a menos que esté dispuesto a sacrificar grandes cosas para mantenerlo funcionando. Si decide casarse por seguridad financiera, podría durar, pero será algo menos que una asociación en la que habrá muy pocas compensaciones emocionales",
            },
            {
              title: "VENUS OPOSICION NEPTUNO",
              text: "Talento musical y aptitudes para el canto. Sutil sentido del humor. Tiene una imaginación sin límites y a veces peligrosa. En su deseo de vivir experiencias humanas de alta excitación, puede tomar riesgos innecesarios. Su idealismo está conectado a una pantalla rosa, y cuando surgen los verdaderos colores, podría sufrir serias decepciones. Sus sueños son irrealistas. Se imagina cualidades en otros que son imposibles de alcanzar. Una vez que se rompa su confianza, difícilmente será recuperada. Sea honesto al evaluar sus talentos artísticos. Si no tiene el talento suficiente para competir, no acepte el reto, y su amor propio se verá a salvo de humillaciones de la competencia. Disfrute de su talento, pero no se compare con otros, solo es responsable de sus propias capacidades, sin importar como otros funcionen. Debido a su naturaleza sensible, sería mejor que trabajara con alguien en quien realmente confía. No se exponga en su profesión, es preferible que otro sea su representante. Su desconfianza es evidente en sus relaciones románticas, aquí es usted su peor enemigo. En relaciones íntimas, a menudo sospecha de deshonestidad, lo cual hace que sus parejas construyan paredes de defensa. Nunca se está realmente seguro de si sus sentimientos son de amor o de fascinación, y siempre teme por los resultados. Este no es un marco realista para una relación de verdadero amor. Debe ser abiertamente espontáneo y venir sin restricciones cuando discuta con su pareja. Se puede hacer mucho daño cuando se tienen secretos o dudas sobre las personas.",
            },
            {
              title: "VENUS TRIGONO PLUTON",
              text: "Gran capacidad de psicoanálisis, y/o para emitir consejos valiosos a los demás. Adaptación a las nuevas situaciones. Valor en los momentos cruciales. Ardiente unión con un ser amado. Amor profundo. Amores de otra vida o en el más allá. Amores secretos, o escondidos. Mezcla de amor sexual con amor espiritual que cambia sicológicamente al nativo. Historia de un gran amor. Amores predestinados. Lógica, estrategia y pasión se conjugan para garantizar el éxito. El amor es su bandera.",
            },
            {
              title: "VENUS SEXTIL ASCENDENTE",
              text: "La conjunción hará que el nativo adquiera rasgos 'venusinos' en su apariencia externa, carácter o temperamento, y en general en su forma de mostrarse al exterior. Favorece el atractivo físico, así como el encanto, la amabilidad y una disposición pacífica. A veces puede afeminar un poco a los hombres. Desarrolla la elegancia, la armonía y el buen gusto, así como la atracción por el arte. Son gente que concede gran importancia a los sentimientos, el amor y la amistad",
            },
          ],
        },
        {
          id: 7,
          star: "mars",
          sign: "taurus",
          data: [
            {
              title: "Marte en Tauro - Casa 8",
              text: "Los nativos de este signo son equilibrados y flexibles. Son resistentes, leales, tolerantes y muy estables. Dogmáticos, hogareños, trabajan incasablemente para conseguir sus objetivos. Les complace la ostentación, el conocimiento, las posesiones fastuosas. El entorno y el bienestar material los tranquiliza. No existe la casualidad, los acontecimientos son ideados y proyectados celosamente. No existen obstáculos para sus acciones destinadas a concretar sus metas. Los signos de tierra, como este, se fían solo de lo que pueden valorar con sus sentidos físicos y demandan resultados prácticos. Son cautelosos, disciplinados y fiables, y saben cómo funciona el mundo material. Marte en este signo otorga gran fuerza de voluntad y tenacidad. Son personas que vencen cualquier obstáculo que se les presenta. También ganan dinero fácilmente pero lo gastan de la misma manera. Es conservador y obstinado, con una buena intuición para los negocios y finanzas, posee respaldo económico, importante pues satisface su necesidad de seguridad. Crea propósitos para el futuro, sabe disponer sus energías con eficiencia, sus fines son objetivos y asequibles, no malgasta sus impulsos en funciones improductivas. Goza de un genio ecuánime, no pierde la paciencia con facilidad, pero si llegase a enfurecerse, actuará sin misericordia.",
            },
            {
              title: "MARTE EN LA OCTAVA CASA",
              text: "La octava casa es la de las herencias o legados, las pensiones, los seguros, la muerte, los sueños, la transformación, la regeneración o degeneración, las finanzas del cónyuge y de los socios, los impulsos sexuales, la actitud hacia el más allá, la forma de meditar. Simboliza los valores en una relación matrimonial o de socios, también, la capacidad de compartir. Los recursos son creados y utilizados para el bien común. Además se relaciona con las herencias, la transformación y las enfermedades virulentas. Marte en su casa natural, otorga una vida sexual dinámica, vital y ardiente. Es una persona apasionada que manifiesta emociones profundas. Muestra un excesivo impulso por la honestidad y un desprecio por lo superficial. Siente un apasionado interés por lo misterioso, enigmático, oculto.",
            },
            {
              title: "MARTE TRIGONO SATURNO",
              text: "Voluntad inquebrantable, derrumbamiento de obstáculos. Actitud pro-activa que resulta garantía de éxito. Liberación, recuperación de poder, fuerza aplicada a la perseverancia. Dominio propio, energías laboriosas, trabajador incansable. Heroísmo, consagración, sacrificio constructivo. Altruismo. Especialmente propicio para actividades que requieren de esfuerzo físico y estamínea. Logra crear sistemas de trabajo que permiten máxima eficiencia con el menor esfuerzo. Astucia prepotente, egoísmo refinado. El transcurso de su vida se caracteriza por muchas luchas. Soportar y no desanimarse, esta podría ser el lema de estas personas que después de innumerables pruebas, logran asegurarse una posición social satisfactoria. Gran resistencia física y psicológica, además de la espiritual.",
            },
            {
              title: "MARTE TRIGONO URANO",
              text: "Habilidad y capacidad para los inventos de ingenios mecánicos y eléctricos o electrónicos. Posición muy positiva para pilotos y astronautas. Actitud netamente revolucionaria. Impaciente e inconvencional. Impavidez, resolución, originalidad, heroísmo espiritual, extraordinario magnetismo personal. Suma capacidad para las actividades de hipnotismo, sugestión, magnetismo, magia, alquimia sexual. Orientado fuertemente a la libertad, la autoridad es percibida como una restricción o como una amenaza a su naturaleza. Podría convertirse en héroe para aquellas personas que tienen menos recursos espirituales, económicos, morales o físicos, o que son muy tímidas o débiles para defenderse a sí mismas. Cualquier clase de limitación, saca el lado disociador de su personalidad y pone todas sus energías en defender su forma de ser de un supuesto ataque.",
            },
            {
              title: "MARTE TRIGONO NEPTUNO",
              text: "Gran capacidad para la parasicología, idealismo pragmático que lleva a la realización personal. Aptitudes artísticas en las que el color, el sonido, el ritmo, la espiritualidad, y el drama intervengan. Baile, coreografía u otros. Fantasías sexuales irrealizables. Apariencia sumamente magnética y extrañamente atractivo. Respeto en su campo de trabajo o de interés. También hay que tener extremo cuidado en las relaciones románticas, lo que parece un enamoramiento, puede terminar siendo un escape para el nativo o para la pareja, o simplemente un apasionamiento súbito que puede acabar súbitamente. Toda relación que entable debe estar basada en la honestidad mutua o será víctima o victimario, aun sin querer. ",
            },
            {
              title: "MARTE OPOSICION PLUTON",
              text: "Voluntad muy fuerte, pese a que se logre expresar de sutiles maneras. Si no consigue lo que quiere, puede perder su temperamento y ser bastante agresivo, tiene una actitud desafiante con los efectos de sus agresiones, una seguridad en sí mismo que la mayoría teme. Cuando no está en control de sus energías internas, queda sorprendido por el efecto que tiene en otros. Tiende a exagerar los motivos de sus adversarios e incluso podría levantar barreras innecesarias para proteger sus intereses. Sus acciones no pueden ser justificadas con la lógica. Mucha, y muy positiva predisposición y ambición. Triunfo marcial. Integración a una empresa, institución, secta o religión El sexo es muy importante y puede incluso convertirse en un arma para lograr los objetivos. Especialmente puede formar alianzas poderosas, pero también podría causar seria heridas en su relación romántica. Si usa su magnetismo para atraer u obtener control sobre otros, podría verse en algún momento convertido en la victima de la obsesión de alguna persona o de un poder. Su problema es saber si va a usar su energía para poder y deseos o si lo va a utilizar para forzar las responsabilidades sociales, para hacer cambios necesarios en el ambiente o mejorar las condiciones de vida de las personas en su entorno. Es imperativo que evalúe los aspectos negativos y positivos de cualquier proposición. Debe hacerse responsable de los efectos que tiene en los demás, así que si va a hacer un compromiso, debe saber exactamente que espera obtener de esa relación y que está dispuesto a dar por ella. Aun así, es posible que por lo menos en su camino al éxito termine por negar los derechos de algunas personas, solo usted sabe si valió la pena o no. Es muy probable que usted sea muy demandante especialmente con su pareja. Podrían haber peleas domesticas por mal manejo de los ingresos, discusiones sobre quien ejerce la autoridad, o celos extremos expresados por cualquiera de los dos. También son probables los problemas de créditos y herencias.",
            },
            {
              title: "MARTE TRIGONO ASCENDENTE",
              text: "Inextinguible energía. Constantemente esta en acción, persona dinámica, pero a veces es solo inquietud física sin razón de ser. Cuando no hay autodisciplina, puede ser peligrosamente violento para sí mismo y para los demás. Necesita espacio físico y de actividad para sentirse bien. Desafía peligrosamente su suerte exponiéndose a peligros innecesarios. El ejercicio físico es casi una necesidad para canalizar el exceso de energía. Pero no necesita desperdiciar sus excesos de energías en esto, porque tiene enorme potencial creativo que sencillamente tiene que tener vías productivas de salida hacia un objetivo o meta. Cuando haga esto, el éxito no puede ser más fácil para estos individuos con energía para regalar.",
            },
          ],
        },
        {
          id: 8,
          star: "jupiter",
          sign: "cancer",
          data: [
            {
              title: "Jupiter en Cancer - Casa 11",
              text: "Los nativos de este signo son hogareños, pasionales y sensibles. Como signo de agua, se comunica con su entorno principalmente por medio de sus sentimientos, sin embargo, el exceso de sensibilidad les ocasiona grandes complicaciones, constantes discusiones que los llevan a lastimar a otros sutilmente. Poseen una necesidad involuntaria de grandes emociones, que los llevan a experimentar intensas pasiones. Júpiter en este signo muestra personas bondadosas y de muy buen humor. Disfrutan estando en familia. Son seres con buena suerte en la vida, además poseen una marcada orientación religiosa. Gozan ante una buena comida, son excelentes anfitriones. Manifiesta una persistente evolución interior, resaltando los valores de la familia y su apoyo moral. Es una persona reservada, cautelosa y protectora, Se esfuerza demasiado para prestar ayuda. Se fía más en su instinto que en la razón. Es un ser honrado, en lapsos de insuficiencia los demás pueden contar con él.",
            },
            {
              title: "JUPITER EN LA UNDECIMA CASA",
              text: "La casa Undécima es la de los amigos y conocidos, los clubes, las fraternidades, los contactos diarios y superficiales, las simpatías de otras personas hacia el individuo, las protecciones, las esperanzas, los proyectos y planes, los beneficios económicos derivados de la profesión o trabajo. Refleja nuestro deseo de conseguir una determinada identidad o posición por medio de la identificación con un grupo. Entramos en contacto con otras personas para intercambiar ideas y formular objetivos comunes, muchas veces destinados a mejorar la situación social actual. Simboliza experiencias colectivas, ideas humanitarias y visiones futuras destinadas al progreso de la sociedad en que vivimos. Júpiter en esta Casa muestra una persona popular, jovial, con muchos amigos. Sus proyectos, deseos y ambiciones se realizan gracias a su enorme perseverancia e inteligencia. Reafirma su identidad rodeándose de amigos, éstos ayudan en su crecimiento interior. Optimista, no le faltan metas y objetivos en la vida, constantemente está mirando hacia delante. ",
            },
            {
              title: "JUPITER OPOSICION SATURNO",
              text: "Complemento y equilibrio entre espiritualidad y materialismo. Honestidad, integridad responsabilidad. Saber guardar un secreto y cumplir cabalmente con la palabra dada. Genialidad, cultura de gobierno democrático. Administrador, político. Carácter previsor, filósofo, especulativos y realizador, religioso o moralista. Mente superior. �xito garantizado, pero no sin algún esfuerzo. Riesgos siempre calculados. Usura, desprestigio, espíritu miserable, lucha interna entre el bien y el mal. El problema aquí es que nunca está realmente seguro de sus capacidades y cualidades, necesita ser reafirmado constantemente debido a la falta de seguridad profesional y también en lo personal que siente. Tiene una baja imagen de sí mismo, que en nada se parece a la persona que realmente es. Necesita aprobación constante y consulta a todos antes de tomar una decisión cualquiera, dando a entender que no puede tomarla usted solo. Por otro lado, tiende a asociarse con personas que lo van aprobar, no importa lo que haga, encontrando la aprobación que busca. Pero que tan real puede ser la aprobación que se obtiene de esta manera? No sería mejor sencillamente hacer lo que sabe que debe hacer sin prestar atención a nadie, sino solo a sus competidores, y tomar las decisiones de todas formas. Obviamente no puede enfrentar la verdad, y rechaza a las personas que tienen sus mismas cualidades. Algunas veces solo está inclinado a ser irresponsable y a buscar salidas fáciles para cualquier problema que tenga, o a no cumplir con sus compromisos por no molestarse, o a no colaborar con sus socios en una empresa en común. De no corregir estas actitudes, podría encontrarse con problemas de leyes y abogados. Debe trabajar por lo que quiere junto con sus asociados, igual o más que ellos por los beneficios de una vida mejor para todos. Mente calculadora.",
            },
          ],
        },
        {
          id: 9,
          star: "saturn",
          sign: "capricorn",
          data: [
            {
              title: "Saturno en Capricornio - Casa 5",
              text: "Capricornio es conservador, cauteloso, tierno y afectuoso. En ocasiones un poco dominante y poco complaciente. Es muy tranquilo y posee una gran habilidad para trasmitir su calma. Como signo del elemento tierra, destaca por su integridad y seriedad. Inteligente, pragmático, siempre se propone metas prácticas. Los signos de tierra confían en lo que pueden apreciar con sus sentidos físicos y aspiran a resultados concretos y útiles. Son determinados, disciplinados y fiables, y comprenden muy bien el funcionamiento del mundo material. Saturno en este signo muestra un ser dotado de honestidad e integridad. Es un arduo trabajador, persistente y metódico. Posee una fuerte ambición de poder o autoridad en su profesión, los negocios o la política. Siente la necesidad de llegar muy alto en su carrera. Es un ser conservador, disciplinado y responsable. Le agrada planificar muy bien los pasos que dará, sus proyectos son bien pensados y eficaces. Puede parecer algo indiferente y aislado pues evita naufragar al relacionarse sentimentalmente.",
            },
            {
              title: "SATURNO EN LA QUINTA CASA",
              text: "La quinta casa es la de la creatividad, de los placeres y por tanto de los hijos, los juegos de azar, los deportes, los romances, las personas que nos simpatizan, la tendencia pedagógica, la vestimenta. Simboliza nuestro anhelo de expresar las cualidades únicas de nuestra personalidad con todo su resplandor y plenitud. Aquí se manifiesta nuestro placer de experimentar, de relacionarnos con los niños y con el niño que habita en nosotros. La Quinta Casa nos provee discernimiento acerca de la sexualidad, del placer de vivir y de nuestra constitución física Saturno en esta Casa muestra a un ser condescendiente, cauteloso y diplomático. Posee cierta inseguridad y dificultad para expresar lo que piensa y lo que siente pues teme ser rechazado. Es una persona creativa, práctica y muy trabajadora. Oculta sus estados de ánimo, es un ser que anhela un hogar armonioso y con muchos hijos",
            },
            {
              title: "SATURNO CONJUNCION NEPTUNO",
              text: "Espiritualidad y misticismo. Difícilmente se le podrá engañar por mucho tiempo, pues pueden oler la mentira a Km. Ruptura con los lazos materiales. Carácter espiritual, ascético, inspirado, previdente, dotado de un profundo sentido moral y apasionada generosidad. Muy dueño de sí mismo y capaz de grandes obras. Fracasos materiales, sentimentales y espirituales. Mentalidad obsesiva, estupidez. Cretinismo. Malversación de las ciencias ocultas. Fobias. Perdida de la dentadura. Viajes por mar. Confusiones con el medio ambiente que no entiende al nativo. Sistema óseo propenso a afecciones. Teme a lo desconocido por que le gusta estar preparado para lo que venga, sabe improvisar pero no le gusta hacerlo por que incrementa el rango de error humano. En el romance, también románticamente realista y práctico. Evite la automedicación y tome todas las precauciones en este sentido. Las vitaminas artificiales, estimulantes y antidepresivos no son para usted por que pueden tener efectos negativos.",
            },
            {
              title: "SATURNO SEXTIL PLUTON",
              text: "Sabiduría. Increíbles golpes de fortuna. Radical cambio de curso en la vida. Gran proyección y ascensión personal. Poder. Control absoluto de los propios recursos internos, emocionales, psicológicos y a veces espirituales. Control sobre los miedos traumas, complejos y culpas, tanto propios como de los demás.",
            },
            {
              title: "SATURNO TRIGONO ASCENDENTE",
              text: "Asertivo y controlado, puede ser algo tímido en su desenvolvimiento social. Incluso algunos podrían sentir que es indiferente a ellos. Conservador y auto disciplinado en su comportamiento. Falta de confianza en sus capacidades que eventualmente será reemplazada por seguridad en sí mismo a medida que se conozca a sí mismo. No tiene la agresividad que impresiona a primera vista a las personas, pero inspira confianza y aprenden a depender de él. Otros pueden ver sus cualidades mucho antes que el mismo nativo. Es lento para comenzar, pero una vez lo hace, nada ni nadie lo detendrá en un esfuerzo constante, firme y eficiente, atenido a un plan previamente establecido cuidadosamente por el mismo. Necesita el reconocimiento de sus esfuerzos, si no del público, de sus personas favoritas. Se toma su tiempo para tomar decisiones. Responsable hasta el extremo. Es capaz de grandes sacrificios para cumplir con su palabra. Pueden haber personas que abusen de él, pero solo hasta que aprende a ser la clase personas que lucha por sus derechos, nunca olvidara estos incidentes, esperara hasta que ellos necesiten de su ayuda, y aunque no sea vengativo, reaccionara con fría indiferencia.",
            },
          ],
        },
        {
          id: 11,
          star: "uranus",
          sign: "capricorn",
          data: [
            {
              title: "Saturno en Capricornio - Casa 4",
              text: "Capricornio es conservador, cauteloso, tierno y afectuoso. En ocasiones un poco dominante y poco complaciente. Es muy tranquilo y posee una gran habilidad para trasmitir su calma. Como signo del elemento tierra, destaca por su integridad y seriedad. Inteligente, pragmático, siempre se propone metas prácticas. Los signos de tierra confían en lo que pueden apreciar con sus sentidos físicos y aspiran a resultados concretos y útiles. Son determinados, disciplinados y fiables, y comprenden muy bien el funcionamiento del mundo material. Urano muestra a una generación con gran capacidad para liderar y organizar. Son personas generalmente serias y formales, con aptitudes para efectuar transformaciones reveladoras en lo político o económico transmitiendo siempre sus conocimientos sobre la preservación del entorno. ",
            },
            {
              title: "URANO EN LA CUARTA CASA",
              text: "La cuarta casa es la del principio y el final de la vida, representa aquel lado de la personalidad que es oculto, nuestras raíces, nuestra estirpe y nuestros sentimientos más profundos. El hogar paterno y el propio, los bienes inmobiliarios y territoriales, el padre, el instinto y las tradiciones familiares, cambios de residencia y sus condiciones. Esta casa se relaciona con el mundo del subconsciente, la base emocional, la madre como símbolo de amparo y nutrición. Urano en la esta Casa muestra a una persona con ideas poco convencionales sobre el amor, la familia y la sexualidad. Sus cuestiones amorosas son románticas, pasionales, especiales o encubiertas. Experimenta repentinos cambios de ánimo, es muy independiente en sus asuntos familiares. En general es un ser que necesita hallar una identidad más concreta, encontrar la forma de expresar sus sentimientos naturalmente.",
            },
            {
              title: "URANO CONJUNCION NEPTUNO",
              text: "Espiritualidad. Ingenio artístico creativo, técnico o científico. Intuición elevada y espiritual. Responde a las personas primero comprendiendo sus predicamentos sociales o económicos, aun sabiendo que tal vez no pueda hacer mucho solo. Las fuerzas combinadas con otros que compartan su misma inquietud y sensibilidad social, puede ser una fuerza poderosa para, por lo menos, aliviar las condiciones inhumanas en las que muchos deben vivir. Solo juntos pueden restaurar orden y libertad donde había caos y privaciones. Contactos increíbles e inexplicables. Vida de entrega y servicio a los demás. Longevidad en plena lucidez. Dudas, tormentos y sentimientos de dolor o remordimientos de conciencia. Grandes descubrimientos o invenciones científicas o médicas. La persona vive fuera de su tiempo, en el futuro o en el pasado. Puede sufrir de enfermedades nerviosas, hereditarias o adquiridas. Sistema nervioso y sistema linfático relacionados por mal metabólico. Se da cuenta de que la mayoría de los líderes se aprovecha de la decepción de las personas para manipularlas y mantenerse en el poder, lo cual le molesta profundamente. Pertenece a una generación que no tolerara abusos de poder, y comprende que la libertad debe ser resguardada de sus ofensores o de la erosión política de las leyes.",
            },
            {
              title: "URANO TRIGONO ASCENDENTE",
              text: "Naturaleza original. La individualidad personificada. Gran sensibilidad. Es admirado por la mayoría, temido o envidiado por otros, especialmente por aquellos que sienten temor por la increíble consciencia de sí mismo y que sienten envidia ante la total espontaneidad del nativo. Química para la gente. Ciertamente, esto no es a propósito, pero a veces la gente se siente sobrecogida ante estos nativos, porque se sienten insignificantes o cohibidos, ante la manera totalmente libre y honesta en la que se comporta. Si es necesario, llegara a extremos para preservar lo que considera es su derecho a la libertad y a hacer las cosas como quiere y cuando quiera. Deseos de hacer una importante contribución a la humanidad. Accesos de malhumor. Defenderá agresivamente los derechos de cada persona, a ser lo que quiere y cuando quiera, en algunos casos esta actitud solo es rebeldía a ultranza, pero en la mayoría, es necesario que alguien se enfrente y denuncie los abusos de poder, sean de personas o de instituciones. Consiente del futuro, está siempre ansioso de participar en todo aquello que implique subir el nivel de conciencia colectiva.",
            },
          ],
        },
        {
          id: 12,
          star: "neptune",
          sign: "capricorn",
          data: [
            {
              title: "Neptuno en Capricornio - Casa 4",
              text: "Capricornio es conservador, cauteloso, tierno y afectuoso. En ocasiones un poco dominante y poco complaciente. Es muy tranquilo y posee una gran habilidad para trasmitir su calma. Como signo del elemento tierra, destaca por su integridad y seriedad. Inteligente, pragmático, siempre se propone metas prácticas. Los signos de tierra confían en lo que pueden apreciar con sus sentidos físicos y aspiran a resultados concretos y útiles. Son determinados, disciplinados y fiables, y comprenden muy bien el funcionamiento del mundo material. Neptuno indica una generación con gran habilidad para concretar lo imaginado. Con gran capacidad práctica, con gran confianza en sí mismos, en su propio desempeño. Son personas con mucha claridad mental, dotado de gran aptitud para la organización. Poseen gran conciencia y responsabilidad ecológica, muy respetuosos de las normas y pautas de comportamiento.",
            },
            {
              title: "NEPTUNO EN LA CUARTA CASA",
              text: "La cuarta casa es la del principio y el final de la vida, representa aquel lado de la personalidad que es oculto, nuestras raíces, nuestra estirpe y nuestros sentimientos más profundos. El hogar paterno y el propio, los bienes inmobiliarios y territoriales, el padre, el instinto y las tradiciones familiares, cambios de residencia y sus condiciones. Esta casa se relaciona con el mundo del subconsciente, la base emocional, la madre como símbolo de amparo y nutrición. Neptuno en esta casa indica una intensa sensibilidad en relación a su medio, con un ambiente familiar muy particular. Posee la predisposición de absorber y reflejar las influencias que lo rodean. Le apasiona el mar y la serenidad que este le transmite. Le agrada el aislamiento, melancólico, reflexivo y muy cauteloso.",
            },
            {
              title: "NEPTUNO SEXTIL PLUTON",
              text: "Regeneración social. Libertad. Independencia, igualdad entre sus semejantes, quisieran la abolición de las miserias humanas. Mentalidad revolucionaria activa y positiva. Voluntad de poder, al mismo tiempo anhelos de lograrlo por vías extrañas, lejanas o futuras. El sueño y el subconsciente se unen en mismo propósito, al mismo tiempo ponen el esfuerzo constante en esa dirección. Vagabundeo mental y a veces físico. Enfermedades metabólicas y pandémicas. Sensibilidad o alergias a medicamentos. Dependencia necesaria de medicamentos o vitaminas. Pertenecen a grupos, virtuales o reales que cuidan de la naturaleza y de la humanidad. La religión sobre todo deberá ser revisada por estas generaciones, que la pondrán al servicio de la vida cotidiana para toda la humanidad.",
            },
            {
              title: "NEPTUNO TRIGONO ASCENDENTE",
              text: "Rica imaginación, temperamento artístico, inclinación al misticismo, sueños muy vividos, o premonitorios, soñadores. Muestra que es muy sensible, y tal vez psíquico. La percepción del mundo real es deformada o amoldada para que encaje con lo que el nativo desea ver, lo cual lo mantiene impermeable a las arideces de la vida vulgar. Profeta vera u oirá lo que será o es mas allá de la realidad física inmediata. Obra de arte, música y baile forman un mundo propio en el cual el nativo se sumerge cuando la vida se vuelve pesada. Las injusticias de la vida le pueden producir males reales y físicos. Cuando la gente le falla en los tratos con usted, siempre tiende a darles el beneficio de la duda, y silenciosamente calla su decepción. A menudo se desconsuela por las cosas sobre las que no tiene ningún control, y sus sentimientos de culpa y fracaso lo pueden llevar a un mundo en el cual no se puede estar siempre. Si el efecto de un evento es lo suficientemente abrasivo, puede recurrir a elementos artificiales para inducir alivio a las realidades dolorosas. Atrae a personas extrañas y de carácter fuerte que pueden querer controlarlo. Debe asociarse a personas que tengan los pies en la tierra, para compensar su naturaleza, a veces difusa o vaga. Necesita estabilidad en la realidad, donde si puede hacer mucho bien. Existe una gran necesidad de gente comprensiva en el mundo. Largos y hermosos viajes por mar o ultramarinos.",
            },
          ],
        },
        {
          id: 13,
          star: "pluto",
          sign: "scorpio",
          data: [
            {
              title: "Pluton en Escorpio - Casa 2",
              text: "El nativo de Escorpio es impetuoso, apasionado, muy susceptible, intuitivo y concentra todas sus energías en lograr lo que se propone, aunque son muy temidos porque descubren el punto débil de los demás y saben cómo y cuándo usarlo. También suelen ser un poco negativos y depresivos cuando las cosas no ocurren como lo desean. El posesivo Escorpio no resiste la traición, usualmente compite por tener el control de la situación. Es ardiente, pasional y tierno, pero su inseguridad emocional lo perturba ya que es profundamente celoso. Se juega todo por las personas que quiere. Este signo pertenece al elemento agua y regido por los planetas Marte y Plutón, dispone de un extraordinario exceso de energía que puede manifestarse inesperadamente. Como signo de agua, se comunica con su entorno principalmente por medio de sus sentimientos Plutón en su propio signo muestra seres con mucha facilidad para experimentar transformaciones. Poseen un gran deseo de establecer relaciones profundas. Esta generación experimenta profundas reflexiones sobre la prudencia del manejo de la fuerza imprevista. Para ellos las energías alternativas y el reciclaje están cobrando cada día más importancia. Pertenece a una generación que pretende traspasar las apariencias con el fin de llegar la profundidad de todo, al corazón o la esencia de las cosas.",
            },
            {
              title: "PLUTON EN LA SEGUNDA CASA",
              text: "La segunda casa es la de las posesiones, las ganancias y las pérdidas financieras, indica la forma como el individuo conserva o derrocha su patrimonio. La Segunda Casa representa nuestro deseo de conseguir y poseer valores palpables, económicos y espirituales que necesarios para el bienestar de toda nuestra existencia. Representa lo que aspiramos, la tendencia a atesorar, los negocios y fuentes de ingresos. Así mismo se relaciona con nuestras conexiones emocionales. Plutón en esta Casa revela una fuerte inclinación por lo material, el ser posee recursos múltiples para generar ingresos con posibilidades de obtener grandes ganancias. Si se concentra obsesivamente en sus posesiones, es probable que la energía de este planeta arruine estas formas superficiales de reafirmación, para que pueda revelar quién es verdaderamente. Involuntariamente, cuando esté saturado de tanta hipocresía provocará el desastre con el fin de hallar sentido y valorar profundamente su existencia.",
            },
            {
              title: "PLUTON SEXTIL ASCENDENTE",
              text: "La conjunción da al nativo una personalidad y una apariencia exterior 'plutonianas'. Lo dota de un carácter fuerte y dominante, así como de una voluntad poderosa, unida a una mente clarividente y sumamente penetrante. Hay en él cierto halo de misterio, debido a que en su interior se desarrolla un gran conflicto entre un lado dominado por los instintos primitivos y otro que ambiciona las más altas cimas espirituales. Por otra parte, posee una profunda energía que puede canalizar de forma constructiva o destructiva. A lo largo de su vida, experimentará grandes crisis o trascendentales transformaciones y, al mismo tiempo, podrá transformar a sus semejantes. En lo físico, posee una fortaleza y resistencia mucho mayores de lo que aparentan.",
            },
          ],
        },
      ],
      distribution: [
        {
          name: "cardinal",
          title: "Cardinales",
          value: 38.4,
          data: "Los signos cardinales son los más asertivos, los más interesados ​​en iniciar el cambio. Su modo de actividad es comenzar cosas nuevas. Empiezan cosas fácilmente y responden bien a nuevas ideas. Son emprendedores. La crisis los motiva. Alcanzan el control permaneciendo un paso por delante de los demás. Aries busca liderazgo y control en general, Cáncer controla las emociones, el hogar y la familia; Libra intenta controlar las asociaciones; Capricornio controla, usa y explota el entorno material. Para los signos cardinales, las cosas siempre suceden. Por lo general, esto se debe a que son ellos los que comienzan. Los cuatro signos cardinales se encuentran en el primer mes de cada temporada.",
        },
        {
          name: "fixed",
          title: "Fijos",
          value: 30.8,
          data: "Los carteles fijos son los más estables y autónomos. Su modo de actividad es algo pasivo, pero decidido, inquebrantable e incluso terco. Su fuerza es su constancia y lealtad. Siguen las cosas hasta el final, gestionando y manteniendo lo que ha comenzado con los signos cardinales. Pueden llegar a la negación en tiempos de cambio. Son muy resistentes al cambio y necesitan tomarse un tiempo para prepararse. Suelen llegar tarde: Tauro es lento; Escorpio usa la tardanza como una lucha de poder sutil; Leo disfruta haciendo una entrada; Acuario quiere las cosas en sus propios términos. Tarde, pero una vez allí, se quedan para siempre. Los cuatro signos fijos se encuentran en el mes medio de cada temporada.",
        },
        {
          name: "mutable",
          title: "Mutables",
          value: 30.8,
          data: "Los signos mutables son los más inestables y los más abiertos a la influencia del entorno. Su modo de actividad es hacer la transición de lo viejo a lo nuevo, abriendo el camino para que los Signos Cardinales comiencen un nuevo ciclo. Son infinitamente flexibles y tolerantes. Les resulta naturalmente fácil dejarse llevar. Mientras que los signos cardinales inician cosas nuevas y los signos fijos sostienen las cosas, la energía mutable afloja las estructuras y las adapta a condiciones nuevas y cambiantes. Con este territorio viene la preocupación mental. Los signos mutables tienen muchas cosas en la cabeza en lugar de en forma tangible. Muchos reaccionan haciendo listas. Algunos sufren de tensión mental negativa, que incluye miedo, paranoia y ataques de pánico. Al anticipar los resultados negativos, realmente sufren durante el proceso de preocupación. Pero su alta adaptabilidad siempre les ayuda a salir adelante. Géminis es cambiante en sus ideas; Virgo está dominado por su entorno; Sagitario tiene una visión continuamente cambiante de las posibilidades de la vida; Piscis se adapta superficialmente a su entorno (como un camaleón) y lo refleja como un espejo. A veces se comprometen tanto que sacrifican sus propios intereses. Los cuatro signos Mutables están en el último mes de cada temporada.",
        },
      ],
      elements: [
        {
          name: "fire",
          title: "Fuego",
          value: 7.6,
          data: "Los signos de fuego son Aries, Leo y Sagitario. Los signos de fuego responden a la energía muy rápidamente. Favorecen la acción. Están listos para ir, arriesgarse, iniciar un negocio, ir de viaje, etc. Son seguros, idealistas, intensos y afrontan la vida con entusiasmo y entusiasmo. Aquí hay energía para conquistar, liderar y viajar física y mentalmente. Aries debe actuar, Leo debe liderar grandiosamente y Sagitario explora lugares e ideas desconocidos. Palabras clave positivas : extrovertido, enérgico, entusiasta, inspirador, visionario, alegre, sencillo y directo, físicamente activo, dramático, valiente, cálido. Palabras clave negativas : demasiado activo hasta el punto del agotamiento, inquieto, impaciente, egoísta, insensible, voluntarioso, apresurado, carente de perspectiva, irreflexivo, impulsivo, imprudente, extravagante, salvaje.",
        },
        {
          name: "earth",
          title: "Tierra",
          value: 46.2,
          data: "Los signos de Tierra son Tauro, Virgo y Capricornio. Los signos de tierra son más cautelosos en su enfoque. Son más prácticos, realistas y necesitan una base sólida antes de seguir adelante. Tauro se esforzará y realmente reflexionará sobre las cosas. Virgo analizará. Capricornio trepará, pero lo hará con cuidado, primero necesitando una visión, un plan, una estructura organizada antes de iniciar el ascenso. Los signos de tierra son confiables, completos y sólidos. Los signos de tierra buscan involucrar al mundo físico y dominarlo a través de una organización eficiente. Los signos de tierra buscan seguridad económica, respeto y prestigio, y trabajan duro por ello. Palabras clave positivas : práctico, eficiente, organizado, realista, paciente, autodisciplinado, trabajador, productivo, perdurable, persistente, confiable, estable, buen sentido común. Palabras clave negativas : lento, pesado, falto de visión, poco imaginativo, mezquino, excesivamente convencional, de mente estrecha, obstinado, resistente al cambio, acaparamiento, ultraconservador.",
        },
        {
          name: "air",
          title: "Aire",
          value: 15.4,
          data: "Los signos de aire son Géminis, Libra y Acuario. Los signos de aire se acercan a la energía mentalmente; son pensadores. Son sociales, siempre listos para una nueva relación o amistad. Les encanta aprender, pero se aburren fácilmente. Géminis tiene una gran curiosidad intelectual, pero demasiadas personalidades. Libra se basa en la asociación, pero no de una manera emocional. Acuario es popular entre los amigos y es imparable cuando tiene una causa que defender. Los signos de aire están en ideas y personas. Son comunicativos; deben compartir información, interactuar con otros e influir en la sociedad. Palabras clave positivas : articulado, objetivo, mentalmente claro, desapegado, capaz de previsión, comprensión, socialmente hábil y adaptable, cooperativo, relacional. Palabras clave negativas : sin emociones, sin simpatía, poco práctico, disociado del cuerpo y el mundo físico, sobreadaptativo, abstraído, simplista y fácil, hiperactivo.",
        },
        {
          name: "water",
          title: "Agua",
          value: 30.8,
          data: "Los signos de agua responden a la energía de forma casi inconsciente. Son profundamente emocionales. El cáncer está motivado para nutrirse y ser nutrido. Escorpio tiene una visión intensa, nunca se balancea, mira al frente con un enfoque similar al de un láser. Piscis es el más complicado de describir. La energía de Piscis es como un camaleón, absorbiendo su entorno. Palabras clave positivas : profundamente emocional, comprensivo, empático, cariñoso, tranquilo y pacífico, sensible, compasivo, imaginativo, intuitivo, psíquicamente consciente. Palabras clave negativas : emocionalmente inseguro e inestable, tímido, tímido, falto de confianza, hipersensible, fácilmente influenciable y manipulado, retraído, poco comunicativo, vengativo y vengativo, se lo toma todo como algo personal, temperamental y deprimido.",
        },
      ],
      polarity: [
        {
          name: "masculine",
          title: "Masculino",
          value: 23.1,
          data: "Los seis signos yang son Aries, Leo, Sagitario, Géminis, Libra y Acuario. Estos son los signos de fuego y aire. Estos signos son más activos y asertivos que receptivos.",
        },
        {
          name: "femenine",
          title: "Femenino",
          value: 76.9,
          data: "Los otros seis signos son la energía yin, que también se conoce como energía «femenina». Los seis signos yin son Tauro, Virgo, Capricornio, Cáncer, Escorpio y Piscis. Estos son los signos de Tierra y Agua. Estos signos son más receptivos y reactivos que activos.",
        },
      ],
      quadrants: [
        {
          name: "1",
          title: "1",
          value: "9",
          data: "El primer cuadrante abarca las casas 1, 2 y 3. Cuando el peso de los planetas se acumula en este cuadrante existe una llamada muy fuerte hacia el desarrollo personal. Se trata de conectar con la verdadera esencia y comunicarla al mundo. La meditación puede ayudar y también el tomar conciencia de la propia identidad, sin dejarse deslumbrar por el carisma de otros ni tratar de seguir los pasos de un padre brillante o los dictados de una pareja dominante. Si la mayoría de tus planetas están en el primer cuadrante surge la pregunta… ¿Qué es lo que de verdad deseo? Una vez se obtiene la respuesta, se trabaja muy duro para la consecución de la propia voluntad. Averiguar cuáles son tus dones y dónde reside la parte más brillante de tu ser, te ayudarán a garantizar el éxito en la ardua empresa de la realización.",
        },
        {
          name: "2",
          title: "2",
          value: "45.5",
          data: "El segundo cuadrante corresponde a las casas 4, 5 y 6. Cuando la energía de la carta se concentra en el segundo cuadrante, la integración en el ambiente circundante es imprescindible en la formación de la propia identidad. Si se ha crecido en familias disfuncionales o se ha tenido una primera infancia difícil en algún sentido, será necesario trabajar por revertir la tendencia y crear un entorno agradable que favorezca el crecimiento y la evolución como personas. Y es que las experiencias pasadas han de servir de aprendizaje, no de lacra. La armonía en el entorno familiar y en el lugar de trabajo permitirán el correcto desarrollo de la personalidad. Establecer unos hábitos de vida saludables y trabajar por el bienestar afectará positivamente a todas las áreas de la vida.",
        },
        {
          name: "3",
          title: "3",
          value: "9",
          data: "El tercer cuadrante engloba las casas 7, 8 y 9. Cuando el peso planetario se encuentra en este cuadrante, la energía está claramente enfocada a la relación con otros. El amor se convierte en un campo de experimentación y descubrimiento. A través de la mirada del otro, el nativo aprende a identificarse a sí mismo. Se ve reflejado y crece con cada interacción. El reto es compartir sin renunciar, crecer sin que su ego se disuelva. Las relaciones interpersonales cobran un papel protagonista, permitiendo que la persona evolucione sin límites. A través de las interacciones con personas significativas se incrementa el nivel de conciencia y evolución.",
        },
        {
          name: "4",
          title: "4",
          value: "36.5",
          data: "El cuarto cuadrante está formado por las casas 10, 11 y 12. Si la mayoría de los planetas de tu carta se encuentran en este cuadrante, tu energía vital irá dirigida al trabajo en la sociedad por la búsqueda de un bien común. Se trata de una integración a un nivel transpersonal. Deberás ser capaz de dejar «tu huella», de generar un impacto y garantizar un legado. Es imprescindible trascender los intereses meramente egoístas y centrarse en la gran escala. Se trata de perseguir las metas propuestas, sin dejarse influenciar por la opinión estandarizada. Combinar los intereses individuales con el bien común se convierte en un requisito imprescindible para las personas con un cuarto cuadrante protagonista.",
        },
      ],
    };

    context.emit("getData", db);
  },
};
</script>

<style>
</style>