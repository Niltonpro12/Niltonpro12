<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="Loop Nerd" content="Códigos Pronto" />
  <meta name="description" content="Loop Nerd Códigos e sites pronto para você utilizar no seu negócio."/>
  <meta name="keywords" content="Menus Html Prontos, Menu Sidebar, Slide Lefet, Menu Responsivo, Menus Html."/>
  <meta name="author" content="Loop Nerd" />
  <meta name="URL" content="https://www.www.loopnerd.com"/>
  <meta http-equiv="content-language" content="pt-br" />
  <meta name="robots" content="index, follow"/>
   <title>
    TECHSERVICE_MZ
   </title>

    <link rel="stylesheet" href="/css/fonts-icones.css">
    <link rel="stylesheet" href="/CODIGO CSS/paralax.css">
    <link rel="stylesheet" href="/CODIGO CSS/sobrenos.css">
    <link rel="stylesheet" href="/CODIGO CSS/Servico.css">
      <link rel="stylesheet" href="/CODIGO CSS/Factos.css">
    <link rel="stylesheet" href="/CODIGO CSS/why.css">
    <link rel="stylesheet" href="/CODIGO CSS/galery.css">

  
</head>
<body>
  <!-- _-----------------------------------BARRA DE NAVEGACAO------------------------------------------------- _ -->
  <nav id="menu-slide">
    <ul>
        <li><i class="icon icon-home"></i><a href="#Home" class="active">Home</a></li>
        <li><i class="icon icon-cube"></i><a href="#servicos">Serviços</a></li>
        <li><i class="icon icon-vcard"></i><a href="#">Sobre-nós </a></li>
        <li><i class="icon icon-camera-1"></i><a href="##">Portfolio</a></li>
        <li><i class="icon icon-mail"></i><a href="##">Contacto</a></li>
        <li><i class="icon icon-login" id="icon-login"></i><a href="/CODIGO HTML/pagina-de-login-html/index.html">Auth</a></li>
    </ul>
    
</nav>


<div id="content">
         <div class="mobile"> <i class="icon icon-menu"></i> </div>
   
   </div>
   <script>
    (function() {
     var $body = document.body
     , $mobile = $body.getElementsByClassName('mobile')[0];
    
     if ( typeof $mobile !== 'undefined' ) {
      $mobile.addEventListener('click', function() {
       $body.className = ( $body.className == 'menu-ativo' )? '' : 'menu-ativo';
      });
     }
    
    }).call(this);
    </script>

  <!-- _-----------------------------------Pagina-home-inicial------------------------------------------------- _ -->
 
  <div class="container-slider-home">
    <div class="slider-info">
      <h2></h2>
      <p></p>
      <a href="#servicos" class="slider-button">Saber Mais</a>
    </div>
    <div class="slider-nav-buttons">
      <button onclick="changeBackground(0)"></button>
      <button onclick="changeBackground(1)"></button>
      <button onclick="changeBackground(2)"></button>
    </div>
 
        <h2 class="logo">
          <img src="/IMAGEM/innovation.png" alt="logo-innovation" class="logo-innovation">
          <div class="logo-text">TECHSERVICE_MZ</div>
      </h2>
        <button id="scrollTopBtn" onclick="scrollToTop()">↑</button>
      
        
     </div>

<script>
  // Função para rolar suavemente até o topo da página
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Exibir o botão quando a rolagem for além de 200 pixels
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
</script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    animateText(); // Chama a função para animar o texto
  });
  
  function animateText() {
    const text = document.querySelector('.text');
    const tl = gsap.timeline();
  
    tl.fromTo(
      text,
      { opacity: 0, y: "50vh", scaleX: 5, scaleY: 5 },
      { opacity: 1, y: 0, scaleX: 1, scaleY: 1, duration: 4, ease: "expo.out" }
    );
  }
  </script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      animateButton(); // Chama a função para animar o botão
    });
  
    function animateButton() {
      const btnGroup = document.querySelector('.botoes-social');
      const tl = gsap.timeline();
  
      tl.fromTo(
        btnGroup,
        { opacity: 0, y: "20vh" },
        { opacity: 1, y: 0, duration: 5, ease: "expo.out" }
      );
    }
  </script>
  <!-- _-----------------------------------script-para mudar-slides------------------------------------------------- _   -->
  <script>
const container = document.querySelector('.container-slider-home');
const sliderInfo = document.querySelector('.slider-info');
const backgrounds = [
  '/IMAGEM/slider-2-desktop.jpg',
  '/IMAGEM/person-office-work-day.jpg',
  '/IMAGEM/slider-1-desktop.jpg', 
];

const slidesInfo = [
  { title: 'WEB DESIGN', description: 'No campo do desenvolvimento web, cada projeto é uma oportunidade de inovação, transformando ideias em experiências digitais cativantes.' },
  { title: 'CONSULTORIA IT', description: 'A consultoria em tecnologia da informação oferece soluções estratégicas, alinhando a tecnologia com os objetivos de negócios para impulsionar o sucesso.' },
  { title: 'HOSPEDAGEM', description: 'Garantimos uma hospedagem segura e confiável para proteger seus dados.' },
];

let currentBackgroundIndex = 0;
let intervalId;

function changeBackground(index) {
  currentBackgroundIndex = index;
  container.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
  updateSliderInfo();
}

function updateSliderInfo() {
  const currentSlide = slidesInfo[currentBackgroundIndex];
  sliderInfo.querySelector('h2').innerText = currentSlide.title;
  sliderInfo.querySelector('p').innerText = currentSlide.description;
}

function startAutomaticChange() {
  intervalId = setInterval(() => {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    changeBackground(currentBackgroundIndex);
  }, 5000);
}

function stopAutomaticChange() {
  clearInterval(intervalId);
}

function init() {
  changeBackground(0);  // Adicione esta linha para exibir a primeira imagem imediatamente
  startAutomaticChange();

  container.addEventListener('mouseenter', stopAutomaticChange);
  container.addEventListener('mouseleave', startAutomaticChange);

  // Adiciona listeners para iniciar a mudança automática ao finalizar a animação do CSS
  container.addEventListener('animationiteration', () => {
    startAutomaticChange();
  });
}

init();

  </script>

  
<!-- _-----------------------------------PAGINA-ABOUT-US------------------------------------------------- _ -->
    
<main id="Sobre-nos" >
   
  <header class="box-header">
    <h2 class="the-title">Sobre-nós </h2>
  </header>
  <header class="box-header"><div class="sutitulo-sobre "> TECHSERVICE_MZ</div></header>

 
      </script>
  <section id="about">
    <p> <img src="https://sparktechh.com/assets/images/about/3.png"  alt="Imagem-about-us">Fundada por um grupo de jovens empreendedores moçambicanos, a TechService_MZ destaca-se no panorama tecnológico
      como um catalisador de inovação digital. Especializamo-nos em fornecer serviços de desenvolvimento web,
      consultoria em TI, sistemas de gestão empresarial e entre outros serviços. Nosso foco é personalizar soluções
      de software que integram funcionalidades avançadas, melhorando a eficiência para revolucionar a maneira
      como os negócios operam.</p>
  </section>

  <section class="mission-vision">
    <div class="mission">
      
      <h3 class="mission-h3"><img src="/IMAGEM/missao.png" alt="Missão Icon">Nossa Missão</h3>
      <p>Facilitar a jornada digital dos nossos clientes, oferecendo soluções inovadoras e personalizadas que
        impulsionam o crescimento e a eficiência.</p>
    </div>

    <div class="vision">
      
      <h3 class="vision-h3"><img src="/IMAGEM/visao.png" alt="Visão Icon">Nossa Visão</h3>
      <p>Ser a força motriz por trás da transformação digital em Moçambique, estabelecendo um novo padrão em
        tecnologia e serviço.</p>
    </div>
  </section>

  <section class="connect">
    <p>Na TechService_MZ, conectamos tecnologia, inovação e talento para criar um futuro mais inteligente e conectado.</p>
    <button class="botao-hover">Contacte!!</button>
  </section>
  
</main>

<!-- _-----------------------------------FACTOS------------------------------------------------- _ -->
<main id="Factos" class="Contar-factos">
  <div class="conta">
      <img src="/IMAGEM/trabalho.png" alt="Ícone 1">
      <h3>Projetos Realizados</h3>
      <p><span id="counter1" data-target="150">0</span></p>
  </div>
  <div class="conta">
      <img src="/IMAGEM/feliz.png" alt="Ícone 2">
      <h3>Clientes Satisfeitos</h3>
      <p><span id="counter2" data-target="500">0</span></p>
  </div>
  <div class="conta">
      <img src="/IMAGEM/consciencia.png" alt="Ícone 3">
      <h3>Assistência ao Cliente</h3>
      <p><span id="counter3" data-target="30">0</span></p>
  </div>
  <div class="conta">
      <img src="/IMAGEM/horario-de-trabalho.png" alt="Ícone 4">
      <h3>Anos de Experiência</h3>
      <p><span id="counter4" data-target="3">0</span></p>
  </div>
</main>


<script>
  document.addEventListener("DOMContentLoaded", function () {
      function startCounters() {
          const counters = document.querySelectorAll('.conta p span');
          const speed = 200; // ajuste conforme necessário

          counters.forEach(counter => {
              const updateCount = () => {
                  const target = +counter.getAttribute('data-target');
                  const count = +counter.innerText;

                  const inc = target / speed;

                  if (count < target) {
                      counter.innerText = Math.ceil(count + inc);
                      setTimeout(updateCount, 1);
                  } else {
                      counter.innerText = target;
                  }
              };

              updateCount();
          });
      }

      startCounters();
  });
</script>
<!-- _-----------------------------------PAGINA-SERVICOS------------------------------------------------- _ -->

<!-- _-----------------------------------WHY------------------------------------------------- _ -->


<main class="accordion-container">
  <div class="sutitulo-accordion ">Porquê escolher a TECHSERVICE_MZ?</div>
  <div class="box-tab">
  
    <input id="tab1" type="radio" name="tabs" checked>
    <label for="tab1"></i> <span>O que oferecemos?<span> </label>
      
    <input id="tab2" type="radio" name="tabs">
    <label for="tab2"></i> <span>Como trabalhamos?<span> </label>
      
    <input id="tab3" type="radio" name="tabs">
    <label for="tab3"></i> <span>Excelência em Atendimento<span> </label>
    
    
    <section class="box-content" id="content-1">
     
      <p>
        
        Nossa empresa oferece uma ampla gama de serviços de tecnologia, desde desenvolvimento web até soluções avançadas de integração de sistemas. Estamos comprometidos em fornecer resultados excepcionais para atender às necessidades únicas de nossos clientes.
      </p>
   
    </section>
      
    <section class="box-content" id="content-2">
     
      <p>
        Utilizamos abordagens inovadoras e tecnologias de ponta para fornecer soluções de última geração. Nossa equipe de consultores altamente qualificados e desenvolvedores experientes está sempre pronta para enfrentar os desafios mais complexos e garantir o sucesso de seus projetos.
      </p>
  
    </section>
      
    <section class="box-content" id="content-3">
  
      <p>
        Na nossa empresa, acreditamos que o atendimento ao cliente é uma parte fundamental de qualquer projeto bem-sucedido. Nossa equipe está dedicada a fornecer um atendimento excepcional, ouvindo atentamente às suas necessidades e respondendo prontamente a qualquer preocupação. Garantimos uma comunicação transparente e eficaz durante todo o processo, para que você se sinta totalmente apoiado em cada etapa do seu projeto.
      </p>
  
    </section>
      
  </div><!--Box-tab-->
</div>

<section id="destaque-servicos" class="destaque-section">
  <div class="container-servicos">
    <header class="box-header">
      <h2 class="the-title">Serviços</h2>
    <div class="sutitulo-servicos ">Conheça nossos principais serviços de tecnologia da informação.</div>
      </header>
      <div class="servicos-container">
          <div class="servico">
              <img src="https://www.fastaichat.com/assets/images/hero.png" alt="Serviço 1">
              <h3>Consultoria IT</h3>
              <p>Maximize o potencial de sua infraestrutura tecnológica com nossos serviços de consultoria IT. Analisamos suas necessidades específicas, oferecendo soluções personalizadas para impulsionar a eficiência e a produtividade....</p>
              <a href="#" class="btn-leia-mais">Leia Mais</a>
          </div>
          <div class="servico">
              <img src="https://abmagency.com/wp-content/uploads/2021/02/Team-Assests-07.png" alt="Serviço 2">
              <h3>Manutenção de Computadores</h3>
              <p>Oferecemos serviços abrangentes de manutenção de computadores, garantindo que seu hardware e software funcionem de maneira eficiente. Nossa equipe altamente qualificada está pronta para lidar com qualquer problema, desde otimizações de desempenho até solução de problemas técnicos complexos....</p>
              <a href="#" class="btn-leia-mais">Leia Mais</a>
          </div>
          <div class="servico">
              <img src="https://www.sightline.com/wp-content/uploads/Sightline-EDM_-Automated-Anomaly-Detection-in-Real-Time.png" alt="Serviço 3">
              <h3>Hospedagem</h3>
              <p>Oferecemos soluções de hospedagem confiáveis e escaláveis para garantir que seu site ou aplicativo esteja sempre online. Nossa infraestrutura avançada proporciona desempenho rápido, segurança robusta e suporte técnico excepcional....</p>
              <a href="#" class="btn-leia-mais">Leia Mais</a>
          </div>
          <div class="servico">
              <img src="https://www.ad2win.com/img/acquisition/acquisition_3.png" alt="Serviço 4">
              <h3>Desenvolvimento Web</h3>
              <p>Transforme sua presença online com nosso serviço de desenvolvimento web. Criamos sites intuitivos, responsivos e visualmente atraentes que não apenas impressionam os visitantes, mas também impulsionam sua marca. Desde sites informativos até plataformas de comércio eletrônico complexas, nossos desenvolvedores estão prontos para tornar sua visão digital uma realidade...</p>
              <a href="#" class="btn-leia-mais">Leia Mais</a>
          </div>
      </div>
  </div>
<!--Portfolio-->

<div class="testimonial">
  <div class="testimonial-content">
    <img src="img/ana.jpg" alt="Ana Oliveira - Empresária">
    <h3>Ana Oliveira - Empresária</h3>
    <p>"Contratar a TECHSERVICE_MZ foi uma das melhores decisões para o meu negócio. A equipe é altamente profissional, sempre pronta para resolver qualquer problema tecnológico. Desde a implementação de soluções inovadoras até o suporte técnico ágil, a TECHSERVICE_MZ superou minhas expectativas."</p>
  </div>
</div>

<div class="testimonial">
  <div class="testimonial-content">
    <img src="img/carlos.jpg" alt="Carlos Santos - Diretor de TI">
    <h3>Carlos Santos - Diretor de TI</h3>
    <p>"Estamos extremamente satisfeitos com os serviços da TECHSERVICE_MZ. A empresa demonstrou expertise em segurança cibernética, atualizações de software e integração de sistemas. A parceria com eles resultou em maior eficiência operacional e tranquilidade em relação à nossa infraestrutura tecnológica."</p>
  </div>
</div>

<div class="testimonial">
  <div class="testimonial-content">
    <img src="img/fernanda.jpg" alt="Fernanda Lima - Profissional Autônoma">
    <h3>Fernanda Lima - Profissional Autônoma</h3>
    <p>"A TECHSERVICE_MZ transformou a maneira como lido com a tecnologia no meu trabalho. A assistência personalizada e as soluções sob medida para as minhas necessidades tornaram minha rotina muito mais eficiente. Recomendo a TECHSERVICE_MZ a todos que buscam excelência em serviços de tecnologia."</p>
  </div>
</div>

<div class="testimonial">
  <div class="testimonial-content">
    <img src="img/jose.jpg" alt="José Silva - Gerente de Projetos">
    <h3>José Silva - Gerente de Projetos</h3>
    <p>"Trabalhar com a TECHSERVICE_MZ foi crucial para o sucesso de nossos projetos. Sua abordagem proativa, combinada com a experiência técnica, resultou em implementações suaves e sem interrupções. A equipe sempre se mostrou disposta a ir além para garantir a satisfação do cliente."</p>
  </div>
</div>

<div class="testimonial">
  <div class="testimonial-content">
    <img src="img/mariana.jpg" alt="Mariana Costa - Estudante Universitária">
    <h3>Mariana Costa - Estudante Universitária</h3>
    <p>"A TECHSERVICE_MZ oferece um suporte técnico excepcional, mesmo para clientes individuais como eu. Sua equipe resolveu rapidamente os problemas no meu laptop e proporcionou um atendimento amigável. É reconfortante saber que posso contar com eles para manter meus dispositivos em perfeito estado."</p>
  </div>
</div>
</div>

<!---->

  <!-- Rodapé -->
  <footer class="main_footer container">
      
      <div class="content">
          
          <div class="colfooter">
              
              <h4 class="titleFooter"> Menu</h4>
              
              <ul>
              
                <li><a href="#" title="Página Inícial">Home</a></li>
                <li><a href="#" title="Página Inícial">Serviços</a></li>
                <li><a href="#" title="Sobre a Empresa">Sobre </a></li>
                <li><a href="#" title="Galeria de Fotos">Portfolio</a></li>
                <li><a href="#" title="Fale Conosco">Contacto</a></li>
              
              </ul>
          
          </div>     
          
          <div class="colfooter">
             
            <h4 class="titleFooter"><i class="icon icon-mail-2"></i> Contato</h4>
            <p><i class="icon icon-mail"></i> techservicemz.com.mz</p>
            <p><i class="icon icon-phone"></i> +258 87 645 0559</p>
            <p><i class="icon icon-phone"></i> +258 84 648 8246</p>
            <p><i class="icon icon-whatsapp"></i> +258 84 406 0984</p>
         
          
          </div>
          
          <div class="colfooter">
           
            <h4 class="titleFooter"> Newsletter</h4>
            
            <a href="#" class="redesocial"><span> <i class="icon icon-facebook"></i>/@Techservice_mz</span></a>            
            <a href="#" class="redesocial"><span> <i class="icon icon-instagram"></i>/blog.@techservice_mz</span></a>            
          
        
        </form>
        
        </div>
        
        <div class="clear"></div>
    
    </div>
    
    <div class="main_footer_copy">
        
        <p class="m-b-footer"> TECHSERVICE_MZ- 2023, todos os direitos reservados.</p> 
        <p class="by"><i class="icon icon-heart-3"></i> Desenvolvido por: <a href="/CODIGO HTML/Hometech.html" title="techservice_mz">TECHSERVICE_MZ</a></p>
    
    </div>

</footer>

</body>

</html>
