function Spinner({ className = '' }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-yellow ${className}`.trim()}
    />
  )
}

export default Spinner
