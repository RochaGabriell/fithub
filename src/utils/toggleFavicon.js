// Detecta o tema do navegador
function detectTheme() {
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}

// Altera o favicon de acordo com o tema
function toggleFavicon() {
  var favicon = document.getElementById('favicon')
  var temaEscuro = detectTheme()
  favicon.href = temaEscuro ? '/Logo - Light.svg' : '/Logo - Dark.svg'
}

toggleFavicon()

// Escuta a mudança de tema do navegador
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', function () {
    toggleFavicon()
  })
