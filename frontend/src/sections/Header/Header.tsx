import type { MouseEvent } from 'react'
import { Link, useNavigate, useLocation } from 'react-router'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()

  const smoothScrollTo = (hash: string) => {
    const id = hash.replace('#', '')
    if (!id) return

    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = document.getElementById(id)
    if (!target) return

    const headerOffset = 88
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const handleMenuClick = (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault()
    
    if (location.pathname !== '/') {
      navigate('/' + hash)
      // Note: In a real app, you'd handle scrolling after the navigation completes
      // For now, navigating to /#hash might work if the browser handles it, 
      // but usually needs a useEffect in the home page.
    } else {
      smoothScrollTo(hash)
    }
  }

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:min-h-18.5 md:px-6">
        <Link
          className="inline-flex flex-col gap-0.5 text-4xl font-semibold tracking-wide text-zinc-900"
          to="/"
          onClick={(event) => {
            if (location.pathname === '/') {
              event.preventDefault()
              smoothScrollTo('#top')
            }
          }}
        >
          鑫信金融
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-zinc-700 md:flex" aria-label="主選單">
          <a href="#about" className="hover:text-emerald-700" onClick={(event) => handleMenuClick(event, '#about')}>關於</a>
          <a href="#service" className="hover:text-emerald-700" onClick={(event) => handleMenuClick(event, '#service')}>服務</a>
          <a href="#step" className="hover:text-emerald-700" onClick={(event) => handleMenuClick(event, '#step')}>步驟</a>
          <a href="#cases" className="hover:text-emerald-700" onClick={(event) => handleMenuClick(event, '#cases')}>案例</a>
          <a href="#faq" className="hover:text-emerald-700" onClick={(event) => handleMenuClick(event, '#faq')}>FAQ</a>
        </nav>
        <Link
          className="rounded-full bg-linear-to-r from-emerald-600 to-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          to="/consult"
        >
          立即諮詢
        </Link>
      </div>
    </header>
  )
}

export default Header
