var count_1 = 0;
var count_2 = 0;
var element_1 = document.getElementById("embedded_audio_1");
var element_2 = document.getElementById("embedded_audio_2");

element_1.onclick = function() {  
    count_1++;
    var audio = document.getElementById("src__audio_1");
    if(count_1%2 == 1)
    {   
        audio.play();
    }
    else
    {
        audio.pause();
    }
}

element_2.onclick = function() {  
    count_2++;
    var audio = document.getElementById("src__audio_2");
    if(count_2%2 == 1)
    {   
        audio.play();
    }
    else
    {
        audio.pause();
    }
}