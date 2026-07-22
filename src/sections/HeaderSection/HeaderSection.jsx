import { useState } from 'react'
import Header from '@/components/Header/Header'

function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen((isOpen) => !isOpen)
  }

  return <Header isOpen={isMenuOpen} onToggle={handleMenuToggle} />
}

export default HeaderSection
