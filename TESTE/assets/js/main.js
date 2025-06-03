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
      },
      {
        thumb: "assets/img/thumbnaill brasil.jfif",
        altThumb: "Thumb 2",
        perfil: "assets/img/perfil brasil.jfif",
        titulo: "😲 Feitos Inacreditáveis que Você Precisa Ver!",
        canal: "CurioCode",
        views: "980 mil visualizações",
        tempo: "há 1 mês",
      },
      {
        thumb: "assets/img/thumbnaill corinthians.jfif",
        altThumb: "Thumb 3",
        perfil: "assets/img/perfil corinthians.jfif",
        titulo: "🏆 Corinthians Campeão: A Jornada Épica!",
        canal: "EsporteVídeo",
        views: "2,1M visualizações",
        tempo: "há 4 dias",
      },
      {
        thumb: "assets/img/thumbanill obs.jfif",
        altThumb: "Thumb 4",
        perfil: "assets/img/perfil obs.jfif",
        titulo: "🎥 Como Configurar o OBS Para Lives Profissionais",
        canal: "LiveSetup",
        views: "3,4M visualizações",
        tempo: "há 10 horas",
      },
      {
        thumb: "assets/img/thumbanill ff.jfif",
        altThumb: "Thumb 5",
        perfil: "assets/img/perfil ff.jfif",
        titulo: "🔥 Pegando TOP 1 no Free Fire! Gameplay Insana",
        canal: "FrontGamerBR",
        views: "3,0M visualizações",
        tempo: "há 3 dias",
      },
      {
        thumb: "assets/img/thumbanill game.jfif",
        altThumb: "Thumb 6",
        perfil: "assets/img/perfil xbox.png",
        titulo: "🎮 Novo Jogo Exclusivo no Xbox! Gameplay e Review",
        canal: "XtremeGames",
        views: "1,1M visualizações",
        tempo: "há 12 horas",
      },
      {
        thumb: "assets/img/thumbnaill ia.jfif",
        altThumb: "Thumb 7",
        perfil: "assets/img/perfil IA.jfif",
        titulo: "🤖 Vídeo Incrível com Inteligência Artificial",
        canal: "AI Explora",
        views: "540 mil visualizações",
        tempo: "há 2 semanas",
      },
      {
        thumb: "assets/img/thubanill live.jfif",
        altThumb: "Thumb 8",
        perfil: "assets/img/perfil live.jfif",
        titulo: "🔴 Live até as 2H - Não Perca!",
        canal: "CodeTrack",
        views: "800 mil visualizações",
        tempo: "há 5 dias",
      },
      {
        thumb: "assets/img/thumbanill canva.jfif",
        altThumb: "Thumb 9",
        perfil: "assets/img/perfil canva.jfif",
        titulo: "✨ Dicas Incríveis para Criar no Canva",
        canal: "DesignGuru",
        views: "1,5M visualizações",
        tempo: "há 3 semanas",
      },
      {
        thumb: "assets/img/thumbanill tutorial.jfif",
        altThumb: "Thumb 10",
        perfil: "assets/img/perfil thumbnaill tutorial.jfif",
        titulo: "📚 Tutorial Completo para Iniciantes",
        canal: "EducaMais",
        views: "2,2M visualizações",
        tempo: "há 1 mês",
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
  