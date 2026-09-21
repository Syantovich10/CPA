import { TEXT_STYLES } from '@/config/typography.js'

function BenefitsCard({ text }) {
  return (
      <p
        className={`flex flex-1 flex-col gap-[10px] rounded-[8px] bg-purple p-[20px] ${TEXT_STYLES.halvar20Bold} text-white`}
      >
        {text}
      </p>
  )
}

export default BenefitsCard
