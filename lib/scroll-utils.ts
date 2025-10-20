/**
 * Smooth scroll to a section with offset for fixed header
 * @param sectionId - The ID of the section to scroll to
 * @param offset - Optional offset in pixels (auto-calculated if not provided)
 */
export function scrollToSection(sectionId: string, offset?: number): void {
  const element = document.getElementById(sectionId)
  
  if (!element) {
    console.warn(`Section with id "${sectionId}" not found`)
    return
  }

  // Use fixed offset - mobile needs more space
  const calculatedOffset = offset ?? (window.innerWidth < 768 ? 150 : 120)
  
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - calculatedOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  })
}

/**
 * Check if smooth scroll is supported
 */
export function isSmoothScrollSupported(): boolean {
  return 'scrollBehavior' in document.documentElement.style
}
