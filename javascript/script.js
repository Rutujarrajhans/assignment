let logo=document.querySelector("#logo");
let aboutlink=document.querySelector("#aboutLink");
let skillsLink=document.querySelector("#skillsLink");
let projectsLink=document.querySelector("#projectsLink");
let contactLink=document.querySelector("#contactLink");
let main=document.querySelector("#main");
let about=document.querySelector("#about");
let skills=document.querySelector("#skill");
let contact=document.querySelector("#contact");
let project=document.querySelector("#project");
let mainH1=document.querySelector("#main h1");
let mainH12=document.querySelector("#main h1:nth-child(2)");
let mainPara=document.querySelector("#main p");
let mainanc=document.querySelector("#main a");
let aboutH1=document.querySelector("#about h1");
let aboutpara=document.querySelector("#about p");
let aboutanc=document.querySelector("#about a");
let skillsH1=document.querySelector("#skill h1");
let skillspara=document.querySelector("#skill p");

let skillscard=document.querySelector("#skill .skills-card");
let projectH1=document.querySelector("#project h1");
let projectpara=document.querySelector("#project p");
let projectcard=document.querySelector("#project .project-card");
let contactH1=document.querySelector("#contact h1");
let contactform=document.querySelector("#contactform");
let contactanc=document.querySelector("#contact a");
function handle(opacone,opac02,opac01,opac03,opac04){
    opacone.style.opacity=1;
    opac01.style.opacity=0;
    opac02.style.opacity=0;
    opac03.style.opacity=0;
    opac04.style.opacity=0;

}
function handlea(){
    for(let i=0;i<arguments.length;i++){
        arguments[i].classList.remove('main-animation')
        arguments[i].offsetwidth;
        arguments[i].classList.add('main-animation')
    }
}
logo.addEventListener('click',function(){
    handle(main,about,skills,contact,project);
    handlea(mainH1,mainH12,mainPara,mainanc);
});
aboutLink.addEventListener('click',function(){
    handle(about,main,skills,contact,project);
    handlea(aboutH1,aboutpara,aboutanc);
});
skillsLink.addEventListener('click',function(){
    handle(skills,main,about,contact,project);
    handlea(skillsH1,skillspara,skillscard);
});
contactLink.addEventListener('click',function(){
    handle(contact,main,about,skills,project);
    handlea(contactH1,contactform,contactanc);
});
projectsLink.addEventListener('click',function(){
    handle(project,main,about,contact,skills);
    handlea(projectH1,projectpara,projectcard);
});


let modal=document.querySelector('.modal')
let trigger=document.querySelector('.open-modal')
let closebutt=document.querySelector('.close-modal')
function toggle(){
    modal.classList.toggle("show-modal");

}
function windowOnClick(e){
    if(e.target === modal){
        togglemodal()
    }
}
trigger.addEventListener('click',togglemodal)
closebutt.addEventListener('click',togglemodal)
window.addEventListener('click',windowOnClick)
