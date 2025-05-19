export const projects = {
    "banco-de-semillas": {
      title: "Banco de semillas",
      category: "Institucional",
      location: "Córdoba, Argentina",
      description:
        "“Sinergia” es un espacio donde la naturaleza, la educación ambiental y la cultura se entrelazan. El proyecto propone la reconversión de un edificio histórico en un centro comunitario sustentable. Tres funciones coexisten: un banco de semillas, un espacio expositivo y una cafetería.",
      year: "2024",
      area: " Intervención interior en edificio patrimonial con uso comunitario y sustentable",
      client: "Constanza Ceballos",
      services: ["Banco de semillas: Área de conservación y trabajo técnico", "Área de exposición sensorial: Espacio educativo e interactivo", "Cafetería: Lugar de encuentro y descanso, con fuerte integración interior-exterior", "Espacios exteriores: Vegetación autóctona, recorrido guiado, gradas, mobiliario fijo"],
      images: [
        "/images/Banco_de_Semillas/renders/BS_Entrada.png",
        "/images/Banco_de_Semillas/renders/BS_Exposicion.png",
        "/images/Banco_de_Semillas/renders/BS_Parque.png",
        "/images/Banco_de_Semillas/renders/BS_Laboratorio.png",
        "/images/Banco_de_Semillas/renders/BS_Baño.png",
        "/images/Banco_de_Semillas/renders/BS_Gradas.png",
      ],
      plans: [
        "/images/Banco_de_Semillas/planos/BS_Cortes_textura.jpg",
        "/images/Banco_de_Semillas/planos/BS_Planta_iluminacion.jpg",
        "/images/Banco_de_Semillas/planos/BS_Planta_textura.png",
        "/images/Banco_de_Semillas/planos/BS_Planta_techo.jpg",
        "/images/Banco_de_Semillas/planos/BS_Planta_textura_vegetacion.jpg",
        "/images/Banco_de_Semillas/planos/BS_Planta_textura2.jpg",

      ]
    },
    "refugio": {
      title: "Refugio",
      category: "Evento privado",
      location: "Bit house",
      description:
        "“Refugio” es un evento inmersivo que fusiona música, ambientación y arte sensorial para crear un espacio de desconexión e introspección colectiva. Inspirado en el estilo hygge, la propuesta busca generar calidez, intimidad y conexión con el entorno natural de las sierras de Córdoba.",
      year: "2024",
      client: "Eduardo Sueldo",
      services: [" Módulo 1" , "- Ingreso & transición interior" , "- Hojas colgantes de libros viejos definen el recorrido y enmarcan el acceso." , "- Velas, vegetación e iluminación cálida guían al visitante hacia el corazón del evento.", 
  
                      "Módulo 2",
                "- Escenario tiny desk",
                "- Escenario íntimo con inspiración doméstica: alfombras, almohadones, libros antiguos.",
                "- Disposición sin barreras entre público y artista, evocando un living musical.",
                "- Atardecer serrano como telón de fondo natural.", 

                "Módulo 3",
                "- Estudio Rubí",
                "- Espacio privado sensorial con luz roja tenue, sin mobiliario fijo.",
                "- Inspiración en estudios de grabación para generar introspección.",
                "- Experiencia audiovisual e instalaciones pensadas para interacción en redes sociales.", 
                
                "Módulos 4, 5 y 6",
                "- Exteriores funcionales",
                "- Fogón, barra, patio y zonas de comida al aire libre.",
                "- Equipamiento mínimo pero cálido (mantas, leña, velas, almohadones).",
                "- Promueven el descanso y el retorno al escenario.",  ],
      images: [
        "/images/Refugio/Escenario.jpg",
        "/images/Refugio/Hojas.jpg",
        "/images/Refugio/Espacio Rojo.jpg",
        "/images/Refugio/Puff.jpg",
        "/images/Refugio/Esenario con banda.JPG",
        "/images/Refugio/Espacio Rojo2.jpg",
        "/images/Refugio/Cortina.JPG",
      ],
    },
    "bar-tematico": {
      title: "Bar Temático",
      category: "Hospitality",
      location: "Manila",
      description:
        "An adaptation of the Omotesando Koffee concept for the Manila market, featuring warm wood tones and a contemporary interpretation of Japanese minimalism. The space balances functionality with aesthetic appeal, creating a serene environment for coffee appreciation.",
      year: "2023",
      area: "95 sqm",
      client: "",
      services: ["Interior Design", "Furniture Design", "Lighting Design"],
      images: [
        "/images/Bar_tematico/renders/H_Fachada_noche.png",
        "/images/Bar_tematico/renders/ingreso.png",
        "/images/Bar_tematico/renders/juego_zoom.png",
        "/images/Bar_tematico/renders/Semicubierto.png",
      ],
      plans: [
        "/images/Bar_tematico/planos/H_Corte_Barra_2.jpg",
        "/images/Bar_tematico/planos/H_Corte_cc.jpg",
        "/images/Bar_tematico/planos/H_Corte_dd.jpg",
        "/images/Bar_tematico/planos/H_Planta_Acotada.jpg",
        "/images/Bar_tematico/planos/H_Planta_textura.jpg",

      ]
    },
  }

export type Project = typeof projects[keyof typeof projects]
