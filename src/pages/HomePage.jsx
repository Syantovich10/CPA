import { useState } from 'react'
import Header from '../components/Header/Header'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Header
      isOpen={isMenuOpen}
      onToggle={() => setIsMenuOpen((prev) => !prev)}
    />
  )
}

export default HomePage
