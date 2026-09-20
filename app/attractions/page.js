'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Compass, TreePine, Mountain, Bird, Landmark, Coffee, Waves, Telescope } from 'lucide-react';

const attractions = [
  {
    name: 'Udawalawa National Park',
    img: '/images/collection/1e53ee0a-c57f-43f9-98f4-5172043bbb8e.JPG',
    desc: 'Home to over 600 elephants roaming freely across vast grasslands, alongside leopards, water buffalo, and exotic birds. One of Sri Lanka\'s most treasured wildlife experiences — just minutes from Emerald Haven.',
    distance: '16 km',
    category: 'National Park',
    overline: 'WILDLIFE SANCTUARY',
    icon: TreePine,
  },
  {
    name: 'Elephant Transit Home',
    img: '/images/collection/5a76cede-17df-4ba3-8c81-23b6b1d68f4a.JPG',
    desc: 'An extraordinary rehabilitation centre where orphaned baby elephants are nursed back to health and prepared for release into the wild. Witness daily feeding sessions in a deeply moving setting.',
    distance: '18 km',
    category: 'Conservation',
    overline: 'CONSERVATION CENTRE',
    icon: Compass,
  },
  {
    name: 'Nuwaragala Forest',
    img: '/images/collection/72cbcea6-5b51-4145-8b66-a6a131dbba41.JPG',
    desc: 'A pristine forest reserve just moments from your doorstep, offering serene nature walks through ancient woodland canopies, rare bird watching, and an untouched tropical landscape.',
    distance: '2.9 km',
    category: 'Nature Reserve',
    overline: 'PRISTINE WILDERNESS',
    icon: TreePine,
  },
  {
    name: 'Udawalawa Reservoir',
    img: '/images/collection/a9b7d1c6-97e2-4bc1-a7fc-f9dc165bd4ef.JPG',
    desc: 'A breathtaking man-made lake embraced by mountains and lush greenery. Ideal for golden-hour photography, peaceful scenic drives, and birdwatching along the tranquil shoreline.',
    distance: '8 km',
    category: 'Scenic Lake',
    overline: 'LAKESIDE BEAUTY',
    icon: Waves,
  },
  {
    name: 'Local Cultural Village',
    img: '/images/collection/d495eb3f-4cf8-4653-a63f-77ededee9638.JPG',
    desc: 'Immerse yourself in authentic Sri Lankan village life. Participate in traditional cooking classes, discover age-old craftsmanship, and share moments with warm, welcoming locals.',
    distance: '5 km',
    category: 'Cultural',
    overline: 'HERITAGE & CULTURE',
    icon: Coffee,
  },
  {
    name: 'Scenic Mountain Views',
    img: '/images/collection/IMG_6233.JPG',
    desc: 'Panoramic vistas stretching across rolling hills and lush valleys, painted in shades of emerald and gold. A photographer\'s paradise during sunrise and sunset hours.',
    distance: '10 km',
    category: 'Viewpoint',
    overline: 'PANORAMIC VIEWPOINT',
    icon: Mountain,
  },
  {
    name: 'Tea Plantations',
    img: '/images/collection/IMG_6256.JPG',
    desc: 'Journey through emerald-carpeted tea estates where world-famous Ceylon tea is lovingly cultivated. Enjoy guided tours, fresh tastings, and the rhythmic beauty of the hill country.',
    distance: '30 km',
    category: 'Tea Country',
    overline: 'CEYLON TEA ESTATES',
    icon: Telescope,
  },
  {
    name: 'Wildlife Bird Sanctuary',
    img: '/images/collection/IMG_6263.JPG',
    desc: 'A protected haven for over 200 avian species, including rare endemics found nowhere else on earth. Early morning visits reveal the forest alive with colour and song.',
    distance: '12 km',
    category: 'Bird Sanctuary',
    overline: 'AVIAN PARADISE',
    icon: Bird,
  },
  {
    name: 'Ancient Temple Ruins',
    img: '/images/collection/IMG_6264.JPG',
    desc: 'Step back in time exploring centuries-old Buddhist temples and archaeological marvels. Stone carvings, ancient stupas, and sacred bo trees tell stories spanning millennia.',
    distance: '20 km',
    category: 'Heritage Site',
    overline: 'ANCIENT HERITAGE',
    icon: Landmark,
  },
];

const surroundings = [
  {
    title: 'Restaurants & Cafes',
    items: [
      { name: 'Walawa Wine Stores', dist: '650 m' },
      { name: 'Shashikala Wine Stores', dist: '700 m' },
      { name: 'Ice Burge Family Restaurant', dist: '850 m' },
    ],
  },
  {
    title: 'Natural Beauty',
    items: [
      { name: 'Nuwaragala Forest', dist: '2.9 km' },
      { name: 'Udawalawa National Park', dist: '16 km' },
      { name: 'Udawalawa Reservoir', dist: '8 km' },
    ],
  },
  {
    title: 'Closest Airports',
    items: [
      { name: 'Mattala Rajapaksa International', dist: '50 km' },
      { name: 'Weerawila Airport', dist: '65 km' },
      { name: 'Colombo (BIA)', dist: '180 km' },
    ],
  },
];

// Animation presets
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.8 },
};

const stagger = (delay = 0) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});

export default function AttractionsPage() {
  return (
    <div className="page-transition">
      {/* ═══ HERO — Typography-focused, no background image ═══ */}
      <section className="attr-hero" id="attractions-hero">
        <div className="attr-hero-inner">
          <motion.div {...stagger(0)}>
            <span className="attr-badge">
              <Compass size={13} strokeWidth={1.5} />
              Scenic Attractions
            </span>
          </motion.div>

          <motion.h1 className="attr-hero-title" {...stagger(0.1)}>
            Explore the <br />
            <em>Udawalawa</em> Region
          </motion.h1>

          <motion.p className="attr-hero-desc" {...stagger(0.2)}>
            From ancient forests and shimmering reservoirs to centuries-old temples
            — discover the natural wonders and cultural treasures that surround
            Emerald Haven, each just a short journey away.
          </motion.p>

          <motion.div className="attr-hero-line" {...stagger(0.3)} />
        </div>
      </section>

      {/* ═══ ATTRACTIONS LIST — Alternating zig-zag layout ═══ */}
      <section className="attr-list-section" id="attractions-list">
        <div className="attr-list-inner">
          {attractions.map((item, i) => {
            const isReversed = i % 2 !== 0;
            const IconComponent = item.icon;
            const num = String(i + 1).padStart(2, '0');

            return (
              <div key={item.name}>
                <motion.article
                  className={`attr-row${isReversed ? ' reverse' : ''}`}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.05 }}
                >
                  {/* Image Column */}
                  <div className="attr-img-col">
                    <div className="attr-img-wrap">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 55vw"
                      />
                      {/* Distance badge — top left */}
                      <div className="attr-img-badge top-left">
                        <MapPin size={14} strokeWidth={1.5} />
                        {item.distance}
                      </div>
                      {/* Category badge — top right */}
                      <div className="attr-img-badge top-right">
                        <IconComponent size={14} strokeWidth={1.5} />
                        {item.category}
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className="attr-text-col">
                    <motion.div {...stagger(0.15)}>
                      <div className="attr-number" aria-hidden="true">{num}</div>
                      <p className="attr-overline">{item.overline}</p>
                      <h2 className="attr-title">{item.name}</h2>
                      <p className="attr-desc">{item.desc}</p>
                      <span className="attr-link" role="link" tabIndex={0}>
                        Learn More
                        <ArrowRight size={16} strokeWidth={1.5} />
                      </span>
                    </motion.div>
                  </div>
                </motion.article>

                {/* Thin separator — except after last item */}
                {i < attractions.length - 1 && (
                  <motion.div className="attr-separator" {...fadeIn} />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ PROPERTY SURROUNDINGS ═══ */}
      <section className="attr-surroundings" id="property-surroundings">
        <div className="attr-surround-inner">
          {/* Section heading */}
          <motion.div className="mb-24 text-center" {...fadeUp}>
            <p
              className="text-xs tracking-[0.5em] uppercase font-medium mb-6"
              style={{ color: 'rgba(16,185,129,0.7)' }}
            >
              Nearby
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-8 text-white tracking-wide">
              Property Surroundings
            </h2>
            <div className="premium-divider" />
          </motion.div>

          {/* Cards grid */}
          <div className="attr-surround-grid">
            {surroundings.map((cat, i) => (
              <motion.div
                key={cat.title}
                className="attr-surround-card"
                {...stagger(i * 0.12)}
              >
                <h3>{cat.title}</h3>
                <div>
                  {cat.items.map((item) => (
                    <div key={item.name} className="attr-surround-item">
                      <span>{item.name}</span>
                      <span className="attr-surround-dist">{item.dist}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
