import taskssnake from '@/assets/img/taskssnake.png'
import Section from '@/components/Section/Section'
import { MULTI_TASKS_COLUMNS } from '@/config/multiTasks'
import { HEADING_STYLES, TEXT_STYLES } from '@/config/typography'
import { useTranslation } from 'react-i18next'

function FeatureCard({ translationKey }) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-1 flex-col gap-3 rounded-3xl bg-purple px-6 py-7 sm:px-8 sm:py-8">
      <h3 className={`${HEADING_STYLES.h2} text-yellow uppercase`}>
        {t(`multiTasks.features.${translationKey}.title`)}
      </h3>
      <p className={`${TEXT_STYLES.stolzl16Light} text-white/70`}>
        {t(`multiTasks.features.${translationKey}.description`)}
      </p>
    </div>
  )
}

function MultiTasks() {
  const { t } = useTranslation()
  const [secondColumn, thirdColumn] = MULTI_TASKS_COLUMNS

  return (
    <Section id="multi-tasks" className="bg-dark">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8">
        <h2
          className={`${TEXT_STYLES.halvar32Bold} self-end text-yellow uppercase`}
        >
          multi-tasks
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:items-stretch">
          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-purple p-8">
            <p
              className={`${TEXT_STYLES.stolzl20Regular} max-w-[420px] text-white`}
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
              className="w-full max-w-[380px] self-center"
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
      </div>
    </Section>
  )
}

export default MultiTasks
