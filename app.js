window.onload = function(){

    let tooltip = document.querySelector(".tooltip");
    let triangle = document.querySelector(".triangle");
    let share = document.querySelector(".share");

   share.addEventListener('click', function(){

     tooltip.classList.toggle('active');
     triangle.classList.toggle('active');

   });

}