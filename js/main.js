var allowPlay=true;


window.addEventListener("blur", function(event) 
                        { 
    console.log("out");
    allowPlay=false;
}, false);

window.addEventListener("focus", function(event) 
                        { 
    console.log("in");
    allowPlay=true;
}, false);


var img1 = document.getElementById("img1");
var video1 = document.getElementById("video1");
video1.currentTime = 1;

function pauseVideo(theImg, theVideo)
{
    //theVideo.pause();
    //theImg.style.visibility="visible";
    if (allowPlay)
        fadeIn(theImg, theVideo);
}
function playVideo(theImg, theVideo)
{
    if (allowPlay)
    {
        theVideo.currentTime = 1;
        try{theVideo.play();}catch(err){}
        //theImg.style.visibility="hidden";
        fadeOut(theImg);
    }
}

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            //element.style.display = 'none';
        }
        if (op <= 0.2){
            op=0;
            element.style.opacity = 0;
            element.style.filter = 'alpha(opacity=0)';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}

function fadeIn(element,video) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
            try{video.pause();}catch(err){}
        }

        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function onMouseOutBox(event) {

    e = event.toElement || event.relatedTarget;
    try
    {
        if (e.parentNode == this || e.parentNode.parentNode == this || e.parentNode.parentNode.parentNode == this || e == this) {return;}
        //console.log("out");
        pauseVideo(event.currentTarget.theImg,event.currentTarget.theVideo);
    }
    catch(err)
    {
        //silence
        var timer1 = setTimeout(function () {
            try{pauseVideo(event.currentTarget.theImg,event.currentTarget.theVideo);}catch(err){}

        }, 500);
    }

}

function onMouseInBox(event)
{
    //console.log("in");
    var timer1 = setTimeout(function ()
                            {
        try{event.currentTarget.theVideo.play();}catch(err){}
    }, 500);
    playVideo(event.currentTarget.theImg,event.currentTarget.theVideo);
}

function clickBox(event)
{
    playVideo(event.currentTarget.theImg,event.currentTarget.theVideo);
}

/*
            TODO:
            */
function stopAllVideos()
{
    pauseVideo(img0, video0);
    pauseVideo(img1, video1);
    pauseVideo(img2, video2);
    pauseVideo(img3, video3);
    //                pauseVideo(img, video);
}


var box0 = document.getElementById("box0");
box0.theImg = img0;
box0.theVideo = video0;
box0.addEventListener('mouseout',onMouseOutBox,true);
box0.addEventListener('mouseenter',onMouseInBox,false);
box0.addEventListener('click',clickBox,false);
var box1 = document.getElementById("box1");
box1.theImg = img1;
box1.theVideo = video1;
box1.addEventListener('mouseout',onMouseOutBox,true);
box1.addEventListener('mouseenter',onMouseInBox,false);
box1.addEventListener('click',clickBox,false);
var box2 = document.getElementById("box2");
box2.theImg = img2;
box2.theVideo = video2;
box2.addEventListener('mouseout',onMouseOutBox,true);
box2.addEventListener('mouseenter',onMouseInBox,false);
box2.addEventListener('click',clickBox,false);
var box3 = document.getElementById("box3");
box3.theImg = img3;
box3.theVideo = video3;
box3.addEventListener('mouseout',onMouseOutBox,true);
box3.addEventListener('mouseenter',onMouseInBox,false);
box3.addEventListener('click',clickBox,false);
var box4 = document.getElementById("box4");
box4.theImg = img4;
box4.theVideo = video4;
box4.addEventListener('mouseout',onMouseOutBox,true);
box4.addEventListener('mouseenter',onMouseInBox,false);
box4.addEventListener('click',clickBox,false);

var box5 = document.getElementById("box5");
box5.theImg = img5;
box5.theVideo = video5;
box5.addEventListener('mouseout',onMouseOutBox,true);
box5.addEventListener('mouseenter',onMouseInBox,false);
box5.addEventListener('click',clickBox,false);

var box6 = document.getElementById("box6");
box6.theImg = img6;
box6.theVideo = video6;
box6.addEventListener('mouseout',onMouseOutBox,true);
box6.addEventListener('mouseenter',onMouseInBox,false);
box6.addEventListener('click',clickBox,false);

var box7 = document.getElementById("box7");
box7.theImg = img7;
box7.theVideo = video7;
box7.addEventListener('mouseout',onMouseOutBox,true);
box7.addEventListener('mouseenter',onMouseInBox,false);
box7.addEventListener('click',clickBox,false);

var box8 = document.getElementById("box8");
box8.theImg = img8;
box8.theVideo = video8;
box8.addEventListener('mouseout',onMouseOutBox,true);
box8.addEventListener('mouseenter',onMouseInBox,false);
box8.addEventListener('click',clickBox,false);

var box9 = document.getElementById("box9");
box9.theImg = img9;
box9.theVideo = video9;
box9.addEventListener('mouseout',onMouseOutBox,true);
box9.addEventListener('mouseenter',onMouseInBox,false);
box9.addEventListener('click',clickBox,false);

var box10 = document.getElementById("box10");
box10.theImg = img10;
box10.theVideo = video10;
box10.addEventListener('mouseout',onMouseOutBox,true);
box10.addEventListener('mouseenter',onMouseInBox,false);
box10.addEventListener('click',clickBox,false);

var box11 = document.getElementById("box11");
box11.theImg = img11;
box11.theVideo = video11;
box11.addEventListener('mouseout',onMouseOutBox,true);
box11.addEventListener('mouseenter',onMouseInBox,false);
box11.addEventListener('click',clickBox,false);

var box12 = document.getElementById("box12");
box12.theImg = img12;
box12.theVideo = video12;
box12.addEventListener('mouseout',onMouseOutBox,true);
box12.addEventListener('mouseenter',onMouseInBox,false);
box12.addEventListener('click',clickBox,false);

var box13 = document.getElementById("box13");
box13.theImg = img13;
box13.theVideo = video13;
box13.addEventListener('mouseout',onMouseOutBox,true);
box13.addEventListener('mouseenter',onMouseInBox,false);
box13.addEventListener('click',clickBox,false);

var box14 = document.getElementById("box14");
box14.theImg = img14;
box14.theVideo = video14;
box14.addEventListener('mouseout',onMouseOutBox,true);
box14.addEventListener('mouseenter',onMouseInBox,false);
box14.addEventListener('click',clickBox,false);

var box15 = document.getElementById("box15");
box15.theImg = img15;
box15.theVideo = video15;
box15.addEventListener('mouseout',onMouseOutBox,true);
box15.addEventListener('mouseenter',onMouseInBox,false);
box15.addEventListener('click',clickBox,false);

var box16 = document.getElementById("box16");
box16.theImg = img16;
box16.theVideo = video16;
box16.addEventListener('mouseout',onMouseOutBox,true);
box16.addEventListener('mouseenter',onMouseInBox,false);
box16.addEventListener('click',clickBox,false);

var box17 = document.getElementById("box17");
box17.theImg = img17;
box17.theVideo = video17;
box17.addEventListener('mouseout',onMouseOutBox,true);
box17.addEventListener('mouseenter',onMouseInBox,false);
box17.addEventListener('click',clickBox,false);

function bigImg(x) {
    x.src = "img/blank.png";
}

function normalImg(x) {
    x.src = "img/yoogle.png";
}