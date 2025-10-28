// main.js
// Inicializa todos os módulos e coordena a aplicação

import { initRouter } from './spa.js';
import { initMenu } from './menu.js';
import { initValidation } from './validation.js';

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicializando aplicação Digitalidade 60+');
  
  // Inicializar sistema de rotas SPA
  initRouter();
  
  // Inicializar menu responsivo
  initMenu();
  
  // Inicializar validação de formulários
  initValidation();
  
  console.log('✅ Aplicação inicializada com sucesso');
});

// Exportar para uso global se necessário
window.DigitalidadeApp = {
  version: '3.0.0',
  initialized: true
};