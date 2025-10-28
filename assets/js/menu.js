// menu.js - Sistema de menu responsivo hambúrguer
// Gerencia abertura/fechamento do menu mobile

let menuInitialized = false;
let aberto = false;
let menuBtn = null;
let nav = null;
let overlay = null;

// Inicializar menu responsivo
export function initMenu() {
  // Prevenir inicialização múltipla
  if (menuInitialized) {
    cleanup();
  }
  
  console.log('🍔 Inicializando menu responsivo');
  
  const header = document.querySelector('header');
  nav = document.querySelector('nav');
  
  if (!header || !nav) {
    console.warn('⚠️ Header ou nav não encontrados');
    return;
  }
  
  // Criar botão hambúrguer
  menuBtn = document.createElement('button');
  menuBtn.className = 'menu-toggle';
  menuBtn.setAttribute('aria-label', 'Menu de navegação');
  menuBtn.innerHTML = '<span></span><span></span><span></span>';
  header.insertBefore(menuBtn, nav);
  
  // Criar overlay de fundo
  overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  overlay.style.pointerEvents = 'none';
  document.body.appendChild(overlay);
  
  // Event listeners
  menuBtn.addEventListener('click', handleMenuToggle);
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscKey);
  
  // Configurar links do menu
  const links = nav.querySelectorAll('a');
  links.forEach(link => {
    link.style.pointerEvents = 'auto';
    link.style.position = 'relative';
    link.style.zIndex = '999999';
    link.addEventListener('click', handleLinkClick);
  });
  
  menuInitialized = true;
}

// Alternar menu (abrir/fechar)
function handleMenuToggle(e) {
  e.stopPropagation();
  
  if (aberto) {
    fechar();
  } else {
    abrir();
  }
}

// Abrir menu
function abrir() {
  aberto = true;
  nav.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  console.log('📖 Menu aberto');
}

// Fechar menu
function fechar() {
  aberto = false;
  nav.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  console.log('📕 Menu fechado');
}

// Fechar ao clicar fora
function handleClickOutside(e) {
  if (!aberto) return;
  
  if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    fechar();
  }
}

// Fechar com tecla ESC
function handleEscKey(e) {
  if (e.key === 'Escape' && aberto) {
    fechar();
  }
}

// Fechar ao clicar em link
function handleLinkClick() {
  if (aberto) {
    fechar();
  }
}

// Limpar event listeners anteriores
function cleanup() {
  if (menuBtn) {
    menuBtn.removeEventListener('click', handleMenuToggle);
    menuBtn.remove();
  }
  
  if (overlay) {
    overlay.remove();
  }
  
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleEscKey);
  
  menuInitialized = false;
  aberto = false;
}

// Reinicializar quando página é renderizada
document.addEventListener('pageRendered', () => {
  setTimeout(() => {
    initMenu();
  }, 100);
});