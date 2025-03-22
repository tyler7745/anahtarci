// Telefon Arama Fonksiyonu
function showContact() {
    const phoneNumber = "+90553 848 9089";  // Buraya gerçek telefon numaranızı yazın
    window.location.href = "tel:" + phoneNumber;
}

// Sayfa Yüklenince Scroll Animasyonu
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".service, .about, .contact");
    let windowHeight = window.innerHeight;

    function checkPosition() {
        elements.forEach((el) => {
            let positionFromTop = el.getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkPosition);
    checkPosition();
});

// Menüde Aktif Linki Vurgula
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = "#fdd835";
        }
    });
});
