// Menu responsivo
window.addEventListener('load', function() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  
  if (!header || !nav) return;
  
  // Criar botao hamburguer
  const menuBtn = document.createElement('button');
  menuBtn.className = 'menu-toggle';
  menuBtn.innerHTML = '<span></span><span></span><span></span>';
  header.insertBefore(menuBtn, nav);
  
  // Overlay de fundo
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  overlay.style.pointerEvents = 'none';
  document.body.appendChild(overlay);
  
  let aberto = false;
  
  function abrir() {
    aberto = true;
    nav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function fechar() {
    aberto = false;
    nav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  // Toggle
  menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (aberto) {
      fechar();
    } else {
      abrir();
    }
  });
  
  // Fechar ao clicar fora
  document.addEventListener('click', function(e) {
    if (!aberto) return;
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
      fechar();
    }
  });
  
  // Configurar links
  const links = nav.querySelectorAll('a');
  
  links.forEach(function(link) {
    link.style.pointerEvents = 'auto';
    link.style.position = 'relative';
    link.style.zIndex = '999999';
    
    link.addEventListener('click', function() {
      fechar();
    });
  });
  
  // ESC fecha menu
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && aberto) {
      fechar();
    }
  });
});

// Validação de formulário
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  
  if (!form) return;
  
  const inputs = form.querySelectorAll('input, select, textarea');
  
  inputs.forEach(function(input) {
    input.addEventListener('input', function() {
      validar(this);
    });
    
    input.addEventListener('blur', function() {
      validar(this);
    });
  });
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let valido = true;
    
    inputs.forEach(function(input) {
      if (!validar(input)) {
        valido = false;
      }
    });
    
    if (valido) {
      mostrarSucesso();
      form.reset();
      inputs.forEach(function(input) {
        input.classList.remove('is-valid', 'is-invalid');
        removerErro(input);
      });
    } else {
      mostrarErro('Por favor, corrija os erros antes de enviar.');
    }
  });
  
  function validar(campo) {
    const valor = campo.value.trim();
    const obrigatorio = campo.hasAttribute('required');
    
    removerErro(campo);
    
    if (obrigatorio && !valor) {
      marcarInvalido(campo, 'Este campo é obrigatório');
      return false;
    }
    
    if (valor) {
      if (campo.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(valor)) {
          marcarInvalido(campo, 'Digite um e-mail válido');
          return false;
        }
      }
      
      if (campo.name === 'cpf') {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfRegex.test(valor)) {
          marcarInvalido(campo, 'Formato: 000.000.000-00');
          return false;
        }
      }
      
      if (campo.name === 'cep') {
        const cepRegex = /^\d{5}-\d{3}$/;
        if (!cepRegex.test(valor)) {
          marcarInvalido(campo, 'Formato: 00000-000');
          return false;
        }
      }
      
      if (campo.type === 'tel') {
        const telRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
        if (!telRegex.test(valor)) {
          marcarInvalido(campo, 'Formato: (11) 99999-0000');
          return false;
        }
      }
      
      if (campo.type === 'date') {
        const data = new Date(valor);
        const hoje = new Date();
        const idade = hoje.getFullYear() - data.getFullYear();
        
        if (data > hoje) {
          marcarInvalido(campo, 'Data não pode ser futura');
          return false;
        }
        
        if (idade < 18) {
          marcarInvalido(campo, 'É necessário ter 18 anos ou mais');
          return false;
        }
      }
      
      if (campo.tagName === 'SELECT' && valor === '') {
        marcarInvalido(campo, 'Selecione uma opção');
        return false;
      }
    }
    
    marcarValido(campo);
    return true;
  }
  
  function marcarInvalido(campo, mensagem) {
    campo.classList.remove('is-valid');
    campo.classList.add('is-invalid');
    
    const erro = document.createElement('div');
    erro.className = 'error-message';
    erro.textContent = mensagem;
    
    campo.parentNode.insertBefore(erro, campo.nextSibling);
  }
  
  function marcarValido(campo) {
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
  }
  
  function removerErro(campo) {
    const erro = campo.parentNode.querySelector('.error-message');
    if (erro) {
      erro.remove();
    }
  }
  
  function mostrarSucesso() {
    const toast = document.createElement('div');
    toast.className = 'toast toast-success';
    toast.innerHTML = '<strong>✓</strong> Cadastro enviado com sucesso!';
    
    document.body.appendChild(toast);
    
    setTimeout(function() {
      toast.classList.add('show');
    }, 100);
    
    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() {
        toast.remove();
      }, 300);
    }, 3000);
  }
  
  function mostrarErro(mensagem) {
    const toast = document.createElement('div');
    toast.className = 'toast toast-error';
    toast.innerHTML = '<strong>✗</strong> ' + mensagem;
    
    document.body.appendChild(toast);
    
    setTimeout(function() {
      toast.classList.add('show');
    }, 100);
    
    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() {
        toast.remove();
      }, 300);
    }, 3000);
  }
  
  // Máscaras
  const cpf = document.querySelector('input[name="cpf"]');
  if (cpf) {
    cpf.addEventListener('input', function(e) {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.slice(0, 11);
      
      v = v.replace(/(\d{3})(\d)/, '$1.$2');
      v = v.replace(/(\d{3})(\d)/, '$1.$2');
      v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      
      e.target.value = v;
    });
  }
  
  const cep = document.querySelector('input[name="cep"]');
  if (cep) {
    cep.addEventListener('input', function(e) {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 8) v = v.slice(0, 8);
      
      v = v.replace(/(\d{5})(\d)/, '$1-$2');
      
      e.target.value = v;
    });
  }
  
  const tel = document.querySelector('input[name="telefone"]');
  if (tel) {
    tel.addEventListener('input', function(e) {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.slice(0, 11);
      
      if (v.length <= 10) {
        v = v.replace(/(\d{2})(\d)/, '($1) $2');
        v = v.replace(/(\d{4})(\d)/, '$1-$2');
      } else {
        v = v.replace(/(\d{2})(\d)/, '($1) $2');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
      }
      
      e.target.value = v;
    });
  }
});