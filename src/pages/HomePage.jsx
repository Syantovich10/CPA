import ApplicationForm from '@/components/Form/ApplicationForm'
import Header from '@/components/Header/Header'
import Modal from '@/components/Modal/Modal'
import MultiTasks from '@/sections/MultiTasks/MultiTasks'
import MultiplyWithUs from '@/sections/MultiplyWithUs/MultiplyWithUs'
import { useState } from 'react'

function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => setIsFormOpen(true)
  const closeForm = () => setIsFormOpen(false)

  return (
    <>
      <Header />
      <MultiTasks />
      <MultiplyWithUs onApply={openForm} />

      <Modal isOpen={isFormOpen} onClose={closeForm}>
        <ApplicationForm onClose={closeForm} />
      </Modal>
    </>
  )
}

export default HomePage
