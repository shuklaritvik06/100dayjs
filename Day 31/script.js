const passwdInput = document.getElementById("passwd");
let state = true;
const progressBar = document.getElementById("progress");
const eyeIcon = document.getElementById("eye");
const iconOne = document.getElementById("icon-1");
const iconTwo = document.getElementById("icon-2");
const iconThree = document.getElementById("icon-3");
const iconFourth = document.getElementById("icon-4");
passwdInput.addEventListener("keyup",()=>{

});
eyeIcon.addEventListener("click",()=>{
   if(state){
       eyeIcon.classList.replace("bi-eye","bi-eye-slash");
       state = false;
   }else{
       eyeIcon.classList.replace("bi-eye-slash","bi-eye");
       state = false;
   }
});