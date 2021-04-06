//javascript para navegacao bar effects no scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// javascript para responsividade de navegacao sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

//javascript para botao scrolltoTop
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript para scroll de volta ao topo no clicar no botao scrollToTop
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//javascript para revelar elementos do website no scroll
window.addEventListener("scroll", reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;


        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
    }
}

// Javascript para receber email

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    let name = document.querySelector(".nome").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".mensagem").value;

    saveContactInfo(name, email, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, message);
}

// Send Email Info
function sendEmail(name, email, message){
    Email.send({
        Host: "smtp.gmail.com", 
        Username: "contato.everaldofjr@gmail.com",
        Password: "everaldo30286139",
        To: "contato.everaldofjr@gmail.com",
        From: "contato.everaldofjr@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message)=> alert("Email enviado"))
}