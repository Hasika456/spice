function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="food_room.html";
    
}

if(keyPressed == '13'){
    addUser();
    console.log("Enter key pressed to log in");
}