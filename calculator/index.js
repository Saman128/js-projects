const allbutton=document.querySelectorAll(".keyboard .btn");

allbutton.forEach((btn)=>{
    btn.addEventListener("click" , (e)=>{
        const dis=document.querySelector(".display");
 if(e.currentTarget.value =='='){
    dis.innerHTML = eval(dis.innerHTML);
    
    
 }else if(e.currentTarget.value=='AC'){
    dis.innerHTML=value="";
 }
 else{
    dis.innerHTML+=e.currentTarget.value;
   
 }

    })
});