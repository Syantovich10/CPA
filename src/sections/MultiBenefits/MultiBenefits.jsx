import Section from '@/components/Section/Section.jsx'
import FeatureCard from '@/components/Card/FeatureCard.jsx'
import useApiData from '@/hooks/useApiData.js'
import { getBenefits } from '@/api/endpoints.js'
import { TEXT_STYLES } from '@/config/typography.js'

function MultiBenefits() {
  const {data, isLoading} = useApiData(getBenefits)
  console.log(data)
  if(!data) return null

  return (
    <Section id="benefits" className="bg-purple-dark lg:pb-[125px]">
      <div className="mx-auto flex w-full max-w-[500px] flex-col gap-6 lg:max-w-[1440px] lg:gap-[60px]">
        <h2
          className={`${TEXT_STYLES.halvar32Bold} hidden self-end text-yellow uppercase lg:block`}
        >
          multi-benefits
        </h2>
        <h2 className={`${TEXT_STYLES.halvar32Bold} text-white`}>
          {data.title}
        </h2>
        <p className={`${TEXT_STYLES.halvar16Medium} text-white`}>
          {data.description}
        </p>
        <div
          className={`${TEXT_STYLES.halvar35Light} text-yellow uppercase overflow-hidden whitespace-nowrap border-y-yellow border-y-2`}
        >
          dream big earner dream big earner
        </div>
        {data.benefits.map((benefit)=> {
          return (
            <FeatureCard title='' text={benefit} />
        )
      })}
      </div>
    </Section>
  )
}

export default MultiBenefits