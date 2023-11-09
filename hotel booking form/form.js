function set(){
    var x=document.querySelector(".room");
    var y=document.querySelector(".noom");

    var D=document.querySelector(".value");
    var datevalue=D.value;
    // console.log(datevalue);

    var advance1=document.querySelector(".advance1");
    var adv1=advance1.value;
    var plus=1000*adv1;
    var advance=document.querySelector(".advance");
    var adv=advance.value;
    var value1=x.value;
    var value2=y.value;
    var SUM=((parseInt(value1)+parseInt(value2))*datevalue)+plus;
    var sub=adv;
    var rem=SUM-sub;
    var disp=document.querySelector(".balance2");
    var disp1=document.querySelector(".balance");
    disp.innerHTML=SUM;
    var name="rem...";
    disp1.innerHTML=rem+name;
   



}
const btn=document.querySelector(".btn");
btn.addEventListener("click",button);
function button(){
    alert("Booking Successfuly......");
}
