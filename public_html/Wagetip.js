//Dylan Rychlik 

//Wage tip calculator 

//This function calculates tips 
function calculateTip() {
    var billCost = document.getElementById("billCost").value;

    var tipRadioButtons = document.getElementsByName("serviceRating");
    var numPpl = document.getElementById("numPpl").value;

    if (billCost === "") {
        alert("Please enter values");
        return;
    }
    for (var i = 0; i < tipRadioButtons.length; i++) {
        if (tipRadioButtons[i].checked) {
            break;
        }
    }
    var serviceRating = Number(tipRadioButtons[i].value);

    if (numPpl === "" || numPpl <= 1) {
        numPple = 1;
    } else {
        document.getElementById("each").style.display = "block";
    }
    //Calculate tip 
    var total = (billCost * serviceRating) / numPpl;

    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
    calculateTip();

};



