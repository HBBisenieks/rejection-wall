var REJECTION_SLIP = 8.5 * 11;
var message = "";

function wallCalc() {
    var width = document.getElementById("width").value * 12;
    var height = document.getElementById("height").value * 12;
    var area = width * height;
    var rejArea = document.getElementById("rej").value * REJECTION_SLIP;
    if (area > rejArea) {
	var remaining = Math.round((area - rejArea) / REJECTION_SLIP);
        message += "Your wall isn't full yet. You can expect at least " + remaining + " more rejections. Keep submitting!";
    } else {
        message += "Your wall is full up; you're bound to land one soon!";
    }
    document.getElementById("demo").innerHTML = message;
    message = "";
}
