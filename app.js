const Huzi = document.getElementById("Huzi") ;
const Nana = document.getElementById("Nana")

function jump(){
    if(Huzi.classList !="jump") {
    Huzi.classList.add("jump");

    setTimeout(function (){
        Huzi.classList.remove("jump");
    },300);
   }
 }

 let isAlive = setInterval(function (){
     let HuziTop = parseInt(window.getComputedStyle(Huzi).getPropertyValue("top"));
     
     let NanaLeft = parseInt(window.getComputedStyle(Nana).getPropertyValue("left"));
     if (NanaLeft < 50 && NanaLeft > 0 && HuziTop >= 100 ) {
        console.log("collision");
        alert("pehlay Haat bandunga!!,Phir pair bandunga!! :D ")
    }

},10);


document.addEventListener("click",function(event){
    jump();
});
