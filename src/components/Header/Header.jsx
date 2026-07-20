import logoMobile from '../../../assets/logo/logo-mobile.svg'
import { TEXT_STYLES } from '../../config/typography'

function Header({ isOpen = false, onToggle }) {
  return (
    <header className="flex items-center justify-between bg-purple px-[10px] pt-[10px]">
      <img src={logoMobile} alt="Logo" width={27} height={24} />

      <button
        type="button"
        onClick={onToggle}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className={
          isOpen
            ? `${TEXT_STYLES.halvar24Bold} text-yellow`
            : `${TEXT_STYLES.halvar16Bold} text-yellow uppercase underline decoration-yellow underline-offset-2`
        }
      >
        {isOpen ? 'X' : 'MENU'}
      </button>
    </header>
  )
}

export default Header
