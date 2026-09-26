import { getTasks } from '@/api/endpoints'
import taskssnake from '@/assets/img/taskssnake.png'
import AsyncSection from '@/components/AsyncSection/AsyncSection'
import Card from '@/components/Card/Card'
import DecorativeArt from '@/components/DecorativeArt/DecorativeArt'
import HighlightedText from '@/components/HighlightedText/HighlightedText'
import Section from '@/components/Section/Section'
import SectionEyebrow from '@/components/SectionEyebrow/SectionEyebrow'
import { INTRO_HIGHLIGHTS } from '@/config/highlights'
import { TEXT_STYLES } from '@/config/typography'
import useApiData from '@/hooks/useApiData'
import { useTranslation } from 'react-i18next'

const EYEBROW_TEXT = 'multi-tasks'

function MultiTasks() {
  const { t } = useTranslation()
  const { data, isLoading, error } = useApiData(getTasks)

  return (
    <Section
      id="team"
      className="bg-purple-dark pb-[20px] sm:pb-[60px] lg:pb-[125px]"
      contentClassName="gap-6 lg:gap-[60px]"
    >
      <SectionEyebrow text={EYEBROW_TEXT} />

      <AsyncSection
        isLoading={isLoading}
        error={error}
        data={data}
        minHeight="min-h-[300px]"
      >
        {(data) => {
          const secondColumn = data.tiles.slice(0, 2)
          const thirdColumn = data.tiles.slice(2)

          return (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch">
              <div className="flex flex-col justify-between gap-8 rounded-[8px] bg-purple bg-[linear-gradient(65deg,#9500DC_17.61%,#560080_57.18%,#220032_88.56%)] px-[10px] py-[20px] pb-[0] sm:px-0 sm:py-0 sm:pt-[30px]">
                <HighlightedText
                  text={data.description}
                  highlights={INTRO_HIGHLIGHTS}
                  className={`${TEXT_STYLES.halvar20Bold} text-white sm:px-[38px]`}
                />

                <DecorativeArt
                  src={taskssnake}
                  alt={t('accessibility.taskSnake')}
                  className="w-full self-center"
                />
              </div>

              <div className="flex flex-col gap-6">
                {secondColumn.map((tile, index) => (
                  <Card key={index} title={tile.title} text={tile.text} />
                ))}
              </div>

              <div className="flex flex-col gap-6">
                {thirdColumn.map((tile, index) => (
                  <Card key={index} title={tile.title} text={tile.text} />
                ))}
              </div>
            </div>
          )
        }}
      </AsyncSection>

      <SectionEyebrow text={EYEBROW_TEXT} variant="mobile" />
    </Section>
  )
}

export default MultiTasks
