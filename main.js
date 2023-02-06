var SpeechRecognition=window.webkitSpeechRecognition
var recognition= new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function(event){
console.log(event)
var Content= event.results[0][0].transcript
console.log(Content)
document.getElementById("textbox").innerHTML=Content
if(Content=="take selfie"){

console.log("taking selfie ---")
speak()

}
}

function speak(){
    var synth = window.speechSynthesis

    speak_data="Taking Your Selfie In 5 Seconds"

    var UtterThis = new SpeechSynthesisUtterance(speak_data)

    synth.speak(UtterThis)

    Webcam.attach(camera)

    setTimeout(function(){
        img_id="selfie1"
        takeSnapshot()
        speak_data="Taking Your Selfie In 10 Seconds"

        var UtterThis = new SpeechSynthesisUtterance(speak_data)
    
        synth.speak(UtterThis)

        
    },5000)

    setTimeout(function(){
        img_id="selfie2"
        takeSnapshot()
        speak_data="Taking Your Selfie In 15 Seconds"

        var UtterThis = new SpeechSynthesisUtterance(speak_data)
    
        synth.speak(UtterThis)

        
    },10000)

    setTimeout(function(){
        img_id="selfie3"
        takeSnapshot()
    },15000)
}

Webcam.set({
    width:360,
    height:250,
   image_format:"png",
png_quality:90
})
camera=document.getElementById("camera")

function takeSnapshot(){
    Webcam.snap(function (data_uri){
        if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'">'            
    }

    if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'">'            
    }

    if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'">'            
    }
    })
}
