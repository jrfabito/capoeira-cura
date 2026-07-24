export type ChapterId = 'concord' | 'long-beach' | 'leon';

export interface Chapter {
  id: ChapterId;
  name: string;
  schedule: {
    when: string;
    cost: string;
    who: string;
    note?: string;
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
      when: 'Mondays & Thursdays\n7:00 – 8:00 PM',
      cost: '$15 drop-in\nFirst class free',
      who: 'All Levels Welcome, Teens & Adults.',
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
      when: 'Tuesdays & Thursdays\n6:00 – 7:00 PM',
      cost: '$20 drop-in\nMonthly memberships available',
      who: 'All Levels Welcome, Teens & Adults.',
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
      when: 'Wednesdays & Fridays\n7:00 – 8:30 PM',
      cost: 'Contact for pricing',
      who: 'All levels welcome\nKids and adults',
    },
    location: {
      address: 'León, Guanajuato, Mexico',
      mapQuery: 'Leon+Guanajuato+Mexico',
      mapEmbedUrl: 'https://www.google.com/maps?q=Leon+Guanajuato+Mexico&output=embed',
      coordinates: { lat: 21.1221, lng: -101.6833 }
    }
  }
];
