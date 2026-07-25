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
      coordinates: { lat: 37.9779, lng: -122.0311 }
    },
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
      coordinates: { lat: 33.7958, lng: -118.1252 }
    },
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
    social: {
      instagram: {
        handle: '@capoeira_cura_leon',
        url: 'https://www.instagram.com/capoeira_cura_leon'
      }
    }
  }
];
