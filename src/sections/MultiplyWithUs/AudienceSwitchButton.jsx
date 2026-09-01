function AudienceSwitchButton({ id, label, isActive, onSelect, maxWidth }) {
  return (
    <button
      id={`multiply-tab-${id}`}
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls="multiply-audience-panel"
      onClick={() => onSelect(id)}
      style={{ maxWidth }}
      className={`flex min-h-[64px] gap-[40px] items-center justify-between rounded-full border-[3px] px-6 font-halvar text-[18px] leading-tight font-bold capitalize transition-colors sm:min-h-[74px] sm:px-8 sm:text-[22px] lg:min-h-[86px] lg:px-10 lg:text-[28px] ${
        isActive
          ? 'border-dark bg-yellow text-dark'
          : 'border-yellow bg-transparent text-yellow hover:bg-yellow/10'
      }`}
    >
      <span>{label.replaceAll('_', ' ')}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 48 24"
        className="h-6 w-10 shrink-0 sm:w-12"
        fill="none"
      >
        <path
          d="M1 12h43M34 2l10 10-10 10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
      </svg>
    </button>
  )
}

export default AudienceSwitchButton
