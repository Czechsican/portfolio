import { useEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { sections, site } from '../content/site'

export function Layout() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    // A client-side route change doesn't reload the page, so move focus to the new content
    // for keyboard and screen reader users. The first load already starts at the top.
    if (firstRender.current) firstRender.current = false
    else mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header">
        <Link className="header__name" to="/">
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="header__nav">
            {sections.map((s) => (
              <li key={s.id}>
                <NavLink className="header__link" to={s.path}>
                  {s.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="main" className="main" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="footer">
        <p>
          {site.name}, {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
