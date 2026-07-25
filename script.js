// ==============================
// NAVBAR AO ROLAR
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

// ==============================
// REVELAR ELEMENTOS
// ==============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".fade-up,.fade-left,.fade-right").forEach(el=>{

    observer.observe(el);

});

// ==============================
// DESTACAR MENU
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// ==============================
// SCROLL SUAVE
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ==============================
// EFEITO NOS CARDS
// ==============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,49,49,.18),
        #111 70%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#111";

    });

});

// ==============================
// ANIMAÇÃO DAS BARRAS
// ==============================

const bars=document.querySelectorAll(".fill");

const skills=document.querySelector("#skills");

let played=false;

window.addEventListener("scroll",()=>{

    const trigger=skills.offsetTop-400;

    if(window.scrollY>trigger && !played){

        played=true;

        bars.forEach(bar=>{

            const width=bar.style.width || getComputedStyle(bar).width;

            bar.style.width="0";

            setTimeout(()=>{

                if(bar.classList.contains("premiere")){

                    bar.style.width="95%";

                }

                if(bar.classList.contains("ae")){

                    bar.style.width="88%";

                }

                if(bar.classList.contains("ps")){

                    bar.style.width="82%";

                }

            },300);

        });

    }

});

// ==============================
// EFEITO DIGITAÇÃO
// ==============================

const title=document.querySelector(".hero-text h1");

const original=title.innerText;

title.innerHTML="";

let i=0;

function type(){

    if(i<original.length){

        title.innerHTML+=original.charAt(i);

        i++;

        setTimeout(type,35);

    }

}

window.addEventListener("load",()=>{

    setTimeout(type,500);

});

// ==============================
// PARALLAX DA IMAGEM
// ==============================

const image=document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.pageX)/45;

    const y=(window.innerHeight/2-e.pageY)/45;

    image.style.transform=`translate(${x}px,${y}px)`;

});

// ==============================
// ANO AUTOMÁTICO
// ==============================

const footer=document.querySelector("footer p");

footer.innerHTML=`© ${new Date().getFullYear()} Bruno Carvalho. Todos os direitos reservados.`;