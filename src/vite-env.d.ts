/// <reference types="vite/client" />

/** Photos resized at build time by vite-imagetools; add a declaration per query used. */
declare module '*.JPG?w=2000&format=webp' {
  const src: string
  export default src
}

declare module '*.jpg?w=2000&format=webp' {
  const src: string
  export default src
}
