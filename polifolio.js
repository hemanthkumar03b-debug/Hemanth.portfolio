//================ LOADER =================//

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";
        loader.style.visibility="hidden";

    },2500);

});




//================ TYPING EFFECT =================//

const typingText=document.getElementById("typing");


const words=[

    "Full Stack Java Developer",
    "Frontend Developer",
    "Web Designer",
    "Software Engineer"

];


let wordIndex=0;
let charIndex=0;
let deleting=false;


function typingEffect(){


    let currentWord=words[wordIndex];


    if(!deleting){

        typingText.textContent=
        currentWord.substring(0,charIndex++);

        if(charIndex>currentWord.length){

            deleting=true;

            setTimeout(typingEffect,1200);

            return;

        }


    }

    else{


        typingText.textContent=
        currentWord.substring(0,charIndex--);


        if(charIndex<0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }


    }


    setTimeout(
        typingEffect,
        deleting ? 60 : 120
    );

}


typingEffect();





//================ MOBILE MENU =================//


const menuBtn=document.querySelector(".menu-btn");

const navLinks=document.querySelector(".nav-links");


menuBtn.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});



// Close menu after clicking link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });


});





//================ DARK / LIGHT MODE =================//


const themeBtn=document.querySelector(".theme-btn");

const themeIcon=document.querySelector(".theme-btn i");


let lightMode=false;



themeBtn.addEventListener("click",()=>{


    lightMode=!lightMode;


    document.body.classList.toggle(
        "light",
        lightMode
    );


    if(lightMode){


        themeIcon.classList.remove(
            "fa-moon"
        );


        themeIcon.classList.add(
            "fa-sun"
        );


    }

    else{


        themeIcon.classList.remove(
            "fa-sun"
        );


        themeIcon.classList.add(
            "fa-moon"
        );


    }


});





//================ SCROLL ACTIVE NAV =================//


const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(
    ".nav-links a"
);



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop=
        section.offsetTop-150;


        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href")
        ==
        "#"+current){


            link.classList.add("active");


        }


    });


});






//================ SCROLL REVEAL ANIMATION =================//


const revealElements=document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .stat-card, .experience-card, .detail-card, .timeline-content"
);



function reveal(){


    revealElements.forEach(element=>{


        const position=
        element.getBoundingClientRect()
        .top;


        const screenHeight=
        window.innerHeight;



        if(position < screenHeight-100){


            element.classList.add("show");


        }


    });


}


window.addEventListener(
    "scroll",
    reveal
);


reveal();






//================ PROJECT IMAGE HOVER =================//


const projectCards=
document.querySelectorAll(".project-card");


projectCards.forEach(card=>{


    card.addEventListener(
        "mouseenter",
        ()=>{

            card.style.transform=
            "translateY(-15px) scale(1.03)";

        }
    );


    card.addEventListener(
        "mouseleave",
        ()=>{

            card.style.transform="";

        }
    );


});





//================ COUNTER ANIMATION =================//


const counters=
document.querySelectorAll(
    ".stat-card h2, .achievement-card h1"
);



let started=false;



function startCounter(){


    if(started) return;


    const statsSection=
    document.querySelector(".stats");


    const top=
    statsSection.getBoundingClientRect().top;


    if(top < window.innerHeight-100){


        started=true;


        counters.forEach(counter=>{


            let target=
            parseInt(
                counter.innerText
            );


            let count=0;


            let interval=setInterval(()=>{


                count+=1;


                counter.innerText=
                count+"+";


                if(count>=target){


                    clearInterval(interval);


                    if(counter.innerText.includes("100")){

                        counter.innerText="100%";

                    }


                }


            },50);


        });


    }


}



window.addEventListener(
    "scroll",
    startCounter
);






//================ CONTACT FORM =================//


const contactForm=
document.querySelector(".contact-form form");



contactForm.addEventListener(
"submit",
(e)=>{


    e.preventDefault();


    alert(
        "Thank you for contacting me! I will reply soon."
    );


    contactForm.reset();


});






//================ BACK TO TOP =================//


const topBtn=
document.querySelector(".top-btn");



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY>400){


        topBtn.style.display="flex";


    }

    else{


        topBtn.style.display="none";


    }


});


topBtn.style.display="none";




