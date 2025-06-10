class MobileNavbar{
    
    constructor(mobileMenu, navList, navLinks){
        
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        
        this.activeClass = "active";
        
        this.handleClick = this.handleClick.bind(this);
        
    }
    
    animateLinks(){
        
        this.navLinks.forEach((link, index) => {
            console.log(index / 7 + 0.3);
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = 'link 2s ease forwards 1s');
            
            
        });
    }
    
    animateClassroom() {
    const classroomLinks = document.querySelectorAll('.classroom a');
    classroomLinks.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `link 3s ease forwards ${index / 7 + 0.7}s`);
        });
    }
    
    
    
    
    


    
    
    
    
  

    
    handleClick(){
        
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
        
    }
    
    
    addClickEvent(){
        
        
        this.mobileMenu.addEventListener("click", this.handleClick); 
        
    }
    
    init(){
        
        if (this.mobileMenu){
            
            this.addClickEvent();
        }
        
        if(document.querySelector('.classroom a')){
            this.animateClassroom();
        }
        
        return this;
    }
    
    
}

const mobileNavbar = new MobileNavbar(

    ".mobile-menu",
    ".nav-list",
    ".nav-list li",


);

mobileNavbar.init()





const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)



function isChecked(checkbox) {
    var checkboxes = document.getElementsByName('day');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
        
    });
    
     if(document.getElementById("box1").checked){
        
        document.getElementById("message") .textContent = "31/05 às 16:00";
        
    }
    
    
    else{
        
        document.getElementById("message").textContent = "Sábado";
    }
    
    if(document.getElementById("box2").checked){
        
        document.getElementById("text").textContent = "Indisponível";
    }
    
    else{
        
        document.getElementById("text").textContent = "Outros dias";
    }
    
    
    
}

function selectAll(checkbox){
    
    if(document.getElementById("check_all").checked){
        
        document.getElementById("msg") .textContent = "Indisponível";
        
    }
    
    else{
        
        document.getElementById("msg").textContent = "Dia e horário";
    }
}



const box1 = document.getElementById('box1');
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');

if (box1 && mobileMenu && navList){
    
    box1.addEventListener('change', function(){
        
        const isChecked = this.checked;
        
        mobileMenu.classList.toggle('active', isChecked);
        box1.classList.toggle('hidden', isChecked);
        navList.classList.toggle('active', isChecked)
    });
}



















