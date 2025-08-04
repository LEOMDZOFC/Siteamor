const body = document.querySelector("body");

// Configurações do SweetAlert2 (popups bonitos)
const swalst = Swal.mixin({
  timer: 2300,
  allowOutsideClick: false,
  showConfirmButton: false,
  timerProgressBar: true,
  imageHeight: 90,
});

audio = new Audio('' + linkmp3.src); // Cria um áudio com link mp3
ftganti = 0;
fungsi = 0;
fungsiAwal = 0;
deffotostiker = fotostiker.src;

Content.style = "opacity:1;margin-top:35vh"; 

const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: '#FF0040',
  imageHeight: 80,
});

var sudahKlik = true;  // variável para controlar clique

document.getElementById("loveIn").onclick = function() {
  if (sudahKlik) {
    if(fungsiAwal == 0) {
      audio.play(); // toca áudio na primeira vez que clicar
      fungsiAwal = 1;
      loveIn.style = "transition:all .8s ease;transform:scale(15);opacity:0"; // anima botão loveIn
      wallpaper.style = "transform: scale(1.5);"; // aumenta wallpaper
      ket.style = "display:none"; // esconde texto (ket)
      setTimeout(initengahan, 300); // chama função initengahan depois de 300ms
      setTimeout(inipesan, 500); // chama função inipesan depois de 500ms
    }
  } else {
    sudahKlik = true; // marca que botão foi clicado
    document.getElementById('loveIn').innerHTML = '<a href="#" class="lovein">&#10084;</a>'; // redefine conteúdo do botão
  }
}

// Função para mostrar mensagem inicial
async function inipesan(){
  /*
  // Código comentado que pedia o nome do usuário via popup SweetAlert2, e iniciava a mensagem personalizada
  var { value: nama } = await swals.fire({
         title: 'Masukin Nama Kamu', input: 'text',
     });
     if(nama && nama.length < 11){
       window.nama = nama;
       vketikutama="Hai, " + nama + " ✨";
       mulainama();
     } else {
       await swals.fire('Ups!', 'Nama tidak boleh kosong atau lebih dari 10 karakter, ya!');
       inipesan();
  }*/
  vketikutama = "Alooo Kamu ✨";
  mulainama();
}

// Função para iniciar a animação da tela após o clique inicial
function initengahan(){
  loveIn.style = "display:none";
  ket.style = "display:none";
  Content.style = "opacity:1;margin-top:30px";
  bodyblur.style = "opacity:.7";
  wallpaper.style = "transform: scale(1.5);";
}

// Função para começar animação da foto/sticker
async function mulainama() {
  bodyblur.style = "opacity:.7";
  wallpaper.style = "transform: scale(1);";
  fotostiker.style = "display:inline-flex;";
  setTimeout(ftmuncul, 200);
  setTimeout(ketutama, 500);
}

// Função para trocar a foto/sticker conforme o valor de ftganti
function ftmuncul() {
  if (ftganti == 0) { fotostiker.src = deffotostiker; }
  else if (ftganti == 1) { fotostiker.src = fotostiker1.src; }
  else if (ftganti == 2) { fotostiker.src = fotostiker2.src; }
  else if (ftganti == 3) { fotostiker.src = fotostiker3.src; }
  else if (ftganti == 4) { fotostiker.src = fotostiker4.src; }
  else if (ftganti == 5) { fotostiker.src = fotostiker5.src; }
  else if (ftganti == 6) { fotostiker.src = fotostiker6.src; }
  else if (ftganti == 7) { fotostiker.src = fotostiker7.src; }
  fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
}

// Função para esconder a foto com animação
function fthilang() {
  fotostiker.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";
}

// Função para animar a foto (exemplo: rodar)
function jjfoto() {
  fotostiker.style.animation = "rto .8s infinite alternate";
}

// Função para mostrar bloco de texto e iniciar digitação
function bqmuncul() {
  bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";
  mulaiketik1();
  fungsi = 1;
}

// Função para esconder bloco de texto e mudar estilos
function bqhilang() {
  wallpaper.style = "transform: scale(2);";
  bodyblur.style = "opacity:.3";
  bq.style = "position:relative;transition:all .7s ease;";
}

// Função para começar animação de digitação da mensagem principal
function ketutama() {
  new TypeIt("#utama", {
    strings: ["" + vketikutama],
    startDelay: 50,
    speed: 30,
    waitUntilVisible: true,
    afterComplete: function() {
      utama.innerHTML = vketikutama;
      setTimeout(bqmuncul, 200);
    },
  }).go();
}

vketik1 = kalimat.innerHTML; // guarda texto original
kalimat.innerHTML = "";       // limpa para animar digitação
kalimatb.innerHTML = "";

function mulaiketik1(){
  new TypeIt("#kalimat", {
    strings: ["" + vketik1],
    startDelay: 400,
    speed: 20,
    cursor: false,
    deleteSpeed: 20,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      aktiopsL();
    },
  }).go();
}

opsLclick = 0;
opsLcheck = 0;
defopsL = opsL.innerHTML;

document.getElementById("bq").onclick = function() {
  if(opsLclick == 1){
    if(opsLcheck == 1){ setTimeout(aktipesan1,400); }
    if(opsLcheck == 2){ mulaiketik3(); }
    if(opsLcheck == 3){ mulaiketik4(); }
    if(opsLcheck == 4){ mulaiketik5(); }
    if(opsLcheck == 5){ ketutama2(); }
    otomatis();
    opsL.style.opacity = "0";
    opsLclick = 0;
  }
}

function aktiopsL(){
  opsL.innerHTML = defopsL;
  opsL.style.opacity = ".8";
  opsLclick = 1;
  opsLcheck += 1;
}

function gantiopsL(){
  opsL.innerHTML = "[ Klik beberapa LOVE-nya ]";
  opsL.style.opacity = ".8";
}

function otomatis(){
  kalimat.style = "opacity:0";
  setTimeout(otolanj,400);
}

function otolanj(){
  kalimat.style = "opacity:1";
}

function aktipesan1(){
  kalimat.innerHTML = pesan1.innerHTML;
  kolombaru.style = "position:relative;opacity:1;transform:scale(1);";
}

vketik4 = pesan4.innerHTML;
pesan4.innerHTML = "";

function aktipesan4(){
  kalimat.style = "display:none";
  wallpaper.style = "transform: scale(1.5);";
  kolombaru.style = "";
  kalimat.innerHTML = "";
  wallpaper.style = "transform: scale(1);";
  // fthilang(); ftganti=2; setTimeout(ftmuncul,300);
  new TypeIt("#pesan4", {
    strings: ["" + vketik4],
    startDelay: 1,
    speed: 35,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      pesan4.innerHTML = vketik4;
      setTimeout(aktipesan5,800);
    },
  }).go();
}

vketik5 = pesan5.innerHTML;
pesan5.innerHTML = "";

function aktipesan5(){
  pesan4.style = "display:none";
  wallpaper.style = "transform: scale(1.5);";
  fthilang();
  ftganti = 2;
  setTimeout(ftmuncul,300);
  new TypeIt("#pesan5", {
    strings: ["" + vketik5],
    startDelay: 1,
    speed: 35,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      pesan5.innerHTML = vketik5;
      setTimeout(aktipesan6,800);
    },
  }).go();
}

vketik6 = pesan6.innerHTML;
pesan6.innerHTML = "";

function aktipesan6(){
  pesan5.style = "display:none";
  wallpaper.style = "transform: scale(1);";
  fthilang();
  ftganti = 3;
  setTimeout(ftmuncul,300);
  new TypeIt("#pesan6", {
    strings: ["" + vketik6],
    startDelay: 1,
    speed: 35,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      pesan6.innerHTML = vketik6;
      setTimeout(aktipesan7,800);
    },
  }).go();
}

vketik7 = pesan7.innerHTML;
pesan7.innerHTML = "";

function aktipesan7(){
  pesan6.style = "display:none";
  wallpaper.style = "transform: scale(1.5);";
  fthilang();
  ftganti = 4;
  setTimeout(ftmuncul,300);
  new TypeIt("#pesan7", {
    strings: ["" + vketik7],
    startDelay: 1,
    speed: 35,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      pesan7.innerHTML = vketik7;
      setTimeout(aktipesan8,800);
    },
  }).go();
}

vketik8 = pesan8.innerHTML;
pesan8.innerHTML = "";

function aktipesan8(){
  pesan7.style = "display:none";
  wallpaper.style = "transform: scale(1);";
  fthilang();
  ftganti = 5;
  setTimeout(ftmuncul,300);
  new TypeIt("#pesan8", {
    strings: ["" + vketik8],
    startDelay: 1,
    speed: 35,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      pesan8.innerHTML = vketik8;
      setTimeout(aktipesan9,800);
    },
  }).go();
}

vketik9 = pesan9.innerHTML;
pesan9.innerHTML = "";

function aktipesan9(){
  pesan8.style = "display:none";
  wallpaper.style = "transform: scale(1.5);";
  fthilang();
  ftganti = 6;
  setTimeout(ftmuncul,300);
  new TypeIt("#pesan9", {
    strings: ["" + vketik9],
    startDelay: 1,
    speed: 35,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      pesan9.innerHTML = vketik9;
      setTimeout(aktipesan10,800);
    },
  }).go();
}

vketik10 = pesan10.innerHTML;
pesan10.innerHTML = "";

function aktipesan10(){
  pesan9.style = "display:none";
  wallpaper.style = "transform: scale(1);";
  fthilang();
  ftganti = 7;
  setTimeout(ftmuncul,300);
  new TypeIt("#pesan10", {
    strings: ["" + vketik10],
    startDelay: 1,
    speed: 35,
    cursor: true,
    waitUntilVisible: true,
    lifelike: true,
    afterComplete: function(){
      pesan10.innerHTML = vketik10;
      setTimeout(akhir, 800);
    },
  }).go();
}

function akhir(){
  wallpaper.style = "transform: scale(1)";
  fthilang();
  ftganti = 0;
  setTimeout(ftmuncul,300);
  bq.style = "position:relative;opacity:0;visibility:hidden;transform: scale(1);margin-top:0";
  ket.style = "display:none";
}
