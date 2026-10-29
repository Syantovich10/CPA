import ApplicationForm from '@/components/Form/ApplicationForm'
import Header from '@/components/Header/Header'
import Modal from '@/components/Modal/Modal'
import HeroSection from '@/sections/HeroSection/HeroSection'
import MultiBenefits from '@/sections/MultiBenefits/MultiBenefits'
import MultiTasks from '@/sections/MultiTasks/MultiTasks'
import MultiplyWithUs from '@/sections/MultiplyWithUs/MultiplyWithUs'
import { useState } from 'react'

function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  return (
    <>
      <div className="lg:relative lg:h-dvh lg:snap-y lg:snap-mandatory lg:overflow-y-auto lg:overscroll-y-none lg:scroll-smooth">
        <Header />
        <HeroSection />
        <MultiTasks />
        <MultiBenefits />
        <MultiplyWithUs onApply={openForm} />
      </div>

      <Modal isOpen={isFormOpen} onClose={closeForm}>
        <ApplicationForm onClose={closeForm} />
      </Modal>
    </>
  )
}

export default HomePage
