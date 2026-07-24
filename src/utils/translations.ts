export const translations = {
  heroTitle: {
    en: "Discover the Rhythm, Strength, and Culture of Capoeira",
    es: "Descubre el Ritmo, la Fuerza y la Cultura de la Capoeira"
  },
  heroButton: {
    en: "TRY A FREE CLASS",
    es: "PRUEBA UNA CLASE GRATIS"
  },
  introTitle: {
    en: "Step into the roda, find your flow, and start your capoeira journey",
    es: "Entra a la roda, encuentra tu ritmo y comienza tu viaje en la capoeira"
  },
  introDesc: {
    en: "Capoeira Cura is a fun community practicing Capoeira — a dynamic Afro-Brazilian art blending martial arts, dance, acrobatics, and live music. Whatever brought you here, our classes meet you where you are: beginners and seasoned players train, play, and grow together in the roda.",
    es: "Capoeira Cura es una divertida comunidad que practica Capoeira, un dinámico arte afrobrasileño que combina artes marciales, danza, acrobacias y música en vivo. Sea lo que sea que te haya traído aquí, nuestras clases se adaptan a tu nivel: principiantes y practicantes experimentados entrenan, juegan y crecen juntos en la roda."
  },
  whatIsArt: {
    en: "THE ART",
    es: "EL ARTE"
  },
  whatIsTitle: {
    en: "What is Capoeira?",
    es: "¿Qué es la Capoeira?"
  },
  whatIsDesc: {
    en: "Capoeira is a Brazilian art form born from enslaved Africans in the 16th century, blending fluid, rhythmic movement with kicks, spins, and takedowns. It's practiced in a circle called the roda, powered by live music from the berimbau, atabaque, and pandeiro. Above all, it's a celebration of resilience, creativity, and community.",
    es: "La capoeira es una forma de arte brasileña que nació de los africanos esclavizados en el siglo XVI y que combina movimientos fluidos y rítmicos con patadas, giros y derribos. Se practica en un círculo llamado roda, impulsado por la música en vivo del berimbau, el atabaque y el pandeiro. Por encima de todo, es una celebración de la resiliencia, la creatividad y la comunidad."
  },
  whatIsLink: {
    en: "WATCH VIDEOS \u2192",
    es: "VER VIDEOS \u2192"
  }
};

export function t(key: keyof typeof translations, chapter: string | null) {
  const lang = chapter === 'leon' ? 'es' : 'en';
  return translations[key][lang];
}
