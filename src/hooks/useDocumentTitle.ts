import { useEffect } from 'react'
import { site } from '../content/site'

/** Sets the tab title to "<page> | <site name>", or just the site name when no page is given. */
export function useDocumentTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} | ${site.name}` : site.name
  }, [page])
}
