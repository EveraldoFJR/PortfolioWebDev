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


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKcbU7o3ZbZQJkc2chux0MDoK-Uyu8ixw",
    authDomain: "test-form-9a612.firebaseapp.com",
    projectId: "test-form-9a612",
    storageBucket: "test-form-9a612.appspot.com",
    messagingSenderId: "499176560092",
    appId: "1:499176560092:web:09e959e7bac55b5dbb6b19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference contactInfo Collections
let contactInfo = firebase.database().ref("infos");

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
//Safe Infos to Firebase
function saveContactInfo(name, email, message){
    let newContactInfo = contactInfo.push();
    
    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    });

    retrieveInfos();
}

//Retrieve Infos
function retrieveInfos(){
    let ref = firebase.database().ref("infos");
    ref.on("value", gotData);
}
function gotData(data) {
    let info = data.val();
    let keys = Object.keys(info);

    for(let i = 0; i < keys.length; i++){
        let infoData = keys[i]
        let name = info[infoData].name
        let email = info[infoData].email
        let message = info[infoData].message
        console.log(name, email, message);
    }
}


// Send Email Info
function sendEmail(name, email, message){
    Email.send({
        Host: "smtp.gmail.com", 
        Username: "contato.jrfeveraldo@gmail.com",
        Password: "juninho30286139",
        To: "contato.jrfeveraldo@gmail.com",
        From: `${email}`,
        Subject: `${name} enviou-lhe uma mensagem`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message)=> alert("Email enviado"))
}