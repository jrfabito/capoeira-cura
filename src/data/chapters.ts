export type ChapterId = 'concord' | 'long-beach' | 'leon';

export interface ChapterSchedule {
  when: string;
  cost?: string;
  who: string;
  note?: string;
}

export interface ChapterSocial {
  instagram?: {
    handle: string;
    url: string;
  };
  facebook?: {
    handle: string;
    url: string;
  };
}

export interface ChapterIntro {
  title: { en: string; es: string };
  desc: { en: string; es: string };
  images: [string, string];
}

export interface ChapterWhatIs {
  title: { en: string; es: string };
  desc: { en: string; es: string };
  image: string;
}

export interface LocationPhoto {
  src: string;
  title: { en: string; es: string };
  desc: { en: string; es: string };
  fallbackUrl?: string;
}

export interface Chapter {
  id: ChapterId;
  name: string;
  schedule: {
    en: ChapterSchedule;
    es: ChapterSchedule;
  };
  location: {
    address: string;
    mapQuery: string;
    mapEmbedUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    photos?: LocationPhoto[];
  };
  intro?: ChapterIntro;
  whatIsCapoeira?: ChapterWhatIs;
  gallery?: [string, string];
  social?: ChapterSocial;
}

export const chapters: Chapter[] = [
  {
    id: 'concord',
    name: 'CONCORD, CA',
    schedule: {
      en: {
        when: 'Mondays & Thursdays\n7:00 – 8:00 PM',
        cost: '$15 drop-in',
        who: 'All Levels Welcome, Teens & Adults.',
      },
      es: {
        when: 'Lunes y Jueves\n7:00 – 8:00 PM',
        cost: '$15 clase suelta',
        who: 'Todos los niveles son bienvenidos\nAdolescentes y adultos.',
      }
    },
    location: {
      address: '2450 Grant St., Concord, CA 94520',
      mapQuery: '2450+Grant+St+Concord+CA+94520',
      mapEmbedUrl: 'https://www.google.com/maps?q=2450+Grant+St+Concord+CA+94520&output=embed',
      coordinates: { lat: 37.9779, lng: -122.0311 },
      photos: [
        {
          src: '/assets/loc-parking.jpg',
          title: { en: 'Parking Lot', es: 'Estacionamiento' },
          desc: {
            en: 'Street parking on Grant St., closest to the studio entrance.',
            es: 'Estacionamiento en la calle Grant, lo más cercano a la entrada del estudio.'
          },
          fallbackUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2940&auto=format&fit=crop'
        },
        {
          src: '/assets/loc-studio.jpg',
          title: { en: 'Dance Studio', es: 'Estudio de Danza' },
          desc: {
            en: "Walk toward the building — you'll hear the berimbau before you see the door.",
            es: 'Camina hacia el edificio; escucharás el berimbau antes de ver la puerta.'
          },
          fallbackUrl: 'https://images.unsplash.com/photo-1518042456426-ed877bc954fb?q=80&w=2942&auto=format&fit=crop'
        }
      ]
    },
    intro: {
      title: {
        en: 'Start your capoeira journey in Concord',
        es: 'Comienza tu viaje en la capoeira en Concord'
      },
      desc: {
        en: 'Capoeira Cura Concord is a community practicing Capoeira—an Afro-Brazilian art blending martial arts, dance, acrobatics, and live music. "Capoeira Cura" translates to "Capoeira Heals," reflecting our belief in movement as medicine. We train on Grant Street with a $15 drop-in rate. Beginners and experienced players train, play, and grow together in the roda.',
        es: 'Capoeira Cura Concord es una comunidad que practica Capoeira, un arte afrobrasileño que combina artes marciales, danza, acrobacias y música en vivo. "Capoeira Cura" significa "La Capoeira Sana", reflejando nuestra creencia en el movimiento como medicina. Entrenamos en la calle Grant con una tarifa de clase suelta de $15. Principiantes y practicantes experimentados entrenan, juegan y crecen juntos en la roda.'
      },
      images: ['/assets/intro-1.jpg', '/assets/intro-2.jpg']
    },
    whatIsCapoeira: {
      title: {
        en: 'What is Capoeira?',
        es: '¿Qué es la Capoeira?'
      },
      desc: {
        en: 'Capoeira is a Brazilian art form born from enslaved Africans in the 16th century, blending fluid, rhythmic movement with kicks, spins, and takedowns. In our Concord roda, we practice this centuries-old tradition accompanied by live music from the berimbau, atabaque, and pandeiro. Above all, our classes are a celebration of resilience, creativity, and community.',
        es: 'La capoeira es una forma de arte brasileña que nació de los africanos esclavizados en el siglo XVI y que combina movimientos fluidos y rítmicos con patadas, giros y derribos. En nuestra roda de Concord, practicamos esta tradición centenaria acompañada por la música en vivo del berimbau, el atabaque y el pandeiro. Por encima de todo, nuestras clases son una celebración de la resiliencia, la creatividad y la comunidad.'
      },
      image: '/assets/what-is-capoeira.jpg'
    },
    gallery: ['/assets/gallery-1.jpg', '/assets/gallery-2.jpg'],
    social: {
      facebook: {
        handle: 'Capoeira Cura Concord',
        url: 'https://www.facebook.com/profile.php?id=100090832085640'
      }
    }
  },
  {
    id: 'long-beach',
    name: 'LONG BEACH, CA',
    schedule: {
      en: {
        when: 'Tuesdays & Thursdays\n7:30 – 9:00 PM',
        who: 'All levels Welcome, Teens & Adults',
      },
      es: {
        when: 'Martes y Jueves\n7:30 – 9:00 PM',
        who: 'Todos los niveles son bienvenidos\nAdolescentes y adultos',
      }
    },
    location: {
      address: '5555 Stearns St., Long Beach, CA 90815',
      mapQuery: '5555+Stearns+St+Long+Beach+CA+90815',
      mapEmbedUrl: 'https://www.google.com/maps?q=5555+Stearns+St+Long+Beach+CA+90815&output=embed',
      coordinates: { lat: 33.7958, lng: -118.1252 },
      photos: [
        {
          src: '/assets/lb-loc-parking.jpg',
          title: { en: 'Stearns St. Parking', es: 'Estacionamiento en Stearns St.' },
          desc: {
            en: 'Convenient parking is available right outside our training facility on Stearns Street.',
            es: 'Práctico estacionamiento disponible justo afuera de nuestras instalaciones de entrenamiento en la calle Stearns.'
          },
          fallbackUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2940&auto=format&fit=crop'
        },
        {
          src: '/assets/lb-loc-studio.jpg',
          title: { en: 'Long Beach Studio', es: 'Estudio de Long Beach' },
          desc: {
            en: 'Our community training space where students of all ages train and play together.',
            es: 'Nuestro espacio de entrenamiento donde estudiantes de todas las edades entrenan y juegan juntos.'
          },
          fallbackUrl: 'https://images.unsplash.com/photo-1518042456426-ed877bc954fb?q=80&w=2942&auto=format&fit=crop'
        }
      ]
    },
    intro: {
      title: {
        en: 'Start your capoeira journey in Long Beach',
        es: 'Comienza tu viaje en la capoeira en Long Beach'
      },
      desc: {
        en: 'Capoeira Cura Long Beach is a community practicing Capoeira—an Afro-Brazilian art blending martial arts, dance, acrobatics, and live music. "Capoeira Cura" translates to "Capoeira Heals," reflecting our belief in movement as medicine. Drop-ins and new students are always welcome at our Stearns Street studio—no prior experience is needed to step into the circle and start playing.',
        es: 'Capoeira Cura Long Beach es una comunidad que practica Capoeira, un arte afrobrasileño que combina artes marciales, danza, acrobacias y música en vivo. "Capoeira Cura" significa "La Capoeira Sana", reflejando nuestra creencia en el movimiento como medicina. Las clases sueltas y los nuevos estudiantes siempre son bienvenidos en nuestro estudio de la calle Stearns; no se necesita experiencia previa para entrar al círculo y comenzar a jugar.'
      },
      images: ['/assets/lb-intro-1.jpg', '/assets/lb-intro-2.jpg']
    },
    whatIsCapoeira: {
      title: {
        en: 'What is Capoeira?',
        es: '¿Qué es la Capoeira?'
      },
      desc: {
        en: 'Capoeira is a Brazilian art form born from enslaved Africans in the 16th century, blending fluid, rhythmic movement with kicks, spins, and takedowns. In our Long Beach roda, we practice this centuries-old tradition accompanied by live music from the berimbau, atabaque, and pandeiro. Above all, our classes are a celebration of resilience, creativity, and community.',
        es: 'La capoeira es una forma de arte brasileña que nació de los africanos esclavizados en el siglo XVI y que combina movimientos fluidos y rítmicos con patadas, giros y derribos. En nuestra roda de Long Beach, practicamos esta tradición centenaria acompañada por la música en vivo del berimbau, el atabaque y el pandeiro. Por encima de todo, nuestras clases son una celebración de la resiliencia, la creatividad y la comunidad.'
      },
      image: '/assets/lb-what-is-capoeira.jpg'
    },
    gallery: ['/assets/lb-gallery-1.jpg', '/assets/lb-gallery-2.jpg'],
    social: {
      instagram: {
        handle: '@capoeiralongbeach_capoeiracura',
        url: 'https://www.instagram.com/capoeiralongbeach_capoeiracura'
      }
    }
  },
  {
    id: 'leon',
    name: 'LEÓN, MEXICO',
    schedule: {
      en: {
        when: 'Wednesdays & Fridays\n7:00 – 9:00 PM',
        cost: '$350 MXN per month',
        who: 'Open to all ages',
      },
      es: {
        when: 'Miércoles y Viernes\n7:00 – 9:00 PM',
        cost: '$350 MXN por mes',
        who: 'Abierto para todas las edades',
      }
    },
    location: {
      address: '1202 Burgos St., San Juan Bosco Neighborhood, León, Guanajuato, Mexico.',
      mapQuery: 'Calle+Burgos+1202+San+Juan+Bosco+Leon+Guanajuato+Mexico',
      mapEmbedUrl: 'https://www.google.com/maps?q=Calle+Burgos+1202+San+Juan+Bosco+Leon+Guanajuato+Mexico&output=embed',
      coordinates: { lat: 21.1345, lng: -101.7011 }
    },
    intro: {
      title: {
        en: 'Start your capoeira journey in León',
        es: 'Comienza tu viaje en la capoeira en León'
      },
      desc: {
        en: 'Capoeira Cura León is a community practicing Capoeira—an Afro-Brazilian art blending martial arts, dance, acrobatics, and live music. "Capoeira Cura" translates to "Capoeira Heals," reflecting our belief in movement as medicine. We train in the San Juan Bosco neighborhood with a monthly fee of $350 MXN. We invite you to contact us to try a class and experience the roda firsthand.',
        es: 'Capoeira Cura León es una comunidad que practica Capoeira, un arte afrobrasileño que combina artes marciales, danza, acrobacias y música en vivo. "Capoeira Cura" significa "La Capoeira Sana", reflejando nuestra creencia en el movimiento como medicina. Entrenamos en la colonia San Juan Bosco con una mensualidad de $350 MXN. Te invitamos a contáctarnos para probar una clase y vivir la experiencia de la roda en persona.'
      },
      images: ['/assets/leon-intro-1.jpg', '/assets/leon-intro-2.jpg']
    },
    whatIsCapoeira: {
      title: {
        en: 'What is Capoeira?',
        es: '¿Qué es la Capoeira?'
      },
      desc: {
        en: 'Capoeira is a Brazilian art form born from enslaved Africans in the 16th century, blending fluid, rhythmic movement with kicks, spins, and takedowns. In our León roda, we practice this centuries-old tradition accompanied by live music from the berimbau, atabaque, and pandeiro. Above all, our classes are a celebration of resilience, creativity, and community.',
        es: 'La capoeira es una forma de arte brasileña que nació de los africanos esclavizados en el siglo XVI y que combina movimientos fluidos y rítmicos con patadas, giros y derribos. En nuestra roda de León, practicamos esta tradición centenaria acompañada por la música en vivo del berimbau, el atabaque y el pandeiro. Por encima de todo, nuestras clases son una celebración de la resiliencia, la creatividad y la comunidad.'
      },
      image: '/assets/leon-what-is-capoeira.jpg'
    },
    gallery: ['/assets/leon-gallery-1.jpg', '/assets/leon-gallery-2.jpg'],
    social: {
      instagram: {
        handle: '@capoeira_cura_leon',
        url: 'https://www.instagram.com/capoeira_cura_leon'
      }
    }
  }
];
