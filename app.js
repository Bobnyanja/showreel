// Get the modal
var modal = document.getElementById("myModal");
var content = document.getElementsByClassName("actual-cont")[0];

// Get the button that opens the modal
var accelerators = document.getElementById("accelerators");
var educate = document.getElementById("educate");
var sanergy = document.getElementById("sanergy");
var commercial = document.getElementById("commercial");
var video = document.getElementById("playerly");
var drop = document.getElementById("drop");
var pauser = document.getElementById("pauseMontage");
var loader = document.getElementById("loader");
var header = document.getElementById("headerInfo");

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
commercial.onclick = function() {
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

function expander() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var x = window.innerWidth;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
    if (x <=760) { // If media query matches
      document.getElementById("headerInfo").style.width = "90%";
      document.getElementById("headerInfo").style.top = "220px";
      document.getElementById("headerInfo").style.height = "400px";
   
    } else {
      document.getElementById("headerInfo").style.width = "430px";
    document.getElementById("headerInfo").style.height = "520px";
    document.getElementById("headerInfo").style.top = "240px";
  
    }
    
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Collapse"; 
    moreText.style.display = "inline";
    if (x <=760) { // If media query matches
      document.getElementById("headerInfo").style.width = "90%";
      document.getElementById("headerInfo").style.height = "600px";
      document.getElementById("headerInfo").style.top = "40px";
    } else {
      document.getElementById("headerInfo").style.width = "560px";
      document.getElementById("headerInfo").style.height = "800px";
    }
    
   
  }
}


    var checkInterval  = 200.0 // check every 50 ms (do not use lower values)
    var lastPlayPos    = 0
    var currentPlayPos = 0
    var bufferingDetected = false
  
    
    // setInterval(checkBuffering, checkInterval)
    // function checkBuffering() {
    //     currentPlayPos = video.currentTime
    
     
    //     var offset = (checkInterval - 20) / 1000
    
        
    //     if (
    //             !bufferingDetected 
    //             && currentPlayPos < (lastPlayPos + offset)
    //             && !video.paused
    //         ) {
    //           pauser.innerText="Loading video...";
              
    //         bufferingDetected = true;
            

    //     }
    
    //     if (
    //         bufferingDetected 
    //         && currentPlayPos > (lastPlayPos + offset)
    //         && !video.paused
    //         ) {
    //           pauser.innerHTML='close'
           
    //         bufferingDetected = false;
            
    //     }
    //     lastPlayPos = currentPlayPos
    // }
  




    
  
    // functions

    
