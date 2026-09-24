export type Language = 'es' | 'en';

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
      copyright: '© 2026 Manuel Tomas Teves. Todos los derechos reservados.',
      subline: 'Software Architect - Teves Tech Founder',
      backToTop: 'Back to top ↑',
    },
  },
};
