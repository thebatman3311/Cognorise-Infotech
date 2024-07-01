function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var heightCM = parseFloat(document.getElementById("height").value);

    // Convert height from centimeters to meters
    var heightM = heightCM / 100;

    if (weight > 0 && heightM > 0) {
        var bmi = weight / (heightM * heightM);
        document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Please enter valid weight and height values.";
    }
}
