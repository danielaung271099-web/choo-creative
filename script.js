```javascript
// =========================
// MOBILE MENU
// =========================

function toggleMenu() {
    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");
}


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your design request has been received."
    );

    contactForm.reset();

});
```
