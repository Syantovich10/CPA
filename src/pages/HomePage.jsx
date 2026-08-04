import ApplicationForm from '@/components/Form/ApplicationForm'
import Header from '@/components/Header/Header'

function HomePage() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-surface p-6">
        <ApplicationForm onClose={() => {}} />
      </div>
    </>
  )
}

export default HomePage
