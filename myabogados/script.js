var images = [
    './images/FondoAbogados3.jpeg',
    './images/FondoAbogados5.jpeg',
    './images/Image2.jpg'
];
  
var currentIndex = 0;
var backgroundImage = document.querySelector('.background-image');
  
function changeBackgroundImage() {
    backgroundImage.classList.add('fade-out');
    
    setTimeout(function() {
      backgroundImage.style.backgroundImage = 'url(' + images[currentIndex] + ')';
      currentIndex = (currentIndex + 1) % images.length;
      backgroundImage.classList.remove('fade-out');
    }, 500);
    
    setTimeout(changeBackgroundImage, 5000); // Cambia cada 5 segundos (5000 ms)
  }
  
changeBackgroundImage();

const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
const closeA = document.getElementById('closeA');
const closeB = document.getElementById('closeB');
const closeC = document.getElementById('closeC');
const closeD = document.getElementById('closeD');

navBtn.addEventListener('click', function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

closeA.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

closeB.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

closeC.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

closeD.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

function mostrarOcultarTexto(textoId, botonId) {
    var texto = document.getElementById(textoId);
    var boton = document.getElementById(botonId);
  
    if (texto.style.display === "" || texto.style.display === "none") {
      texto.style.display = "block";
      boton.innerHTML = "Ver menos";
    } else {
      texto.style.display = "none";
      boton.innerHTML = "Ver más";
    }
  }

  document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtén los valores de los campos de texto
    var text = document.getElementById('text').value;
    var textarea = document.getElementById('textarea').value;

    // Construye el enlace de WhatsApp con los mensajes
    var url = 'https://wa.me/+573105051279?text=' + encodeURIComponent('Vengo de la pagina y quiero hacer una consulta: ' + text + ',' + '\n' + textarea);

    // Abre el enlace de WhatsApp en una nueva pestaña
    window.open(url, '_blank');
});