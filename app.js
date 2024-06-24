const ImageElement = document.querySelector(".image-container");

const prevEle = document.getElementById("prev");
const nextEle =document.getElementById("next");

let x=0;
let timer;

function updateGallery(){
    ImageElement.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(()=>{
        x = x-45;
        updateGallery();
    },4000)
}

updateGallery();

nextEle.addEventListener("click",()=>{
    x=x+45;
    clearTimeout(timer);
    updateGallery();
})

prevEle.addEventListener("click",()=>{
    x=x-45;
    clearTimeout(timer);
    updateGallery();
});
