const increase=document.querySelector(".increase")
const decrease=document.querySelector(".decrease")
const reset=document.querySelector(".reset")
const count = document.querySelector(".count")
 
let i=+count.textContent
increase.addEventListener("click",function(){
        i++;
        count.textContent=i
        if(i>0) count.style.color="green"
       
})
decrease.addEventListener("click",function(){
        i--;
        count.textContent=i
        if(i<0) count.style.color="red"
       
})
reset.addEventListener("click",function(){
        i=0
        count.textContent=i
         count.style.color="black"
       
})




