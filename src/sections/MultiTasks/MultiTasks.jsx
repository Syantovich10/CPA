import { getTasks } from '@/api/endpoints'
import taskssnake from '@/assets/img/taskssnake.png'
import Section from '@/components/Section/Section'
import Spinner from '@/components/Spinner/Spinner'
import { TEXT_STYLES } from '@/config/typography'
import useApiData from '@/hooks/useApiData'
import FeatureCard from '@/components/Card/FeatureCard.jsx'
import IntroText from '@/sections/MultiTasks/IntroText'

function MultiTasks() {
  const { data, isLoading } = useApiData(getTasks)

  if (!data) {
    return null
  }

  const secondColumn = data.tiles.slice(0, 2)
  const thirdColumn = data.tiles.slice(2)

  return (
    <Section id="team" className="bg-purple-dark lg:pb-[125px]">
      <div className="mx-auto flex w-full max-w-[500px] flex-col gap-6 lg:max-w-[1440px] lg:gap-[60px]">
        <h2
          className={`${TEXT_STYLES.halvar32Bold} hidden self-end text-yellow uppercase lg:block`}
        >
          multi-tasks
        </h2>

        {isLoading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch">
            <div className="flex flex-col justify-between gap-8 rounded-[8px] bg-purple bg-[linear-gradient(65deg,#9500DC_17.61%,#560080_57.18%,#220032_88.56%)]  px-[10px] py-[20px] pb-[0] sm:px-0 sm:py-0 sm:pt-[30px]">
              <IntroText description={data.description} />

              <img
                src={taskssnake}
                alt="Illustration of a coiled purple snake with yellow eyes, its tail curled around a sparkling blue diamond gemstone."
                className="w-full self-center"
              />
            </div>

            <div className="flex flex-col gap-6">
              {secondColumn.map((tile, index) => (
                <FeatureCard key={index} title={tile.title} text={tile.text} />
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {thirdColumn.map((tile, index) => (
                <FeatureCard key={index} title={tile.title} text={tile.text} />
              ))}
            </div>
          </div>
        )}

        <h2
          className={`${TEXT_STYLES.halvar16Bold} border-t border-white/20 pt-6 text-center tracking-[0.2em] text-yellow uppercase lg:hidden`}
        >
          multi-tasks
        </h2>
      </div>
    </Section>
  )
}

export default MultiTasks
