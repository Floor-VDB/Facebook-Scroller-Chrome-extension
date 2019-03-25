// var app = chrome.runtime.getBackgroundPage();


function hello() {
    var active ;
var likeactive ;
var readcommentactive ;

  chrome.tabs.executeScript({
    file: 'alert.js'
  }); 
}

document.getElementById('startbtn').addEventListener('click', hello);
