// Datos tomados del perfil @lafioremedical. Lo marcado "por confirmar" se valida con el cliente.
export const site = {
  name: 'Lafiore Medical Skin Center',
  instagram: 'https://www.instagram.com/lafioremedical/',
  whatsappNumber: '573232920583',
  whatsappDisplay: '+57 323 292 0583',
  city: 'Armenia, Quindío', // por confirmar: dirección exacta y horarios
  surgeon: 'Dr. Javier Flórez',
  surgeonInstagram: 'https://www.instagram.com/drjavierflorez/',
};

// Antepone la ruta base (necesaria en GitHub Pages) a archivos de public/.
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

export const wa = (text: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const bookingText = 'Hola Lafiore, quiero agendar una cita de valoración.';

export const nav = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Post operatorio', href: '#post-operatorio' },
  { label: 'Nosotras', href: '#nosotras' },
  { label: 'Visítanos', href: '#visitanos' },
];

export type TreatmentLine = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  image?: { src: string; alt: string };
  icon: string;
};

export const treatmentLines: TreatmentLine[] = [
  {
    id: 'rostro',
    title: 'Piel y rostro',
    summary: 'Rejuvenecimiento facial y calidad de piel, con protocolos a la medida de cada piel.',
    items: [
      'Rejuvenecimiento facial',
      'Microagujas',
      'Mascarillas faciales',
      'Tratamiento de cuello',
      'Recuperación de cejas',
      'Remoción de maquillaje permanente',
      'Depilación láser diodo',
    ],
    image: { src: asset('/img/mascarilla-facial.webp'), alt: 'Paciente con mascarilla facial y diadema bordada con el monograma de Lafiore' },
    icon: 'sparkle',
  },
  {
    id: 'cuerpo',
    title: 'Cuerpo',
    summary: 'Tecnología para flacidez, celulitis y grasa localizada, sin dolor.',
    items: ['Radiofrecuencia Venus', 'Presoterapia', 'Tratamiento de celulitis', 'Masaje de relajación'],
    image: { src: asset('/img/radiofrecuencia-corporal.webp'), alt: 'Esteticista de Lafiore aplicando radiofrecuencia Venus en tratamiento corporal' },
    icon: 'drop',
  },
  {
    id: 'post-operatorio',
    title: 'Post operatorio',
    summary: 'Recuperación facial y corporal después de cirugía, con menos dolor y más acompañamiento.',
    items: ['Tecnología MP2', 'Drenaje linfático', 'Presoterapia'],
    icon: 'first-aid',
  },
  {
    id: 'mujer',
    title: 'Mujer y bienestar',
    summary: 'Acompañamiento para volver a sentirte en tu cuerpo después del embarazo.',
    items: ['Hipopresivos', 'Recuperación post parto'],
    icon: 'flower-lotus',
  },
];

export const postOpPillars = [
  {
    icon: 'heartbeat',
    title: 'Menos dolor con MP2',
    text: 'Tecnología que ayuda a disminuir el dolor en post operatorios de cirugías faciales y corporales, y también en contracturas musculares.',
  },
  {
    icon: 'drop',
    title: 'Drenaje y presoterapia',
    text: 'Estimulan la circulación y ayudan a disminuir la retención de líquidos. Se pueden combinar según tu caso.',
  },
  {
    icon: 'stethoscope',
    title: 'De la mano de tu cirujano',
    text: `Trabajamos junto al ${site.surgeon}, cirujano plástico facial, para que tu recuperación siga un mismo plan.`,
  },
];
