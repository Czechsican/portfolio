import bbycaPdp from '../assets/websites/bbyca/bbyca_PDP.png'
import bbycaReviews from '../assets/websites/bbyca/bbyca_reviews.png'
import sportchekHome from '../assets/websites/sportchek/Sportchek.png'
import atmoHome from '../assets/websites/sportchek/atmo.jpg'
import atmoArcteryx from '../assets/websites/sportchek/Arcteryx_CustomPage.jpg'
import cadenceCover from '../assets/websites/cadence/Cadence_mock_cover.jpg'
import cadenceFull from '../assets/websites/cadence/Cadence_mock_full.jpg'
import type { Project } from './types'

export const websites: Project[] = [
  {
    slug: 'best-buy-canada-pdp',
    title: 'Best Buy Canada PDP',
    location: 'Canada',
    summary: 'The product details page and customer reviews on bestbuy.ca.',
    body: [
      'The product details page is where a shopper on bestbuy.ca decides to buy. I worked on every part of it.',
      'On the page itself, that meant the product image gallery, the variant picker for choosing between product options, and the reserve and pick up (RPU) section that sits beside delivery. I also worked on the customer reviews.',
      'The page is built in React.js with Redux, and I tagged it for Adobe Analytics so the team could see how shoppers used each section.',
      'Beyond building features, I looked after the page day to day: fixing bugs, opening pull requests and reviewing other developers’ code.',
    ],
    tags: ['React', 'Redux', 'Adobe Analytics', 'E-commerce'],
    role: 'Software developer',
    cover: {
      src: bbycaPdp,
      alt: 'A Best Buy Canada product page: an image gallery, a star rating, the price with variant options, delivery and pick up choices, and a yellow Add to Cart button.',
    },
    images: [
      {
        src: bbycaReviews,
        alt: 'Five star customer reviews on the Best Buy Canada product page, each with customer photos and Quality, Value and Ease of Use ratings.',
      },
    ],
    url: '',
    urlLabel: '',
  },
  {
    slug: 'sport-chek',
    title: 'Sport Chek',
    location: 'Canada',
    summary: 'The Sport Chek home page and the Atmosphere site from the same retail group, FGL Sports.',
    body: [
      'The sportchek.ca home page during the Canadian Olympic Team campaign: a hero for the Adidas high performance collection, promotional tiles for apparel and footwear deals, and brand features below.',
      'Alongside it, the Atmosphere site: its home page with seasonal offers and a wall of outdoor brands, and the Arc’teryx brand page.',
    ],
    tags: ['E-commerce', 'Home page'],
    cover: {
      src: sportchekHome,
      alt: 'The Sport Chek home page: a header and navigation, a hero banner introducing the Adidas Canadian Olympic Team high performance collection with athletes in team gear, three discount tiles for hoodies, footwear and kids’ jackets, and brand banners for X5 and Burton.',
    },
    images: [
      {
        src: atmoHome,
        alt: 'The Atmosphere home page: a winter scene of two people in snow with offers for footwear, Nordic ski rebates and outerwear, a column of promotions on the right, and a row of outdoor brand logos below.',
      },
      {
        src: atmoArcteryx,
        alt: 'The Atmosphere Arc’teryx page: a video panel of a climber, a brand statement, and five down jackets with prices and colour swatches.',
      },
    ],
  },  
  {
    slug: 'cadence',
    title: 'Cadence',
    location: 'Vancouver, BC',
    summary: 'A demo site for Cadence Leadership + Communication, a leadership coaching practice.',
    body: [
      'I built this demo site for Cadence Leadership + Communication in React.js. It covers the home page: a hero, a row of figures, the four service areas (coaching, courses, 360 assessments and speaking), a walkthrough of how the 360 works, recent posts and a closing call to action.',
      'This wasn’t the design the team chose in the end, but I’m pleased with how the build came out. The code is on my GitHub if you want to look under the hood.',
    ],
    tags: ['React.js'],
    role: 'Developer',
    url: 'https://github.com/Czechsican/cadence',
    urlLabel: 'View the code on GitHub',
    cover: {
      src: cadenceCover,
      alt: 'The Cadence Leadership + Communication home page: a dark hero with the headline Most leadership development asks good questions. We take positions, an image of an office corridor, and figures for years in practice, leaders coached and courses taught.',
    },
    images: [
      {
        src: cadenceFull,
        alt: 'The full Cadence home page: the hero, four service area cards, a section on how the 360 assessment works, three recent posts and a closing call to action.',
      },
    ],
  },
]
