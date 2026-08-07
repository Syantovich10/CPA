function Section({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`flex min-h-dvh flex-col justify-center px-4 py-[60px] lg:px-[50px] ${className}`.trim()}
    >
      {children}
    </section>
  )
}

export default Section
