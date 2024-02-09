// let Branch = document.getElementById('Branch');
// const eyeicon = document.getElementById('eyeicon');


// function seepassword(){
//   if(Branch.type == "password"){
//     Branch.type = "text";
//     eyeicon.style.color = "#424242";
//   }else{
//     Branch.type = "password";
//     eyeicon.style.color = "#cfcccc";
//   }
// }
  


function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,

    };
  
    const serviceID = "service_vc3lslg";
    const templateID = "template_8z09nco";

  
      emailjs.send(serviceID, templateID, params)
      .then(
        res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";

          console.log(res);
          alert("Send successfully");
  
      })
      .catch(err=>console.log(err));
  
  }

