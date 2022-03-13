const btn=document.querySelectorAll("button");
const visible=document.querySelector("#screen");
let scrrenvalue="";
btn[0].inn
function fun()
{
    let btnText=this.innerHTML;
if(btnText=="X")
{
  btnText="*";
  scrrenvalue+=btnText;
  visible.value=scrrenvalue;
}
else if(btnText=="=")
{
    visible.value=eval(scrrenvalue);
    scrrenvalue="";
 

}
else if(btnText=="C")
{
    scrrenvalue=""
    visible.value=scrrenvalue;
}
else
{
    scrrenvalue+=btnText;
    visible.value=scrrenvalue;
}
  
}
for(let i=0;i<btn.length;i++)
{
    
    btn[i].addEventListener("click",fun);
}