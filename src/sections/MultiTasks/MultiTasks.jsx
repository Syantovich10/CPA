import { getTasks } from '@/api/endpoints'
import taskssnake from '@/assets/img/taskssnake.png'
import Section from '@/components/Section/Section'
import { HEADING_STYLES, TEXT_STYLES } from '@/config/typography'
import useApiData from '@/hooks/useApiData'

const INTRO_HIGHLIGHT = 'in-house'

function FeatureCard({ title, text }) {
  return (
    <div className="flex flex-1 flex-col gap-[10px] rounded-[8px] bg-purple px-[10px] py-[10px] pb-[20px]">
      <h3 className={`${HEADING_STYLES.h3} break-words text-yellow uppercase`}>
        {title}
      </h3>
      <p
        className={`${TEXT_STYLES.stolzl20Regular} text-white lg:text-white/70`}
      >
        {text}
      </p>
    </div>
  )
}

function IntroText({ description }) {
  const highlightIndex = description
    .toLowerCase()
    .indexOf(INTRO_HIGHLIGHT.toLowerCase())

  const className = `${TEXT_STYLES.halvar20Bold} text-white sm:px-[38px]`

  if (highlightIndex === -1) {
    return <p className={className}>{description}</p>
  }

  const highlightEnd = highlightIndex + INTRO_HIGHLIGHT.length

  return (
    <p className={className}>
      {description.slice(0, highlightIndex)}
      <span className="text-yellow">
        {description.slice(highlightIndex, highlightEnd)}
      </span>
      {description.slice(highlightEnd)}
    </p>
  )
}

function MultiTasks() {
  const { data } = useApiData(getTasks)

  if (!data) {
    return null
  }

  const secondColumn = data.tiles.slice(0, 2)
  const thirdColumn = data.tiles.slice(2)

  return (
    <Section id="multi-tasks" className="bg-dark lg:pb-[125px]">
      <div className="mx-auto flex w-full max-w-[500px] flex-col gap-6 lg:max-w-[1440px] lg:gap-[60px]">
        <h2
          className={`${TEXT_STYLES.halvar32Bold} hidden self-end text-yellow uppercase lg:block`}
        >
          multi-tasks
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch">
          <div className="flex flex-col justify-between gap-8 rounded-[8px] bg-purple bg-[linear-gradient(65deg,#9500DC_17.61%,#560080_57.18%,#220032_88.56%)]  px-[10px] py-[20px] pb-[0] sm:px-0 sm:py-0 sm:pt-[30px]">
            <IntroText description={data.description} />

            <img src={taskssnake} alt="Illustration of a coiled purple snake with yellow eyes, its tail curled around a sparkling blue diamond gemstone." className="w-full self-center" />
          </div>

          <div className="flex flex-col gap-6">
            {secondColumn.map((tile) => (
              <FeatureCard
                key={tile.title}
                title={tile.title}
                text={tile.text}
              />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {thirdColumn.map((tile) => (
              <FeatureCard
                key={tile.title}
                title={tile.title}
                text={tile.text}
              />
            ))}
          </div>
        </div>

        <p
          className={`${TEXT_STYLES.halvar16Bold} border-t border-white/20 pt-6 text-center tracking-[0.2em] text-yellow uppercase lg:hidden`}
        >
          multi-tasks
        </p>
      </div>
    </Section>
  )
}

export default MultiTasks
