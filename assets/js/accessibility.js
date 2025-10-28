let accessibilityInitialized = false;

export function initAccessibility() {
  if (accessibilityInitialized) {
    cleanupAccessibility();
  }

  console.log('♿ Inicializando sistema de acessibilidade');

  createAccessibilityButtons();
  loadAccessibilityPreferences();
  setupKeyboardNavigation();

  accessibilityInitialized = true;
}

/* CRIAÇÃO DOS BOTÕES */
function createAccessibilityButtons() {
  const existingPanel = document.querySelector('.accessibility-panel');
  if (existingPanel) existingPanel.remove();

  const panel = document.createElement('div');
  panel.className = 'accessibility-panel';
  panel.innerHTML = `
    <button class="btn-accessibility" id="toggle-dark-mode" aria-label="Alternar modo escuro">🌙</button>
    <button class="btn-accessibility" id="toggle-high-contrast" aria-label="Alternar alto contraste">⚫⚪</button>
  `;

  document.body.appendChild(panel);

  document
    .getElementById('toggle-dark-mode')
    ?.addEventListener('click', toggleDarkMode);
  document
    .getElementById('toggle-high-contrast')
    ?.addEventListener('click', toggleHighContrast);
}

/* MODO ESCURO */
function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  announce(`Modo ${isDark ? 'escuro' : 'claro'} ativado`);
}

/* ALTO CONTRASTE */
function toggleHighContrast() {
  const html = document.documentElement;
  const isHighContrast = html.classList.toggle('high-contrast-mode');
  localStorage.setItem('contrast', isHighContrast ? 'high' : 'normal');
  announce(`Modo ${isHighContrast ? 'alto contraste' : 'padrão'} ativado`);
}

/* PREFERÊNCIAS SALVAS
   MODO CLARO É O PADRÃO */
function loadAccessibilityPreferences() {
  const theme = localStorage.getItem('theme');
  const contrast = localStorage.getItem('contrast');

  // Aplicar modo escuro apenas se explicitamente salvo
  if (theme === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }
  // Caso contrário, modo claro é o padrão (sem adicionar classe)

  // Aplicar alto contraste apenas se explicitamente salvo
  if (contrast === 'high') {
    document.documentElement.classList.add('high-contrast-mode');
  }
  // Caso contrário, contraste normal é o padrão (sem adicionar classe)
}

/* NAVEGAÇÃO POR TECLADO */
function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
    }
  });
}

/* ANÚNCIOS PARA LEITORES DE TELA */
function announce(message) {
  let liveRegion = document.getElementById('aria-live-region');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'aria-live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.classList.add('sr-only');
    document.body.appendChild(liveRegion);
  }

  liveRegion.textContent = message;
}

/* LIMPEZA AO RECARREGAR PÁGINAS SPA */
function cleanupAccessibility() {
  const panel = document.querySelector('.accessibility-panel');
  if (panel) panel.remove();

  document
    .getElementById('toggle-dark-mode')
    ?.removeEventListener('click', toggleDarkMode);
  document
    .getElementById('toggle-high-contrast')
    ?.removeEventListener('click', toggleHighContrast);

  accessibilityInitialized = false;
}

/* REINICIALIZAÇÃO APÓS PAGE RENDERED */
document.addEventListener('pageRendered', () => {
  setTimeout(() => {
    initAccessibility();
  }, 100);
});