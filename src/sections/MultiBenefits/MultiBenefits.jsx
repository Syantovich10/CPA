import { getBenefits } from '@/api/endpoints.js'
import Section from '@/components/Section/Section.jsx'
import Spinner from '@/components/Spinner/Spinner.jsx'
import DesktopBenefitsLayout from '@/sections/MultiBenefits/DesktopBenefitsLayout.jsx'
import MobileBenefitsLayout from '@/sections/MultiBenefits/MobileBenefitsLayout.jsx'
import useApiData from '@/hooks/useApiData.js'
import { useTranslation } from 'react-i18next'

function MultiBenefits() {
  const { t } = useTranslation()
  const { data, isLoading, error } = useApiData(getBenefits)

  return (
    <Section
      id="benefits"
      className="relative overflow-hidden bg-purple-dark !px-0 !py-0"
    >
      {isLoading ? (
        <div className="flex min-h-dvh items-center justify-center">
          <Spinner />
        </div>
      ) : error || !data ? (
        <div className="flex min-h-dvh items-center justify-center px-5 text-center font-halvar text-[20px] font-bold text-white">
          {t('multiply.loadError')}
        </div>
      ) : (
        <>
          <MobileBenefitsLayout data={data} />
          <DesktopBenefitsLayout data={data} />
        </>
      )}
    </Section>
  )
}

export default MultiBenefits
