export type ChapterId = 'concord' | 'long-beach' | 'leon';

export interface ChapterSchedule {
  when: string;
  cost: string;
  who: string;
  note?: string;
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
  };
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
      coordinates: { lat: 37.9779, lng: -122.0311 }
    }
  },
  {
    id: 'long-beach',
    name: 'LONG BEACH, CA',
    schedule: {
      en: {
        when: 'Tuesdays & Thursdays\n6:00 – 7:00 PM',
        cost: '$20 drop-in\nMonthly memberships available',
        who: 'All Levels Welcome, Teens & Adults.',
      },
      es: {
        when: 'Martes y Jueves\n6:00 – 7:00 PM',
        cost: '$20 clase suelta\nMembresías mensuales disponibles',
        who: 'Todos los niveles son bienvenidos\nAdolescentes y adultos.',
      }
    },
    location: {
      address: 'Long Beach, CA',
      mapQuery: 'Long+Beach+CA',
      mapEmbedUrl: 'https://www.google.com/maps?q=Long+Beach+CA&output=embed',
      coordinates: { lat: 33.7701, lng: -118.1937 }
    }
  },
  {
    id: 'leon',
    name: 'LEÓN, MEXICO',
    schedule: {
      en: {
        when: 'Wednesdays & Fridays\n7:00 – 8:30 PM',
        cost: 'Contact us for pricing',
        who: 'All levels welcome\nKids & adults',
      },
      es: {
        when: 'Miércoles y Viernes\n7:00 – 8:30 PM',
        cost: 'Contáctanos para precios',
        who: 'Todos los niveles son bienvenidos\nNiños y adultos',
      }
    },
    location: {
      address: 'León, Guanajuato, Mexico',
      mapQuery: 'Leon+Guanajuato+Mexico',
      mapEmbedUrl: 'https://www.google.com/maps?q=Leon+Guanajuato+Mexico&output=embed',
      coordinates: { lat: 21.1221, lng: -101.6833 }
    }
  }
];
