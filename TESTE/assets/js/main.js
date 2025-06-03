// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
    const videos = [
      {
        thumb: "assets/img/thumbnail html.jfif",
        altThumb: "Thumb 1",
        perfil: "assets/img/perfil html.jfif",
        titulo: "🚀 Domine o HTML Básico em 10 Minutos!",
        canal: "DevMasterPro",
        views: "1,2M visualizações",
        tempo: "há 2 semanas",
        link: "https://youtu.be/5Hn58p-hYC0?si=h0G150nK0tcmUzUv"
      },
      {
        thumb: "assets/img/thumbnaill brasil.jfif",
        altThumb: "Thumb 2",
        perfil: "assets/img/perfil brasil.jfif",
        titulo: "😲 Feitos Inacreditáveis que Você Precisa Ver!",
        canal: "CurioCode",
        views: "980 mil visualizações",
        tempo: "há 1 mês",
        link: "https://youtu.be/Ckip3UyEt24?si=ml0BZ_IijuGp0kbc"
      },
      {
        thumb: "assets/img/thumbnaill corinthians.jfif",
        altThumb: "Thumb 3",
        perfil: "assets/img/perfil corinthians.jfif",
        titulo: "🏆 Corinthians Campeão: A Jornada Épica!",
        canal: "EsporteVídeo",
        views: "2,1M visualizações",
        tempo: "há 4 dias",
        link: "https://youtu.be/Me8n8PrC0DU?si=seHjLFALVTZ5IH9d"
      },
      {
        thumb: "assets/img/thumbanill obs.jfif",
        altThumb: "Thumb 4",
        perfil: "assets/img/perfil obs.jfif",
        titulo: "🎥 Como Configurar o OBS Para Lives Profissionais",
        canal: "LiveSetup",
        views: "3,4M visualizações",
        tempo: "há 10 horas",
        link: "https://youtu.be/5T6SDJaY1rk?si=ZN4mWzP90NkcMKiu"
      },
      {
        thumb: "assets/img/thumbanill ff.jfif",
        altThumb: "Thumb 5",
        perfil: "assets/img/perfil ff.jfif",
        titulo: "🔥 Pegando TOP 1 no Free Fire! Gameplay Insana",
        canal: "FrontGamerBR",
        views: "3,0M visualizações",
        tempo: "há 3 dias",
        link: "https://youtu.be/I-f-W7pQEaI?si=MfQpf0DfJ2A34SxY"
      },
      {
        thumb: "assets/img/thumbanill game.jfif",
        altThumb: "Thumb 6",
        perfil: "assets/img/perfil xbox.png",
        titulo: "🎮 Novo Jogo Exclusivo no Xbox! Gameplay e Review",
        canal: "XtremeGames",
        views: "1,1M visualizações",
        tempo: "há 12 horas",
        link: "https://youtu.be/h6NjXo_wXLg?si=LZTWQJXbH45Gz0LI"
      },
      {
        thumb: "assets/img/thumbnaill ia.jfif",
        altThumb: "Thumb 7",
        perfil: "assets/img/perfil IA.jfif",
        titulo: "🤖 Vídeo Incrível com Inteligência Artificial",
        canal: "AI Explora",
        views: "540 mil visualizações",
        tempo: "há 2 semanas",
        link: "https://youtu.be/7u1v04PkY5U?si=1cljuqS5yo3rX0AH"
      },
      {
        thumb: "assets/img/thubanill live.jfif",
        altThumb: "Thumb 8",
        perfil: "assets/img/perfil live.jfif",
        titulo: "🔴 Live até as 2H - Não Perca!",
        canal: "CodeTrack",
        views: "800 mil visualizações",
        tempo: "há 5 dias",
        link: "https://www.youtube.com/live/sP-9zsTXpts?si=2IfhYVzLzIb3-ojW"
      },
      {
        thumb: "assets/img/thumbanill canva.jfif",
        altThumb: "Thumb 9",
        perfil: "assets/img/perfil canva.jfif",
        titulo: "✨ Dicas Incríveis para Criar no Canva",
        canal: "DesignGuru",
        views: "1,5M visualizações",
        tempo: "há 3 semanas",
        link: "https://youtu.be/Th8h8REjOzA?si=exM4sO_IpVwJ64GF"
      },
    ];
  
    const videoList = document.getElementById("video-list");
  
    videos.forEach(video => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = `
        <div class="card border-0">
          <img src="${video.thumb}" class="card-img-top" alt="${video.altThumb}" />
          <div class="d-flex mt-2">
            <img src="${video.perfil}" class="rounded-circle me-2" width="36" height="36" />
            <div>
              <h6 class="mb-0">${video.titulo}</h6>
              <small class="text-muted">${video.canal}</small><br />
              <small class="text-muted">${video.views} • ${video.tempo}</small>
            </div>
          </div>
        </div>
      `;
      videoList.appendChild(col);
    });
  });
  
// Função para carregar os vídeos (nova)
function loadVideos(videoListElement, videos) {
  videoListElement.innerHTML = '';

  videos.forEach(video => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="card border-0">
        <img src="${video.thumb}" class="card-img-top" alt="${video.altThumb}" />
        <div class="d-flex mt-2">
          <img src="${video.perfil}" class="rounded-circle me-2" width="36" height="36" />
          <div>
            <h6 class="mb-0">${video.titulo}</h6>
            <small class="text-muted">${video.canal}</small><br />
            <small class="text-muted">${video.views} • ${video.tempo}</small>
          </div>
        </div>
      </div>
    `;
    videoListElement.appendChild(col);
  });
}

// Função para alternar o tema (modificada)
function toggleTheme() {
  document.body.classList.toggle('dark-theme');

  const isDark = document.body.classList.contains('dark-theme');
  const themeToggle = document.getElementById('btn-theme-toggle');

  if (themeToggle) {
    themeToggle.innerHTML = isDark
      ? '<i class="bi bi-moon-fill"></i> Escuro'
      : '<i class="bi bi-sun-fill"></i> Claro';
  }

  // Salvar preferência no localStorage
  localStorage.setItem('darkTheme', isDark);
}

// Função para marcar item ativo na sidebar (nova)
function setActiveSidebarItem() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const sidebarItems = document.querySelectorAll('.sidebar li');

  sidebarItems.forEach(item => {
    item.classList.remove('active');
    const link = item.querySelector('a');
    if (link && link.getAttribute('href') === currentPage) {
      item.classList.add('active');
    }
  });
}

// Funções para carregar vídeos específicos (novas)
function loadTrendingVideos() {
  const trendingVideos = [...videos].sort(() => 0.5 - Math.random()).slice(0, 4);
  const trendingList = document.getElementById('trending-videos');
  if (trendingList) {
    loadVideos(trendingList, trendingVideos);
  }
}

function loadSubscriptionVideos() {
  const subVideos = [...videos].sort(() => 0.5 - Math.random()).slice(0, 6);
  const subList = document.getElementById('subscription-videos');
  if (subList) {
    loadVideos(subList, subVideos);
  }
}

// Modificação no event listener do DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Carregar vídeos na página principal
  const videoList = document.getElementById("video-list");
  if (videoList) {
    loadVideos(videoList, videos);
  }

  // Carregar vídeos trending na página explore.html
  loadTrendingVideos();

  // Carregar vídeos de inscrições na página subscriptions.html
  loadSubscriptionVideos();

  // Configurar o tema
  const savedTheme = localStorage.getItem('darkTheme') === 'true';
  if (savedTheme) {
    document.body.classList.add('dark-theme');
  }

  // Configurar botão de tema
  const themeToggle = document.getElementById('btn-theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);

    // Atualizar texto do botão
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.innerHTML = isDark
      ? '<i class="bi bi-moon-fill"></i> Escuro'
      : '<i class="bi bi-sun-fill"></i> Claro';
  }

  // Marcar item ativo na sidebar
  setActiveSidebarItem();

  // Configurar comportamento do formulário de busca
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput');
      if (searchInput.value.trim()) {
        alert(`Você buscou por: ${searchInput.value}`);
        searchInput.value = '';
      }
    });
  }
});

document.getElementById("btn-theme-toggle").addEventListener("click", function () {
  const body = document.body;
  body.classList.toggle("dark-theme");

  const icon = this.querySelector("i");
  const label = this;

  if (body.classList.contains("dark-theme")) {
    icon.className = "bi bi-sun-fill";
    label.innerHTML = '<i class="bi bi-sun-fill"></i> Claro';
  } else {
    icon.className = "bi bi-moon-fill";
    label.innerHTML = '<i class="bi bi-moon-fill"></i> Escuro';
  }
});
