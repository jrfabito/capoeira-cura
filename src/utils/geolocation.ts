import { chapters, type ChapterId } from '../data/chapters';

// Haversine formula to calculate distance in km between two coordinates
function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

const MAX_DISTANCE_KM = 250;

export async function detectClosestChapter(): Promise<ChapterId | null> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) {
      console.warn('Geolocation API failed');
      return null;
    }
    const data = await response.json();

    if (data.country_name === 'Mexico' || data.country === 'MX') {
      return 'leon';
    }

    if (!data.latitude || !data.longitude) {
      return null;
    }

    const userLat = parseFloat(data.latitude);
    const userLng = parseFloat(data.longitude);

    let closestChapter: ChapterId | null = null;
    let minDistance = Infinity;

    for (const chapter of chapters) {
      const distance = getDistanceFromLatLonInKm(
        userLat,
        userLng,
        chapter.location.coordinates.lat,
        chapter.location.coordinates.lng
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestChapter = chapter.id;
      }
    }

    if (minDistance <= MAX_DISTANCE_KM) {
      return closestChapter;
    }

    return null;
  } catch (error) {
    console.error('Error detecting location:', error);
    return null;
  }
}
