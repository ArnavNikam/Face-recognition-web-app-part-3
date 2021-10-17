Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    image_quality: 90
});

camera = document.getElementById("live");

Webcam.attach(camera);

function snapshot(){
    Webcam.snap(function(datauri){
        document.getElementById("snap").innerHTML = '<img id="snapshot" src"'+datauri+'">';
    })
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YMyFh-nVk/",modelloaded);

function modelloaded(){
    console.log("model loaded");
} 

function check(){
    store = document.getElementById("snapshot");
    classifier.classify(store, gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }  else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].lable;
        document.getElementById("accuracy").innerHTML = results[0].confidnce.toFixed(3);
    }
}