import Header from '@/components/Header/Header'
import { useEffect, useState } from 'react'

function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen((isOpen) => !isOpen)
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const desktopMedia = window.matchMedia('(min-width: 1024px)')
    const closeMenu = () => setIsMenuOpen(false)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }
    const handleBreakpointChange = (event) => {
      if (event.matches) {
        closeMenu()
      }
    }

    document.body.classList.add('overflow-hidden')
    document.addEventListener('keydown', handleKeyDown)
    desktopMedia.addEventListener('change', handleBreakpointChange)

    return () => {
      document.body.classList.remove('overflow-hidden')
      document.removeEventListener('keydown', handleKeyDown)
      desktopMedia.removeEventListener('change', handleBreakpointChange)
    }
  }, [isMenuOpen])

  return <Header isOpen={isMenuOpen} onToggle={handleMenuToggle} />
}

export default HeaderSection
