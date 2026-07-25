/*=========================================
  STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/*=========================================
  SMOOTH SCROLLING
=========================================*/

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*=========================================
  ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.pageYOffset >= sectionTop &&
           window.pageYOffset < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/*=========================================
  MOBILE MENU
=========================================*/

// Future Ready

const navbar = document.querySelector(".nav-links");

const menuBtn = document.createElement("div");

menuBtn.className = "menu-btn";

menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

document.querySelector(".navbar").appendChild(menuBtn);

menuBtn.addEventListener("click",()=>{

    navbar.classList.toggle("show");

});

/*=========================================
  CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("show");

    });

});

/*=========================================
  BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".primary-btn,.nav-btn,.price-btn")
.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

circle.style.left=x+"px";

circle.style.top=y+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*=========================================
  ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target / 100;

const updateCounter = ()=>{

if(count < target){

count += speed;

counter.innerText = Math.ceil(count);

requestAnimationFrame(updateCounter);

}
else{

counter.innerText = target + "+";

}

}

updateCounter();

counterObserver.unobserve(counter);

}

});

},{
threshold:.6
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=========================================
  SCROLL REVEAL ANIMATION
=========================================*/

const revealElements = document.querySelectorAll(

".service-card,.portfolio-card,.testimonial-card,.price-card,.feature,.stat-card,.contact-form"

);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

revealElements.forEach(item=>{

item.classList.add("hidden");

revealObserver.observe(item);

});

/*=========================================
 HERO PARALLAX EFFECT
=========================================*/

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth/2 - e.pageX)/35;

const y = (window.innerHeight/2 - e.pageY)/35;

heroImage.style.transform =
`translate(${x}px,${y}px)`;

});

/*=========================================
 FLOATING SERVICE CARDS
=========================================*/

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card,index)=>{

card.style.animation =
`floatCard 4s ease-in-out ${index*0.3}s infinite`;

});

/*=========================================
  TESTIMONIAL AUTO SLIDER
=========================================*/

const testimonials = document.querySelectorAll(".testimonial-card");

let currentSlide = 0;

function testimonialSlider(){

testimonials.forEach(card=>{

card.classList.remove("active");

});

currentSlide++;

if(currentSlide >= testimonials.length){

currentSlide = 0;

}

testimonials[currentSlide].classList.add("active");

}

setInterval(testimonialSlider,3000);

/*=========================================
  PRICING CARD ACTIVE
=========================================*/

const pricingCards = document.querySelectorAll(".price-card");

pricingCards.forEach(card=>{

card.addEventListener("click",()=>{

pricingCards.forEach(item=>{

item.classList.remove("popular");

});

card.classList.add("popular");

});

});

/*=========================================
  PORTFOLIO IMAGE HOVER EFFECT
=========================================*/

const portfolioImages = document.querySelectorAll(".portfolio-card img");

portfolioImages.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.12) rotate(2deg)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1) rotate(0deg)";

});

});

/*=========================================
  PRICING BUTTON SUCCESS MESSAGE
=========================================*/

document.querySelectorAll(".price-btn").forEach(button=>{

button.addEventListener("click",(e)=>{

e.preventDefault();

const popup=document.createElement("div");

popup.className="popup";

popup.innerHTML=`

<i class="fa-solid fa-circle-check"></i>

<h3>Plan Selected!</h3>

<p>Thank you for choosing NorthPeak Digital.</p>

`;

document.body.appendChild(popup);

setTimeout(()=>{

popup.classList.add("showPopup");

},100);

setTimeout(()=>{

popup.classList.remove("showPopup");

setTimeout(()=>{

popup.remove();

},300);

},2500);

});

});

/*=========================================
 CONTACT FORM VALIDATION
=========================================*/

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
const message=document.getElementById("message").value.trim();

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name===""){

alert("Please enter your name.");
return;

}

if(!emailPattern.test(email)){

alert("Please enter a valid email.");
return;

}

if(phone.length<10){

alert("Please enter a valid phone number.");
return;

}

if(message===""){

alert("Please enter your message.");
return;

}

alert("🎉 Thank you! Your message has been sent.");

contactForm.reset();

});

}

/*=========================================
 NEWSLETTER
=========================================*/

const newsletter=document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

const email=this.querySelector("input").value;

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(emailPattern.test(email)){

alert("✅ Thank you for subscribing!");

this.reset();

}
else{

alert("Enter a valid email.");

}

});

}

/*=========================================
 SCROLL TO TOP BUTTON
=========================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add("topBtn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("showTop");

}
else{

topBtn.classList.remove("showTop");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================================
 PAGE LOADER
=========================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});

/*=========================================
 DARK MODE
=========================================*/

const darkBtn=document.createElement("div");

darkBtn.className="darkMode";

darkBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

darkBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}
else{

darkBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});

const title=document.querySelector(".hero-left h1");

if(title){

const text=title.innerHTML;

title.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,30);

}

}

typing();

}