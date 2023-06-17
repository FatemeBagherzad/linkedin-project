"use strict";

// //define variables
// let username = "Fateme Bagherzad";
// let profilePicture = "./assets/images/girl.png";
// let jobTitle = "Software Engineer";

// /*change username, user image,user job
// title with Java Script*/
// //------------------------------------
// let userProfileName = document.querySelectorAll(".data-username");
// for (const element of userProfileName) {
//   element.innerHTML = username;
// }

// let userProfilePicture = document.querySelectorAll(".data-profile-picture");
// for (const element of userProfilePicture) {
//   element.src = profilePicture;
// }

// let userJobTitle = document.querySelector(".data-jobtitle");
// userJobTitle.innerHTML = jobTitle;

//Functions and Event Handling Challenge
//--------------------------------------
//variable------------------------------
const userProfile = {
  userName: "Fateme Bagherzad",
  profilePicture: "./assets/images/girl.png",
  jobTitle: "Software Engineer",
};
//Function for User Info---------------
const loadUserProfile = function (Name, Picture, Job) {
  let userProfileName = document.querySelectorAll(".data-username");
  for (const element of userProfileName) {
    element.innerHTML = Name;
  }

  let userProfilePicture = document.querySelectorAll(".data-profile-picture");
  for (const element of userProfilePicture) {
    element.src = Picture;
  }

  let userJobTitle = document.querySelector(".data-jobtitle");
  userJobTitle.innerHTML = Job;
};
//Calling Function-------------------
loadUserProfile(
  userProfile.userName,
  userProfile.profilePicture,
  userProfile.jobTitle
);

//Create post------------------------
document.querySelector(".postClick").addEventListener("click", function () {
  document.querySelector(".data-posts__username").textContent =
    userProfile.userName;
  const post = document.querySelector(".data-post-text").value;
  document.querySelector(".data-posts__content").textContent = post;
  document.querySelector(".data-post-text").value = "";
});
