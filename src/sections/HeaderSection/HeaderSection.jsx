import { useEffect, useState } from 'react'
import Header from '@/components/Header/Header'

function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const desktopMedia = window.matchMedia('(min-width: 1024px)')

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const handleBreakpointChange = (event) => {
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    desktopMedia.addEventListener('change', handleBreakpointChange)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      desktopMedia.removeEventListener('change', handleBreakpointChange)
    }
  }, [isMenuOpen])

  const handleMenuToggle = () => {
    setIsMenuOpen((isOpen) => !isOpen)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <Header
      isOpen={isMenuOpen}
      onToggle={handleMenuToggle}
      onClose={handleMenuClose}
    />
  )
}

export default HeaderSection
