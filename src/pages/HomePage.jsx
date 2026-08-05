import ApplicationForm from '@/components/Form/ApplicationForm'
import Header from '@/components/Header/Header'
import Modal from '@/components/Modal/Modal'
import { useState } from 'react'

function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Header />

      <button
        type="button"
        onClick={() => setIsFormOpen(true)}
        className="mx-auto mt-10 block rounded-2xl bg-yellow px-10 py-3 font-halvar font-bold text-dark transition-colors hover:bg-purple hover:text-white"
      >
        Apply now
      </button>

      <Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <ApplicationForm onClose={() => setIsFormOpen(false)} />
      </Modal>
    </>
  )
}

export default HomePage
