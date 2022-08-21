function startClasssification() {

    navigator.mediaDevices.getUserMedia({audio : true});
    classsifier = ml5.soundClassification('https://teachablemachine.withgoogle.com/models/Spes71Il_/.json', modelReady);

}
function modelReady(){
    classsifier.classify(gotResults);
}