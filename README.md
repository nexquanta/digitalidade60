# ONG Digitalidade 60+ - Projeto Web Completo

## Sobre o Projeto

Site institucional da ONG Digitalidade 60+, uma organização dedicada à inclusão digital de pessoas com 60 anos ou mais. O projeto foi desenvolvido em três etapas como atividade acadêmica, demonstrando evolução progressiva de tecnologias web.

## Objetivos

- Promover a inclusão digital do público 60+
- Apresentar projetos e oficinas da ONG
- Facilitar cadastro de voluntários e participantes
- Demonstrar competências em HTML, CSS e JavaScript moderno

## Tecnologias Utilizadas

### Frontend
- HTML5 - Estrutura semântica e acessível
- CSS3 - Design responsivo e moderno
- JavaScript ES6+ - Funcionalidades interativas e SPA

### Arquitetura
- Single Page Application (SPA) - Navegação sem reload
- Módulos ES6 - Código organizado e reutilizável
- Template System - Renderização dinâmica de conteúdo
- Sistema de Rotas - Gerenciamento de navegação

## Estrutura do Projeto

```
digitalidade60-plus/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   ├── 01-variables.css
│   │   ├── 02-reset.css
│   │   ├── 03-layout.css
│   │   ├── 04-components.css
│   │   ├── 05-utilities.css
│   │   ├── 06-extras.css
│   │   └── main.css
│   ├── js/
│   │   ├── main.js
│   │   ├── spa.js
│   │   ├── templates.js
│   │   ├── menu.js
│   │   └── validation.js
│   └── img/
│       ├── logo.png
│       ├── logo.webp
│       ├── hero.png
│       ├── hero.webp
│       ├── cadastro.png
│       ├── cadastro.webp
│       ├── equipe.png
│       ├── equipe.webp
│       ├── projeto1.jpg
│       ├── projeto1.webp
│       ├── projeto2.jpg
│       └── projeto2.webp
```

## Funcionalidades

### Sistema SPA (Single Page Application)
- Navegação entre páginas sem reload
- Gerenciamento de rotas com History API
- URLs amigáveis e navegáveis
- Suporte a botões voltar e avançar do navegador
- Scroll automático para seções específicas

### Sistema de Templates JavaScript
- Renderização dinâmica de conteúdo
- Templates modulares e reutilizáveis
- Geração de HTML via JavaScript
- Dados estruturados e separados da apresentação

### Menu Responsivo
- Menu hambúrguer para dispositivos móveis
- Overlay com fechamento ao clicar fora
- Tecla ESC para fechar
- Transições suaves
- Dropdown para submenu de projetos

### Validação de Formulários
- Validação em tempo real
- Máscaras automáticas (CPF, CEP, telefone)
- Verificação de consistência de dados
- Mensagens de erro contextuais
- Feedback visual (válido/inválido)
- Validação de CPF com dígitos verificadores
- Validação de idade mínima (18 anos)
- Validação de formato de email
- Notificações de sucesso e erro

### Design Responsivo
- Abordagem mobile-first
- Breakpoints bem definidos
- Imagens otimizadas (WebP com fallback)
- Tipografia escalável
- Acessibilidade (ARIA labels, contraste adequado)

## Design System

### Cores Principais
- Primary: #ff0050 (Rosa/Vermelho)
- Background: #2d2d2d (Cinza escuro)
- Cards: #000000 (Preto)
- Text: #ffffff (Branco) / #e5e5e5 (Cinza claro)

### Tipografia
- Font Family: System fonts (-apple-system, Segoe UI, Arial, sans-serif)
- Font Sizes: 0.75rem a 3rem (escala modular)
- Line Heights: 1.25 a 1.75

### Espaçamentos
- Scale: 0.25rem a 6rem (progressão consistente)
- Grid Gap: 1.5rem
- Container Max-Width: 1280px

## Como Executar

O projeto utiliza ES6 Modules, portanto requer um servidor web. Não é possível abrir diretamente o arquivo HTML no navegador devido a restrições de CORS.

### Com Python 3
```bash
python -m http.server 8000
```

### Com Node.js
```bash
npx http-server -p 8000
```

### Com PHP
```bash
php -S localhost:8000
```

### Com VS Code
1. Instale a extensão "Live Server"
2. Clique com botão direito em index.html
3. Selecione "Open with Live Server"

Após iniciar o servidor, acesse: http://localhost:8000

## Estrutura das Páginas

### Home
- Apresentação da ONG
- Missão, visão e valores
- Imagem principal
- Informações de contato

### Projetos
- Lista de projetos de inclusão digital
- Cards com imagens e descrições
- Oficina de Smartphones
- Duplas Digitais
- IA no Dia a Dia
- Seção "Como Participar"

### Cadastro
- Formulário completo de cadastro
- Validação em tempo real
- Máscaras automáticas
- Opções: Voluntário, Participante ou Doador

## Validações Implementadas

### CPF
- Formato: 000.000.000-00
- Validação de dígitos verificadores
- Rejeita CPFs inválidos conhecidos

### Email
- Validação de formato padrão
- Verificação de domínio

### Telefone
- Formato: (00) 00000-0000 ou (00) 0000-0000
- Suporte a 8 e 9 dígitos

### CEP
- Formato: 00000-000
- Apenas números

### Data de Nascimento
- Idade mínima: 18 anos
- Idade máxima: 120 anos
- Não aceita datas futuras

## Etapas do Projeto

### Etapa 1 - HTML
- Estrutura semântica
- Três páginas completas
- Formulários acessíveis
- Imagens otimizadas

### Etapa 2 - CSS
- Design system completo
- Arquitetura modular (6 arquivos CSS)
- Responsividade mobile-first
- Animações e transições

### Etapa 3 - JavaScript
- Sistema SPA
- Templates dinâmicos
- Validação completa
- Código modular (5 arquivos JavaScript)

## Módulos JavaScript

### main.js
Ponto de entrada da aplicação. Inicializa todos os módulos e coordena a execução.

### spa.js
Sistema de Single Page Application. Gerencia rotas e navegação sem reload do navegador.

Funcionalidades principais:
- Interceptação de cliques em links
- Integração com History API
- Renderização de páginas
- Suporte a navegação do browser
- Tratamento de âncoras para scroll

### templates.js
Sistema de templates para renderização dinâmica de conteúdo HTML.

Funcionalidades principais:
- Templates de páginas completas
- Templates de componentes
- Dados estruturados
- Geração dinâmica de HTML

### menu.js
Gerenciamento do menu responsivo com hambúrguer.

Funcionalidades principais:
- Criação dinâmica do botão hambúrguer
- Overlay de fundo
- Eventos de abertura e fechamento
- Suporte a tecla ESC

### validation.js
Sistema completo de validação de formulários.

Funcionalidades principais:
- Validação em tempo real
- Máscaras automáticas para CPF, CEP e telefone
- Mensagens de erro específicas
- Validação de CPF com algoritmo completo
- Notificações de sucesso e erro

## Navegadores Suportados

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Breakpoints

- Mobile: até 768px
- Tablet: 768px a 1024px
- Desktop: acima de 1024px

## Boas Práticas Implementadas

### HTML
- Semântica correta
- Acessibilidade (ARIA, textos alternativos)
- Meta tags para SEO
- Estrutura clara e organizada

### CSS
- Metodologia modular
- Variáveis CSS (Custom Properties)
- Abordagem mobile-first
- Otimização de performance

### JavaScript
- Módulos ES6+
- Código limpo e legível
- Separação de responsabilidades
- Event delegation
- Tratamento de erros

## Contato (Fictício)

ONG Digitalidade 60+
Email: contato@digitalidade60.org.br
Telefone: (11) 3333-6060
Endereço: Rua Conectividade, 100 - Vila Digital, São Paulo/SP

---

Versão: 3.0.0
Última atualização: Outubro 2025