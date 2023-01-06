const button = document.querySelectorAll("button")
const count = document.querySelector(".count")
let val=+count.textContent
// console.log(button)
button.forEach((x)=>{
       x.addEventListener("click",function(e){
             if(e.currentTarget.classList.contains("increase")) {
                val++;
                count.textContent=val
                count.style.color="green"
             }
             if(e.currentTarget.classList.contains("reset")) {
                count.textContent="0"
                count.style.color="black"
             }
             if(e.currentTarget.classList.contains("decrease")) {
                val--;
                count.textContent=val
                count.style.color="red"
             }
             
       })
})