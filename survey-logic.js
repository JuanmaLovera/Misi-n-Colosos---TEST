window.SURVEY_LOGIC = {
  "enabled": true,
  "serviceUrl": "https://services3.arcgis.com/4hHTP4dgE6gy26kB/arcgis/rest/services/survey123_bc6588a1171b4459b527e1dd1736b1d5/FeatureServer",
  "layerId": 0,
  "categories": {
    "protected": {
      "title": "Reserva Natural",
      "subtitle": "Descubrí al guardián de una reserva",
      "officialValue": "Árbol más grande de las Áreas S",
      "icon": "🦜",
      "completionXp": 220,
      "seeds": 8,
      "modules": [
        "gps",
        "photos",
        "species",
        "measure",
        "protectedArea"
      ]
    },
    "school": {
      "title": "La Escuela",
      "subtitle": "Descubrí una leyenda escolar",
      "officialValue": "Árbol de mi escuela",
      "icon": "🏫",
      "completionXp": 180,
      "seeds": 6,
      "modules": [
        "gps",
        "photos",
        "species",
        "measure",
        "story",
        "school"
      ]
    },
    "giant": {
      "title": "Bosque Gigante",
      "subtitle": "Encontrá un árbol enorme",
      "officialValue": "Árbol más grande del Paraguay",
      "icon": "🌳",
      "completionXp": 150,
      "seeds": 5,
      "modules": [
        "gps",
        "photos",
        "species",
        "measure"
      ]
    },
    "community": {
      "title": "Pueblo Antiguo",
      "subtitle": "Rescatá una historia",
      "officialValue": "Árbol de mi comunidad",
      "icon": "📖",
      "completionXp": 120,
      "seeds": 4,
      "modules": [
        "gps",
        "photos",
        "species",
        "measure",
        "story"
      ]
    },
    "photo": {
      "title": "Safari Fotográfico",
      "subtitle": "Conseguí una foto legendaria",
      "officialValue": "Mejor fotografía de naturaleza",
      "icon": "📸",
      "completionXp": 80,
      "seeds": 2,
      "modules": [
        "gps",
        "mainPhoto",
        "photoDate"
      ]
    }
  },
  "actionXp": {
    "gps": 20,
    "photo": 15,
    "mainPhoto": 30,
    "speciesKnown": 30,
    "speciesOther": 20,
    "speciesUnknown": 8,
    "measure": 25,
    "story": 25,
    "protectedArea": 15,
    "school": 10,
    "photoDate": 5
  },
  "fieldMap": {
    "category": "categor_a_a_la_que_deseas_parti",
    "name": "nombres_y_apellidos",
    "institution": "nombre_de_la_instituci_n_educat",
    "institutionRole": "cargo_dentro_de_la_instituci_n",
    "phone": "n_mero_de_tel_fono_celular_o_l_",
    "species": "especie_a_postular_nombre_com_n",
    "speciesOther": "especie_a_postular_nombre_com_n_other",
    "height": "altura_del_rbol_metros",
    "circumference": "circunferencia_del_rbol_metros",
    "story": "contanos_la_historia_de_tu_colo",
    "photoDate": "fecha_de_captura_de_la_foto",
    "protectedArea": "nombre_del_rea_silvestre_proteg",
    "terms": "_aceptas_las_bases_y_condicione",
    "country": "pa_s"
  },
  "attachmentMap": {
    "leaves": "envianos_3_fotos_de_tu_coloso_s",
    "trunk": "Foto2",
    "full": "Foto3",
    "main": "foto_del_rbol"
  },
  "choices": {
    "species": [
      {
        "value": "No conozco la especie",
        "label": "No conozco la especie"
      },
      {
        "value": "Agua'i",
        "label": "Agua'i"
      },
      {
        "value": "Algarrobo",
        "label": "Algarrobo"
      },
      {
        "value": "Cancharana",
        "label": "Cancharana"
      },
      {
        "value": "Cedro",
        "label": "Cedro"
      },
      {
        "value": "Coronillo",
        "label": "Coronillo"
      },
      {
        "value": "Eucalipto",
        "label": "Eucalipto"
      },
      {
        "value": "Gomero",
        "label": "Gomero"
      },
      {
        "value": "Guajayvi",
        "label": "Guajayvi"
      },
      {
        "value": "Guapo'y",
        "label": "Guapo'y"
      },
      {
        "value": "Guatambu",
        "label": "Guatambu"
      },
      {
        "value": "Inga",
        "label": "Inga"
      },
      {
        "value": "Jatayva",
        "label": "Jatayva"
      },
      {
        "value": "Kupa'y",
        "label": "Kupa'y"
      },
      {
        "value": "Kurupa'y",
        "label": "Kurupa'y"
      },
      {
        "value": "Kurupika'y",
        "label": "Kurupika'y"
      },
      {
        "value": "Manduvira_",
        "label": "Manduvira "
      },
      {
        "value": "Mango",
        "label": "Mango"
      },
      {
        "value": "Ombu",
        "label": "Ombu"
      },
      {
        "value": "Laurel",
        "label": "Laurel"
      },
      {
        "value": "Pakuri",
        "label": "Pakuri"
      },
      {
        "value": "Palmeras",
        "label": "Palmeras"
      },
      {
        "value": "Peterevy",
        "label": "Peterevy"
      },
      {
        "value": "Peroba",
        "label": "Peroba"
      },
      {
        "value": "Samu'u",
        "label": "Samu'u"
      },
      {
        "value": "Taruma'i",
        "label": "Taruma'i"
      },
      {
        "value": "Tatajyva",
        "label": "Tatajyva"
      },
      {
        "value": "Tatarẽ_",
        "label": "Tatarẽ "
      },
      {
        "value": "Timbo",
        "label": "Timbo"
      },
      {
        "value": "Tipa",
        "label": "Tipa"
      },
      {
        "value": "Urunde'y",
        "label": "Urunde'y"
      },
      {
        "value": "Yvapovõ",
        "label": "Yvapovõ"
      },
      {
        "value": "Yvyraro",
        "label": "Yvyraro"
      },
      {
        "value": "Ysapy'y",
        "label": "Ysapy'y"
      },
      {
        "value": "Kurupa'yra",
        "label": "Kurupa'yra"
      },
      {
        "value": "Kagueti",
        "label": "Kagueti"
      },
      {
        "value": "Joyvy",
        "label": "Joyvy"
      },
      {
        "value": "Yvyry",
        "label": "Yvyry"
      },
      {
        "value": "Kuruguai",
        "label": "Kuruguai"
      },
      {
        "value": "Incienso",
        "label": "Incienso"
      },
      {
        "value": "Guavira",
        "label": "Guavira"
      },
      {
        "value": "Jaguarata'y",
        "label": "Jaguarata'y"
      },
      {
        "value": "Trebol",
        "label": "Trebol"
      },
      {
        "value": "Juasy'y Guasu",
        "label": "Juasy'y Guasu"
      },
      {
        "value": "Guayacán",
        "label": "Guayacán"
      },
      {
        "value": "Alecrín (Yvyra pepe)",
        "label": "Alecrín (Yvyra pepe)"
      },
      {
        "value": "Jakare pito",
        "label": "Jakare pito"
      },
      {
        "value": "Joavy Guasu",
        "label": "Joavy Guasu"
      },
      {
        "value": "Ka'a oveti",
        "label": "Ka'a oveti"
      },
      {
        "value": "Ka'i ka'ygua",
        "label": "Ka'i ka'ygua"
      },
      {
        "value": "Kurupa'y Kuru",
        "label": "Kurupa'y Kuru"
      },
      {
        "value": "Laurel hu",
        "label": "Laurel hu"
      },
      {
        "value": "Palo santo",
        "label": "Palo santo"
      },
      {
        "value": "Palo blanco",
        "label": "Palo blanco"
      },
      {
        "value": "Palo piedra (Yvyra ita)",
        "label": "Palo piedra (Yvyra ita)"
      },
      {
        "value": "Pino Paraná",
        "label": "Pino Paraná"
      },
      {
        "value": "Prosopis ruscifolia (Viñal)",
        "label": "Prosopis ruscifolia (Viñal)"
      },
      {
        "value": "Quebracho blanco",
        "label": "Quebracho blanco"
      },
      {
        "value": "Quebracho colorado",
        "label": "Quebracho colorado"
      },
      {
        "value": "Tajy - Lapacho",
        "label": "Tajy - Lapacho"
      },
      {
        "value": "Taruma Guasu",
        "label": "Taruma Guasu"
      },
      {
        "value": "Urunde'y para",
        "label": "Urunde'y para"
      },
      {
        "value": "Urunde'y pyta",
        "label": "Urunde'y pyta"
      },
      {
        "value": "Yvyra Pytã",
        "label": "Yvyra Pytã"
      },
      {
        "value": "Yvyraju (Ka'i kyhyjeha)",
        "label": "Yvyraju (Ka'i kyhyjeha)"
      },
      {
        "value": "Yerba Mate",
        "label": "Yerba Mate"
      },
      {
        "value": "Yvyra piu",
        "label": "Yvyra piu"
      },
      {
        "value": "Yukyry vusu",
        "label": "Yukyry vusu"
      },
      {
        "value": "Manduvi guasu",
        "label": "Manduvi guasu"
      },
      {
        "value": "Ybopé - Espina de corona",
        "label": "Ybopé - Espina de corona"
      },
      {
        "value": "Ceibo",
        "label": "Ceibo"
      },
      {
        "value": "Espinillo",
        "label": "Espinillo"
      },
      {
        "value": "Ficus",
        "label": "Ficus"
      },
      {
        "value": "Kamba akã",
        "label": "Kamba akã"
      },
      {
        "value": "Kuruñai",
        "label": "Kuruñai"
      },
      {
        "value": "Pino",
        "label": "Pino"
      },
      {
        "value": "other",
        "label": "Otro"
      }
    ],
    "heights": [
      {
        "value": "10",
        "label": "10"
      },
      {
        "value": "11",
        "label": "11"
      },
      {
        "value": "12",
        "label": "12"
      },
      {
        "value": "13",
        "label": "13"
      },
      {
        "value": "14",
        "label": "14"
      },
      {
        "value": "15",
        "label": "15"
      },
      {
        "value": "16",
        "label": "16"
      },
      {
        "value": "17",
        "label": "17"
      },
      {
        "value": "18",
        "label": "18"
      },
      {
        "value": "19",
        "label": "19"
      },
      {
        "value": "20",
        "label": "20"
      },
      {
        "value": "21",
        "label": "21"
      },
      {
        "value": "22",
        "label": "22"
      },
      {
        "value": "23",
        "label": "23"
      },
      {
        "value": "24",
        "label": "24"
      },
      {
        "value": "25",
        "label": "25"
      },
      {
        "value": "26",
        "label": "26"
      },
      {
        "value": "27",
        "label": "27"
      },
      {
        "value": "28",
        "label": "28"
      },
      {
        "value": "29",
        "label": "29"
      },
      {
        "value": "30",
        "label": "30"
      },
      {
        "value": "31",
        "label": "31"
      },
      {
        "value": "32",
        "label": "32"
      },
      {
        "value": "33",
        "label": "33"
      },
      {
        "value": "34",
        "label": "34"
      },
      {
        "value": "35",
        "label": "35"
      },
      {
        "value": "36",
        "label": "36"
      },
      {
        "value": "37",
        "label": "37"
      },
      {
        "value": "38",
        "label": "38"
      },
      {
        "value": "39",
        "label": "39"
      },
      {
        "value": "40",
        "label": "40"
      },
      {
        "value": "41",
        "label": "41"
      },
      {
        "value": "42",
        "label": "42"
      },
      {
        "value": "43",
        "label": "43"
      },
      {
        "value": "44",
        "label": "44"
      },
      {
        "value": "45",
        "label": "45"
      },
      {
        "value": "46",
        "label": "46"
      },
      {
        "value": "47",
        "label": "47"
      },
      {
        "value": "48",
        "label": "48"
      },
      {
        "value": "49",
        "label": "49"
      },
      {
        "value": "50",
        "label": "50"
      }
    ],
    "circumferences": [
      {
        "value": "1",
        "label": "1"
      },
      {
        "value": "1_5",
        "label": "1.5"
      },
      {
        "value": "2",
        "label": "2"
      },
      {
        "value": "2_5",
        "label": "2.5"
      },
      {
        "value": "3",
        "label": "3"
      },
      {
        "value": "3_5",
        "label": "3.5"
      },
      {
        "value": "4",
        "label": "4"
      },
      {
        "value": "4_5",
        "label": "4.5"
      },
      {
        "value": "5",
        "label": "5"
      },
      {
        "value": "5_5",
        "label": "5.5"
      },
      {
        "value": "6",
        "label": "6"
      },
      {
        "value": "6_5",
        "label": "6.5"
      },
      {
        "value": "7",
        "label": "7"
      },
      {
        "value": "7_5",
        "label": "7.5"
      },
      {
        "value": "8",
        "label": "8"
      },
      {
        "value": "8_5",
        "label": "8.5"
      },
      {
        "value": "9",
        "label": "9"
      },
      {
        "value": "9_5",
        "label": "9.5"
      },
      {
        "value": "10",
        "label": "10"
      },
      {
        "value": "10_5",
        "label": "10.5"
      },
      {
        "value": "11",
        "label": "11"
      },
      {
        "value": "11_5",
        "label": "11.5"
      },
      {
        "value": "12",
        "label": "12"
      }
    ],
    "protectedAreas": [
      {
        "value": "Areas Protegidas Toldo Cue",
        "label": "Areas Protegidas Toldo Cue"
      },
      {
        "value": "Especial 1ra Division de Caball",
        "label": "Especial 1ra Division de Caballeria"
      },
      {
        "value": "Especial Tte 1ro Adolfo Rojas S",
        "label": "Especial Tte 1ro Adolfo Rojas Silva"
      },
      {
        "value": "Especial Cnel Valois Rivarola",
        "label": "Especial Cnel Valois Rivarola"
      },
      {
        "value": "Monumento Cientifico Moises Ber",
        "label": "Monumento Cientifico Moises Bertoni"
      },
      {
        "value": "Monumento Natural Macizo Acahay",
        "label": "Monumento Natural Macizo Acahay"
      },
      {
        "value": "Monumento Natural Santa Elena (",
        "label": "Monumento Natural Santa Elena (caverna, vallemi)"
      },
      {
        "value": "Monumento Natural Laguna Sisi",
        "label": "Monumento Natural Laguna Sisi"
      },
      {
        "value": "Monumento Natural Laguna Méndez",
        "label": "Monumento Natural Laguna Méndez"
      },
      {
        "value": "Monumento Natural Cerro Chovore",
        "label": "Monumento Natural Cerro Chovoreca"
      },
      {
        "value": "Monumento Natural Caverna Kamba",
        "label": "Monumento Natural Caverna Kamba Hopo"
      },
      {
        "value": "Monumento Natural Tres Cerros-s",
        "label": "Monumento Natural Tres Cerros-santa caverna-14 de Julio y Santa Caverna"
      },
      {
        "value": "Monumento Natural Cerro Morado",
        "label": "Monumento Natural Cerro Morado Caverna Ycua Pai"
      },
      {
        "value": "Monumento Natural Cerro Chorori",
        "label": "Monumento Natural Cerro Chorori"
      },
      {
        "value": "Monumento Natural Cerro Koi",
        "label": "Monumento Natural Cerro Koi"
      },
      {
        "value": "Monumento Natural Cerro Cabrera",
        "label": "Monumento Natural Cerro Cabrera - Timane"
      },
      {
        "value": "Monumento Natural Isla Susu",
        "label": "Monumento Natural Isla Susu"
      },
      {
        "value": "Areas Protegidas Jukyty Guasú",
        "label": "Areas Protegidas Jukyty Guasú"
      },
      {
        "value": "Reserva Natural Municipal Huasi",
        "label": "Reserva Natural Municipal Huasipango"
      },
      {
        "value": "Reserva Nacional Kuri'y",
        "label": "Reserva Nacional Kuri'y"
      },
      {
        "value": "Reserva Para Parque Nacional Ca",
        "label": "Reserva Para Parque Nacional Carrizales del Paraná"
      },
      {
        "value": "Reserva Para Parque Nacional Is",
        "label": "Reserva Para Parque Nacional Isla Carrizal"
      },
      {
        "value": "Reserva Municipal y Paisaje Pro",
        "label": "Reserva Municipal y Paisaje Protegido Cerro Lambaré"
      },
      {
        "value": "Otras Categorias Generico Reser",
        "label": "Otras Categorias Generico Reserva Natural"
      },
      {
        "value": "Paisaje Protegido Ycua Bolaños",
        "label": "Paisaje Protegido Ycua Bolaños"
      },
      {
        "value": "Paisaje Protegido Salto del Mod",
        "label": "Paisaje Protegido Salto del Moday"
      },
      {
        "value": "Paisaje Protegido Cerro Kavaju",
        "label": "Paisaje Protegido Cerro Kavaju"
      },
      {
        "value": "Paisaje Protegido Estero Yetyty",
        "label": "Paisaje Protegido Estero Yetyty"
      },
      {
        "value": "Paisaje Protegido Cerro Bogarin",
        "label": "Paisaje Protegido Cerro Bogarin"
      },
      {
        "value": "Paisaje Protegido Laguna Vera",
        "label": "Paisaje Protegido Laguna Vera"
      },
      {
        "value": "Paisaje Protegido Arroyo Yukyry",
        "label": "Paisaje Protegido Arroyo Yukyry"
      },
      {
        "value": "Paisaje Protegido Cerro Dos de",
        "label": "Paisaje Protegido Cerro Dos de Oro"
      },
      {
        "value": "Parque Nacional Ybycui",
        "label": "Parque Nacional Ybycui"
      },
      {
        "value": "Parque Nacional Teniente Agripi",
        "label": "Parque Nacional Teniente Agripino Enciso"
      },
      {
        "value": "Parque Nacional Bella Vista",
        "label": "Parque Nacional Bella Vista"
      },
      {
        "value": "Parque Nacional Saltos del Guai",
        "label": "Parque Nacional Saltos del Guairá"
      },
      {
        "value": "Parque Nacional Ñacunday",
        "label": "Parque Nacional Ñacunday"
      },
      {
        "value": "Parque Nacional San Rafael",
        "label": "Parque Nacional San Rafael"
      },
      {
        "value": "Parque Nacional Lago Ypoa",
        "label": "Parque Nacional Lago Ypoa"
      },
      {
        "value": "Parque Nacional Paso Bravo",
        "label": "Parque Nacional Paso Bravo"
      },
      {
        "value": "Parque Nacional Medanos del Cha",
        "label": "Parque Nacional Medanos del Chaco"
      },
      {
        "value": "Parque Nacional Defensores del",
        "label": "Parque Nacional Defensores del Chaco"
      },
      {
        "value": "Parque Nacional Cerro Cora",
        "label": "Parque Nacional Cerro Cora"
      },
      {
        "value": "Parque Nacional Rio Negro",
        "label": "Parque Nacional Rio Negro"
      },
      {
        "value": "Parque Nacional Cerro Cristo Re",
        "label": "Parque Nacional Cerro Cristo Rey"
      },
      {
        "value": "Parque Nacional Caazapá",
        "label": "Parque Nacional Caazapá"
      },
      {
        "value": "Parque Nacional Serrania San Lu",
        "label": "Parque Nacional Serrania San Luis"
      },
      {
        "value": "Refugio de Vida Silvestre Yabeb",
        "label": "Refugio de Vida Silvestre Yabebyry"
      },
      {
        "value": "Reserva Cientifica Reserva Cien",
        "label": "Reserva Cientifica Reserva Cientifica Ybera"
      },
      {
        "value": "Reserva de las Entidades Binaci",
        "label": "Reserva de las Entidades Binacionales Reserva Natural Carapá"
      },
      {
        "value": "choice_54",
        "label": "Reserva de las Entidades Binacionales Refugio Biológico Mbaracayú"
      },
      {
        "value": "choice_55",
        "label": "Reserva de las Entidades Binacionales Reserva Biológica Limoy"
      },
      {
        "value": "choice_56",
        "label": "Reserva de las Entidades Binacionales Reserva Biológica Limoy"
      },
      {
        "value": "choice_57",
        "label": "Reserva de las Entidades Binacionales Reserva Natural Pikyry"
      },
      {
        "value": "choice_58",
        "label": "Reserva de las Entidades Binacionales Reserva Biológica Itabo"
      },
      {
        "value": "choice_59",
        "label": "Reserva de las Entidades Binacionales Refugio de Vida Silvestre Yvytu Rokai"
      },
      {
        "value": "choice_60",
        "label": "Reserva de las Entidades Binacionales Refugio Biológico Tati Yupi"
      },
      {
        "value": "choice_61",
        "label": "Reserva de las Entidades Binacionales Reserva Biológica Isla Yacyreta"
      },
      {
        "value": "Reserva de Recursos Manejados Ñ",
        "label": "Reserva de Recursos Manejados Ñu Guazu"
      },
      {
        "value": "Reserva de Recursos Manejados Y",
        "label": "Reserva de Recursos Manejados Ybytyruzu"
      },
      {
        "value": "Reserva de Recursos Manejados H",
        "label": "Reserva de Recursos Manejados Humedales del Bajo Chaco"
      },
      {
        "value": "Reserva de Recursos Manejados T",
        "label": "Reserva de Recursos Manejados Tinfunque"
      },
      {
        "value": "Reserva de Recursos Manejados E",
        "label": "Reserva de Recursos Manejados Edelira"
      },
      {
        "value": "choice_67",
        "label": "Reserva de Recursos Manejados Humedales del Bajo Chaco"
      },
      {
        "value": "Reserva de Recursos Manejados L",
        "label": "Reserva de Recursos Manejados Lago Ypacarai"
      },
      {
        "value": "Reserva Ecológica Capiibary",
        "label": "Reserva Ecológica Capiibary"
      },
      {
        "value": "Reserva Ecológica Banco San Mig",
        "label": "Reserva Ecológica Banco San Miguel y Bahía de Asunción"
      },
      {
        "value": "Reserva Ictica Reserva Ictica",
        "label": "Reserva Ictica Reserva Ictica"
      },
      {
        "value": "Reserva Natural Bosque Ybyraty",
        "label": "Reserva Natural Bosque Ybyraty"
      },
      {
        "value": "Reserva Natural Reserva Natural",
        "label": "Reserva Natural Reserva Natural Ñu Guazu"
      },
      {
        "value": "choice_74",
        "label": "Reserva Natural Reserva Natural Lote N° 1"
      },
      {
        "value": "choice_75",
        "label": "Reserva Natural Reserva Natural Cañada El Carmen"
      },
      {
        "value": "choice_76",
        "label": "Reserva Natural Reserva Natural Arcadia"
      },
      {
        "value": "choice_77",
        "label": "Reserva Natural Reserva Natural Punie Pasoi"
      },
      {
        "value": "choice_78",
        "label": "Reserva Natural Reserva Natural Jaguarete Pora"
      },
      {
        "value": "choice_79",
        "label": "Reserva Natural Reserva Natural Palmar Quemado"
      },
      {
        "value": "choice_80",
        "label": "Reserva Natural Reserva Natural Toro Mocho"
      },
      {
        "value": "Reserva Natural Reserva Natual",
        "label": "Reserva Natural Reserva Natual Cerrados del Tagatiya"
      },
      {
        "value": "choice_82",
        "label": "Reserva Natural Reserva Natural Tagatiya-mi"
      },
      {
        "value": "choice_83",
        "label": "Reserva Natural Reserva Natural Guayacan I II III"
      },
      {
        "value": "choice_84",
        "label": "Reserva Natural Reserva Natural Arroyo Blanco"
      },
      {
        "value": "choice_85",
        "label": "Reserva Natural Reserva Natural Kai Rague"
      },
      {
        "value": "choice_86",
        "label": "Reserva Natural Reserva Natural Piroy"
      },
      {
        "value": "choice_87",
        "label": "Reserva Natural Reserva Natural del Bosque Mbaracayú"
      },
      {
        "value": "choice_88",
        "label": "Reserva Natural Reserva Natural Laguna Blanca"
      },
      {
        "value": "choice_89",
        "label": "Reserva Natural Reserva Natural Morombi"
      },
      {
        "value": "choice_90",
        "label": "Reserva Natural Reserva Natural La Morena"
      },
      {
        "value": "choice_91",
        "label": "Reserva Natural Reserva Natural Tapiracuai"
      },
      {
        "value": "choice_92",
        "label": "Reserva Natural Reserva Natural Ypeti"
      },
      {
        "value": "choice_93",
        "label": "Reserva Natural Reserva Natural Tabucai"
      },
      {
        "value": "choice_94",
        "label": "Reserva Natural Reserva Natural Itakyry"
      },
      {
        "value": "choice_95",
        "label": "Reserva Natural Reserva Natural Maharishi"
      },
      {
        "value": "choice_96",
        "label": "Reserva Natural Reserva Natural Maharishi II"
      },
      {
        "value": "choice_97",
        "label": "Reserva Natural Reserva Natural Yguasú"
      },
      {
        "value": "choice_98",
        "label": "Reserva Natural Reserva Natural Tapyta"
      },
      {
        "value": "choice_99",
        "label": "Reserva Natural Reserva Natural Guyrati"
      },
      {
        "value": "choice_100",
        "label": "Reserva Natural Reserva Natural Arroyo Aguapey"
      },
      {
        "value": "choice_101",
        "label": "Reserva Natural Reserva Natural del Bosque Arary"
      },
      {
        "value": "choice_102",
        "label": "Reserva Natural Reserva Natural Cuenca  del Arroyo Tacuary Chopy Sayju"
      },
      {
        "value": "Reserva Natural Riacho Florida",
        "label": "Reserva Natural Riacho Florida II"
      },
      {
        "value": "Reserva Natural Arrecife",
        "label": "Reserva Natural Arrecife"
      },
      {
        "value": "Reserva Natural Estrella",
        "label": "Reserva Natural Estrella"
      },
      {
        "value": "Reserva Natural El Ceibo",
        "label": "Reserva Natural El Ceibo"
      },
      {
        "value": "Reserva Natural Villa Josefina",
        "label": "Reserva Natural Villa Josefina"
      },
      {
        "value": "Reserva Natural Ita Poty",
        "label": "Reserva Natural Ita Poty"
      },
      {
        "value": "Reserva Natural Guasu Pucu",
        "label": "Reserva Natural Guasu Pucu"
      },
      {
        "value": "Reserva Natural Mainumby",
        "label": "Reserva Natural Mainumby"
      },
      {
        "value": "Reservas de la Biosfera Gran Ch",
        "label": "Reservas de la Biosfera Gran Chaco Gran Chaco"
      },
      {
        "value": "Reservas de la Biosfera Mbaraca",
        "label": "Reservas de la Biosfera Mbaracayú Mbaracayú"
      },
      {
        "value": "Reservas de la Biosfera Río Apa",
        "label": "Reservas de la Biosfera Río Apa Cerrado del Río Apa"
      },
      {
        "value": "Sitios Ramsar Estero Milagro",
        "label": "Sitios Ramsar Estero Milagro"
      },
      {
        "value": "Sitios Ramsar Chaco Lodge",
        "label": "Sitios Ramsar Chaco Lodge"
      },
      {
        "value": "Sitios Ramsar Laguna Tte. Rojas",
        "label": "Sitios Ramsar Laguna Tte. Rojas Silva"
      },
      {
        "value": "other",
        "label": "Otro"
      }
    ]
  }
};
