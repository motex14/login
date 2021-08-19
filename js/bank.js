document.getElementById('login-submit').addEventListener
('click',function(){
    const emailfield =document.getElementById('user-email');
    const useremail =emailfield.value;
  
    
    
    // get user password
   const passwordfield =document.getElementById('user-password');
   const userPassword =passwordfield.value;
   if(useremail=='fakmida@gmail.com' &&userPassword=='248052'){
       window.location.href='banking.html'

    
   }
   else if(useremail=='morad@gmail.com' &&userPassword=='248052'){
       window.location.href='morad.html'
   }
   else if(useremail=='naim@gmail.com' &&userPassword=='248052'){
    window.location.href='naim.html'
}
else if(useremail=='choikko@gmail.com' &&userPassword=='248052'){
    window.location.href='choikko.html'
}
    
    
        
    })


