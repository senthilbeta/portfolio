// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click',activeLink));


const buttons = document.querySelectorAll('.button');
buttons.forEach(btn =>{
    btn.addEventListener('click',function(e){
        let x = e.clientX = e.target.offsetLeft;
        let y = e.clientX = e.target.offsettop;

        let ripple = document.createElement('h4');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        this.appendChild(ripple);

        setTimeout(()=>{
            ripple.remove()
        },1000);
    })
})




document.addEventListener('DOMContentLoaded', function () {
  const openPopupButton = document.querySelector('.button1');
  const popupOverlay = document.getElementById('popup1');
  const closeButton = popupOverlay.querySelector('.close');

  // Function to open popup and disable scrolling
  function openPopup() {
    popupOverlay.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    history.pushState({ popupOpen: true }, null, null); // Handle back button
  }

  // Function to close popup and re-enable scrolling
  function closePopup() {
    popupOverlay.classList.remove('active');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    if (history.state && history.state.popupOpen) {
      history.back();
    }
  }

  openPopupButton.addEventListener('click', function (event) {
    event.preventDefault();
    openPopup();
  });

  closeButton.addEventListener('click', function (event) {
    event.preventDefault();
    closePopup();
  });

  // Handle back button press
  window.addEventListener('popstate', function () {
    if (popupOverlay.classList.contains('active')) {
      closePopup();
    }
  });
});

//method to popup

document.addEventListener('DOMContentLoaded', function () {
  const openPopupButton1 = document.querySelector('.button0');
  const popupOverlay1 = document.getElementById('popup2');
  const closeButton1 = popupOverlay1.querySelector('.close1');

  // Function to open popup and disable scrolling
  function openPopup() {
    popupOverlay1.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    history.pushState({ popupOpen: true }, null, null); // Handle back button
  }

  // Function to close popup and re-enable scrolling
  function closePopup() {
    popupOverlay1.classList.remove('active');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    if (history.state && history.state.popupOpen) {
      history.back();
    }
  }

  openPopupButton1.addEventListener('click', function (event) {
    event.preventDefault();
    openPopup();
  });

  closeButton1.addEventListener('click', function (event) {
    event.preventDefault();
    closePopup();
  });

  // Handle back button press
  window.addEventListener('popstate', function () {
    if (popupOverlay1.classList.contains('active')) {
      closePopup();
    }
  });
});

  let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) *100;
    progress.style.height = progressHeight + "%";
} 

//popup3


document.addEventListener('DOMContentLoaded', function () {
  const openPopupButton2 = document.querySelector('.button0-1');
  const popupOverlay2 = document.getElementById('popup3');
  const closeButton2 = popupOverlay2.querySelector('.close2');

  // Function to open popup and disable scrolling
  function openPopup() {
    popupOverlay2.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    history.pushState({ popupOpen: true }, null, null); // Handle back button
  }

  // Function to close popup and re-enable scrolling
  function closePopup() {
    popupOverlay2.classList.remove('active');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    if (history.state && history.state.popupOpen) {
      history.back();
    }
  }

  openPopupButton2.addEventListener('click', function (event) {
    event.preventDefault();
    openPopup();
  });

  closeButton2.addEventListener('click', function (event) {
    event.preventDefault();
    closePopup();
  });

  // Handle back button press
  window.addEventListener('popstate', function () {
    if (popupOverlay2.classList.contains('active')) {
      closePopup();
    }
  });
});


let textElement = document.querySelector('.sname-for');
let textContent = textElement.textContent;
textElement.innerHTML = '';

for(let char of textContent){
  let span = document.createElement('span');
  span.textContent = char;
  textElement.appendChild(span);
}

let spans = textElement.querySelectorAll('span');
windows.addEventListener('scroll',() => {
let scrollDistance = window.scrollY;

  spans.forEach((span, index) => {
    if(scrollDistance <= (index + 1) * 10){
      span.classList.add('active');
    }else{
      span.classList.remove('active');
    }
  });
});

var userName = documment.getElementById('uname').values;
var email = document.getElementById('uemail').values;
var message = document.getElementById('umessage').values;

var messageBody = "Name" + userName + "<br/> Email" + email + "<br/> Message" + message; 
console.log(messageBody);
function emailsent(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "senthilnathans1730@gmail.com",
    Password : "5067403782D58CEC9903E693FF9CDCDB128C",
    To : 'senthilsasi59@gmail.com',
    From : "senthilnathans1730@gmail.com",
    Subject : "This is the subject",
    Body : messageBody,
}).then(
  message => alert(message)
);
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzWs1vP-QfPYMsEBbiav3jLw3wFBvtqCPuPAkvfUZCGtl0Y-yvpqYjgUae65Pp4WuhE/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => console.log('Success!',response))
  .catch(error => console.error('Error',error.message))
});