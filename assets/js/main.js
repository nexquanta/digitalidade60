// main.js
// Inicializa todos os módulos e coordena a aplicação

import { initRouter } from './spa.js';
import { initMenu } from './menu.js';
import { initValidation } from './validation.js';
import { initAccessibility } from './accessibility.js';

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicializando aplicação Digitalidade 60+');
  
  // Inicializar sistema de rotas SPA
  initRouter();
  
  // Inicializar menu responsivo
  initMenu();
  
  // Inicializar validação de formulários
  initValidation();
  
  // Inicializar sistema de acessibilidade WCAG 2.1 AA
  initAccessibility();
  
  console.log('✅ Aplicação inicializada com sucesso');
  console.log('♿ Acessibilidade WCAG 2.1 Nível AA ativada');
});

// Exportar para uso global se necessário
window.DigitalidadeApp = {
  version: '4.0.0',
  initialized: true,
  wcag: 'AA'
};