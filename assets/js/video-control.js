// Carregar a API do YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Lista de IDs dos vídeos
var videos = [
    "yajJ_QVIKwU"
];

// Seleciona um ID de vídeo aleatório
var randomVideo = videos[Math.floor(Math.random() * videos.length)];

// Usando o ID do vídeo aleatório para algo, por exemplo, configurar um iframe
var iframe = document.getElementById("youtube-video");
iframe.src = "https://www.youtube.com/embed/" + randomVideo + "?autoplay=1&mute=1&enablejsapi=1";

// Variável para o player do YouTube e controle de clique inicial
var player;
var firstClick = true;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange // Adiciona evento para mudança de estado do player
        }
    });

    // Ajusta o estilo do vídeo baseado na configuração
    adjustVideoStyle(randomVideo);
}

// Função para ajustar o estilo do vídeo
function adjustVideoStyle(videoId) {
    var youtubeVideo = document.getElementById('youtube-video');
    
    // Detectar se é um dispositivo móvel
    var isMobile = window.innerWidth <= 768; // Ajuste este valor conforme necessário

    if (isMobile) {
        // Ajustes para dispositivos móveis
        switch (videoId) {
            case "Se3CcHCYVhI":
                youtubeVideo.style.left = "10%";
                youtubeVideo.style.transform = "translate(-50%, -50%) scale(1.2)";
                break;
            case "MkD_nglel-Y":
                youtubeVideo.style.left = "70%";
                youtubeVideo.style.transform = "translate(-50%, -50%) scale(1.3)";
                break;
            case "YEb3htZoPU4":
                youtubeVideo.style.left = "10%";
                youtubeVideo.style.transform = "translate(-50%, -50%) scale(1.1)";
                break;
            case "7YBnFURTjDE":
                youtubeVideo.style.left = "180%";
                youtubeVideo.style.transform = "translate(-50%, -50%) scale(1.4)";
                break;
            case "Xe4Cr0ZkyyA":
                youtubeVideo.style.left = "50%";
                youtubeVideo.style.transform = "translate(-50%, -50%) scale(1.1)";
                break;
            case "mN-pgnQ4H-s":
                youtubeVideo.style.left = "50%";
                youtubeVideo.style.transform = "translate(-50%, -50%) scale(1.5)";
                break;
            default:
                youtubeVideo.style.left = "50%";
                youtubeVideo.style.transform = "translate(-50%, -50%) scale(1)";
        }
    } else {
        // Ajustes para desktop
        switch (videoId) {
            case "Se3CcHCYVhI":
                youtubeVideo.style.left = "10%";
                youtubeVideo.style.transform = "translate(-10%, -50%) scale(1.2)";
                break;
            case "MkD_nglel-Y":
                youtubeVideo.style.left = "30%";
                youtubeVideo.style.transform = "translate(-30%, -50%) scale(1.2)";
                break;
            case "YEb3htZoPU4":
                youtubeVideo.style.left = "50%";
                youtubeVideo.style.transform = "translate(-50%, -50%) scale(1.1)";
                break;
            case "7YBnFURTjDE":
                youtubeVideo.style.left = "20%";
                youtubeVideo.style.transform = "translate(-20%, -50%) scale(1.3)";
                break;
            case "Xe4Cr0ZkyyA":
                youtubeVideo.style.left = "40%";
                youtubeVideo.style.transform = "translate(-40%, -50%) scale(1.1)";
                break;
            case "mN-pgnQ4H-s":
                youtubeVideo.style.left = "60%";
                youtubeVideo.style.transform = "translate(-60%, -50%) scale(1.4)";
                break;
            default:
                youtubeVideo.style.left = "50%";
                youtubeVideo.style.transform = "translate(-50%, -50%) scale(1)";
        }
    }
}

// Função para configurar o botão quando o player estiver pronto
function onPlayerReady(event) {
    document.getElementById('mute-toggle').addEventListener('click', toggleMute);
    document.getElementById('volume-slider').addEventListener('input', function() {
        setVolume(this.value);
    });
    document.getElementById('loading-screen').style.display = 'none'; // Oculta a tela de loading
}

// Função para alternar o mudo com troca de ícones Nerd Font
function toggleMute() {
    var buttonIcon = document.getElementById('mute-toggle').querySelector('.nerd-icon');
    
    if (firstClick) {
        // Primeiro clique ativa o som e troca para headphones
        player.unMute();
        buttonIcon.innerHTML = '&#xf02cb;'; // Headphones para som ativado
        firstClick = false;
    } else {
        if (player.isMuted()) {
            player.unMute();
            buttonIcon.innerHTML = '&#xf02cb;'; // Headphones para som ativado
        } else {
            player.mute();
            buttonIcon.innerHTML = '&#xf07ce;'; // Mute para som desativado
        }
    }
}

// Função para esconder a tela de loading quando o vídeo estiver tocando
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        document.getElementById('loading-screen').style.display = 'none'; // Oculta a tela de loading
    }
}

// Função para definir o volume com base na posição da barra
function setVolume(value) {
    player.setVolume(value); // Define o novo volume
}

function changeVolume(change) {
    var currentVolume = player.getVolume(); // Obtem o volume atual
    var newVolume = currentVolume + change;

    // Limitar o volume entre 0 e 100
    if (newVolume > 100) newVolume = 100;
    if (newVolume < 0) newVolume = 0;

    player.setVolume(newVolume); // Define o novo volume
}

function toggleVolumeControls() {
    var volumeDownBtn = document.getElementById('volume-down');
    var volumeUpBtn = document.getElementById('volume-up');

    // Alterna a classe 'hidden' e 'visible' nos botões de volume
    if (volumeDownBtn.classList.contains('hidden')) {
        volumeDownBtn.classList.remove('hidden');
        volumeUpBtn.classList.remove('hidden');

        // Usar um timeout para permitir que a classe 'hidden' seja removida antes de adicionar 'visible'
        setTimeout(function() {
            volumeDownBtn.classList.add('visible');
            volumeUpBtn.classList.add('visible');
        }, 10); // Delay pequeno para garantir que a classe 'hidden' seja removida
    } else {
        volumeDownBtn.classList.remove('visible');
        volumeUpBtn.classList.remove('visible');

        // Usar um timeout para permitir que a classe 'visible' seja removida antes de adicionar 'hidden'
        setTimeout(function() {
            volumeDownBtn.classList.add('hidden');
            volumeUpBtn.classList.add('hidden');
        }, 300); // O tempo deve ser igual ao da transição CSS
    }
}
