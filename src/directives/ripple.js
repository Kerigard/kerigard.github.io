const rippleDirective = {
  name: 'ripple',

  mounted(el) {
    el.addEventListener('pointerdown', rippled)
  },

  unmounted(el) {
    el.removeEventListener('pointerdown', rippled)
  },
}

function rippled(e) {
  const { top, left, width, height } = this.getBoundingClientRect()
  const x = e.x - left
  const y = e.y - top
  const size =
    2.05 *
    Math.max(
      magnitude(x, y, 0, 0),
      magnitude(x, y, width, 0),
      magnitude(x, y, 0, height),
      magnitude(x, y, width, height),
    )

  const rippleContainer = document.createElement('div')
  const ripple = document.createElement('div')

  rippleContainer.className = 'ripple__container'
  ripple.className = 'ripple'
  ripple.style.width = `${size}px`
  ripple.style.height = `${size}px`
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`

  rippleContainer.appendChild(ripple)
  this.appendChild(rippleContainer)

  let shouldDissolveRipple = false

  function dissolveEvents() {
    if (shouldDissolveRipple) clearRipple()
    else shouldDissolveRipple = true
  }
  function clearRipple() {
    document.removeEventListener('pointerup', dissolveEvents)
    document.removeEventListener('pointercancel', dissolveEvents)

    ripple.style.opacity = '0'

    setTimeout(() => rippleContainer.remove(), 300)
  }

  document.addEventListener('pointerup', dissolveEvents)
  document.addEventListener('pointercancel', dissolveEvents)

  const timeout = setTimeout(() => {
    document.removeEventListener('pointercancel', cancelRipple)

    requestAnimationFrame(() => {
      ripple.classList.add('ripple--active')

      setTimeout(dissolveEvents, 500)
    })
  }, 75)

  function cancelRipple() {
    clearTimeout(timeout)

    rippleContainer.remove()
    document.removeEventListener('pointerup', dissolveEvents)
    document.removeEventListener('pointercancel', dissolveEvents)
    document.removeEventListener('pointercancel', cancelRipple)
  }

  document.addEventListener('pointercancel', cancelRipple)
}

function magnitude(x1, y1, x2, y2) {
  const deltaX = x1 - x2
  const deltaY = y1 - y2

  return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
}

export default rippleDirective
