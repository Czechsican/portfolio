/** Each section gets one print-process colour: cyan, magenta, yellow, plus ink for About. */
export type Channel = 'cyan' | 'magenta' | 'yellow' | 'ink'

export interface Img {
  src: string
  alt: string
}

export interface ProjectLink {
  url: string
  label: string
}

export interface Project {
  slug: string
  title: string
  location: string
  summary: string
  /** Paragraphs shown on the project page. */
  body: string[]
  tags: string[]
  /** Optional. Without a cover, a halftone placeholder is drawn. */
  cover?: Img
  /** Additional images for the project page. */
  images?: Img[]
  role?: string
  /** External link: the live site for websites, the release page for records. */
  url?: string
  /** Link text for `url`. Defaults to 'Visit the live site'. */
  urlLabel?: string
  /** More external links, shown after `url`. */
  links?: ProjectLink[]
}

export interface Section {
  id: 'websites' | 'photography' | 'print' | 'about'
  path: string
  label: string
  channel: Channel
  blurb: string
}

export type Medium = 'digital' | '120mm' | '35mm'

export interface PhotoInfo {
  medium: Medium
  blurb?: string
  /** Shown as a tag in the lightbox, e.g. 'Terezín'. */
  location?: string
  /** Shown as a tag in the lightbox, e.g. 'Czechia'. */
  country?: string
  /** Label/value pairs shown in the medium badge, e.g. ['Camera', 'Rolleiflex']. */
  details?: [string, string][]
}
