// validation.js - Sistema de validação de formulários
// Implementa verificação de consistência de dados e avisos ao usuário

let validationInitialized = false;

// Inicializar validação
export function initValidation() {
  if (validationInitialized) {
    cleanup();
  }
  
  console.log('✅ Inicializando sistema de validação');
  
  const form = document.querySelector('form');
  
  if (!form) {
    console.log('ℹ️ Nenhum formulário encontrado nesta página');
    return;
  }
  
  const inputs = form.querySelectorAll('input, select, textarea');
  
  // Event listeners para validação em tempo real
  inputs.forEach(input => {
    input.addEventListener('input', () => validar(input));
    input.addEventListener('blur', () => validar(input));
  });
  
  // Event listener para submit
  form.addEventListener('submit', handleSubmit);
  
  // Aplicar máscaras
  aplicarMascaras(form);
  
  validationInitialized = true;
}

// Validar campo individual
function validar(campo) {
  const valor = campo.value.trim();
  const obrigatorio = campo.hasAttribute('required');
  
  removerErro(campo);
  
  // Campo obrigatório vazio
  if (obrigatorio && !valor) {
    marcarInvalido(campo, 'Este campo é obrigatório');
    return false;
  }
  
  // Validações específicas por tipo
  if (valor) {
    // Email
    if (campo.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(valor)) {
        marcarInvalido(campo, 'Digite um e-mail válido');
        return false;
      }
    }
    
    // CPF
    if (campo.name === 'cpf') {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (!cpfRegex.test(valor)) {
        marcarInvalido(campo, 'Formato: 000.000.000-00');
        return false;
      }
      
      // Validação adicional de CPF (dígitos verificadores)
      if (!validarCPF(valor)) {
        marcarInvalido(campo, 'CPF inválido');
        return false;
      }
    }
    
    // CEP
    if (campo.name === 'cep') {
      const cepRegex = /^\d{5}-\d{3}$/;
      if (!cepRegex.test(valor)) {
        marcarInvalido(campo, 'Formato: 00000-000');
        return false;
      }
    }
    
    // Telefone
    if (campo.type === 'tel') {
      const telRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
      if (!telRegex.test(valor)) {
        marcarInvalido(campo, 'Formato: (11) 99999-0000');
        return false;
      }
    }
    
    // Data de nascimento
    if (campo.type === 'date') {
      const data = new Date(valor);
      const hoje = new Date();
      
      if (data > hoje) {
        marcarInvalido(campo, 'Data não pode ser futura');
        return false;
      }
      
      const idade = hoje.getFullYear() - data.getFullYear();
      const mes = hoje.getMonth() - data.getMonth();
      
      if (idade < 18 || (idade === 18 && mes < 0)) {
        marcarInvalido(campo, 'É necessário ter 18 anos ou mais');
        return false;
      }
      
      if (idade > 120) {
        marcarInvalido(campo, 'Data de nascimento inválida');
        return false;
      }
    }
    
    // Select
    if (campo.tagName === 'SELECT' && valor === '') {
      marcarInvalido(campo, 'Selecione uma opção');
      return false;
    }
  }
  
  marcarValido(campo);
  return true;
}

// Validar CPF (algoritmo completo)
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  
  if (cpf.length !== 11) return false;
  
  // CPFs inválidos conhecidos
  if (/^(\d)\1{10}$/.test(cpf)) return false;
  
  // Validar primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = soma % 11;
  let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
  
  if (digitoVerificador1 !== parseInt(cpf.charAt(9))) return false;
  
  // Validar segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = soma % 11;
  let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
  
  if (digitoVerificador2 !== parseInt(cpf.charAt(10))) return false;
  
  return true;
}

// Marcar campo como inválido
function marcarInvalido(campo, mensagem) {
  campo.classList.remove('is-valid');
  campo.classList.add('is-invalid');
  
  const erro = document.createElement('div');
  erro.className = 'error-message';
  erro.textContent = mensagem;
  
  campo.parentNode.insertBefore(erro, campo.nextSibling);
}

// Marcar campo como válido
function marcarValido(campo) {
  campo.classList.remove('is-invalid');
  campo.classList.add('is-valid');
}

// Remover mensagem de erro
function removerErro(campo) {
  const erro = campo.parentNode.querySelector('.error-message');
  if (erro) {
    erro.remove();
  }
}

// Manipular submit do formulário
function handleSubmit(e) {
  e.preventDefault();
  
  console.log('📝 Validando formulário...');
  
  const form = e.target;
  const inputs = form.querySelectorAll('input, select, textarea');
  
  let valido = true;
  
  // Validar todos os campos
  inputs.forEach(input => {
    if (!validar(input)) {
      valido = false;
    }
  });
  
  if (valido) {
    console.log('✅ Formulário válido! Enviando...');
    
    // Coletar dados do formulário
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData.entries());
    
    console.log('📦 Dados do formulário:', dados);
    
    // Mostrar toast de sucesso
    mostrarSucesso();
    
    // Limpar formulário
    form.reset();
    
    // Remover classes de validação
    inputs.forEach(input => {
      input.classList.remove('is-valid', 'is-invalid');
      removerErro(input);
    });
  } else {
    console.log('❌ Formulário contém erros');
    mostrarErro('Por favor, corrija os erros antes de enviar.');
  }
}

// Aplicar máscaras aos campos
function aplicarMascaras(form) {
  // Máscara de CPF
  const cpf = form.querySelector('input[name="cpf"]');
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
  
  // Máscara de CEP
  const cep = form.querySelector('input[name="cep"]');
  if (cep) {
    cep.addEventListener('input', function(e) {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 8) v = v.slice(0, 8);
      
      v = v.replace(/(\d{5})(\d)/, '$1-$2');
      
      e.target.value = v;
    });
  }
  
  // Máscara de Telefone
  const tel = form.querySelector('input[name="telefone"]');
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
}

// Mostrar toast de sucesso
function mostrarSucesso() {
  const toast = document.createElement('div');
  toast.className = 'toast toast-success';
  toast.innerHTML = '<strong>✓</strong> Cadastro enviado com sucesso!';
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Mostrar toast de erro
function mostrarErro(mensagem) {
  const toast = document.createElement('div');
  toast.className = 'toast toast-error';
  toast.innerHTML = '<strong>✗</strong> ' + mensagem;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Limpar event listeners
function cleanup() {
  const form = document.querySelector('form');
  if (form) {
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);
  }
  validationInitialized = false;
}

// Reinicializar quando página é renderizada
document.addEventListener('pageRendered', () => {
  setTimeout(() => {
    initValidation();
  }, 100);
});