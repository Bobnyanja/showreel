


// Get the modal
var modal = document.getElementById("myModal");
var content = document.getElementsByClassName("actual-cont")[0];

// Get the button that opens the modal
var accelerators = document.getElementById("accelerators");
var educate = document.getElementById("educate");
var sanergy = document.getElementById("sanergy");
var fresha = document.getElementById("fresha");
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
function playMontage(){
  video.style.display='inherit';
  drop.style.display="none";
  pauser.style.display='inherit';
   };

  function pauseMontage(){
    video.style.display='none';
    drop.style.display="inherit";
    pauser.style.display='none';
    
    header.style.opacity=1;
  };





    var checkInterval  = 200.0 // check every 50 ms (do not use lower values)
    var lastPlayPos    = 0
    var currentPlayPos = 0
    var bufferingDetected = false
  
    
    setInterval(checkBuffering, checkInterval)
    function checkBuffering() {
        currentPlayPos = video.currentTime
    
        // checking offset should be at most the check interval
        // but allow for some margin
        var offset = (checkInterval - 20) / 1000
    
        // if no buffering is currently detected,
        // and the position does not seem to increase
        // and the player isn't manually paused...
        if (
                !bufferingDetected 
                && currentPlayPos < (lastPlayPos + offset)
                && !video.paused
            ) {
              pauser.innerText="Loading video...";
              
       

            bufferingDetected = true;
            

        }
    
        // if we were buffering but the player has advanced,
        // then there is no buffering
        if (
            bufferingDetected 
            && currentPlayPos > (lastPlayPos + offset)
            && !video.paused
            ) {
              pauser.innerHTML='close'
           
            bufferingDetected = false;
            
        }
        lastPlayPos = currentPlayPos
    }
 //movinf profile description   




 //player section/
 const vidWrapper = document.querySelector('div.player');
    const myVid = vidWrapper.querySelector('video.player__video');
    
    // controls
    const controlPlay = vidWrapper.querySelector('.player__button');
    const controlVol = vidWrapper.querySelector('.player__slider[name="volume"]');
    const controlRate = vidWrapper.querySelector('.player__slider[name="playbackRate"]');
    const controlSkip = vidWrapper.querySelectorAll('.player__button[data-skip]');
    const controlFullScreen = vidWrapper.querySelector('.player__fullscreen');
    const controlProgress = vidWrapper.querySelector('.progress');
    const progressBar = vidWrapper.querySelector('.progress__filled');
    
    // events
    var drag;
    var grap;
    
    myVid.addEventListener('click', toggleVideo);
    controlPlay.addEventListener('click', toggleVideo);
    controlVol.addEventListener('change', updateVol);
    controlRate.addEventListener('change', updateRate);
    controlFullScreen.addEventListener('click', goFullScreen);
    controlSkip.forEach(control => control.addEventListener('click', forward));
    controlProgress.addEventListener('mouseover', function(){drag = true});
    controlProgress.addEventListener('mouseout', function(){drag = false; grap = false});
    controlProgress.addEventListener('mousedown', function(){grap = drag});
    controlProgress.addEventListener('mouseup', function(){grap = false});
    controlProgress.addEventListener('click', updateCurrentPos);
    controlProgress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});
    
    var progression;
    
    // functions
    function toggleVideo() {
      if (myVid.paused) {
        myVid.play();
        controlPlay.innerHTML = "❚ ❚";
        updateProgress();
        progression = window.setInterval(updateProgress, 200);
      } else {
        myVid.pause();
        controlPlay.innerHTML = "►";
        clearInterval(progression);
      };
    }
    function updateVol(){
      var volume = this.value;
      myVid.volume = volume;
    }
    function updateRate(){
      var rate = this.value;
      myVid.playbackRate = rate;
    }
    function goFullScreen(){
      console.dir(myVid);
      if(myVid.webkitSupportsFullscreen) myVid.webkitEnterFullScreen();
    }
    function forward(){
      var value = Number(this.dataset.skip);
      myVid.currentTime = myVid.currentTime + value;
    }
    function updateProgress() {
      var progress = myVid.currentTime / myVid.duration;
      progressBar.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
    }
    function updateCurrentPos(e){
      // offset of the progress bar / video wrapper width
      var newProgress = (e.clientX - vidWrapper.offsetLeft) / vidWrapper.clientWidth;
      progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
      myVid.currentTime = newProgress * myVid.duration;
    }