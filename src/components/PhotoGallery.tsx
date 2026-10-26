import { useState } from 'react'
import { mediumLabel, photoGroups, photoInfo } from '../content/photos'
import type { PhotoInfo } from '../content/types'
import { Lightbox } from './Lightbox'

const thumbs = import.meta.glob('../assets/photography/gallery/{art,live}/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  query: { w: '400;800;1200', format: 'webp', as: 'srcset' },
  import: 'default',
}) as Record<string, string>
const full = import.meta.glob('../assets/photography/gallery/{art,live}/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  query: { w: '2000', format: 'webp' },
  import: 'default',
}) as Record<string, string>

const ROOT = '../assets/photography/gallery/'

interface Photo {
  key: string
  src: string
  srcSet: string
  name: string
  info?: PhotoInfo
}

/** Position in photos.ts, so entry order there is display order. Unlisted photos go last. */
const listed = Object.keys(photoInfo)
const rank = (key: string) => {
  const i = listed.indexOf(key)
  return i === -1 ? listed.length : i
}

const photos: Photo[] = Object.entries(full)
  .map(([path, src]) => {
    const key = path.slice(ROOT.length)
    return { key, src, srcSet: thumbs[path], name: key.split('/').pop() ?? key, info: photoInfo[key] }
  })
  .sort((a, b) => rank(a.key) - rank(b.key) || a.key.localeCompare(b.key, undefined, { numeric: true }))

const folderOf = (key: string) => (key.includes('/') ? key.split('/')[0] : '')

const groups = photoGroups
  .map(({ folder, label }) => ({ label, photos: photos.filter((p) => folderOf(p.key) === folder) }))
  .filter((group) => group.photos.length > 0)

/** Photos in on-page order, which is the order the lightbox steps through. */
const ordered = groups.flatMap((group) => group.photos)

export function MediumBadge({ info }: { info: PhotoInfo }) {
  const details = info.details?.filter(([, value]) => value.trim() !== '') ?? []
  return (
    <details className={`medium medium--${info.medium}`}>
      <summary className="medium__label">{mediumLabel[info.medium]}</summary>
      {details.length > 0 && (
        <dl className="medium__details">
          {details.map(([term, value]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </details>
  )
}

/**
 * Lazy-loaded square thumbnail. The fixed ratio holds the space open before the image
 * loads, so the browser only fetches what is near the screen; the halftone class
 * shows until then.
 */
function GalleryImage({ srcSet }: { srcSet: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      className={loaded ? 'photo__img' : 'photo__img photo__img--loading'}
      src={srcSet.split(' ')[0]}
      srcSet={srcSet}
      sizes="(min-width: 600px) 33vw, 100vw"
      alt=""
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
    />
  )
}

export function PhotoGallery() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      {groups.map(({ label, photos: group }) => (
        <section key={label} className="gallery" aria-label={label}>
          <h2 className="gallery__title">{label}</h2>
          <ul className="gallery__grid">
            {group.map((photo) => (
              <li key={photo.key} className="photo">
                <div className="photo__frame">
                  <button
                    type="button"
                    className="photo__open"
                    aria-label={`View ${photo.info?.blurb ?? photo.name} full size`}
                    onClick={() => setOpen(ordered.indexOf(photo))}
                  >
                    <GalleryImage srcSet={photo.srcSet} />
                  </button>
                  {photo.info && <MediumBadge info={photo.info} />}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
      {open !== null && (
        <Lightbox
          photos={ordered}
          index={open}
          onIndexChange={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  )
}
