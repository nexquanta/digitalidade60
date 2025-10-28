# Digitalidade 60+

> Conectando gerações através da tecnologia acessível

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-green)](https://www.w3.org/WAI/WCAG21/quickref/)

## Sobre o Projeto

A **Digitalidade 60+** é uma ONG fictícia criada como projeto acadêmico, mas inspirada em experiências reais do meu trabalho atual com digitalização e inclusão. No dia a dia, ajudo profissionais de terapias integrativas a levarem seu trabalho para o mundo digital, e percebo cada vez mais a procura do público 60+ por esse tipo de suporte.

Este projeto nasceu dessa observação: pessoas acima de 60 anos querem (e podem!) estar conectadas, mas precisam de ferramentas pensadas para elas. A Digitalidade 60+ oferece oficinas práticas de smartphones, alfabetização digital e integração com o universo online — tudo com muito acolhimento e respeito ao ritmo de aprendizado de cada pessoa.

## Objetivos do Projeto

Este website foi desenvolvido como trabalho final da disciplina Desenvolvimento Front-End Para Web, do curso de Análise e Desenvolvimento de Sistemas na Cruzeiro do Sul.

Os objetivos técnicos e sociais incluem:

- Criar uma plataforma acessível que reflita os valores de inclusão digital
- Implementar boas práticas de HTML5 semântico, CSS moderno e JavaScript vanilla
- Garantir conformidade com padrões WCAG 2.1 nível AA de acessibilidade
- Demonstrar domínio de versionamento Git, organização de código e documentação técnica
- Construir algo que, embora fictício, pudesse ser útil no mundo real

## Funcionalidades

### Acessibilidade em Primeiro Lugar
- **3 modos de visualização**: Claro, Escuro e Alto Contraste
- **Navegação 100% por teclado**: Tab, Enter, Escape — tudo funciona sem mouse
- **Suporte a leitores de tela**: Estrutura semântica e ARIA labels
- **Contraste adequado**: Mínimo de 4.5:1 em todos os modos (WCAG 2.1 AA)
- **Preferências salvas**: O site lembra como você gosta de visualizar

### Interface Responsiva
- Design adaptado para desktop, tablet e mobile
- Menu hambúrguer intuitivo no mobile
- Dropdowns acessíveis em todas as resoluções
- Imagens otimizadas e carregamento rápido

### Single Page Application (SPA)
- Navegação fluida sem recarregar a página
- Validação de formulários em tempo real
- Sistema de rotas implementado do zero em JavaScript puro
- Histórico do navegador funcional (voltar/avançar)

### Otimização para Produção
- Arquivos CSS e JavaScript minificados
- Estrutura modular e reutilizável
- Código comentado e documentado
- Performance otimizada

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design system com variáveis CSS, Flexbox e Grid
- **JavaScript ES6+**: SPA, validações e gerenciamento de estado
- **Git/GitHub**: Versionamento semântico e GitFlow

## Estrutura do Projeto

```
digitalidade60plus/
│
├── index.html                 # Página principal
├── cadastro.html             # Formulário de cadastro
├── projetos.html             # Página de projetos
│
├── assets/
│   ├── css/
│   │   ├── 01-variables.css  # Variáveis CSS (cores, espaçamentos)
│   │   ├── 02-reset.css      # Reset e estilos base
│   │   ├── 03-layout.css     # Grid, header, footer
│   │   ├── 04-components.css # Cards, botões, formulários
│   │   ├── 05-utilities.css  # Classes utilitárias
│   │   ├── 06-extras.css     # Animações e extras
│   │   ├── 07-themes.css     # Modos claro/escuro/alto contraste
│   │   └── main.css          # Importa todos os módulos
│   │
│   ├── js/
│   │   ├── main.js           # Principal
│   │   ├── spa.js            # Sistema de rotas SPA
│   │   ├── templates.js      # Conteúdo das páginas
│   │   ├── menu.js           # Menu responsivo
│   │   ├── validation.js     # Validação de formulários
│   │   └── accessibility.js  # Sistema de acessibilidade
│   │
│   ├── images/               # Imagens do projeto
│   │
│   └── dist/                 # Arquivos minificados
│       ├── main.min.js
│       └── main.min.css
│
└── README.md                 # Este arquivo
```

## Como Executar

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (Live Server, http-server, ou similar)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/digitalidade60plus.git
cd digitalidade60plus
```

2. Inicie um servidor local:
```bash
# Usando Live Server (VS Code)
# Clique com botão direito em index.html > Open with Live Server

# OU usando Python
python -m http.server 8000

# OU usando Node.js
npx http-server
```

3. Acesse no navegador:
```
http://localhost:5500  # Live Server
http://localhost:8000  # Python
```

## Acessibilidade

Este projeto foi desenvolvido seguindo as diretrizes **WCAG 2.1 nível AA**:

- Estrutura HTML5 semântica
- Navegação por teclado completa
- Suporte a leitores de tela (NVDA, JAWS, VoiceOver)
- Contraste de cores adequado (mínimo 4.5:1)
- Textos alternativos em imagens
- Labels em todos os campos de formulário
- Foco visível em elementos interativos
- Modo de alto contraste (21:1)

### Atalhos de Teclado

| Tecla | Ação |
|-------|------|
| `Tab` | Navegar para o próximo elemento |
| `Shift + Tab` | Navegar para o elemento anterior |
| `Enter` | Ativar link ou botão |
| `Esc` | Fechar menu mobile |

## Design System

O projeto utiliza um design system coeso com:

- **Paleta de cores**: Rosa vibrante (#ff3366) com tons neutros
- **Tipografia**: System fonts para máxima legibilidade
- **Espaçamento**: Sistema baseado em múltiplos de 4px
- **Border radius**: Cantos levemente arredondados (8px)
- **Sombras**: Profundidade sutil para hierarquia visual

## Commits Semânticos

O projeto segue o padrão de commits semânticos:

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação (não afeta código)
- `refactor:` Refatoração de código
- `test:` Testes
- `chore:` Manutenção

## Contribuindo

Este é um projeto acadêmico, mas sugestões são bem-vindas! Se você encontrou algum problema ou tem ideias de melhoria:

1. Abra uma issue descrevendo o problema ou sugestão
2. Fork o projeto
3. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
4. Commit suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade'`)
5. Push para a branch (`git push origin feature/MinhaFeature`)
6. Abra um Pull Request

## Autor

**Rodrigo Correia Diniz**

- Estudante de Análise e Desenvolvimento de Sistemas
- Cruzeiro do Sul - Turma_005
- Disciplina: Desenvolvimento Front-End Para Web

## Agradecimentos

- Ao público 60+ que inspira este projeto todos os dias
- Aos professores e colegas que contribuíram com feedback valioso
- À comunidade open source por ferramentas e recursos incríveis

---

**Nota**: Este é um projeto acadêmico fictício desenvolvido para fins educacionais. A ONG Digitalidade 60+ não existe como entidade real, mas o conceito e a necessidade que representa são muito reais.

Desenvolvido com dedicação por Rodrigo Correia Diniz