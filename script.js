window.addEventListener("DOMContentLoaded",outputloaded)
let submit=document.getElementById("submit");
// localStorage.clear()
submit.addEventListener("click",function(e){
    e.preventDefault()
let uservalue=document.getElementById("user-value").value.trim()
  if(!uservalue=="")
  {
    autoloaded(uservalue)
  outputloaded();
document.getElementById("user-value").value=" "

  }
  else{
    alert("Please enter the data")
    document.getElementById("user-value").focus()
  }
});

function autoloaded(data){
  let getdata=JSON.parse(localStorage.getItem("UserData"))||[];
  getdata.push(data)
  localStorage.setItem("UserData",JSON.stringify(getdata))
}

function outputloaded(){
  // let uservalue=document.getElementById("user-value").value
  let output=document.getElementById("output")
  output.innerHTML=" "
  let getdata=JSON.parse(localStorage.getItem("UserData"))||[];
  getdata.forEach((element,index) => {
    let child=" ";
    child+=`
    <ul class="user-list">
      <li>${element}</li>
      <div class="btn-e-d">
        <button class="editbtn" data-index="${index}">Edit</button>
        <button class="deletebtn" data-index="${index}">Delete</button>
      </div>
    </ul>`
    output.innerHTML+=child
  });
  
  let editdata=document.querySelectorAll(".editbtn")
  editdata.forEach((iteam)=>{
iteam.addEventListener("click",Edit)
  });
let deletedata=document.querySelectorAll(".deletebtn")
deletedata.forEach((iteam)=>{
iteam.addEventListener("click",Delete)
  });

}

function Edit(){
  let indexNo=this.dataset.index
  let getdata=JSON.parse(localStorage.getItem("UserData"))||[];
  let newdata=prompt("Are you need to update",getdata[indexNo])
  if(!newdata==""){
    getdata[indexNo]=newdata
  localStorage.setItem("UserData",JSON.stringify(getdata))
  console.log("hii")
  outputloaded();  
}

}
function Delete(){
  if(confirm("Are you need to delete")){
  let indexNo=this.dataset.index
  let getdata=JSON.parse(localStorage.getItem("UserData"))||[];
  getdata.splice(indexNo,1)
  localStorage.setItem("UserData",JSON.stringify(getdata))
  outputloaded()
  }
}
