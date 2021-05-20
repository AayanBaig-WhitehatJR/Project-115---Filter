
leftEyeX = 0
leftEyeY = 0
function preload(){
    eyepatch = loadImage("https://lh3.googleusercontent.com/proxy/iqnDJEbsv2k8I_XbxLbCS_pBBOOqo2Hj8fr-pAMkaYy6tDBCarXBzV6IMPPT7uSnoi1YMMfDxs258SUXGgGJEhlU")
    }
    
    
    function setup(){
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
    }
    function modelLoaded(){
        console.log("Initializing... please wait.")
        console.log("Initiaized succesfully.")
    }
    function gotPoses(result){
        if(result.length >0){
            console.log(result)
                leftEyeX = result[0].pose.leftEye.x    
                leftEyeY = result[0].pose.leftEye.y 
                console.log(leftEyeX)
                console.log(leftEyeY)
                
        }
    }
function draw(){
    image(video, 0, 0, 300, 300)
}
    
function takeSnapshot(){
    save("YourSelfie.png")
}