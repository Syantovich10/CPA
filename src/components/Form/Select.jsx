import {
  FORM_ERROR_CLASSES,
  FORM_SELECT_BUTTON_CLASSES,
  FORM_SELECT_LIST_CLASSES,
  FORM_SELECT_OPTION_CLASSES,
} from '@/config/form'
import { useEffect, useRef, useState } from 'react'

function Select({
  id,
  value,
  onChange,
  onBlur,
  options,
  placeholder,
  required = false,
  error,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const containerRef = useRef(null)

  const selectedOption = options.find((option) => option.value === value)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false)
        onBlur?.()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onBlur])

  const closeList = () => {
    setIsOpen(false)
    onBlur?.()
  }

  const selectOption = (optionValue) => {
    onChange(optionValue)
    closeList()
  }

  const handleTriggerKeyDown = (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      const direction = event.key === 'ArrowDown' ? 1 : -1
      const currentIndex = options.findIndex((option) => option.value === value)
      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        options.length - 1,
      )

      setIsOpen(true)
      setHighlightedIndex(nextIndex)
      return
    }

    if (event.key === 'Enter' && isOpen && highlightedIndex >= 0) {
      event.preventDefault()
      selectOption(options[highlightedIndex].value)
      return
    }

    if (event.key === 'Escape') {
      closeList()
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={FORM_SELECT_BUTTON_CLASSES}
      >
        <span className="font-light text-dark">
          {selectedOption ? (
            selectedOption.label
          ) : (
            <>
              {placeholder}
              {required && <span className="ml-0.5 text-purple">*</span>}
            </>
          )}
        </span>
        <span
          aria-hidden="true"
          className={`ml-2 text-purple transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <ul role="listbox" className={FORM_SELECT_LIST_CLASSES}>
          {options.map((option, index) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                onClick={() => selectOption(option.value)}
                className={`${FORM_SELECT_OPTION_CLASSES} ${
                  index === highlightedIndex ? 'bg-purple/10' : ''
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && <p className={FORM_ERROR_CLASSES}>{error}</p>}
    </div>
  )
}

export default Select
