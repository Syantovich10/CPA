import { CARD_PADDING } from '@/config/card'
import { HEADING_STYLES, TEXT_STYLES } from '@/config/typography'

function Card({ title, text, padding = 'default', className = '' }) {
  return (
    <div
      className={`flex flex-1 flex-col gap-[10px] rounded-[8px] bg-purple ${CARD_PADDING[padding]} ${className}`.trim()}
    >
      {title && (
        <h3
          className={`${HEADING_STYLES.h3} break-words text-yellow uppercase`}
        >
          {title}
        </h3>
      )}
      <p
        className={
          title
            ? `${TEXT_STYLES.stolzl20Regular} text-white lg:text-white/70`
            : `${TEXT_STYLES.halvar20Bold} text-white`
        }
      >
        {text}
      </p>
    </div>
  )
}

export default Card
