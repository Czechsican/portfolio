import me from '../assets/aboutme/me.jpg'
import poland from '../assets/aboutme/poland.jpg'
import leipzig from '../assets/aboutme/leipzig.jpg'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

// Edit this copy to say it your way.
const subheading = 'Software Developer, photographer, graphic designer and musician.'

const paragraphs = [
  'I’m a software developer with more than ten years of experience building with TypeScript, React, Redux and Node.js.',
  'Alongside the code I work in media and print: I’ve produced a weekly podcast, handled print and web production, including signage for Team Canada, and I’m the primary editor on the Record Room YouTube channel.',
  'My photography has appeared on record covers and on the cover of Peter Mansbridge’s book How Canada Works.',
  'I play in touring bands and, with friends, book and organize our own tours and shows across Europe and the Americas, which means I also handle the finances and design the merch.',
  'This portfolio is a living document. I’m backfilling it with previous projects, so keep an eye on it.',
]

const facts: [string, string][] = [
  ['Languages', 'English and Spanish (fluent), Canadian French (strong)'],
  ['Training', 'Certificate in Website Creation and Design, Concordia University'],
  ['Tools', 'TypeScript, React, Redux, Node.js, Adobe Premiere and Audition'],
]

export function About() {
  useDocumentTitle('About')
  const [lede, first, ...rest] = paragraphs

  return (
    <div className="page" data-channel="ink">
      <h1 className="page__title">About</h1>
      <p className="page__intro about__intro">{subheading}</p>
      <figure className="about__hero">
        <img
          src={poland}
          alt="A guitarist leaps off a low stage mid-song, long hair flying, in a wide-angle black and white shot with the band and a small crowd behind."
          decoding="async"
        />
        <figcaption>Częstochowa, Poland</figcaption>
      </figure>
      <div className="about">
        <div className="about__main">
          <p className="about__lede">{lede}</p>
          <div className="prose about__body">
            <p>{first}</p>
            <figure className="about__inset">
              <img
                src={leipzig}
                alt="A guitarist seen from below, mid-jump above a crowd that looks up at them in a packed room, in saturated colour."
                loading="lazy"
                decoding="async"
              />
              <figcaption>Leipzig, Germany</figcaption>
            </figure>
            {rest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <aside className="about__aside">
          <figure>
            <img
              src={me}
              alt="Black and white portrait: long dark hair and a dark jacket over a band t-shirt, in front of a leopard print backdrop."
              loading="lazy"
              decoding="async"
            />
          </figure>
          <dl className="facts facts--stacked">
            {facts.map(([term, value]) => (
              <div key={term} className="facts__row">
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </div>
  )
}
