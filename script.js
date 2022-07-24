function getPassword(){
    
    // We set a random password
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*( )_+><:{}[]'";
    let passwordLength = 16;
    let password = ' ';


    for(let i =0; i< passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    document.getElementById("password").value = password
}


function copy() {
    
    // Copy password button
    let copyText = document.getElementById("password");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copyText.value);

    // For the copied text
    let copied = document.getElementById("copied");
    copied.style.display = "flex"

    setTimeout(function(){
        copied.style.display = "none"
      }, 1000);
  
  }
