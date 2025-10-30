// templates.js - Sistema de templates para renderização dinâmica
// Cria e gerencia todo o HTML da aplicação via JavaScript

// Dados da aplicação (simulando conteúdo dinâmico)
const appData = {
  projetos: [
    {
      id: 'smartphones',
      titulo: 'Oficina de Smartphones',
      imagem: 'assets/img/projeto1.jpg',
      imagemWebp: 'assets/img/projeto1.webp',
      alt: 'Oficina de smartphones para adultos da melhor idade',
      descricao: 'Nessa oficina, os participantes aprendem desde o básico — como configurar o celular, conectar-se ao Wi-Fi e enviar mensagens — até funções mais avançadas, como chamadas de vídeo, uso de aplicativos bancários e segurança digital.',
      figcaption: 'Adultos da melhor idade aprendendo a usar o celular com instrutores voluntários.'
    },
    {
      id: 'duplas',
      titulo: 'Duplas Digitais',
      imagem: 'assets/img/projeto2.jpg',
      imagemWebp: 'assets/img/projeto2.webp',
      alt: 'Voluntário auxiliando um participante',
      descricao: 'O projeto "Duplas Digitais" une gerações. Jovens voluntários acompanham adultos 60+ em sessões semanais, ensinando o uso de redes sociais, plataformas de mensagens e aplicativos de vídeo. É um espaço de aprendizado mútuo e convivência afetiva.',
      figcaption: 'Jovens e adultos 60+ trocando experiências sobre tecnologia.'
    },
    {
      id: 'ia',
      titulo: 'IA no Dia a Dia',
      imagem: 'assets/img/equipe.png',
      imagemWebp: 'assets/img/equipe.webp',
      alt: 'Oficina de Inteligência Artificial com adultos da melhor idade',
      descricao: 'Este curso introdutório apresenta as principais ferramentas de Inteligência Artificial e assistentes virtuais. De forma simples, mostramos como usar comandos de voz, aplicativos inteligentes e sistemas que podem facilitar a rotina doméstica e de comunicação.',
      figcaption: 'Participantes aprendendo sobre assistentes virtuais e ferramentas digitais.'
    }
  ]
};

// Template: Cabeçalho (Header)
function headerTemplate() {
  return `
    <header>
      <picture>
        <source srcset="assets/img/logo.webp" type="image/webp">
        <source srcset="assets/img/logo.png" type="image/png">
        <img src="assets/img/logo.png" alt="Logo da ONG Digitalidade 60+" width="180">
      </picture>

      <nav>
        <ul>
          <li><a href="index.html">Início</a></li>
          
          <li class="dropdown">
            <a href="projetos.html">Projetos</a>
            <ul class="dropdown-menu">
              <li><a href="projetos.html#smartphones" class="dropdown-item">Oficina de Smartphones</a></li>
              <li><a href="projetos.html#duplas" class="dropdown-item">Duplas Digitais</a></li>
              <li><a href="projetos.html#ia" class="dropdown-item">IA no Dia a Dia</a></li>
            </ul>
          </li>
          
          <li><a href="cadastro.html">Cadastro</a></li>
        </ul>
      </nav>
    </header>
  `;
}

// Template: Rodapé (Footer)
function footerTemplate() {
  return `
    <footer>
      <p>© 2025 — ONG Digitalidade 60+</p>
    </footer>
  `;
}

// Template: Página Home
function homeTemplate() {
  return `
    ${headerTemplate()}
    
    <main>
      <section>
        <h1>Conectando Gerações</h1>
        <p>
          A <strong>ONG Digitalidade 60+</strong> nasceu com o propósito de aproximar o público 60+ de novas tecnologias (celular, internet, redes sociais, AI), 
          promovendo a inclusão digital de forma acessível, acolhedora e transformadora. 
          Acreditamos que o aprendizado das novas tecnologias digitais pode melhorar a autoestima, 
          fortalecer vínculos familiares e abrir novas oportunidades para a melhor idade.
        </p>
        <p>
          Mais do que ensinar o uso de ferramentas tecnológicas, nossa missão é despertar curiosidade, autonomia e confiança.
          Cada oficina é pensada para acolher o ritmo de aprendizado de cada pessoa, mostrando que nunca é tarde para aprender, explorar e se reinventar no mundo digital.
        </p>
        <p>
          Em um ambiente leve e colaborativo, os participantes compartilham experiências, fazem novas amizades e descobrem formas simples e seguras de se conectar.
          É comum ver sorrisos sinceros ao enviar a primeira mensagem, realizar uma videochamada com a família ou descobrir o prazer de navegar pela internet com liberdade.
        </p>
        <p>
          Nossas oficinas e cursos são voltados para pessoas com pouca ou nenhuma experiência digital. 
          Durante as atividades, os participantes aprendem a enviar mensagens, realizar chamadas de vídeo, 
          buscar informações na internet e até utilizar aplicativos de saúde, transporte e lazer.
        </p>
        <p>
          Mais do que um espaço de aprendizado, a <strong>Digitalidade 60+</strong> é uma comunidade de apoio e convivência, onde cada conquista tecnológica é celebrada como um passo em direção à autonomia e à inclusão.
        </p>

        <figure>
          <picture>
            <source srcset="assets/img/hero.webp" type="image/webp">
            <source srcset="assets/img/hero.png" type="image/png">
            <img src="assets/img/hero.png" alt="Aprendendo a usar smartphones" width="600">
          </picture>
          <figcaption>Oficinas que unem aprendizado, convivência e acolhimento entre gerações.</figcaption>
        </figure>
      </section>

      <section class="missao-card">
        <h2>Missão, Visão e Valores</h2>
        <p><strong>Missão:</strong> promover o acesso digital para o público 60+ (melhor idade), estimulando a autonomia e uma participação mais ativa na sociedade.</p>
        <p><strong>Visão:</strong> ser referência em inclusão digital para o público 60+, contribuindo para uma sociedade mais conectada e solidária.</p>
        <p><strong>Valores:</strong> respeito, empatia, aprendizado contínuo e compromisso com a transformação social.</p>
      </section>

      <section class="fale-conosco-card">
        <h2>Fale conosco</h2>
        <p>Quer conhecer mais sobre nossos projetos ou se voluntariar? Entre em contato conosco:</p>
        <p><strong>E-mail:</strong> contato@digitalidade60.org.br</p>
        <p><strong>Telefone:</strong> (11) 3333-6060</p>
        <p><strong>Endereço:</strong> Rua Conectividade, 100 — Vila Digital, São Paulo/SP</p>
      </section>
    </main>

    ${footerTemplate()}
  `;
}

// Template: Card de Projeto
function projetoCardTemplate(projeto) {
  return `
    <article id="${projeto.id}">
      <h2>${projeto.titulo}</h2>
      <figure>
        <picture>
          <source srcset="${projeto.imagemWebp}" type="image/webp">
          <source srcset="${projeto.imagem}" type="image/jpeg">
          <img src="${projeto.imagem}" alt="${projeto.alt}" width="600">
        </picture>
        <figcaption>${projeto.figcaption}</figcaption>
      </figure>
      <p>${projeto.descricao}</p>
    </article>
  `;
}

// Template: Página Projetos
function projetosTemplate() {
  const projetosHTML = appData.projetos.map(projeto => projetoCardTemplate(projeto)).join('');
  
  return `
    ${headerTemplate()}
    
    <main>
      <section>
        <h1>Projetos de Inclusão Digital</h1>
        <p>
          Nossos programas aproximam pessoas com idade acima de 60 anos das tecnologias digitais, promovendo aprendizado prático e socialização. 
          Os projetos são elaborados por profissionais e voluntários que acreditam que a tecnologia pode ser uma aliada na qualidade de vida.
        </p>
        <p>
          Além de ensinar o uso de ferramentas tecnológicas, nossas iniciativas incentivam a autonomia digital e a troca entre gerações.
          Valorizamos a experiência de vida de cada participante, transformando o aprendizado em um espaço de convivência, descoberta e acolhimento.
        </p>
        <p>
          Acreditamos que a inclusão digital vai muito além do domínio de dispositivos — ela representa uma oportunidade de fortalecimento emocional,
          reconexão com amigos e familiares e o resgate da confiança em explorar o mundo moderno de forma segura.
        </p>
        <p>
          A <strong>Digitalidade 60+</strong> atua em comunidades, centros de convivência e espaços públicos, oferecendo aulas gratuitas e personalizadas. 
          Além disso, buscamos parcerias com empresas e escolas para ampliar o alcance das nossas atividades.
        </p>

        ${projetosHTML}
      </section>

      <section class="como-participar-card">
        <h2>Como participar</h2>
        <p>
          Você pode participar de várias formas: como voluntário, doador ou aluno das oficinas. 
          Todas as contribuições ajudam a expandir o impacto social da ONG.
        </p>
        <p>
          Voluntários podem atuar em aulas, suporte técnico ou comunicação digital.  
          As doações são utilizadas para compra de tablets, manutenção de equipamentos e produção de material didático.
        </p>
        <p><a href="/cadastro.html">Acesse o formulário de cadastro</a> e venha fazer parte da transformação digital 60+!</p>
      </section>
    </main>

    ${footerTemplate()}
  `;
}

// Template: Página Cadastro
function cadastroTemplate() {
  return `
    ${headerTemplate()}
    
    <main>
      <section>
        <h1>Cadastro — Faça parte da Digitalidade 60+</h1>
        <p>
          Quer se voluntariar, participar das oficinas ou apoiar nossos projetos com uma doação?  
          Preencha o formulário abaixo com seus dados e escolha como deseja contribuir.  
          Sua participação é fundamental para levar a tecnologia e o conhecimento a quem mais precisa.
        </p>
        <p>
          Participar da <strong>ONG Digitalidade 60+</strong> é fazer parte de uma rede que acredita no poder da inclusão digital e do aprendizado contínuo.
          Seja compartilhando seu tempo, seu conhecimento ou seu apoio, cada gesto conta — e ajuda a transformar a vida de pessoas que estão descobrindo o universo digital pela primeira vez.
        </p>
        <p>
          Nossos voluntários são o coração do projeto: acolhem, ensinam, orientam e aprendem juntos com o público 60+.
          Cada oficina se torna um espaço de troca de experiências e de valorização da convivência intergeracional, onde todos crescem e se fortalecem.
        </p>
        <p>
          Se preferir, você também pode apoiar nossas iniciativas com doações que ajudam a manter as atividades gratuitas, comprar equipamentos, produzir materiais didáticos e ampliar o alcance das ações.
        </p>
        <p>
          Acreditamos que <strong>a tecnologia é uma ponte para a inclusão social</strong> — e você pode ser parte dessa transformação.
          Preencha seus dados com carinho e venha conosco construir um futuro mais conectado, humano e solidário.
        </p>

        <figure>
          <picture>
            <source srcset="assets/img/cadastro.webp" type="image/webp">
            <source srcset="assets/img/cadastro.png" type="image/png">
            <img src="assets/img/cadastro.png" alt="Participantes e voluntários preenchendo formulários em oficina de inclusão digital" width="600">
          </picture>
          <figcaption>Participantes realizando seu cadastro para as oficinas da Digitalidade 60+.</figcaption>
        </figure>

        <p>
          Todos os dados são utilizados apenas para fins de contato e organização das atividades da ONG.  
          O preenchimento correto garante que nossa equipe possa direcionar seu interesse da melhor forma.
        </p>

        <form>
          <fieldset>
            <legend>Dados pessoais</legend>

            <label for="nome">Nome completo</label>
            <input id="nome" name="nome" type="text" required>

            <label for="email">E-mail</label>
            <input id="email" name="email" type="email" required>

            <label for="cpf">CPF</label>
            <input id="cpf" name="cpf" type="text" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" required>

            <label for="telefone">Telefone</label>
            <input id="telefone" name="telefone" type="tel" placeholder="(11) 99999-0000" required>

            <label for="nascimento">Data de nascimento</label>
            <input id="nascimento" name="nascimento" type="date" required>
          </fieldset>

          <fieldset>
            <legend>Endereço</legend>

            <label for="cep">CEP</label>
            <input id="cep" name="cep" type="text" pattern="\\d{5}-\\d{3}" placeholder="00000-000" required>

            <label for="endereco">Endereço</label>
            <input id="endereco" name="endereco" type="text" required>

            <label for="cidade">Cidade</label>
            <input id="cidade" name="cidade" type="text" required>

            <label for="estado">Estado</label>
            <select id="estado" name="estado" required>
              <option value="">Selecione</option>
              <option>SP</option><option>RJ</option><option>MG</option><option>RS</option>
              <option>BA</option><option>PR</option><option>SC</option><option>PE</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Como deseja participar?</legend>
            <label><input type="radio" name="tipo" value="voluntario" required> Quero ser voluntário(a)</label><br>
            <label><input type="radio" name="tipo" value="oficina"> Quero participar das oficinas</label><br>
            <label><input type="radio" name="tipo" value="doador"> Quero contribuir com doações</label>
          </fieldset>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>

    ${footerTemplate()}
  `;
}

// Renderizar página completa
export function renderPage(routeName) {
  console.log(`🎨 Renderizando página: ${routeName}`);
  
  let html = '';
  
  switch(routeName) {
    case 'home':
      html = homeTemplate();
      break;
    case 'projetos':
      html = projetosTemplate();
      break;
    case 'cadastro':
      html = cadastroTemplate();
      break;
    default:
      html = homeTemplate();
  }
  
  // Renderizar no body
  document.body.innerHTML = html;
  
  // Adicionar classes ao body
  document.body.className = '';
  
  // Adicionar script tag para reinicializar módulos após renderização
  setTimeout(() => {
    // Re-importar módulos para a nova página
    const event = new CustomEvent('pageRendered', { detail: { route: routeName } });
    document.dispatchEvent(event);
  }, 0);
}

// Exportar dados para uso em outros módulos
export { appData };