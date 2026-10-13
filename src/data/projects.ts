export type ProjectStatus = 'ongoing' | 'completed' | 'study'
export type InfrastructureType =
  | 'metro'
  | 'tram'
  | 'interchange'
  | 'station'
  | 'building'

export type ServiceKey =
  | 'project-management'
  | 'basic-engineering'
  | 'conceptual-design'
  | 'supervision'
  | 'preinvestment'
  | 'technical-advisory'
  | 'civil-systems-design'
  | 'architecture'
  | 'tender-support'
  | 'concessions'

export interface Metric {
  labelEs: string
  labelEn: string
  value: string
}

export interface GalleryImage {
  src: string
  altEs: string
  altEn: string
  position?: string
}

export interface Project {
  id: string
  slug: string
  titleEs: string
  titleEn: string
  country: string
  countryEn: string
  city: string
  cityEn: string
  years: string
  yearStart: number
  status: ProjectStatus
  infrastructureType: InfrastructureType
  services: ServiceKey[]
  summaryEs: string
  summaryEn: string
  roleEs: string
  roleEn: string
  scopeEs: string[]
  scopeEn: string[]
  metrics: Metric[]
  investment?: string
  coverImage: string
  coverPosition?: string
  gallery: GalleryImage[]
  featured: boolean
  featuredSize?: 'lg' | 'md'
  related: string[]
}

export const serviceLabels: Record<ServiceKey, { es: string; en: string }> = {
  'project-management': { es: 'Gerencia de proyecto', en: 'Project management' },
  'basic-engineering': { es: 'Ingeniería básica', en: 'Basic engineering' },
  'conceptual-design': { es: 'Diseño conceptual', en: 'Conceptual design' },
  supervision: { es: 'Supervisión y asistencia técnica', en: 'Supervision and technical assistance' },
  preinvestment: { es: 'Estudios de preinversión', en: 'Pre-investment studies' },
  'technical-advisory': { es: 'Asesoría técnica', en: 'Technical advisory' },
  'civil-systems-design': { es: 'Diseño de obra civil y sistemas', en: 'Civil works and systems design' },
  architecture: { es: 'Arquitectura e infraestructura asociada', en: 'Architecture and associated infrastructure' },
  'tender-support': { es: 'Pliegos y diseño conceptual', en: 'Tender documents and conceptual design' },
  concessions: { es: 'Análisis de concesiones', en: 'Concession analysis' },
}

export const infrastructureLabels: Record<InfrastructureType, { es: string; en: string }> = {
  metro: { es: 'Metro', en: 'Metro' },
  tram: { es: 'Tranvía', en: 'Tram' },
  interchange: { es: 'Intercambiador', en: 'Interchange' },
  station: { es: 'Estación', en: 'Station' },
  building: { es: 'Edificación asociada', en: 'Associated building' },
}

export const statusLabels: Record<ProjectStatus, { es: string; en: string }> = {
  ongoing: { es: 'En curso', en: 'Ongoing' },
  completed: { es: 'Completado', en: 'Completed' },
  study: { es: 'Estudio', en: 'Study' },
}

export const projects: Project[] = [
  {
    id: 'quito-l1',
    slug: 'metro-quito-linea-1',
    titleEs: 'Primera Línea del Metro de Quito',
    titleEn: 'Quito Metro Line 1',
    country: 'Ecuador',
    countryEn: 'Ecuador',
    city: 'Quito',
    cityEn: 'Quito',
    years: '2013 — actualidad',
    yearStart: 2013,
    status: 'ongoing',
    infrastructureType: 'metro',
    services: ['project-management'],
    summaryEs:
      'Los miembros de BUSTREN PM forman parte del Consorcio GMQ, adjudicatario del contrato de Gerencia del Proyecto Metro de Quito. El encargo cubre la dirección de la ejecución de todos los elementos de la infraestructura de la Línea 1, incluyendo obra civil e instalaciones, y el soporte a Metro de Quito en mantenimiento y operación.',
    summaryEn:
      'BUSTREN PM members are part of the GMQ Consortium, awarded the project management contract for Quito Metro. The assignment covers directing the execution of all Line 1 infrastructure elements, including civil works and systems, and supporting Metro de Quito in maintenance and operation.',
    roleEs:
      'Gerencia de proyecto dentro del Consorcio GMQ. Dirección de la ejecución de la infraestructura de la Línea 1 y soporte a la operación y el mantenimiento.',
    roleEn:
      'Project management within the GMQ Consortium. Direction of Line 1 infrastructure execution and support for operation and maintenance.',
    scopeEs: [
      'Dirección de la ejecución de obra civil e instalaciones de la Línea 1.',
      'Coordinación de las distintas fases de la infraestructura, incluido el patio-taller y el puesto de control.',
      'Seguimiento de estaciones e intercambiadores de transporte.',
      'Soporte a Metro de Quito en trabajos de mantenimiento y operación.',
    ],
    scopeEn: [
      'Direction of civil works and systems execution for Line 1.',
      'Coordination of infrastructure phases, including the depot and control centre.',
      'Follow-up of stations and transport interchanges.',
      'Support to Metro de Quito on maintenance and operation.',
    ],
    metrics: [
      { labelEs: 'Túnel', labelEn: 'Tunnel', value: '22 km' },
      { labelEs: 'Estaciones', labelEn: 'Stations', value: '15' },
      { labelEs: 'Patio-taller y PCC', labelEn: 'Depot and OCC', value: '1' },
      { labelEs: 'Intercambiadores', labelEn: 'Interchanges', value: '5' },
    ],
    investment: '2.050 millones USD',
    coverImage: '/images/projects/quito-tbm.jpg',
    coverPosition: 'center 60%',
    gallery: [
      {
        src: '/images/projects/quito-tbm.jpg',
        altEs: 'Tuneladora de la Primera Línea del Metro de Quito',
        altEn: 'TBM of Quito Metro Line 1',
        position: 'center',
      },
      {
        src: '/images/projects/quito-san-francisco.jpg',
        altEs: 'Obra nocturna junto a San Francisco, Quito',
        altEn: 'Night works beside San Francisco, Quito',
        position: 'center 40%',
      },
      {
        src: '/images/projects/quito-obra-aerea.jpg',
        altEs: 'Trazado en superficie de la Línea 1 en el centro de Quito',
        altEn: 'Line 1 surface works in central Quito',
        position: 'center',
      },
      {
        src: '/images/projects/quito-carolina.jpg',
        altEs: 'Parque de obra y dovelas TBM en Quito',
        altEn: 'Works compound and TBM segments in Quito',
        position: 'center 30%',
      },
      {
        src: '/images/projects/quito-excavacion.jpg',
        altEs: 'Excavación profunda de estación en Quito',
        altEn: 'Deep station excavation in Quito',
        position: 'center',
      },
    ],
    featured: true,
    featuredSize: 'lg',
    related: ['quito-ofelia', 'panama-2a', 'lima-l3'],
  },
  {
    id: 'quito-ofelia',
    slug: 'extension-metro-quito-la-ofelia',
    titleEs: 'Extensión del Metro de Quito hasta La Ofelia',
    titleEn: 'Quito Metro extension to La Ofelia',
    country: 'Ecuador',
    countryEn: 'Ecuador',
    city: 'Quito',
    cityEn: 'Quito',
    years: '2020 — 2021',
    yearStart: 2020,
    status: 'completed',
    infrastructureType: 'metro',
    services: ['basic-engineering'],
    summaryEs:
      'Consultoría para el diseño de la ingeniería básica y la definición del presupuesto de la extensión de la Primera Línea (tramo El Labrador – La Ofelia). El contrato incluye viabilidad técnica, demanda, viabilidad financiera y socioeconómica, campaña geotécnica, ingeniería básica y estudio de impacto ambiental.',
    summaryEn:
      'Consultancy for basic engineering design and budget definition of the Line 1 northern extension (El Labrador – La Ofelia). The contract includes technical, demand, financial and socio-economic feasibility, a geotechnical campaign, basic engineering and an environmental impact study.',
    roleEs: 'Ingeniería básica y definición presupuestaria de la extensión norte.',
    roleEn: 'Basic engineering and budget definition for the northern extension.',
    scopeEs: [
      'Estudios de viabilidad técnica, de demanda y financiera.',
      'Campaña geotécnica e ingeniería básica.',
      'Estudio de impacto ambiental.',
      'Definición del presupuesto de inversión de la extensión.',
    ],
    scopeEn: [
      'Technical, demand and financial feasibility studies.',
      'Geotechnical campaign and basic engineering.',
      'Environmental impact study.',
      'Investment budget definition for the extension.',
    ],
    metrics: [
      { labelEs: 'Túnel TBM', labelEn: 'TBM tunnel', value: '5,3 km' },
      { labelEs: 'Estaciones', labelEn: 'Stations', value: '4' },
      { labelEs: 'Patio y taller', labelEn: 'Depot and workshop', value: 'Ampliación' },
    ],
    investment: '510 millones USD',
    coverImage: '/images/projects/quito-carolina.jpg',
    coverPosition: 'center 35%',
    gallery: [
      { src: '/images/projects/quito-carolina.jpg', altEs: 'Obra y dovelas de la extensión', altEn: 'Works and segments of the extension' },
      { src: '/images/projects/patio-taller.jpg', altEs: 'Patio-taller ferroviario', altEn: 'Rail depot and workshop' },
      { src: '/images/hero-tunnel.jpg', altEs: 'Túnel de línea', altEn: 'Running tunnel' },
    ],
    featured: true,
    featuredSize: 'md',
    related: ['quito-l1', 'panama-2a'],
  },
  {
    id: 'panama-2a',
    slug: 'metro-panama-linea-2a',
    titleEs: 'Línea 2A del Metro de Panamá',
    titleEn: 'Panama Metro Line 2A',
    country: 'Panamá',
    countryEn: 'Panama',
    city: 'Ciudad de Panamá',
    cityEn: 'Panama City',
    years: '2021 — 2023',
    yearStart: 2021,
    status: 'completed',
    infrastructureType: 'metro',
    services: ['tender-support', 'conceptual-design', 'architecture'],
    summaryEs:
      'Asesoría para CAF (Corporación Andina de Fomento) en apoyo a Metro de Panamá para la redacción de los pliegos de licitación de la Línea 2A y el diseño conceptual de la estación y el edificio de usos múltiples en Aquilino de la Guardia.',
    summaryEn:
      'Advisory for CAF in support of Metro de Panamá on the drafting of tender documents for Line 2A and the conceptual design of the station and mixed-use building at Aquilino de la Guardia.',
    roleEs: 'Apoyo en pliegos de licitación y diseño conceptual de estación y edificación asociada.',
    roleEn: 'Support on tender documents and conceptual design of the station and associated building.',
    scopeEs: [
      'Redacción de pliegos de licitación de la Línea 2A.',
      'Diseño conceptual de estación.',
      'Diseño conceptual del conjunto de usos múltiples en Aquilino de la Guardia.',
    ],
    scopeEn: [
      'Drafting of Line 2A tender documents.',
      'Conceptual design of the station.',
      'Conceptual design of the mixed-use complex at Aquilino de la Guardia.',
    ],
    metrics: [
      { labelEs: 'Túnel TBM', labelEn: 'TBM tunnel', value: '8 km' },
      { labelEs: 'Viaducto y trinchera', labelEn: 'Viaduct and trench', value: '1 km' },
      { labelEs: 'Estaciones', labelEn: 'Stations', value: '12' },
    ],
    investment: '2.260 millones USD',
    coverImage: '/images/projects/estacion-render.jpg',
    coverPosition: 'center',
    gallery: [
      { src: '/images/projects/estacion-render.jpg', altEs: 'Diseño de estación y usos múltiples', altEn: 'Station and mixed-use design' },
      { src: '/images/projects/viaducto.jpg', altEs: 'Viaducto urbano', altEn: 'Urban viaduct', position: 'center' },
      { src: '/images/building/usos-multiples.jpg', altEs: 'Edificación asociada al transporte', altEn: 'Transport-related building' },
    ],
    featured: true,
    featuredSize: 'md',
    related: ['panama-factibilidad', 'quito-l1', 'chamartin'],
  },
  {
    id: 'panama-factibilidad',
    slug: 'factibilidad-linea-2a-panama',
    titleEs: 'Estudio de factibilidad de la Línea 2A de Panamá',
    titleEn: 'Feasibility study for Panama Line 2A',
    country: 'Panamá',
    countryEn: 'Panama',
    city: 'Ciudad de Panamá',
    cityEn: 'Panama City',
    years: '2019 — 2021',
    yearStart: 2019,
    status: 'study',
    infrastructureType: 'metro',
    services: ['supervision', 'preinvestment'],
    summaryEs:
      'Supervisión, seguimiento y asistencia a CAF y a Metro de Panamá en los estudios de factibilidad de la Línea 2A, con tramo elevado y tramo subterráneo, redactados por SYSTRA.',
    summaryEn:
      'Supervision, monitoring and assistance to CAF and Metro de Panamá on the Line 2A feasibility studies, covering elevated and underground sections, prepared by SYSTRA.',
    roleEs: 'Supervisión, seguimiento y asistencia técnica del estudio de factibilidad.',
    roleEn: 'Supervision, monitoring and technical assistance of the feasibility study.',
    scopeEs: [
      'Seguimiento de los estudios de factibilidad redactados por SYSTRA.',
      'Asistencia técnica a CAF y Metro de Panamá.',
      'Revisión de alternativas de trazado elevado y subterráneo.',
    ],
    scopeEn: [
      'Monitoring of the feasibility studies prepared by SYSTRA.',
      'Technical assistance to CAF and Metro de Panamá.',
      'Review of elevated and underground alignment alternatives.',
    ],
    metrics: [
      { labelEs: 'Túnel TBM', labelEn: 'TBM tunnel', value: '8 km' },
      { labelEs: 'Viaducto y trinchera', labelEn: 'Viaduct and trench', value: '1 km' },
      { labelEs: 'Estaciones', labelEn: 'Stations', value: '12' },
    ],
    investment: '2.260 millones USD',
    coverImage: '/images/projects/panama.jpg',
    coverPosition: 'center',
    gallery: [
      { src: '/images/projects/panama.jpg', altEs: 'Metro de Panamá', altEn: 'Panama Metro' },
      { src: '/images/projects/viaducto.jpg', altEs: 'Trazado elevado', altEn: 'Elevated alignment' },
      { src: '/images/hero-tunnel.jpg', altEs: 'Trazado subterráneo', altEn: 'Underground alignment' },
    ],
    featured: false,
    related: ['panama-2a', 'lima-l3'],
  },
  {
    id: 'lima-l3',
    slug: 'metro-lima-linea-3',
    titleEs: 'Línea 3 del Metro de Lima y Callao',
    titleEn: 'Lima and Callao Metro Line 3',
    country: 'Perú',
    countryEn: 'Peru',
    city: 'Lima',
    cityEn: 'Lima',
    years: '2014 — 2017',
    yearStart: 2014,
    status: 'study',
    infrastructureType: 'metro',
    services: ['preinvestment'],
    summaryEs:
      'Consorcio METROTRES, formado por PwC, Ingerop, BUSTREN PM, AlphaConsult y Metropolitana Milanese. Elaboración de estudios de preinversión a nivel de perfil y factibilidad para identificar, formular y evaluar la viabilidad técnica, económica, financiera, ambiental y de sostenibilidad del proyecto, incluyendo el comparador público-privado.',
    summaryEn:
      'METROTRES consortium, formed by PwC, Ingerop, BUSTREN PM, AlphaConsult and Metropolitana Milanese. Preparation of profile and feasibility pre-investment studies to assess the technical, economic, financial, environmental and sustainability viability of the project, including the public-private comparator.',
    roleEs: 'Estudios de preinversión, perfil y factibilidad dentro del consorcio METROTRES.',
    roleEn: 'Pre-investment, profile and feasibility studies within the METROTRES consortium.',
    scopeEs: [
      'Estudios de preinversión a nivel de perfil y factibilidad.',
      'Evaluación de viabilidad técnica, económica, financiera y ambiental.',
      'Elaboración del comparador público-privado.',
    ],
    scopeEn: [
      'Profile and feasibility pre-investment studies.',
      'Technical, economic, financial and environmental viability assessment.',
      'Preparation of the public-private comparator.',
    ],
    metrics: [
      { labelEs: 'Longitud', labelEn: 'Length', value: '31 km' },
      { labelEs: 'Estaciones', labelEn: 'Stations', value: '25' },
    ],
    investment: '7.770 millones USD',
    coverImage: '/images/projects/lima-elevado.jpg',
    coverPosition: 'center 40%',
    gallery: [
      { src: '/images/projects/lima-elevado.jpg', altEs: 'Infraestructura elevada del Metro de Lima', altEn: 'Lima Metro elevated infrastructure' },
      { src: '/images/projects/lima-estacion.jpg', altEs: 'Estación del Metro de Lima', altEn: 'Lima Metro station' },
      { src: '/images/projects/ciudad.jpg', altEs: 'Contexto urbano de Lima', altEn: 'Lima urban context' },
    ],
    featured: true,
    related: ['lima-l1', 'quito-l1', 'panama-2a'],
  },
  {
    id: 'lima-l1',
    slug: 'remodelacion-estaciones-linea-1-lima',
    titleEs: 'Remodelación de estaciones de la Línea 1 de Lima',
    titleEn: 'Refurbishment of Lima Metro Line 1 stations',
    country: 'Perú',
    countryEn: 'Peru',
    city: 'Lima',
    cityEn: 'Lima',
    years: '2015',
    yearStart: 2015,
    status: 'study',
    infrastructureType: 'station',
    services: ['technical-advisory'],
    summaryEs:
      'Asistencia técnica para la definición de las inversiones de remodelación de la Línea 1. Análisis de soluciones alternativas para mejorar la capacidad de cinco estaciones existentes y diseño a nivel de perfil de las soluciones acordadas.',
    summaryEn:
      'Technical assistance to define Line 1 refurbishment investments. Analysis of alternative solutions to improve the capacity of five existing stations and profile-level design of the agreed solutions.',
    roleEs: 'Análisis de alternativas para mejorar la capacidad de cinco estaciones.',
    roleEn: 'Alternative analysis to improve the capacity of five stations.',
    scopeEs: [
      'Análisis de alternativas de remodelación.',
      'Mejora de capacidad de cinco estaciones de la Línea 1.',
      'Diseño a nivel de perfil de las soluciones acordadas.',
    ],
    scopeEn: [
      'Analysis of refurbishment alternatives.',
      'Capacity improvement of five Line 1 stations.',
      'Profile-level design of the agreed solutions.',
    ],
    metrics: [
      { labelEs: 'Estaciones analizadas', labelEn: 'Stations analysed', value: '5' },
      { labelEs: 'Línea', labelEn: 'Line', value: 'Línea 1' },
    ],
    coverImage: '/images/projects/lima-estacion.jpg',
    coverPosition: 'center 45%',
    gallery: [
      { src: '/images/projects/lima-estacion.jpg', altEs: 'Estación de la Línea 1', altEn: 'Line 1 station' },
      { src: '/images/projects/lima-elevado.jpg', altEs: 'Línea 1 en viaducto', altEn: 'Line 1 on viaduct' },
    ],
    featured: false,
    related: ['lima-l3', 'buenos-aires-f'],
  },
  {
    id: 'moscu',
    slug: 'metro-moscu',
    titleEs: 'Metro de Moscú',
    titleEn: 'Moscow Metro',
    country: 'Rusia',
    countryEn: 'Russia',
    city: 'Moscú',
    cityEn: 'Moscow',
    years: '2013 — 2020',
    yearStart: 2013,
    status: 'completed',
    infrastructureType: 'metro',
    services: ['civil-systems-design'],
    summaryEs:
      'Diseño de obra civil y sistemas en varios tramos de la red: tramo 2 de la línea Kozhúkhovskaya (Aviamotórnaya – Nekrásovka), tramo oeste, noreste y este del Tercer Anillo.',
    summaryEn:
      'Civil works and systems design across several network sections: Section 2 of the Kozhukhovskaya line (Aviamotornaya – Nekrasovka) and the west, north-east and east sections of the Third Ring.',
    roleEs: 'Diseño de obra civil (38 km y 4 estaciones) y diseño de sistemas (45 km y 17 estaciones).',
    roleEn: 'Civil works design (38 km and 4 stations) and systems design (45 km and 17 stations).',
    scopeEs: [
      'Diseño de obra civil: 38 km y 4 estaciones.',
      'Diseño de sistemas: 45 km y 17 estaciones.',
      'Tramos del Tercer Anillo y de la línea Kozhúkhovskaya.',
    ],
    scopeEn: [
      'Civil works design: 38 km and 4 stations.',
      'Systems design: 45 km and 17 stations.',
      'Third Ring sections and the Kozhukhovskaya line.',
    ],
    metrics: [
      { labelEs: 'Obra civil', labelEn: 'Civil works', value: '38 km / 4 estaciones' },
      { labelEs: 'Sistemas', labelEn: 'Systems', value: '45 km / 17 estaciones' },
    ],
    coverImage: '/images/projects/moscu.jpg',
    coverPosition: 'center',
    gallery: [
      { src: '/images/projects/moscu.jpg', altEs: 'Obra civil de estación', altEn: 'Station civil works' },
      { src: '/images/projects/tunel-obra.jpg', altEs: 'Túnel en ejecución', altEn: 'Tunnel under construction' },
      { src: '/images/hero-tunnel.jpg', altEs: 'Túnel terminado', altEn: 'Completed tunnel' },
    ],
    featured: false,
    related: ['quito-l1', 'malaga'],
  },
  {
    id: 'ayacucho',
    slug: 'tranvia-ayacucho-medellin',
    titleEs: 'Tranvía de Ayacucho, Medellín',
    titleEn: 'Ayacucho Tram, Medellín',
    country: 'Colombia',
    countryEn: 'Colombia',
    city: 'Medellín',
    cityEn: 'Medellín',
    years: '2013 — 2014',
    yearStart: 2013,
    status: 'completed',
    infrastructureType: 'tram',
    services: ['supervision'],
    summaryEs:
      'Asistencia técnica a Ingerop T3 para la supervisión de instalaciones durante la implementación del Tranvía de Ayacucho (Línea T1). El sistema se integra con la red de Metro de Medellín y con dos líneas de cable.',
    summaryEn:
      'Technical assistance to Ingerop T3 for the supervision of installations during implementation of the Ayacucho Tram (Line T1). The system is integrated with the Medellín Metro network and two cable lines.',
    roleEs: 'Supervisión de sistemas e instalaciones para la puesta en funcionamiento de la Línea T1.',
    roleEn: 'Supervision of systems and installations for the commissioning of Line T1.',
    scopeEs: [
      'Supervisión del suministro y puesta en obra de sistemas e instalaciones.',
      'Integración con la red de Metro de Medellín.',
      'Coordinación con las líneas de cable M y H.',
    ],
    scopeEn: [
      'Supervision of supply and installation of systems.',
      'Integration with the Medellín Metro network.',
      'Coordination with cable lines M and H.',
    ],
    metrics: [
      { labelEs: 'Longitud', labelEn: 'Length', value: '4,6 km' },
      { labelEs: 'Estaciones', labelEn: 'Stations', value: '3' },
      { labelEs: 'Paraderos', labelEn: 'Stops', value: '6' },
      { labelEs: 'Líneas de cable', labelEn: 'Cable lines', value: '2' },
    ],
    coverImage: '/images/projects/medellin.jpg',
    coverPosition: 'center 40%',
    gallery: [
      { src: '/images/projects/medellin.jpg', altEs: 'Infraestructura de transporte en Medellín', altEn: 'Transport infrastructure in Medellín' },
      { src: '/images/projects/plataforma.jpg', altEs: 'Plataforma y sistemas', altEn: 'Platform and systems' },
    ],
    featured: false,
    related: ['lima-l1', 'malaga'],
  },
  {
    id: 'buenos-aires-f',
    slug: 'linea-f-subte-buenos-aires',
    titleEs: 'Línea F del Subte de Buenos Aires',
    titleEn: 'Buenos Aires Subte Line F',
    country: 'Argentina',
    countryEn: 'Argentina',
    city: 'Buenos Aires',
    cityEn: 'Buenos Aires',
    years: '2014 — 2018',
    yearStart: 2014,
    status: 'completed',
    infrastructureType: 'station',
    services: ['technical-advisory', 'architecture'],
    summaryEs:
      'Asesoramiento técnico especializado para el diseño de detalle de las estaciones Constitución y Corrientes de la Línea F. Revisión conceptual de los esquemas funcionales existentes y asistencia técnica durante el desarrollo del diseño de detalle.',
    summaryEn:
      'Specialised technical advice for the detailed design of Constitución and Corrientes stations on Line F. Conceptual review of existing functional schemes and technical assistance during detailed design development.',
    roleEs: 'Asesoramiento para el diseño de detalle de las estaciones Constitución y Corrientes.',
    roleEn: 'Advisory for the detailed design of Constitución and Corrientes stations.',
    scopeEs: [
      'Revisión conceptual de esquemas funcionales.',
      'Asistencia técnica al diseño de detalle de Constitución.',
      'Asistencia técnica al diseño de detalle de Corrientes.',
    ],
    scopeEn: [
      'Conceptual review of functional schemes.',
      'Technical assistance on the detailed design of Constitución.',
      'Technical assistance on the detailed design of Corrientes.',
    ],
    metrics: [
      { labelEs: 'Estaciones', labelEn: 'Stations', value: 'Constitución y Corrientes' },
      { labelEs: 'Línea', labelEn: 'Line', value: 'Línea F' },
    ],
    coverImage: '/images/projects/buenos-aires.jpg',
    coverPosition: 'center',
    gallery: [
      { src: '/images/projects/buenos-aires.jpg', altEs: 'Contexto urbano de Buenos Aires', altEn: 'Buenos Aires urban context' },
      { src: '/images/projects/estacion-madrid.jpg', altEs: 'Arquitectura de estación', altEn: 'Station architecture' },
    ],
    featured: false,
    related: ['lima-l1', 'chamartin'],
  },
  {
    id: 'malaga',
    slug: 'metro-malaga-lineas-1-2',
    titleEs: 'Líneas 1 y 2 del Metro de Málaga',
    titleEn: 'Malaga Metro Lines 1 and 2',
    country: 'España',
    countryEn: 'Spain',
    city: 'Málaga',
    cityEn: 'Malaga',
    years: 'Asesoría técnica',
    yearStart: 2012,
    status: 'completed',
    infrastructureType: 'metro',
    services: ['concessions', 'technical-advisory'],
    summaryEs:
      'Asesoramiento técnico para la construcción y explotación de las líneas 1 y 2: estimación de costes de mantenimiento y operación durante la concesión, matrices de riesgos y oportunidades de O&M, análisis de material rodante y valoración de riesgos de las obras de ampliación.',
    summaryEn:
      'Technical advice for the construction and operation of Lines 1 and 2: maintenance and operation cost estimates during the concession, O&M risk and opportunity matrices, rolling stock analysis and risk assessment of network extension works.',
    roleEs: 'Asesoría técnica en concesiones, operación, mantenimiento y análisis de riesgos.',
    roleEn: 'Technical advisory on concessions, operation, maintenance and risk analysis.',
    scopeEs: [
      'Estimación de costes de mantenimiento y operación de la concesión.',
      'Matriz de riesgos y oportunidades de operación y mantenimiento.',
      'Análisis de material rodante requerido para la explotación.',
      'Matriz de riesgos de las obras de ampliación de la red.',
    ],
    scopeEn: [
      'Estimate of concession maintenance and operation costs.',
      'Operation and maintenance risk and opportunity matrix.',
      'Analysis of rolling stock required for operation.',
      'Risk matrix for network extension works.',
    ],
    metrics: [
      { labelEs: 'Líneas', labelEn: 'Lines', value: '1 y 2' },
      { labelEs: 'Alcance', labelEn: 'Scope', value: 'Concesión, O&M y riesgos' },
    ],
    coverImage: '/images/projects/malaga.jpg',
    coverPosition: 'center',
    gallery: [
      { src: '/images/projects/malaga.jpg', altEs: 'Metro de Málaga', altEn: 'Malaga Metro' },
      { src: '/images/projects/estacion-andenes.jpg', altEs: 'Andenes y estación', altEn: 'Platforms and station' },
    ],
    featured: false,
    related: ['moncloa', 'moscu'],
  },
  {
    id: 'chamartin',
    slug: 'intercambiador-chamartin-madrid',
    titleEs: 'Intercambiador de Chamartín, Madrid',
    titleEn: 'Chamartín Interchange, Madrid',
    country: 'España',
    countryEn: 'Spain',
    city: 'Madrid',
    cityEn: 'Madrid',
    years: 'Arquitectura e infraestructura',
    yearStart: 2003,
    status: 'completed',
    infrastructureType: 'interchange',
    services: ['architecture', 'civil-systems-design'],
    summaryEs:
      'Arquitectura e infraestructura asociada al transporte en Chamartín, como articulación entre movilidad, estación y ciudad. El intercambiador conecta Metro, Cercanías y autobuses en un nodo estratégico del norte de Madrid, con previsión de nuevas líneas.',
    summaryEn:
      'Architecture and transport-related infrastructure at Chamartín, linking mobility, station and city. The interchange connects Metro, suburban rail and buses at a strategic node in northern Madrid, with provision for new lines.',
    roleEs: 'Arquitectura e infraestructura asociada al transporte, puente entre movilidad y edificación.',
    roleEn: 'Architecture and associated transport infrastructure, bridging mobility and building design.',
    scopeEs: [
      'Integración de Metro, Cercanías y autobuses.',
      'Planta de intercambio y vestíbulos.',
      'Previsión de conexión con nuevas líneas, incluida la Línea 11.',
    ],
    scopeEn: [
      'Integration of Metro, suburban rail and buses.',
      'Interchange level and concourses.',
      'Provision for new lines, including Line 11.',
    ],
    metrics: [
      { labelEs: 'Modos', labelEn: 'Modes', value: 'Metro, Cercanías, bus' },
      { labelEs: 'Nodo', labelEn: 'Node', value: 'Norte de Madrid' },
    ],
    coverImage: '/images/building/chamartin-1.jpg',
    coverPosition: 'center 35%',
    gallery: [
      { src: '/images/building/chamartin-1.jpg', altEs: 'Interior del intercambiador de Chamartín', altEn: 'Interior of Chamartín interchange' },
      { src: '/images/building/chamartin-2.jpg', altEs: 'Arquitectura del intercambiador', altEn: 'Interchange architecture' },
      { src: '/images/building/chamartin-3.jpg', altEs: 'Niveles de intercambio', altEn: 'Interchange levels' },
      { src: '/images/building/vestibulo.jpg', altEs: 'Vestíbulo y conexión ferroviaria', altEn: 'Concourse and rail connection' },
    ],
    featured: true,
    featuredSize: 'md',
    related: ['moncloa', 'panama-2a'],
  },
  {
    id: 'moncloa',
    slug: 'intercambiador-moncloa-madrid',
    titleEs: 'Intercambiador de Moncloa, Madrid',
    titleEn: 'Moncloa Interchange, Madrid',
    country: 'España',
    countryEn: 'Spain',
    city: 'Madrid',
    cityEn: 'Madrid',
    years: 'Ampliación 2003 — 2007',
    yearStart: 2003,
    status: 'completed',
    infrastructureType: 'interchange',
    services: ['architecture', 'civil-systems-design'],
    summaryEs:
      'Ampliación del intercambiador de Moncloa puesta en servicio en 2007. El recinto resuelve en subterráneo la falta de espacio en superficie y concentra autobuses urbanos, interurbanos y dos líneas de Metro.',
    summaryEn:
      'Moncloa interchange extension, commissioned in 2007. The underground facility addresses the lack of surface space and concentrates urban buses, interurban buses and two Metro lines.',
    roleEs: 'Arquitectura e infraestructura de un intercambiador de alta demanda en operación desde 2007.',
    roleEn: 'Architecture and infrastructure of a high-demand interchange in operation since 2007.',
    scopeEs: [
      'Estación de autobuses subterránea por falta de espacio en superficie.',
      'Conexión de autobuses urbanos e interurbanos.',
      'Integración con las líneas 3 y 6 de Metro.',
    ],
    scopeEn: [
      'Underground bus station due to lack of surface space.',
      'Connection of urban and interurban buses.',
      'Integration with Metro lines 3 and 6.',
    ],
    metrics: [
      { labelEs: 'Superficie útil', labelEn: 'Usable area', value: '46.000 m²' },
      { labelEs: 'Demanda media', labelEn: 'Average demand', value: '360.000 viajeros/día' },
      { labelEs: 'Dársenas', labelEn: 'Bays', value: '34' },
      { labelEs: 'Líneas de bus', labelEn: 'Bus lines', value: '63' },
    ],
    investment: '112,78 M€',
    coverImage: '/images/building/moncloa-aereo.jpg',
    coverPosition: 'center',
    gallery: [
      { src: '/images/building/moncloa-aereo.jpg', altEs: 'Vista aérea del intercambiador de Moncloa', altEn: 'Aerial view of Moncloa interchange' },
      { src: '/images/building/andenes-bus.jpg', altEs: 'Andenes de autobuses', altEn: 'Bus platforms' },
      { src: '/images/building/intercambiador-interior.jpg', altEs: 'Interior del intercambiador', altEn: 'Interchange interior' },
    ],
    featured: true,
    related: ['chamartin', 'malaga'],
  },
]

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
export const getProjectById = (id: string) => projects.find((p) => p.id === id)

export const countries = [...new Set(projects.map((p) => p.country))].sort()
export const years = [...new Set(projects.map((p) => p.yearStart))].sort((a, b) => b - a)
