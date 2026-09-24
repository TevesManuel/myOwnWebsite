export type Language = 'es' | 'en';

export interface LegalSection {
  heading: string;
  content: string;
}

export interface LegalTabContent {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export interface LegalModalContent {
  modalTitle: string;
  closeBtn: string;
  tabs: {
    privacy: string;
    terms: string;
    cookies: string;
  };
  privacy: LegalTabContent;
  terms: LegalTabContent;
  cookies: LegalTabContent;
}

export interface TranslationContent {
  nav: {
    brand: string;
    tevesTech: string;
    projects: string;
    schedule: string;
    social: string;
    trajectory: string;
    education: string;
    scheduleMeeting: string;
  };
  hero: {
    name: string;
    roleItalic: string;
    summary: string;
    ctaSchedule: string;
    ctaContact: string;
    ctaProjects: string;
  };
  tevesTech: {
    title: string;
    role: string;
    websiteUrl: string;
    websiteLabel: string;
    description: string;
    description2: string;
    highlights: string[];
    viewSiteBtn: string;
    scheduleBtn: string;
  };
  projects: {
    title: string;
    subtitle: string;
    expandBtn: string;
    collapseBtn: string;
    scrollHint: string;
    items: Array<{
      id: string;
      title: string;
      category: string;
      description: string;
      tags: string[];
      imageUrl?: string;
      placeholderText?: string;
      linkUrl: string;
      linkLabel: string;
      isExternalRepo?: boolean;
    }>;
  };
  scheduleSection: {
    title: string;
    subtitle: string;
    reasonsTitle: string;
    reasons: string[];
    ctaButton: string;
    secondaryEmail: string;
    directUrl: string;
  };
  socialContent: {
    title: string;
    subtitle: string;
    channels: Array<{
      id: string;
      platform: string;
      handle: string;
      url: string;
    }>;
  };
  trajectory: {
    title: string;
    subtitle: string;
    scrollHint: string;
    prevBtn: string;
    nextBtn: string;
    items: Array<{
      role: string;
      company: string;
      period: string;
      location: string;
      description: string;
      links?: Array<{ label: string; url: string }>;
    }>;
  };
  education: {
    title: string;
    subtitle: string;
    expandBtn: string;
    collapseBtn: string;
    scrollHint: string;
    items: Array<{
      institution: string;
      degree: string;
      periodOrBadge: string;
      description: string;
    }>;
  };
  footer: {
    copyright: string;
    subline: string;
    backToTop: string;
    privacyLink: string;
    termsLink: string;
    cookiesLink: string;
    legalModal: LegalModalContent;
  };
}

export const translations: Record<Language, TranslationContent> = {
  es: {
    nav: {
      brand: 'Manuel Tomas Teves',
      tevesTech: 'Teves Tech',
      projects: 'Proyectos',
      schedule: 'Agendar',
      social: 'Contenido',
      trajectory: 'Trayectoria',
      education: 'Estudios',
      scheduleMeeting: 'Agendar reunión',
    },
    hero: {
      name: 'Manuel Tomas Teves',
      roleItalic: 'Software Architect - Teves Tech Founder',
      summary:
        'Arquitecto de software y fundador tecnológico. Especializado en diseño de sistemas distribuidos de alto rendimiento, microservicios escalables, ingeniería web full-stack y sistemas embebidos. Enfoque riguroso en simplicidad, rendimiento y código limpio.',
      ctaSchedule: 'Agendar reunión',
      ctaContact: 'Escribirme a contacto@tvs.ar',
      ctaProjects: 'Ver proyectos autónomos',
    },
    tevesTech: {
      title: 'Teves Tech',
      role: 'Founder & Software Architect (Feb. 2026 — Actualidad)',
      websiteUrl: 'https://tvs.ar',
      websiteLabel: 'tvs.ar',
      description:
        'Fundé Teves Tech como una firma de ingeniería tecnológica especializada en desarrollo de software de alta gama, sistemas backend distribuidos, paneles operativos y sistemas electrónicos a medida.',
      description2:
        'Trabajamos con clientes corporativos y startups en toda Latinoamérica y a nivel internacional, priorizando robustez técnica, con infraestructura en la nube y optimización de latencia.',
      highlights: [
        'Sistemas distribuidos y backend de alta escalabilidad',
        'Ingeniería web moderna y paneles de control operativos',
        'Sistemas embebidos, diseño de firmware e IoT',
        'Experiencias interactivas 3D y Realidad Aumentada',
      ],
      viewSiteBtn: 'Conocer Teves Tech (tvs.ar)',
      scheduleBtn: 'Agendar reunión técnica',
    },
    projects: {
      title: 'Proyectos autónomos',
      subtitle:
        'Plataformas independientes y productos tecnológicos concebidos, diseñados y construidos de principio a fin.',
      expandBtn: 'Desplegar proyectos autónomos',
      collapseBtn: 'Colapsar proyectos',
      scrollHint: 'Desliza horizontalmente o usa las flechas para explorar',
      items: [
        {
          id: 'menuqr',
          title: 'MenuQR',
          category: 'SaaS / Gastronomía & Retail',
          description:
            'Plataforma de menú digital interactiva y ágil mediante códigos QR. Desarrollada para ofrecer navegación móvil instantánea, actualización en tiempo real de cartas y eliminación de tiempos de espera.',
          tags: ['React', 'TypeScript', 'Node.js', 'Cloud', 'QR Engine'],
          imageUrl: 'https://fs.tvs.ar/menu/logo.png',
          linkUrl: 'https://menu.tvs.ar',
          linkLabel: 'Visitar',
        },
        {
          id: 'tuqr',
          title: 'tuQR',
          category: 'SaaS / Identidad Digital & Comercio',
          description:
            'Ecosistema corporativo para la generación, administración y trazabilidad inteligente de códigos QR dinámicos con vitrinas virtuales y analíticas de escaneo en tiempo real.',
          tags: ['SaaS', 'Dynamic QR', 'Analytics', 'Full-Stack'],
          imageUrl: '/tuqr.png',
          linkUrl: 'https://qr.tvs.ar',
          linkLabel: 'Visitar',
        },
        {
          id: 'cubik-solver',
          title: 'Cubik Solver',
          category: 'Algoritmos & Ciencias de la Computación',
          description:
            'Aplicación interactiva y robot que resuelve cualquier estado del Cubo de Rubik en pasos matemáticamente óptimos utilizando el algoritmo Kociemba de dos fases, con renderizado 3D interactivo.',
          tags: ['Algoritmo Kociemba', 'Python', 'C++', '3D UI', 'Robótica'],
          imageUrl:
            'https://i.ytimg.com/vi/lJaRIiqqeOI/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLATfUbgGZ9uVxDmw2qu_olAkQKQjw',
          linkUrl: 'https://github.com/TevesManuel/rubiksSolverRobot',
          linkLabel: 'Ver código en GitHub',
          isExternalRepo: true,
        },
        {
          id: 'hospital-booking',
          title: 'Hospital Booking App',
          category: 'HealthTech & Sistemas de Gestión',
          description:
            'Plataforma integral de reserva y administración de citas médicas. Optimiza el flujo entre doctores y pacientes mediante calendarios dinámicos, historial clínico centralizado y seguridad clínica.',
          tags: ['React', 'Full-Stack', 'REST APIs', 'Database Design'],
          imageUrl:
            'https://raw.githubusercontent.com/TevesManuel/hospital-booking-app/refs/heads/main/doc/images/home-image.png',
          linkUrl: 'https://github.com/TevesManuel/hospital-booking-app/',
          linkLabel: 'Ver código en GitHub',
          isExternalRepo: true,
        },
      ],
    },
    scheduleSection: {
      title: 'Agendar una reunión',
      subtitle:
        'Reserva un espacio directamente en mi calendario para discutir arquitectura técnica, proyectos o nuevas oportunidades.',
      reasonsTitle: 'Temas frecuentes para agendar:',
      reasons: [
        'Consultoría o diseño de arquitectura de software para sistemas de alta demanda',
        'Desarrollo integral de productos web, plataformas SaaS o sistemas distribuidos',
        'Ingeniería de firmware, IoT y prototipado de hardware a medida',
        'Oportunidades de contratación o liderazgo técnico ejecutivo',
      ],
      ctaButton: 'Abrir calendario en meet.tvs.ar',
      secondaryEmail: 'O escríbeme a contacto@tvs.ar',
      directUrl: 'https://meet.tvs.ar',
    },
    socialContent: {
      title: 'También hago contenido',
      subtitle:
        'Comparto conocimientos prácticos sobre ingeniería de software, arquitectura de sistemas, hardware, electrónica y el día a día construyendo tecnología.',
      channels: [
        {
          id: 'ig-personal',
          platform: 'Instagram Personal',
          handle: '@teves_manu',
          url: 'https://www.instagram.com/teves_manu/',
        },
        {
          id: 'ig-company',
          platform: 'Instagram Teves Tech',
          handle: '@teves_tech',
          url: 'https://www.instagram.com/teves_tech/',
        },
        {
          id: 'youtube',
          platform: 'YouTube',
          handle: '@teves_tech',
          url: 'https://www.youtube.com/@teves_tech',
        },
        {
          id: 'linkedin',
          platform: 'LinkedIn Personal',
          handle: 'Manuel Teves',
          url: 'https://www.linkedin.com/in/tevesmanuel/',
        },
        {
          id: 'linkedin-company',
          platform: 'LinkedIn Teves Tech',
          handle: 'Teves Tech',
          url: 'https://linkedin.com/company/teves_tech',
        },
        {
          id: 'github',
          platform: 'GitHub',
          handle: 'TevesManuel',
          url: 'https://github.com/TevesManuel',
        },
      ],
    },
    trajectory: {
      title: 'Trayectoria profesional',
      subtitle:
        'Línea de tiempo horizontal con el historial completo de roles profesionales, liderazgo técnico e ingeniería de sistemas.',
      scrollHint: 'Desliza horizontalmente o usa las flechas para navegar por cada etapa',
      prevBtn: '← Anterior',
      nextBtn: 'Siguiente →',
      items: [
        {
          company: 'Teves Tech',
          role: 'Founder',
          period: 'Feb. 2026 — Actualidad',
          location: 'La Plata, Buenos Aires / Remoto',
          description:
            'Fundación y liderazgo técnico integral. Desarrollo de sistemas distribuidos, análisis de grafos, plataformas web de alto rendimiento y arquitectura tecnológica corporativa.',
          links: [{ label: 'tvs.ar', url: 'https://tvs.ar/' }],
        },
        {
          company: 'tab_',
          role: 'Co-Founder & CTO',
          period: 'Feb. 2025 — Jul. 2026',
          location: 'En remoto',
          description:
            'Gestión de infraestructuras de tecnologías de la información y dirección del desarrollo de sistemas. Arquitectura de soluciones escalables, optimización de infraestructura y herramientas a medida.',
        },
        {
          company: 'Universidad Nacional de La Plata',
          role: 'Supervisor de laboratorio (INFOTEC)',
          period: 'Mar. 2025 — Oct. 2025',
          location: 'La Plata, Argentina · Jornada parcial',
          description:
            'Supervisor del laboratorio INFOTEC (UNITEC - UNLP), donde realicé investigación, diseño de arquitectura, desarrollo e implementación de soluciones en Realidad Aumentada, firmware, aplicaciones móviles y servicios backend.',
        },
        {
          company: 'Universidad Nacional de La Plata',
          role: 'Pasante (Laboratorio UNITEC)',
          period: 'Ago. 2024 — Oct. 2024',
          location: 'La Plata, Argentina · Híbrido',
          description:
            'Desarrollé una aplicación RA para la visualización de un modelo 3D interactivo sobre un QR de una tarjeta de negocio. Desarrollé el software de un datalogger con C++ para sensar presión diastólica, sistólica, pulsaciones y temperatura del paciente y emitir los datos de forma periódica a un servidor remoto vía HTTP para su almacenamiento y monitoreo médico.',
          links: [
            { label: 'UNITEC AR', url: 'https://github.com/TevesManuel/UNLP-UNITEC-RA' },
            { label: 'Electromedicina', url: 'https://github.com/TevesManuel/UNLP-UNITEC-electromedicina' },
            { label: 'SIM800L HAL', url: 'https://github.com/TevesManuel/SIM800L-HAL' },
          ],
        },
        {
          company: 'Kinsper',
          role: 'Ingeniero de software',
          period: 'Jun. 2023 — Sept. 2023',
          location: 'México · En remoto',
          description:
            'Desarrollo de sistemas backend en Rust, integrando gRPC, y migración de sistema empresarial de Java Spring Boot a Rust para maximizar el rendimiento y la concurrencia.',
        },
        {
          company: 'Freelance | Self-Employed',
          role: 'Freelance Software Developer',
          period: 'Oct. 2021 — Actualidad',
          location: 'La Plata, Buenos Aires · En remoto',
          description:
            'Desarrollo independiente de múltiples aplicaciones y servicios de alta eficiencia utilizando Rust, C/C++ y stacks modernos con NodeJS / ReactJS para clientes locales e internacionales.',
        },
        {
          company: 'Freelance | Self-Employed',
          role: 'Servicio técnico especializado',
          period: 'Ene. 2020 — Actualidad',
          location: 'La Plata, Buenos Aires · Presencial',
          description:
            'Reparación integral de dispositivos informáticos y electrónicos, recuperación de información crítica, mantenimiento preventivo y correctivo, optimización de dispositivos e instalación de sistemas operativos.',
        },
      ],
    },
    education: {
      title: 'Estudios & Reconocimientos',
      subtitle:
        'Bases formales en ingeniería, ciencias exactas y pensamiento algorítmico riguroso.',
      expandBtn: 'Desplegar estudios y certificaciones',
      collapseBtn: 'Colapsar estudios',
      scrollHint: 'Desliza horizontalmente o usa las flechas para explorar',
      items: [
        {
          institution: 'Universidad Nacional de La Plata (UNLP)',
          degree: 'Ingeniería en Computación',
          periodOrBadge: 'En curso',
          description:
            'Formación universitaria orientada a sistemas complejos, teoría de la computación, arquitectura de procesadores, redes y desarrollo de software de gran escala.',
        },
        {
          institution: 'Facultad de Informática (UNLP)',
          degree: 'Training Camp 2026 - Avanzado',
          periodOrBadge: 'Jul. 2026',
          description:
            'Certificado de finalización satisfactoria del Training Camp 2026 en el nivel avanzado, fortaleciendo conocimientos en algoritmos, estructuras de datos, técnicas de resolución de problemas y programación competitiva.',
        },
        {
          institution: 'University of Helsinki',
          degree: 'Fullstack Developer',
          periodOrBadge: 'Diciembre 2024',
          description:
            'Certificación integral en desarrollo Fullstack moderna con React, NodeJS, REST APIs, GraphQL, TypeScript, bases de datos y testing automatizado.',
        },
        {
          institution: 'EEST N°6 "Albert Thomas"',
          degree: 'Técnico en Electrónica',
          periodOrBadge: 'Diciembre 2024',
          description:
            'Formación técnica de excelencia en circuitos analógicos y digitales, microcontroladores, instrumentación de laboratorio y diseño de hardware.',
        },
        {
          institution: 'Olimpiada Matemática Argentina (OMA)',
          degree: 'Finalista Instancia Regional (Fac. Cs. Exactas UNLP)',
          periodOrBadge: '2023',
          description:
            'Resolución de problemas de alta complejidad lógica y matemática en la Facultad de Ciencias Exactas de la Universidad Nacional de La Plata.',
        },
      ],
    },
    footer: {
      copyright: '© 2026 Manuel Tomas Teves. Todos los derechos reservados.',
      subline: 'Software Architect - Teves Tech Founder',
      backToTop: 'Volver arriba ↑',
      privacyLink: 'Política de Privacidad',
      termsLink: 'Términos y Condiciones',
      cookiesLink: 'Cookies y Telemetría',
      legalModal: {
        modalTitle: 'Avisos Legales, Términos y Privacidad',
        closeBtn: 'Cerrar',
        tabs: {
          privacy: 'Privacidad',
          terms: 'Términos de Uso',
          cookies: 'Cookies & Telemetría',
        },
        privacy: {
          title: 'Política de Privacidad y Protección de Datos',
          lastUpdated: 'Última actualización: Septiembre 2026',
          intro:
            'En tvs.ar y Teves Tech nos tomamos con máxima seriedad la confidencialidad, la seguridad de la información y la privacidad de los usuarios que interactúan con nuestro ecosistema tecnológico.',
          sections: [
            {
              heading: '1. Responsable del Tratamiento',
              content:
                'El responsable del tratamiento de los datos recolectados en este sitio web es Manuel Tomas Teves, fundador de Teves Tech, con base operativa en La Plata, Provincia de Buenos Aires, República Argentina. Para cualquier consulta o ejercicio de derechos vinculados a sus datos, puede comunicarse a contacto@tvs.ar.',
            },
            {
              heading: '2. Información que Recopilamos',
              content:
                '• Datos de contacto voluntario: Cuando usted decide ponerse en contacto mediante correo electrónico (contacto@tvs.ar), enlace directo a WhatsApp (+54 11 23262861), o a través de la agenda de reuniones en meet.tvs.ar, recopilamos únicamente los datos que usted nos proporciona voluntariamente (nombre, dirección de correo, número de teléfono y motivo de su mensaje).\n• Datos de navegación y telemetría analítica: A través de herramientas de medición de audiencia (Google Tag Manager y Microsoft Clarity), registramos de manera agregada y anónima información técnica sobre el navegador, sistema operativo, resolución de pantalla, páginas vistas, tiempo en el sitio y mapas de calor de interacción, sin recopilar jamás contraseñas, números de tarjeta o datos sensibles.',
            },
            {
              heading: '3. Finalidad del Tratamiento',
              content:
                'Los datos recabados se utilizan con los siguientes fines exclusivos:\n• Responder consultas técnicas, comerciales o propuestas profesionales remitidas por los usuarios.\n• Coordinar reuniones de trabajo, consultorías de arquitectura de software o demostraciones de producto.\n• Analizar métricas de rendimiento, tiempos de carga y ergonomía de la interfaz para optimizar la experiencia de navegación.\nBajo ninguna circunstancia vendemos, alquilamos ni comercializamos datos personales a terceros con fines publicitarios.',
            },
            {
              heading: '4. Servicios de Terceros y Transferencias',
              content:
                'Este sitio web se integra con servicios de terceros de infraestructura y analítica de primer nivel:\n• Google Tag Manager / Google Analytics: Medición de métricas de audiencia y eventos de navegación anónimos.\n• Microsoft Clarity: Análisis visual de comportamiento de usuario (mapas de calor y sesiones anónimas) para resolver problemas de usabilidad.\n• WhatsApp / Google Calendar: Canales externos donde el usuario interactúa bajo las políticas de privacidad propias de dichas plataformas.',
            },
            {
              heading: '5. Derechos del Titular de los Datos',
              content:
                'Usted tiene derecho a acceder, rectificar, actualizar o solicitar la supresión de sus datos personales obrantes en nuestros registros, de acuerdo con la legislación de protección de datos personales aplicable (Ley 25.326 de la República Argentina y estándares internacionales). Para ejercerlos, envíe una solicitud a contacto@tvs.ar.',
            },
          ],
        },
        terms: {
          title: 'Términos y Condiciones de Uso',
          lastUpdated: 'Última actualización: Septiembre 2026',
          intro:
            'Los presentes Términos y Condiciones regulan el acceso y navegación en el sitio web tvs.ar y sus plataformas o subdominios derivados (menu.tvs.ar, qr.tvs.ar, meet.tvs.ar).',
          sections: [
            {
              heading: '1. Aceptación de los Términos',
              content:
                'El ingreso, uso y consulta de los recursos alojados en este sitio web implica la aceptación plena e incondicional de los presentes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, le rogamos abstenerse de utilizar el sitio.',
            },
            {
              heading: '2. Propiedad Intelectual e Industrial',
              content:
                'Todos los contenidos exhibidos en este sitio web —incluyendo de manera enunciativa más no limitativa: códigos fuente, arquitecturas de software, marcas comerciales ("Teves Tech", "tuQR", "MenuQR", "Cubik Solver"), diseños gráficos, logotipos, textos, ilustraciones y material audiovisual— son propiedad exclusiva de Manuel Tomas Teves / Teves Tech o cuentan con licencias de uso y derechos de autor correspondientes.\nQueda terminantemente prohibida su reproducción, distribución o modificación con fines comerciales no autorizados expresamente por escrito.',
            },
            {
              heading: '3. Uso Aceptable y Prohibiciones',
              content:
                'El usuario se compromete a hacer un uso lícito y de buena fe de los contenidos y servicios provistos. Queda expresamente prohibido:\n• Emplear herramientas automatizadas de scraping masivo que degraden el ancho de banda o la disponibilidad del servidor.\n• Ejecutar intentos de vulneración de seguridad, inyección de código, ataques de denegación de servicio (DoS) o ingeniería inversa.\n• Usar la identidad de Teves Tech o de Manuel Tomas Teves de forma engañosa o no autorizada.',
            },
            {
              heading: '4. Enlaces Externos y Código Open Source',
              content:
                'El sitio incluye enlaces a plataformas externas, redes sociales (Instagram, LinkedIn, YouTube, GitHub) y repositorios de código abierto. Teves Tech no ejerce control sobre los contenidos, políticas de privacidad o prácticas de sitios web externos pertenecientes a terceros.',
            },
            {
              heading: '5. Limitación de Responsabilidad',
              content:
                'La información, demostraciones técnicas y proyectos expuestos se brindan con fines de presentación profesional y comercial "tal como están" (as is). Teves Tech no garantiza la infalibilidad o ausencia total de interrupciones temporales ocasionadas por mantenimiento de servidores o caídas de redes de telecomunicaciones ajenas.',
            },
            {
              heading: '6. Legislación Aplicable y Jurisdicción',
              content:
                'Estos Términos y Condiciones se rigen e interpretan conforme a las leyes de la República Argentina. Ante cualquier controversia derivada del uso del sitio web, las partes se someten a la competencia de los tribunales ordinarios de la ciudad de La Plata, Provincia de Buenos Aires, con renuncia a cualquier otro fuero.',
            },
          ],
        },
        cookies: {
          title: 'Política de Cookies y Telemetría',
          lastUpdated: 'Última actualización: Septiembre 2026',
          intro:
            'Explicamos con transparencia cómo usamos cookies, almacenamiento local y herramientas de medición analítica en tvs.ar para brindarle una experiencia fluida y rápida.',
          sections: [
            {
              heading: '1. ¿Qué son las cookies y el almacenamiento local?',
              content:
                'Una cookie es un pequeño archivo de texto que un sitio web guarda en su navegador al visitarlo. El almacenamiento local (localStorage) es una tecnología web que permite almacenar preferencias directamente en su navegador sin enviarlas automáticamente en cada petición de red.',
            },
            {
              heading: '2. Tecnologías utilizadas en este sitio',
              content:
                '• Preferencias del usuario (localStorage): Guardamos su selección de idioma ("es" o "en") para que no tenga que volver a configurarlo en futuras visitas.\n• Google Tag Manager: Permite la integración y ejecución centralizada de scripts de medición analítica para evaluar el tráfico global de forma agregada.\n• Microsoft Clarity: Servicio de analítica de comportamiento de usuario que registra de manera anónima clics, desplazamientos y métricas de rendimiento para entender cómo se navega el sitio e identificar errores de diseño.',
            },
            {
              heading: '3. Garantías de Privacidad y Anonimato',
              content:
                'Las herramientas de telemetría utilizadas en este sitio web están configuradas con anonimización de direcciones IP y enmascaramiento estricto de cualquier campo que pudiera contener datos sensibles o privados. No se generan perfiles publicitarios individualizados.',
            },
            {
              heading: '4. Cómo Gestionar o Desactivar Cookies',
              content:
                'Usted puede configurar su navegador web para bloquear o eliminar cookies en cualquier momento a través de la sección de Configuración o Privacidad de su navegador (Chrome, Firefox, Safari, Microsoft Edge o navegadores móviles). Tenga en cuenta que el sitio web seguirá siendo completamente accesible aun si bloquea las cookies analíticas.',
            },
          ],
        },
      },
    },
  },
  en: {
    nav: {
      brand: 'Manuel Tomas Teves',
      tevesTech: 'Teves Tech',
      projects: 'Projects',
      schedule: 'Schedule',
      social: 'Content',
      trajectory: 'Trajectory',
      education: 'Education',
      scheduleMeeting: 'Schedule a meeting',
    },
    hero: {
      name: 'Manuel Tomas Teves',
      roleItalic: 'Software Architect - Teves Tech Founder',
      summary:
        'Software Architect & Technology Founder. Specialized in high-performance distributed systems, robust microservices, full-stack web engineering, and embedded systems. Rigorous focus on architectural simplicity, clean code, and high-impact technical solutions.',
      ctaSchedule: 'Schedule a meeting',
      ctaContact: 'Email me at contacto@tvs.ar',
      ctaProjects: 'View autonomous projects',
    },
    tevesTech: {
      title: 'Teves Tech',
      role: 'Founder & Software Architect (Feb. 2026 — Present)',
      websiteUrl: 'https://tvs.ar',
      websiteLabel: 'tvs.ar',
      description:
        'Founded Teves Tech as an engineering and technology firm specializing in enterprise software development, distributed backends, operational dashboards, and custom electronics.',
      description2:
        'We engineer systems for businesses and startups across Latin America and globally, leveraging to build robust, low-latency architectures and cloud infrastructure.',
      highlights: [
        'Distributed systems and high-scalability backend',
        'Modern web engineering and real-time operational dashboards',
        'Embedded systems, firmware engineering, and telemetry',
        'Interactive 3D applications and Augmented Reality',
      ],
      viewSiteBtn: 'Visit Teves Tech (tvs.ar)',
      scheduleBtn: 'Schedule a technical meeting',
    },
    projects: {
      title: 'Autonomous projects',
      subtitle:
        'Independent platforms and technological products conceived, architected, and built end-to-end.',
      expandBtn: 'Expand autonomous projects',
      collapseBtn: 'Collapse projects',
      scrollHint: 'Scroll horizontally or use arrows to explore',
      items: [
        {
          id: 'menuqr',
          title: 'MenuQR',
          category: 'SaaS / Hospitality & Retail',
          description:
            'Ultra-fast, interactive digital menu platform accessed via QR codes. Designed for seamless mobile browsing, instant menu & price updates, and zero guest wait times.',
          tags: ['React', 'TypeScript', 'Node.js', 'Cloud', 'QR Engine'],
          imageUrl: 'https://fs.tvs.ar/menu/logo.png',
          linkUrl: 'https://menu.tvs.ar',
          linkLabel: 'Visit',
        },
        {
          id: 'tuqr',
          title: 'tuQR',
          category: 'SaaS / Corporate Identity & Retail',
          description:
            'Corporate ecosystem for smart generation, management, and tracking of dynamic QR codes with virtual storefronts and real-time interaction metrics.',
          tags: ['SaaS', 'Dynamic QR', 'Analytics', 'Full-Stack'],
          imageUrl: '/tuqr.png',
          linkUrl: 'https://qr.tvs.ar',
          linkLabel: 'Visit',
        },
        {
          id: 'cubik-solver',
          title: 'Cubik Solver',
          category: 'Algorithms & Computer Science',
          description:
            'Interactive application and robotic solver that solves any Rubik\'s Cube configuration in mathematically optimal steps using the two-phase Kociemba algorithm with 3D visualization.',
          tags: ['Kociemba Algorithm', 'Python', 'C++', '3D UI', 'Robotics'],
          imageUrl:
            'https://i.ytimg.com/vi/lJaRIiqqeOI/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLATfUbgGZ9uVxDmw2qu_olAkQKQjw',
          linkUrl: 'https://github.com/TevesManuel/rubiksSolverRobot',
          linkLabel: 'View GitHub Repository',
          isExternalRepo: true,
        },
        {
          id: 'hospital-booking',
          title: 'Hospital Booking App',
          category: 'HealthTech & Management Systems',
          description:
            'Comprehensive healthcare appointment reservation and patient management system. Streamlines scheduling between patients and doctors with centralized records and clinical security.',
          tags: ['React', 'Full-Stack', 'REST APIs', 'Database Design'],
          imageUrl:
            'https://raw.githubusercontent.com/TevesManuel/hospital-booking-app/refs/heads/main/doc/images/home-image.png',
          linkUrl: 'https://github.com/TevesManuel/hospital-booking-app/',
          linkLabel: 'View GitHub Repository',
          isExternalRepo: true,
        },
      ],
    },
    scheduleSection: {
      title: 'Schedule a meeting',
      subtitle:
        'Book time directly on my calendar to discuss software architecture, upcoming projects, or new opportunities.',
      reasonsTitle: 'Common topics for a meeting:',
      reasons: [
        'Software architecture consulting for high-traffic or complex systems',
        'End-to-end engineering of web applications, SaaS platforms, or distributed backends',
        'Firmware development, IoT systems, and custom embedded hardware prototyping',
        'Executive engineering roles, consulting, or technical partnership',
      ],
      ctaButton: 'Open calendar on meet.tvs.ar',
      secondaryEmail: 'Or email me at contacto@tvs.ar',
      directUrl: 'https://meet.tvs.ar',
    },
    socialContent: {
      title: 'I also create content',
      subtitle:
        'I share practical engineering insights on software architecture, backend scalability, hardware, electronics, and the reality of building tech.',
      channels: [
        {
          id: 'ig-personal',
          platform: 'Instagram Personal',
          handle: '@teves_manu',
          url: 'https://www.instagram.com/teves_manu/',
        },
        {
          id: 'ig-company',
          platform: 'Instagram Teves Tech',
          handle: '@teves_tech',
          url: 'https://www.instagram.com/teves_tech/',
        },
        {
          id: 'youtube',
          platform: 'YouTube',
          handle: '@teves_tech',
          url: 'https://www.youtube.com/@teves_tech',
        },
        {
          id: 'linkedin',
          platform: 'LinkedIn Personal',
          handle: 'Manuel Teves',
          url: 'https://www.linkedin.com/in/tevesmanuel/',
        },
        {
          id: 'linkedin-company',
          platform: 'LinkedIn Teves Tech',
          handle: 'Teves Tech',
          url: 'https://linkedin.com/company/teves_tech',
        },
        {
          id: 'github',
          platform: 'GitHub',
          handle: 'TevesManuel',
          url: 'https://github.com/TevesManuel',
        },
      ],
    },
    trajectory: {
      title: 'Career trajectory',
      subtitle:
        'Horizontal timeline covering the complete chronology of technical leadership, software architecture, and systems engineering roles.',
      scrollHint: 'Scroll or drag horizontally or use buttons to navigate each milestone',
      prevBtn: '← Previous',
      nextBtn: 'Next →',
      items: [
        {
          company: 'Teves Tech',
          role: 'Founder',
          period: 'Feb. 2026 — Present',
          location: 'La Plata, Buenos Aires / Remote',
          description:
            'Founded and technically direct Teves Tech. Systems development, graph algorithms, high-performance web platforms, and corporate software architecture.',
          links: [{ label: 'tvs.ar', url: 'https://tvs.ar/' }],
        },
        {
          company: 'tab_',
          role: 'Co-Founder & CTO',
          period: 'Feb. 2025 — Jul. 2026',
          location: 'Remote',
          description:
            'IT infrastructure management and systems development leadership. Architecting scalable digital solutions, infrastructure optimization, and custom software tooling.',
        },
        {
          company: 'National University of La Plata (UNLP)',
          role: 'Laboratory Supervisor (INFOTEC)',
          period: 'Mar. 2025 — Oct. 2025',
          location: 'La Plata, Argentina · Part-time',
          description:
            'Supervised the INFOTEC laboratory (UNITEC - UNLP), conducting research, architecture design, and deployment of Augmented Reality solutions, firmware, mobile apps, and scalable backends.',
        },
        {
          company: 'National University of La Plata (UNLP)',
          role: 'Intern (UNITEC Laboratory)',
          period: 'Aug. 2024 — Oct. 2024',
          location: 'La Plata, Argentina · Hybrid',
          description:
            'Developed an interactive AR application rendering a 3D model on a business card QR. Engineered datalogger firmware in C++ sensing diastolic/systolic blood pressure, pulse, and temperature, transmitting telemetry via HTTP for physician monitoring.',
          links: [
            { label: 'UNITEC AR', url: 'https://github.com/TevesManuel/UNLP-UNITEC-RA' },
            { label: 'Medical Telemetry', url: 'https://github.com/TevesManuel/UNLP-UNITEC-electromedicina' },
            { label: 'SIM800L HAL', url: 'https://github.com/TevesManuel/SIM800L-HAL' },
          ],
        },
        {
          company: 'Kinsper',
          role: 'Software Engineer',
          period: 'Jun. 2023 — Sep. 2023',
          location: 'Mexico · Remote',
          description:
            'Backend systems engineering in Rust, integrating gRPC, and migrating an enterprise system from Java Spring Boot to Rust for superior concurrency and latency.',
        },
        {
          company: 'Freelance | Self-Employed',
          role: 'Freelance Software Developer',
          period: 'Oct. 2021 — Present',
          location: 'La Plata, Buenos Aires · Remote',
          description:
            'Independent engineering of multiple high-efficiency applications and distributed services using Rust, C/C++, and modern NodeJS / ReactJS stacks for domestic and international clients.',
        },
        {
          company: 'Freelance | Self-Employed',
          role: 'Specialized Hardware & Tech Support',
          period: 'Jan. 2020 — Present',
          location: 'La Plata, Buenos Aires · On-site',
          description:
            'Repair of computing and electronic hardware, data recovery, preventive and corrective maintenance, performance optimization, and operating systems deployment.',
        },
      ],
    },
    education: {
      title: 'Education & Honors',
      subtitle:
        'Formal scientific and engineering foundations coupled with rigorous mathematical thinking.',
      expandBtn: 'Expand education & credentials',
      collapseBtn: 'Collapse education',
      scrollHint: 'Scroll horizontally or use arrows to explore',
      items: [
        {
          institution: 'Universidad Nacional de La Plata (UNLP)',
          degree: 'Computer Engineering Degree (Ingeniería en Computación)',
          periodOrBadge: 'In Progress',
          description:
            'Rigorous university curriculum covering complex systems, computational theory, microprocessor architecture, distributed networks, and enterprise software engineering.',
        },
        {
          institution: 'Faculty of Informatics (UNLP)',
          degree: 'Training Camp 2026 - Advanced',
          periodOrBadge: 'Jul. 2026',
          description:
            'Certificate of completion for Training Camp 2026 (Advanced Level). Advanced algorithms, complex data structures, problem-solving techniques, and competitive programming.',
        },
        {
          institution: 'University of Helsinki',
          degree: 'Fullstack Developer Certificate',
          periodOrBadge: 'December 2024',
          description:
            'Comprehensive Fullstack certification covering modern React, NodeJS, REST APIs, GraphQL, TypeScript, automated testing, and database architecture.',
        },
        {
          institution: 'EEST N°6 "Albert Thomas"',
          degree: 'Electronics Technician (Técnico en Electrónica)',
          periodOrBadge: 'December 2024',
          description:
            'High-caliber technical foundation in analog and digital circuitry, microcontrollers, laboratory instrumentation, and hardware design.',
        },
        {
          institution: 'Argentine Mathematical Olympiad (OMA)',
          degree: 'Regional Finalist (Faculty of Exact Sciences UNLP)',
          periodOrBadge: '2023',
          description:
            'Advanced mathematical problem-solving competition held at the Faculty of Exact Sciences of UNLP, demonstrating acute analytical deduction and logic.',
        },
      ],
    },
    footer: {
      copyright: '© 2026 Manuel Tomas Teves. All rights reserved.',
      subline: 'Software Architect - Teves Tech Founder',
      backToTop: 'Back to top ↑',
      privacyLink: 'Privacy Policy',
      termsLink: 'Terms and Conditions',
      cookiesLink: 'Cookies & Telemetry',
      legalModal: {
        modalTitle: 'Legal Notices, Terms & Privacy',
        closeBtn: 'Close',
        tabs: {
          privacy: 'Privacy',
          terms: 'Terms of Use',
          cookies: 'Cookies & Telemetry',
        },
        privacy: {
          title: 'Privacy and Data Protection Policy',
          lastUpdated: 'Last updated: September 2026',
          intro:
            'At tvs.ar and Teves Tech, we uphold the highest standards of data confidentiality, information security, and user privacy across our digital ecosystem.',
          sections: [
            {
              heading: '1. Data Controller',
              content:
                'The data controller responsible for personal information processed on this website is Manuel Tomas Teves, founder of Teves Tech, based in La Plata, Buenos Aires, Argentina. For inquiries or rights requests, contact us at contacto@tvs.ar.',
            },
            {
              heading: '2. Information We Collect',
              content:
                '• Voluntary contact details: When reaching out via email (contacto@tvs.ar), direct WhatsApp link (+54 11 23262861), or scheduling a consultation on meet.tvs.ar, we collect only the information voluntarily provided (name, email address, phone number, and message contents).\n• Anonymous telemetry and navigation data: Through audience measurement services (Google Tag Manager and Microsoft Clarity), we record aggregated technical parameters (browser type, operating system, screen resolution, visited pages, interaction heatmaps), never capturing passwords, payment credentials, or sensitive personal data.',
            },
            {
              heading: '3. Purpose of Data Processing',
              content:
                'Collected data is processed strictly for the following purposes:\n• Answering technical, commercial, or consulting inquiries submitted by users.\n• Scheduling architectural consultations, product demonstrations, and technical briefings.\n• Analyzing web performance, load metrics, and interface ergonomics to continually refine site accessibility.\nWe never sell, rent, or trade personal data to third parties under any circumstances.',
            },
            {
              heading: '4. Third-Party Integrations',
              content:
                'This site integrates with reputable third-party infrastructure and telemetry providers:\n• Google Tag Manager / Google Analytics: Aggregated traffic measurement and anonymous navigation event tracking.\n• Microsoft Clarity: Visual session insights and interaction heatmaps to detect and resolve usability issues.\n• WhatsApp / Google Calendar: External communication and scheduling platforms operating under their respective privacy policies.',
            },
            {
              heading: '5. User Rights',
              content:
                'You possess the right to access, rectify, update, or request the deletion of your personal data at any time, pursuant to applicable data protection regulations. To exercise any of these rights, send an email to contacto@tvs.ar.',
            },
          ],
        },
        terms: {
          title: 'Terms and Conditions of Use',
          lastUpdated: 'Last updated: September 2026',
          intro:
            'These Terms and Conditions govern access and navigation across tvs.ar and its associated subdomains and platforms (menu.tvs.ar, qr.tvs.ar, meet.tvs.ar).',
          sections: [
            {
              heading: '1. Acceptance of Terms',
              content:
                'By accessing, browsing, or utilizing the materials on this website, you explicitly agree to these Terms and Conditions in full. If you do not agree with any provision, please discontinue using this website.',
            },
            {
              heading: '2. Intellectual and Industrial Property',
              content:
                'All materials exhibited on this website—including source code, architectural designs, trademarks ("Teves Tech", "tuQR", "MenuQR", "Cubik Solver"), UI layouts, logos, texts, and media assets—are the exclusive intellectual property of Manuel Tomas Teves / Teves Tech or are used under valid open-source and proprietary licenses.\nUnauthorized copying, distribution, reverse engineering, or commercial reproduction without prior written consent is strictly prohibited.',
            },
            {
              heading: '3. Acceptable Use and Restrictions',
              content:
                'Users agree to browse this website in good faith and for legitimate purposes. The following actions are strictly forbidden:\n• Deploying automated mass scrapers or bots that overburden server bandwidth or degrade platform availability.\n• Executing security penetration attacks, code injections, denial-of-service (DoS) attacks, or reverse engineering attempts.\n• Misrepresenting identity or claiming unauthorized affiliation with Teves Tech or Manuel Tomas Teves.',
            },
            {
              heading: '4. External Links and Open Source Repositories',
              content:
                'This website includes links to third-party services, social networks (Instagram, LinkedIn, YouTube, GitHub), and external repositories. Teves Tech exercises no editorial or operational control over third-party platforms and assumes no liability for their content or policies.',
            },
            {
              heading: '5. Limitation of Liability',
              content:
                'All materials, demonstrations, and portfolio showcases are presented "as is" for informational and professional evaluation. Teves Tech does not guarantee uninterrupted service availability caused by network anomalies or hosting infrastructure maintenance beyond reasonable control.',
            },
            {
              heading: '6. Governing Law and Jurisdiction',
              content:
                'These Terms are governed by and construed under the laws of the Argentine Republic. Any disputes arising in connection with this website shall be submitted to the exclusive jurisdiction of the ordinary courts of La Plata, Buenos Aires, Argentina.',
            },
          ],
        },
        cookies: {
          title: 'Cookies and Telemetry Policy',
          lastUpdated: 'Last updated: September 2026',
          intro:
            'Transparent disclosure regarding cookies, local storage, and analytical instrumentation used on tvs.ar to ensure optimal performance.',
          sections: [
            {
              heading: '1. What are Cookies and Local Storage?',
              content:
                'A cookie is a small text file saved by your web browser upon visiting a website. Local storage (localStorage) is a modern web standard allowing sites to store configuration preferences directly on your device without transmitting them on every network request.',
            },
            {
              heading: '2. Technologies Used on this Website',
              content:
                '• User Preferences (localStorage): We store your active language selection ("es" or "en") so your chosen preference persists across visits.\n• Google Tag Manager: Manages non-invasive measurement scripts to analyze global traffic volume and referrers.\n• Microsoft Clarity: Collects anonymous interaction metrics (clicks, scrolls, heatmaps) to identify usability bottlenecks and polish the user experience without logging private inputs.',
            },
            {
              heading: '3. Privacy Safeguards and Anonymity',
              content:
                'Telemetry instrumentation on this site operates with IP anonymization and strict data masking enabled. No personalized advertising profiles or cross-site tracking dossiers are created.',
            },
            {
              heading: '4. How to Manage or Disable Cookies',
              content:
                'You can configure your browser at any time to block or delete cookies via your browser Settings or Privacy preferences (Chrome, Firefox, Safari, Microsoft Edge). The core functionality of this website remains fully operational even with cookies disabled.',
            },
          ],
        },
      },
    },
  },
};
