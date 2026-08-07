import { HEADING_STYLES, TEXT_STYLES } from '@/config/typography'

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

export default FeatureCard
