
'use strict';

// videos quality 
let videoFirst = document.querySelector('#video-first');
let videoSecnd = document.querySelector('#video-second');
let videoThird = document.querySelector('#video-third');
const buttonFirst = document.querySelector('#button__first');
const buttonSecond = document.querySelector('#button__second');
const buttonThird = document.querySelector('#button__third');

buttonFirst.addEventListener('click', function () {
    videoFirst.play();
    buttonFirst.style.opacity = '0%';  
});
buttonSecond.addEventListener ('click', function() {
    videoSecnd.play();
    buttonSecond.style.opacity = '0%'; 
});
buttonThird.addEventListener ('click', function() {
    videoThird.play();
    buttonThird.style.opacity = '0%'; 
});

// video big 
let containerTop = document.querySelector('#video-content');
let video = document.querySelector('#video-info');
const buttonPlay = document.querySelector('#button-play');

buttonPlay.addEventListener('click', function () {
    video.style.display = 'block';
    video.play();
    containerTop.style.display = 'none';
});



