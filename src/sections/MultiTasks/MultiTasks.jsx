import taskssnake from '@/assets/img/taskssnake.png'
import Section from '@/components/Section/Section'
import { MULTI_TASKS_COLUMNS } from '@/config/multiTasks'
import { HEADING_STYLES, TEXT_STYLES } from '@/config/typography'
import { useTranslation } from 'react-i18next'

function FeatureCard({ translationKey }) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-1 flex-col gap-[10px] rounded-[8px] bg-purple px-[10px] py-[10px] pb-[20px]">
      <h3 className={`${HEADING_STYLES.h3} text-yellow uppercase`}>
        {t(`multiTasks.features.${translationKey}.title`)}
      </h3>
      <p className={`${TEXT_STYLES.stolzl20Regular} text-white lg:text-white/70`}>
        {t(`multiTasks.features.${translationKey}.description`)}
      </p>
    </div>
  )
}

function MultiTasks() {
  const { t } = useTranslation()
  const [secondColumn, thirdColumn] = MULTI_TASKS_COLUMNS

  return (
    <Section id="multi-tasks" className="bg-dark lg:pb-[125px]">
      <div className="mx-auto flex w-full max-w-[500px] lg:max-w-[1440px] flex-col gap-6 lg:gap-[60px]">
        <h2
          className={`${TEXT_STYLES.halvar32Bold} hidden self-end text-yellow uppercase lg:block`}
        >
          multi-tasks
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:items-stretch">
          <div className="flex flex-col justify-between gap-8 rounded-[8px] bg-purple bg-[linear-gradient(65deg,#9500DC_17.61%,#560080_57.18%,#220032_88.56%)]  px-[10px] py-[20px] pb-[0] sm:px-0 sm:py-0 sm:pt-[30px]">
            <p
              className={`${TEXT_STYLES.halvar20Bold} text-white sm:px-[38px]`}
            >
              {t('multiTasks.introBefore')}
              <span className="text-yellow">
                {t('multiTasks.introHighlight')}
              </span>
              {t('multiTasks.introAfter')}
            </p>

            <img
              src={taskssnake}
              alt=""
              className="w-full self-center"
            />
          </div>

          <div className="flex flex-col gap-6">
            {secondColumn.map((translationKey) => (
              <FeatureCard
                key={translationKey}
                translationKey={translationKey}
              />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {thirdColumn.map((translationKey) => (
              <FeatureCard
                key={translationKey}
                translationKey={translationKey}
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
