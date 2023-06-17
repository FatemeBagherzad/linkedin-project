"use strict";

//define variables
let username = "Fateme Bagherzad";
let profilePicture = "./assets/images/girl.png";
let jobTitle = "Software Engineer";

/*change username, user image,user job 
title with Java Script*/
//------------------------------------
let userProfileName = document.querySelectorAll(".data-username");
for (const element of userProfileName) {
  element.innerHTML = username;
}

let userProfilePicture = document.querySelectorAll(".data-profile-picture");
for (const element of userProfilePicture) {
  element.src = profilePicture;
}

let userJobTitle = document.querySelector(".data-jobtitle");
userJobTitle.innerHTML = jobTitle;
