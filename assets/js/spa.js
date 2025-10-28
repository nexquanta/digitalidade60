// spa.js - Sistema de Single Page Application
// Gerencia navegação entre páginas sem reload do browser

import { renderPage } from './templates.js';

// Configuração das rotas
const routes = {
  '/': 'home',
  '/index.html': 'home',
  '/projetos.html': 'projetos',
  '/cadastro.html': 'cadastro'
};

// Estado atual da aplicação
let currentRoute = null;

// Inicializar o roteador
export function initRouter() {
  console.log('📍 Inicializando sistema SPA');
  
  // Interceptar cliques em links internos
  document.addEventListener('click', handleLinkClick);
  
  // Gerenciar navegação do browser (botões voltar/avançar)
  window.addEventListener('popstate', handlePopState);
  
  // Carregar página inicial
  const initialPath = window.location.pathname;
  navigateTo(initialPath, false);
}

// Manipular cliques em links
function handleLinkClick(e) {
  const link = e.target.closest('a');
  
  // Verificar se é um link interno
  if (link && link.href && isInternalLink(link)) {
    e.preventDefault();
    
    const url = new URL(link.href);
    
    // Se tem âncora (#), navegar e fazer scroll
    if (url.hash) {
      navigateTo(url.pathname, true, url.hash);
    } else {
      navigateTo(url.pathname);
    }
  }
}

// Verificar se é link interno
function isInternalLink(link) {
  return link.origin === window.location.origin && 
         !link.hasAttribute('download') &&
         !link.getAttribute('href').startsWith('#') &&
         !link.getAttribute('href').startsWith('mailto:') &&
         !link.getAttribute('href').startsWith('tel:');
}

// Navegar para uma rota
export function navigateTo(path, pushState = true, hash = '') {
  console.log(`🔀 Navegando para: ${path}${hash}`);
  
  // Normalizar path
  if (path === '/' || path === '/index.html' || path === '') {
    path = '/';
  }
  
  // Obter nome da rota
  const routeName = routes[path] || routes['/'];
  
  // Atualizar histórico do browser
  if (pushState) {
    window.history.pushState({ route: routeName }, '', path + hash);
  }
  
  // Renderizar página
  renderPage(routeName);
  
  // Atualizar estado atual
  currentRoute = routeName;
  
  // Se tem âncora, fazer scroll após renderizar
  if (hash) {
    setTimeout(() => {
      scrollToAnchor(hash);
    }, 100);
  } else {
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Fechar menu mobile se estiver aberto
  const nav = document.querySelector('nav');
  if (nav && nav.classList.contains('active')) {
    nav.classList.remove('active');
    document.querySelector('.menu-overlay')?.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Fazer scroll até âncora
function scrollToAnchor(hash) {
  const id = hash.replace('#', '');
  const element = document.getElementById(id);
  
  if (element) {
    console.log(`⚓ Fazendo scroll até: #${id}`);
    
    // Offset para compensar header fixo 
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight - 20;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    console.warn(`⚠️ Elemento não encontrado: #${id}`);
  }
}

// Gerenciar botões voltar/avançar do browser
function handlePopState(e) {
  const routeName = e.state?.route || 'home';
  renderPage(routeName);
  currentRoute = routeName;
}

// Obter rota atual
export function getCurrentRoute() {
  return currentRoute;
}

// Navegação programática (para uso em outros módulos)
export const router = {
  navigate: navigateTo,
  current: getCurrentRoute
};