
    let input_task =document.getElementById("input_task");
    let list_task=document.getElementById("list_task");

function addtask() {
    if (input_task.value===""){
        alert('Enter a task');
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input_task.value;
        list_task.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);

            
    };
    input_task.value='';
    
}
    
list_task.addEventListener("click",function (e) {
    if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove()

    }
    
    
  },false)


let deletbtn=document.getElementById("lastbtn")


 
deletbtn.addEventListener("click",()=>{
    list_task.innerHTML="";
})



    
