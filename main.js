Webcam.set({
width:350,
height:300,
image_format:"png",
pmg_quality:90
});

camera = document.getElementById("Camera");
Webcam.attach("#Camera");

function take_snapshot(){
    Webcam.snap(function(data_uri)
    
    {
    ddocument.getElementById("Image").innerHTML = '<img id="captured_image" src=" '+ data_uri+'"/>'
    });
}

console.log("ml5 version :", ml5.version);
Classifier= ml5.imageclassifier("https://storage.googleapis.com/tm-model/mBF_ptshr/model.jason,model",modelLoaded);