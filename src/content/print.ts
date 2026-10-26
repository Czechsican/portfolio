import witCrosby from '../assets/print/what-it-takes/richmondCrosby.jpg'
import witCrosbyLive from '../assets/print/what-it-takes/richmondCrosby_live.jpg'
import witBroadway from '../assets/print/what-it-takes/Broadway.jpg'
import witKailie from '../assets/print/what-it-takes/KailieCharles.jpg'
import witYorkdale from '../assets/print/what-it-takes/yorkdalewall_live.jpg'
import puniShirt from '../assets/print/punitive-damage/law-and-order-shirt/Puni-shirt.jpg'
import puniStrikeBack from '../assets/print/punitive-damage/strike-back/strikeBackSocialMedia.jpg'
import puniStrikeBack2 from '../assets/print/punitive-damage/strike-back/strikeBackSocialMedia2.jpg'
import puniStrikeBack3 from '../assets/print/punitive-damage/strike-back/strikeBackSocialMedia3.jpg'
import puniTourPoster from '../assets/print/punitive-damage/europe-2023/tourPoster.png'
import type { Project } from './types'

export const print: Project[] = [
  {
    slug: 'what-it-takes',
    title: '#WhatItTakes',
    location: 'Canada',
    summary: 'Large-format Team Canada signage for Sport Chek, the Canadian Olympic Team partner.',
    body: [
      'Large-format window and wall graphics for the Sport Chek #WhatItTakes campaign, shown as flat artwork and installed in stores.',
      'Add the formats, the materials and the production run.',
    ],
    tags: ['Signage', 'Large format', 'Team Canada'],
    cover: {
      src: witCrosby,
      alt: 'Flat artwork: Go Canada Go in white type beside Sidney Crosby in a red Team Canada jersey, with the #WhatItTakes hashtag and Sport Chek and Canadian Olympic Team logos.',
    },
    images: [
      {
        src: witCrosbyLive,
        alt: 'The Crosby graphic installed as a window wrap on a Sport Chek storefront in a mall.',
      },
      {
        src: witBroadway,
        alt: 'Go Canada Go window graphics wrapped across a Sport Chek street-front, with bobsled, hockey and snowboard athletes.',
      },
      {
        src: witKailie,
        alt: 'Two large Go Canada Go wall graphics in a mall corridor, one featuring a bobsled athlete and the other a speed skater.',
      },
      {
        src: witYorkdale,
        alt: 'A wall-sized Go Canada Go graphic with a bobsled athlete, installed in a mall.',
      },
    ],
  },
  {
    slug: 'law-and-order-shirt',
    title: 'Law & Order shirt',
    location: 'Canada',
    summary: 'Tour merch for Punitive Damage’s 15 date Canadian tour with Comeback Kid.',
    body: [
      'I made this shirt before our 15 date tour across Canada with Comeback Kid, the Wake the Dead Anniversary Canadian Tour. Red and blue ink on an off-white natural Gildan Ultra Cotton tee.',
      'We brought a large run and sold out of it. Twice. Then we did a third run for everyone who couldn’t make the shows, so nobody had to miss out on the shirt as well as the tour.',
    ],
    tags: ['Merch', 'Shirt'],
    cover: {
      src: puniShirt,
      alt: 'Off-white t-shirt printed in red and blue with Punitive Damage above a drawing of a battered face and raised batons, and Law & Order Comes below.',
    },
    url: 'https://punitivedamage.bandcamp.com/merch/law-order-shirt',
    urlLabel: 'View the shirt on Bandcamp',
    role: 'Designer',
  },
  {
    slug: 'punitive-damage-europe-2023',
    title: 'Punitive Damage Europe 2023',
    location: 'Europe',
    summary: 'Punitive Damage European Tour Poster, designed for Refuse Records.',
    body: [
      'I designed this poster for Refuse Records ahead of Punitive Damage’s first time in Europe. We were over there supporting our first LP on Atomic Action Records, This Is The Blackout.',
      'We’ve been back to Europe several times since, but this is still my favourite poster. Probably because I made it, or because it was our first time. Who’s to say.',
    ],
    tags: ['Poster', 'Tour'],
    cover: {
      src: puniTourPoster,
      alt: 'Punitive Damage Europe 2023 tour poster in black and cream: a chained lion inside a ring of bolts, the line It’s Us Against Them, and the dates from Prague to Leipzig.',
    },
    role: 'Designer',
  },
  {
    slug: 'punitive-damage-strike-back',
    title: 'Punitive Damage, Strike Back',
    location: 'Denver, Colorado',
    summary: 'Promos for the Strike Back 7 inch on Atomic Action Records.',
    body: [
      'Nobody gave me a brief for this one. I took it on out of necessity: our second 7 inch, Strike Back, our first release with Atomic Action Records, was about to come out and none of the marketing had been done.',
      'I was on tour at the time, so I hunkered down in a mall in Denver, Colorado to slap it all together, and filled the Atomic Action website with product images while I was at it.',
      'Fun fact: the records were still being pressed, so we had no photos of them. The red spatter vinyl in the promo is actually a DMX 7 inch with our cover and centre label put over the top. Clampdown Records ended up pressing a splatter that looked even better, so I undersold it a little. Thanks, DMX. We owe you one.',
    ],
    tags: ['Social media', 'Record'],
    cover: {
      src: puniStrikeBack,
      alt: 'Social media promo for the Punitive Damage Strike Back 7 inch: a red and a yellow record beside the red sleeve, over a crowd of police, with pre-order details for Atomic Action Records.',
    },
    images: [
      {
        src: puniStrikeBack2,
        alt: 'Streaming announcement for Strike Back: Punitive Damage across a red band over a halftone police photo, with Spotify, Apple Music and Bandcamp icons and the Atomic Action logo.',
      },
      {
        src: puniStrikeBack3,
        alt: 'Mockup of the Strike Back 7 inch: the red sleeve with Punitive Damage on a label, and a red and black splatter record with its centre label beside it, on a grey background.',
      },
    ],
    role: 'Designer',
  },
]
