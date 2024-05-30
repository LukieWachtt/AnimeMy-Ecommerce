function showicon() {
  const searchBar = document.getElementById("searchbar").value;
  const cancel = document.getElementById("clear");
  if(searchBar.length <=0) document.body.classList.remove("active");
  else document.body.classList.add("active")

  cancel.addEventListener("click",() => {
    document.getElementById("searchbar").value = "";
    document.body.classList.remove("active");
  })
};


function typingPassword() {
  const password = document.getElementById("password").value;
  let displayImage = document.getElementById("image1");
  if(password.length <=0){
    displayImage.src = '/img/AnimMy LOGO.png'
  } 
  else {
    displayImage.src = '/img/mini logo AnimMy.ico'
  }


  
};