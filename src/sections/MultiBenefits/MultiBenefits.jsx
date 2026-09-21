import desktopBackground from '@/assets/img/dekstopbg/dekstopbgone.png'
import mobileBackground from '@/assets/img/mobilebg/mobilebgfive.png'
import { getBenefits } from '@/api/endpoints.js'
import AsyncSection from '@/components/AsyncSection/AsyncSection'
import ResponsiveBackground from '@/components/ResponsiveBackground/ResponsiveBackground'
import Section from '@/components/Section/Section'
import useApiData from '@/hooks/useApiData.js'
import DesktopBenefitsLayout from '@/sections/MultiBenefits/DesktopBenefitsLayout.jsx'
import MobileBenefitsLayout from '@/sections/MultiBenefits/MobileBenefitsLayout.jsx'

function MultiBenefits() {
  const { data, isLoading, error } = useApiData(getBenefits)

  return (
    <Section
      id="benefits"
      padding="none"
      className="relative overflow-hidden bg-purple-dark"
      background={
        <ResponsiveBackground
          desktopSrc={desktopBackground}
          mobileSrc={mobileBackground}
        />
      }
    >
      <AsyncSection isLoading={isLoading} error={error} data={data}>
        {(data) => (
          <>
            <MobileBenefitsLayout data={data} />
            <DesktopBenefitsLayout data={data} />
          </>
        )}
      </AsyncSection>
    </Section>
  )
}

export default MultiBenefits
