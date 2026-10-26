import { useEffect, useRef, useState } from 'react'
import { mediumLabel } from '../content/photos'
import type { PhotoInfo } from '../content/types'

export interface LightboxPhoto {
  key: string
  src: string
  name: string
  info?: PhotoInfo
}

interface LightboxProps {
  photos: LightboxPhoto[]
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}

function LightboxImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      {!loaded && <div className="lightbox__placeholder" role="status" aria-label="Loading photo" />}
      <img
        className={loaded ? 'lightbox__img lightbox__img--loaded' : 'lightbox__img'}
        src={src}
        alt={alt}
        hidden={!loaded}
        ref={(img) => {
          if (img?.complete && img.naturalWidth > 0) setLoaded(true)
        }}
        onLoad={() => setLoaded(true)}
      />
    </>
  )
}

/** Arrow keys and swipes move, Escape closes. */
export function Lightbox({ photos, index, onIndexChange, onClose }: LightboxProps) {
  const count = photos.length
  const photo = photos[index]
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const touchStart = useRef<number | null>(null)

  const rows: [string, string][] = []
  if (photo.info?.location) rows.push(['Location', photo.info.location])
  if (photo.info?.country) rows.push(['Country', photo.info.country])
  rows.push(...(photo.info?.details ?? []))
  const filled = rows.filter(([, value]) => value.trim() !== '')

  const go = (step: number) => onIndexChange((index + step + count) % count)

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      opener?.focus()
    }
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      else if (event.key === 'ArrowLeft') go(-1)
      else if (event.key === 'ArrowRight') go(1)
      else if (event.key === 'Tab') {
        const buttons = dialogRef.current?.querySelectorAll<HTMLElement>('button')
        if (!buttons?.length) return
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  // Warm the neighbours so stepping through feels instant.
  useEffect(() => {
    for (const step of [-1, 1]) {
      new Image().src = photos[(index + step + count) % count].src
    }
  }, [index, count, photos])

  return (
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(event) => event.target === event.currentTarget && onClose()}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0].clientX
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return
        const dx = event.changedTouches[0].clientX - touchStart.current
        touchStart.current = null
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
      }}
    >
      <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose}>
        Close
      </button>
      {count > 1 && (
        <>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous photo"
            onClick={() => go(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next photo"
            onClick={() => go(1)}
          >
            ›
          </button>
        </>
      )}

      <figure className="lightbox__figure">
        <div className="lightbox__frame">
          <LightboxImage key={photo.src} src={photo.src} alt={photo.info?.blurb ?? photo.name} />
          {photo.info && (
            <span className={`medium__label lightbox__medium medium--${photo.info.medium}`}>
              {mediumLabel[photo.info.medium]}
            </span>
          )}
        </div>
        <figcaption className="lightbox__caption">
          {photo.info?.blurb && <p>{photo.info.blurb}</p>}
          {filled.length > 0 && (
            <dl className="lightbox__details">
              {filled.map(([term, value]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}
          <span className="lightbox__count" aria-live="polite">
            {index + 1} / {count}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
