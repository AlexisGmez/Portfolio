"use strict";
const nav = document.querySelector(".nav__content");
const navList = document.querySelectorAll(".item__list");
const main = document.querySelector(".main").childNodes;


//funcion para cerrar el nav
const closeNav = (list,nav)=>{
    list.forEach(element => {
        element.addEventListener("click",e=>{
            const tamano = document.body.clientWidth;
            //condiciona el tamano de mi break point
            if (tamano<768) {
                nav.classList.toggle("nav__content--active");
            
                if (nav.classList.contains("nav__content--active")) {
                    e.target.classList.remove("bx-menu");
                    e.target.classList.add("bx-x");  
                }else{
                    e.target.classList.add("bx-menu");
                    e.target.classList.remove("bx-x");  
                }
            }
            
        });
    });
};

closeNav(navList,nav);


// observer
const verifyVisivility =(entries)=>{
    const navList = document.querySelectorAll(".item__list--ancle");
    for (const entry of entries) {
        if(entry.isIntersecting){
            navList.forEach(item => {
                
                item.getAttribute('href').slice(1).includes(entry.target.id) ? item.classList.add("activo") : item.classList.remove("activo");
                let coord = document.querySelector(".header__container").getBoundingClientRect();

                console.log(entry.target)
                
               
            });
        }
    }
}

const observer = new IntersectionObserver(verifyVisivility);
main.forEach((item,id)=>{
    if (main[id].id) observer.observe(main[id]);
});
