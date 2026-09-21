function HighlightedText({ text, highlights, as: Tag = 'p', className = '' }) {
  const normalizedText = text.toLowerCase()
  const highlight = highlights.find((word) =>
    normalizedText.includes(word.toLowerCase()),
  )

  if (!highlight) {
    return <Tag className={className}>{text}</Tag>
  }

  const highlightIndex = normalizedText.indexOf(highlight.toLowerCase())
  const highlightEnd = highlightIndex + highlight.length

  return (
    <Tag className={className}>
      {text.slice(0, highlightIndex)}
      <span className="text-yellow">
        {text.slice(highlightIndex, highlightEnd)}
      </span>
      {text.slice(highlightEnd)}
    </Tag>
  )
}

export default HighlightedText
