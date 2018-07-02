/**
 * Truncate text if stop reached
 * @param {string} text - Text to truncate
 * @param {string} stop - Maximum text length
 * @param {string} clamp - show if stop reached or ... by default
 * @return {string} truncated text
 */
export function truncate(text, stop, clamp = '...') {
  return text.slice(0, stop) + (stop < text.length ? clamp : '');
}
