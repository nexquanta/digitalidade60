// Importa a função que desenha o conteúdo das páginas
import { renderPage } from './templates.js';

// Define as rotas válidas do site
const routes = ['/', 'projetos', 'cadastro'];

// Função para obter a rota atual do hash
function getCurrentRoute() {
  const hash = window.location.hash || '#/';
  return hash.replace('#/', '');
}

// Função principal que decide o que mostrar
export function initSPA() {
  function handleRouteChange() {
    const route = getCurrentRoute();

    if (routes.includes(route)) {
      renderPage(route || '/'); // se for “#/”, mostra a página inicial
    } else {
      renderPage('/'); // se for algo desconhecido, volta pra home
    }
  }

  // Detecta mudança no hash da URL
  window.addEventListener('hashchange', handleRouteChange);

  // Renderiza a página inicial na primeira carga
  handleRouteChange();
}

// Inicia tudo quando o site carrega
window.addEventListener('DOMContentLoaded', initSPA);
