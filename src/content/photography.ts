import bertholdCover from '../assets/photography/records/bertholdcity/bertholdcity_cover.JPG?w=2000&format=webp'
import bertholdBack from '../assets/photography/records/bertholdcity/berthold-city-back-cover.jpg'
import changeCover from '../assets/photography/records/change/Change_01.jpg?w=2000&format=webp'
import change from '../assets/photography/records/change/change-cover.jpg'
import changeBack from '../assets/photography/records/change/back.jpg'
import broadwayCalls from '../assets/photography/records/redscare/Broadwaycalls.jpg'
import redscare from '../assets/photography/records/redscare/redscare.jpg'
import canadaWorksWording from '../assets/photography/books/how-canada-works-wording.jpg'
import canadaWorksCover from '../assets/photography/books/how-canada-works-cover.jpg'
import canadaWorksStanding from '../assets/photography/books/XVX04153.jpg'
import canadaWorksBooth from '../assets/photography/books/XVX04108.jpg'
import guillowPhoto from '../assets/photography/guillow/spad.jpg'
import guillowSpad from '../assets/photography/guillow/guillow-spad.png'
import guillowStory from '../assets/photography/guillow/guillow-100.png'
import type { Project } from './types'

export const photography: Project[] = [
  {
    slug: 'how-canada-works',
    title: 'How Canada Works',
    location: 'Vancouver, BC, Canada',
    summary: 'A portrait of my friend Dave for the cover of Peter Mansbridge’s book.',
    body: [
      'I was commissioned to take a photo of my friend Dave for Peter Mansbridge’s book, and naturally I jumped at the opportunity. You might recognize Dave from the Change test press photo.',
      'Dave works with the community in the Downtown Eastside of Vancouver, BC. I took some photos of him inside Insite, and a photo of him in an alley that ended up on the front cover.',
      'Dave does important work, and I was happy to see him featured on the cover. I shot it all on my Sony A7 II.',
    ],
    tags: ['Book cover', 'Editorial'],
    role: 'Photographer',
    cover: {
      src: canadaWorksWording,
      alt: 'The title lettering of How Canada Works by Peter Mansbridge and Mark Bulgutch: white type on a red background inside a thin gold frame, under the words National Bestseller.',
    },
    images: [
      {
        src: canadaWorksCover,
        alt: 'The cover of How Canada Works by Peter Mansbridge and Mark Bulgutch: six black and white portraits above the title on a red background.',
      },
      {
        src: canadaWorksStanding,
        alt: 'A black and white portrait of Dave, in glasses, a denim jacket and a hoodie, standing in a graffitied alley beside a wheeled oxygen cylinder.',
      },
      {
        src: canadaWorksBooth,
        alt: 'A black and white photo of Dave inside Insite, in glasses and a denim jacket, smiling and gesturing as he talks to someone in the foreground, in front of numbered booths.',
      },
    ],
    url: 'https://www.simonandschuster.com/books/How-Canada-Works/Peter-Mansbridge/9781668017180',
    urlLabel: 'View the book at Simon & Schuster',
  },
  {
    slug: 'bethold-city',
    title: 'Berthold City',
    location: 'Portland, Oregon',
    summary: 'Live photograph commissioned for back of album artwork.',
    body: [
      'Berthold City is a straight edge hardcore band from Los Angeles, California.',
      'I took this photograph in Portland, Oregon in 2019, on the first night of a West Coast tour my band was doing with Berthold City. It was the first time I saw them play and, given all the bands they had played in before, I knew they would be great.',
      'The tour came right before the pandemic. Our last show was actually cancelled and we had to fly home because the borders were closing.',
      'It is a long exposure on a Nikon FE, shot on Delta 3200, which is why the band is a blur of movement and grain. Several years later it ended up on the back cover of Where Did We Go Wrong. War Records and the band never sent me a copy, so the back cover proof here is the best I can do. Sorry about the resolution.',
      'Later on, I filled in for Berthold City on a tour of Mexico, and everyone got sick. Between the pandemic, the sickness and the missing record, I’ve never had much luck with that band. Great band, though.',
      'They also made me a character in their Street Fighter style video game. My special moves are Camera Whip and Flash Bulb. I linked the game above.',
    ],
    tags: ['Live', 'Album art', '35mm'],
    cover: {
      src: bertholdCover,
      alt: 'A blurred black and white live photo of Berthold City on stage, with figures in motion against a dark room and a bright light overhead.',
    },
    images: [
      {
        src: bertholdBack,
        alt: 'Print proof of the back cover of Where did We Go Wrong by Berthold City: a blurred black and white live photo above the track list.',
      },
    ],
    role: 'Photographer',
    url: 'https://war-rec.com/collections/all/products/berthold-city-where-did-we-go-wrong-yellow-with-red-and-black-splatter-out-of-400-preorder',
    urlLabel: 'View the record at War Records',
    links: [
      { url: 'https://www.bertholdcityhc.com/bcfighter/', label: 'Play Berthold City Fighter' },
    ],
  },
  {
    slug: 'change',
    title: 'Closer Still - Test Press',
    location: 'Vancouver, BC',
    summary: 'Photographs commissioned for band promos and used on test pressings of debut LP.',
    body: [
      'Change is a vegetarian, youth crew, straight edge band from Vancouver, Canada, made up of several heavyweight veterans of the scene.',
      'They asked me to take promo photos of the band. We shot in the singer’s apartment, and I used my old Holga, a Nikon FE and a Sony A7 II. The photo you see here was the one chosen for the test press variant of Closer Still.',
      'Long after this photo was taken, I ended up touring all over the place as Change’s guitar player. That’s me playing guitar on the back cover of the record, in a photo taken in Barcelona. It’s the coolest photo ever taken of me, but that’s not the point of this summary.',
    ],
    tags: ['Portrait', 'Album art'],
    cover: {
      src: changeCover,
      alt: 'The four members of Change sitting in a row on a dark green sofa in front of a large window, looking at each other and away from the camera.',
    },
    images: [
      {
        src: change,
        alt: 'The Closer Still test pressing sleeve: the band photograph in blue duotone with the word Change hand lettered underneath.',
      },
      {
        src: changeBack,
        alt: 'The back cover of Closer Still on purple: five black and white live photos of the band, one each of the guitarists, bassist, singer and drummer, around the track list and credits.',
      },
    ],
    role: 'Photographer',
    url: 'https://www.discogs.com/release/15923761-Change-Closer-Still',
    urlLabel: 'View the record on Discogs',
  },
  {
    slug: 'broadway-calls',
    title: 'Red Scare Industries Comp',
    location: 'Philadelphia, PA',
    summary: 'A portrait of Broadway Calls on Ektachrome slide film, taken on a run of shows in 2019.',
    body: [
      'Broadway Calls are a pop punk band from Portland, Oregon who have been around forever. They were on Adeline Records and write anthemic, heartfelt hooks.',
      'In 2019 I was on a run of shows with them, playing guitar in Daggermouth. It felt like a blast from the past. I took this photo outside Kung Fu Necktie in Philadelphia, Pennsylvania, on Kodak Ektachrome slide film, and it is the one Broadway Calls used on this record.',
      'This is the best version of the shot I have for now. I lost my edit on an old hard drive, so I will have to rescan the original film.',
      'Fun fact: I took it a few days before my first date with my wife. That date was supposed to be the day I got home from tour, but I was sick.',
    ],
    tags: ['Portrait', 'Album art'],
    cover: {
      src: broadwayCalls,
      alt: 'The three members of Broadway Calls standing against a dark metal shutter in the sun, the one in the middle smiling.',
    },
    images: [
      {
        src: redscare,
        alt: 'The sleeve of Red Scare Industries 15 Years of Tears and Beers: a cream raised fist over a star and the number 15 on blue, dated 2004 to 2019.',
      },
    ],
    role: 'Photographer',
    url: 'https://www.discogs.com/release/14240696-Various-Red-Scare-Industries-15-Years-of-Tears-and-Beers',
    urlLabel: 'View the record on Discogs',
  },
  {
    slug: 'guillows-100-year',
    title: 'Guillow’s 100 Year',
    location: 'Wakefield, MA',
    summary: 'The model build and photograph for Guillow’s 100 year Spad VII reissue.',
    body: [
      'Aviation runs in my family. I come from an unbroken line of pilots, and I’ve been building model planes for most of my life.',
      'This is a traditional stick and tissue build. The kit is an 18 inch laser cut balsa model of the Spad VII, a long out of print kit that Guillow’s brought back for their 100 year anniversary. I covered the balsa frame in tissue paper, tightened it with water, and sealed it with EZE dope. Then I airbrushed it and weathered it with oil paints and real dirt.',
      'I modelled mine after Vieux Charles, the Spad flown by the French ace Georges Guynemer. The decals that came with the kit wouldn’t stick and kept tearing, so I improvised. I cut my own masks using the original decals as a guide, mixed my own paints, and airbrushed new roundels and markings to match the original insignia.',
      'It was a fun build, and it paid off. I photographed it for the reissue, and that photo became the main image on the product page. My Spad turned up in their ad campaign too. Seeing a hobby I’ve had most of my life show up in someone else’s marketing is strange and wonderful, and I’m super proud of it.',
      'Fun fact: I’m on the waiting list for gliding school to learn unpowered flight, because I don’t want to break the line of aviators in my family. Everyone else in my family has their twin engine and jet ratings, but I’m fine with gliders. None of them have their work featured on the Guillow’s website.',
    ],
    tags: ['Product photography'],
    role: 'Photographer and model builder',
    cover: {
      src: guillowPhoto,
      alt: 'A hand built model of the Spad VII biplane on a pale tabletop against a dark wooden wall: weathered tan wings and fuselage, a wooden propeller, spoked black wheels and airbrushed red, white and blue roundels on the wings.',
    },
    images: [
      {
        src: guillowSpad,
        alt: 'The Guillow’s Spad VII product page: a photograph of a weathered balsa wood biplane with French roundels, a gallery of thumbnails below it, the $74.99 price, an Add to Cart button and the kit details.',
      },
      {
        src: guillowStory,
        alt: 'The Share Your Guillow’s Story page: a banner with the title beside a collage of vintage photos of a man and a boy building model planes, a red model plane, and the Spad VII build in the sky.',
      },
    ],
    url: 'https://www.guillow.com/product/spad-vii/',
    urlLabel: 'View the kit at Guillow’s',
  },
]
