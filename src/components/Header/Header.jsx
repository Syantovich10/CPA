import logoMobile from '../../../assets/logo/logo-mobile.svg'
import { TEXT_STYLES } from '../../config/typography'

function Header({ isOpen = false, onToggle }) {
  return (
    <header className="flex items-center justify-between bg-purple-dark px-[10px] py-[10px]">
      <img
        src={logoMobile}
        alt="Logo"
        width={isOpen ? 43 : 27}
        height={isOpen ? 40 : 24}
      />

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
