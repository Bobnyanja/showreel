


// Get the modal
var modal = document.getElementById("myModal");
var content = document.getElementsByClassName("actual-cont")[0];

// Get the button that opens the modal
var accelerators = document.getElementById("accelerators");
var educate = document.getElementById("educate");
var sanergy = document.getElementById("sanergy");
var fresha = document.getElementById("fresha");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
accelerators.onclick = function() {
  modal.style.display = "block";
  content.innerHTML='<div class maintain><iframe class="responsive-iframe" src="https://player.vimeo.com/video/409913186" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>';
}
educate.onclick = function() {
  modal.style.display = "block";
  content.innerHTML='<div class maintain><iframe class="responsive-iframe" src="https://player.vimeo.com/video/410055941" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>';
}
sanergy.onclick = function() {
  modal.style.display = "block";
  content.innerHTML='<div class maintain><iframe class="responsive-iframe" src="https://player.vimeo.com/video/410032080" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>';
}
fresha.onclick = function() {
  modal.style.display = "block";
  content.innerHTML='<div class maintain><iframe class="responsive-iframe" src="https://player.vimeo.com/video/103506064" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>';
}




// When the user clicks on <span> (x), close the modal
function myfoo(){
  modal.style.display = "none";
  $("iframe").each(function() { 
    var src= $(this).attr('src');
    $(this).attr('src',src);  
});
}
// When the user clicks anywhere outside of the modal, close it
