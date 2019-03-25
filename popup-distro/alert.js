//GLOBAL STARING VARIABLES

var active = true;
var likeactive = false;
var readcommentactive = true;
var goingdown = 0;
var scrollspeed = 3;
var readcomment=false;
var likedpost=false;

// INTERFACE ON FACEBOOK

var div = document.createElement("div");
div.setAttribute("id", "profilingpollution");
div.setAttribute("style", "border-radius:15px;background-color:#4267b2;padding:15px;position: fixed;bottom: 25px;left: 25px;z-index:9999;");

var closebtn = document.createElement("BUTTON");
closebtn.setAttribute("id", "closebtn");
closebtn.setAttribute("style", "background:none;border:1px solid white;border-radius:5px;margin:3px;color:white;float:right;");
var closet = document.createTextNode("X");
closebtn.addEventListener("click", function() {
    active = false;
    likeactive = false;
    readcommentactive = false;
    div.parentNode.removeChild(div);
    clearInterval(refreshIntervalId);
});
closebtn.appendChild(closet);
div.appendChild(closebtn);

var h3 = document.createElement("h3");
h3.setAttribute("style", "color:white;font-size:19px;text-align:left;margin-bottom:11px;");
var th3 = document.createTextNode("Profiling Pollution");
h3.appendChild(th3);
div.appendChild(h3);

var btn = document.createElement("BUTTON");
btn.setAttribute("id", "startbtn1");
btn.setAttribute("style", "background:none;border:1px solid white;border-radius:5px;margin:3px;color:white;width:100%;");
var t = document.createTextNode("start scrolling");
btn.addEventListener("click", function() {
    active = !active;
});
btn.appendChild(t);
div.appendChild(btn);

var br = document.createElement("br");
div.appendChild(br);

var commentbtn = document.createElement("BUTTON");
commentbtn.setAttribute("id", "commentbtn");
commentbtn.setAttribute("style", "background:none;border:1px solid white;border-radius:5px;margin:3px;color:white;width:100%;");
var tcomment = document.createTextNode("start");
commentbtn.addEventListener("click", function() {
    readcommentactive = !readcommentactive;
});
commentbtn.appendChild(tcomment);
div.appendChild(commentbtn);

var br1 = document.createElement("br");
div.appendChild(br1);

var likebtn = document.createElement("BUTTON");
likebtn.setAttribute("id", "likebtn");
likebtn.setAttribute("style", "background:none;border:1px solid white;border-radius:5px;margin:3px;color:white;width:100%;");
var tlike = document.createTextNode("start liking stuff");
likebtn.addEventListener("click", function() {
    likeactive = !likeactive;
});
likebtn.appendChild(tlike);
div.appendChild(likebtn);
        
document.body.appendChild(div);


// SCROLL LOOP

var refreshIntervalId = setInterval(function () {
    if(readcommentactive == true){
        document.getElementById("commentbtn").innerHTML = "stop reading comments";

    }
    if(readcommentactive == false){
        document.getElementById("commentbtn").innerHTML = "start reading comments";
    }
    if(likeactive == true){
        document.getElementById("likebtn").innerHTML = "stop liking stuff";

    }
    if(likeactive == false){
        document.getElementById("likebtn").innerHTML = "start liking stuff";
    }
    
    if (active == true) {
        //clickedycomments.click();
        document.getElementById("startbtn1").innerHTML = "stop scrolling";
        //go down
        if (goingdown == 0) {
            window.scrollBy(0, scrollspeed);
            if (Math.random() <= 0.002) {
                if (Math.random() <= 0.2) {
                    goingdown = 1;
                    scrollspeed = Math.floor(Math.random() * 5) + 1;
                    console.log("Go up speed: " + scrollspeed);
                } else {
                    goingdown = 2;
                    var clickedthecomments = false;
                    console.log("Just wait");
                }
            }
        }
        //Go up
        if (goingdown == 1) {
            window.scrollBy(0, -scrollspeed);
            if (Math.random() <= 0.003) {
                if (Math.random() <= 0.3) {
                    goingdown = 0;
                    scrollspeed = Math.floor(Math.random() * 6) + 3;
                    console.log("Go down speed: " + scrollspeed);
                } else {
                    goingdown = 2;
                    var clickedthecomments = false;
                    console.log("Just wait");
                }
            }
        }
        //Just wait
        if (goingdown == 2) {
            
        //Read comments yolo
            if(readcommentactive == true && readcomment == false){
                console.log("Looking for something to read...");
                function clickPlanet() {
                    var clickedycomments = document.getElementsByClassName("_3hg-");
                    for (i=0;i<clickedycomments.length;i++){
                        var rect = clickedycomments[i].getBoundingClientRect();
                        if(rect.top>0&&rect.top<700){
                            if(Math.random()<0.3){
                                clickedycomments[i].click();
                                console.log("Decided to read article: " + i);
                                // READ EVEN MORE FUCKTARDERY class=_4sxc
                                
                            }
                            else{
                                console.log("Decided NOT to read article: " + i); 
                            }
                        }
                    }     
                }
                clickPlanet();
                readcomment = !readcomment;
            }
            if(readcommentactive == false){
                //console.log("not reading");
            }
            
            //Like random shit 69yoloswag420    classname not yet liked=_3l2t
            
            if(likeactive == true && likedpost == false){
                console.log("Looking for something likeable...");
                function clicklike() {
                    var clickedycomments = document.getElementsByClassName("_3l2t");
                    for (i=0;i<clickedycomments.length;i++){
                        var rect = clickedycomments[i].getBoundingClientRect();
                        if(rect.top>0&&rect.top<700){
                            if(Math.random()<0.3){
                                clickedycomments[i].click();
                                console.log("Liking post: " + i);
                            }
                            else{
                                console.log("Decided NOT to like: " + i); 
                            }
                        }
                    }     
                }
                clicklike();
                likedpost = !likedpost;
            }
            if(likeactive == false){
                //console.log("not liking");
            }
            
            if (Math.random() <= 0.002) {
                if (Math.random() <= 0.7) {
                    goingdown = 0;
                    readcomment = !readcomment;
                    likedpost = !likedpost;
                    scrollspeed = Math.floor(Math.random() * 6) + 3;
                    console.log("Go down speed: " + scrollspeed);
                } else {
                    goingdown = 1;
                    readcomment = !readcomment;
                    likedpost = !likedpost;
                    scrollspeed = Math.floor(Math.random() * 5) + 1;
                    console.log("Go Up speed: " + scrollspeed);
                }
            }
        }
    }
    if (active == false) {
        document.getElementById("startbtn1").innerHTML = "start scrolling";
    }
    console.log("IntervalLoop");

}, 5);