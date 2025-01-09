let login=document.getElementById('login')

let name= localStorage.getItem("username");
  let pwd= localStorage.getItem("userpwd");
  let mail= localStorage.getItem("usermail");
   if((name) && (mail) && (pwd)){
   
    login.style.display = "none";
   }

   let logout=document.getElementById('profsub')
   logout.addEventListener('click',()=>{

    
  
    localStorage.clear(); 
  
  })