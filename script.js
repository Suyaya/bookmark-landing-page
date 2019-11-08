let HTMLHamburgerIcon = document.querySelector('#hamburger');
let HTMLNav = document.querySelector('div.full-nav');
let HTMLNavClose = document.querySelector('#close');

// show the nav page
HTMLHamburgerIcon.addEventListener('click',showNav);
function showNav(){
        HTMLNav.className = 'full-nav shown';
}

// close the nav page
HTMLNavClose.addEventListener('click',closeNav);
function closeNav(){
    HTMLNav.className = 'full-nav hidden';
}

//show the detail(simple, speedy, easy) tabs

let HTMLSimpleTab = document.querySelector("ul li a.simple");
let HTMLSpeedyTab = document.querySelector("ul li a.speedy");
let HTMLEasyTab = document.querySelector("ul li a.easy");

let HTMLSimpleDisplay = document.querySelector('article.simple');
let HTMLSpeedyDisplay = document.querySelector('article.speedy');
let HTMLEasyDisplay = document.querySelector('article.easy');

HTMLSimpleTab.addEventListener('click',function(){
    HTMLSimpleDisplay.className = 'simple shown';
    HTMLSpeedyDisplay.className =  'speedy hidden';
    HTMLEasyDisplay.className = 'easy hidden';
});
HTMLSpeedyTab.addEventListener('click',function(){
    HTMLSimpleDisplay.className = 'simple hidden';
    HTMLSpeedyDisplay.className =  'speedy shown';
    HTMLEasyDisplay.className = 'easy hidden';
});
HTMLEasyTab.addEventListener('click',function(){
    HTMLSimpleDisplay.className = 'simple hidden';
    HTMLSpeedyDisplay.className =  'speedy hidden';
    HTMLEasyDisplay.className = 'easy shown';
});

// show and close answers

let HTMLSpanList = document.querySelectorAll('span.arrow-down');
let HTMLAnswers = document.querySelectorAll('div.answer');

for(let i=0; i<HTMLSpanList.length; i++){
    let HTMLSpanItem = HTMLSpanList[i];
    HTMLSpanItem.addEventListener('click',function(){
        if(HTMLAnswers[i].classList.contains('hidden')){
            HTMLAnswers[i].classList.remove('hidden');
        }else{
            HTMLAnswers[i].classList.add('hidden');
        }
        
    })
}

// form email validation
var HTMLForm = document.querySelector('form');
var HTMLEmail = document.querySelector('input');
var HTMLSpace = document.querySelector('form div.hidden');
var HTMLError = document.querySelector('form p.hidden');

HTMLForm.addEventListener('submit',function(e){
    
    if(!HTMLEmail.validity.valid){
        e.preventDefault();
        HTMLEmail.style.backgroundImage = "url(images/icon-error.svg)";
        HTMLEmail.style.backgroundPosition ="right 5% top 35%";
        HTMLEmail.style.backgroundRepeat = "no-repeat";
        HTMLError.className = 'error';
        HTMLSpace.className = 'space';
    };
})