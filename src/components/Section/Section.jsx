function Section({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`flex min-h-dvh flex-col justify-center px-4 py-16 sm:px-8 lg:px-16 ${className}`.trim()}
    >
      {children}
    </section>
  )
}

export default Section
