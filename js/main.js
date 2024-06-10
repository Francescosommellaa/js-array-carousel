// Array di immagini
var images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
// Indice dell'immagine attiva
var slideIndex = 0;

// Crea le immagini del carosello
for (var i = 0; i < images.length; i++) {
    // Crea un nuovo elemento img
    var img = document.createElement("img");
    // Imposta il percorso dell'immagine
    img.src = images[i];
    // Aggiungi la classe mySlides
    img.className = "mySlides";
    // Rendi la prima immagine visibile
    if (i == 0) img.classList.add("active");
    // Aggiungi l'immagine al carosello
    document.getElementById("carousel").appendChild(img);

    // Crea le miniature
    var thumb = document.createElement("img");
    // Imposta il percorso della miniatura
    thumb.src = images[i];
    // Aggiungi la classe thumbnail
    thumb.className = "thumbnail";
    // Rendi la prima miniatura attiva
    if (i == 0) thumb.classList.add("active");
    // Aggiungi la miniatura al container delle miniature
    document.getElementById("thumbnails").appendChild(thumb);
}

// Funzione per cambiare l'immagine attiva
function changeSlide(n) {
    // Ottieni tutte le immagini e le miniature
    var slides = document.getElementsByClassName("mySlides");
    var thumbnails = document.getElementsByClassName("thumbnail");
    // Calcola il nuovo indice dell'immagine attiva
    slideIndex = (slideIndex + n + images.length) % images.length;
    // Nascondi tutte le immagini e le miniature
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        thumbnails[i].classList.remove("active");
    }
    // Mostra l'immagine e la miniatura attive
    slides[slideIndex].classList.add("active");
    thumbnails[slideIndex].classList.add("active");
}

// Aggiungi gli event listener per i pulsanti Prev e Next
document.getElementById("prev").addEventListener("click", function() { changeSlide(-1); });
document.getElementById("next").addEventListener("click", function() { changeSlide(1); });
